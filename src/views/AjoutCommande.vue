<template>
  <div class="container">
    <div class="wrapper row justify-content-center">
      <h3 class="text-light">Prendre une commande</h3>
      <div class="switch_box box_1 m-1 col">
        <div class="col">
            <input class="mb-2 box_2" type="text" v-model="name" required placeholder="Enter your name">
            <span v-for="numb in numbOfProd" :key="numb">

              <div class="form-floating">
                <select class="form-select box_2" id="floatingSelect" style="height: 100%; width: 100%;" v-model="toSubmit[numb-1].product" aria-label="Floating label select example">
                  <option v-for="drink in drinks" :key="drink" :value="drink.name">{{ drink.name }}</option>
                </select>
                <label for="floatingSelect">Produits</label>
                
                <input type="number" min="1" max="999"
                       class="mb-2 box_2" style="height: 100%; width: 100%;"
                       v-model="toSubmit[numb-1].number" placeholder="Number of drink">
              </div>

            </span>
            <button @click="addProduct" class="btn btn-dark">Add new product</button>
            <div class="mt-3">
                <button @click="submit(toSubmit)" class="button mt-4">Ajouter</button>
                <br>
                <input type="button" class="btn btn-danger mt-2" value="Annuler" onclick="history.back(-1)" />
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import firebase from 'firebase'
import { useRouter } from 'vue-router' // import router
import {ref} from "vue";

const router = useRouter()
const db = firebase.firestore()
const isLoggedIn = ref(false)
const toSubmit = ref(new Array(new Object))
const name = ref(new String)
const drinks = ref(new Array)
let numbOfProd = ref(1)

const addProduct = () => {
  numbOfProd.value++
  toSubmit.value.push(new Object)
}

const submit = async(submitted) => {
  submitted.forEach(obj => {
    if (obj.product == "" || obj.number == "" ||
    typeof obj.product == "undefined" || typeof obj.number == "undefined") {
      alert("Something is empty !")
      return
    }
  })
    let allProducts = submitted.map(a => a.product)
    let allNumbers = submitted.map(a => a.number)
    let allIDs = new Array
    let query = db.collection("drinks").where("name", "in", allProducts)
    let res = await query.get()
    res.forEach(doc => {
      if (doc.exists) {
        allIDs.push(doc.data().id)
      } else {
        console.log("doc not found")
      }
    })

    let idQuery = db.collection("commandes").orderBy("id", "desc").limit(1);
    let maxID = 0
    let biggestID = await idQuery.get()
    biggestID.forEach(docWithMaxId => {
      if (docWithMaxId.exists) {
        maxID = docWithMaxId.data().id
      }
    })

    let productsToPush = {}

    allIDs.forEach((value, index) => {
      productsToPush[value] = allNumbers[index]
    })

    let objToPush = {
      id: (parseInt(maxID) + 1).toString(),
      name: name.value,
      products: productsToPush
    }

    await db.collection("commandes").add(objToPush)
    router.push("/bar")
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    if (user.uid == "seXeNfFzdvgOEeVKRctyftZaNkQ2") {
      isLoggedIn.value = true // if we have a user
    } else {
      router.push("/") // if we do not
    }
  } else {
    router.push("/")
  }
})

const req = async () => {
  let request = await db.collection("drinks").get()
  request.forEach(doc => {
    drinks.value.push(doc.data())
  })
  drinks.value.sort((a,b) => (a.stock > b.stock) ? 1 : ((b.stock > a.stock) ? -1 : 0))
}
req()
</script>

<style scoped>
.wrapper{
  display: flex;
  margin: 10% auto 0px;
  flex-wrap: wrap;
}

.switch_box{
  display: flex;

  max-width: 80%;
  max-height: 80%;

  padding: 10%;
  align-items: center;
}

.box_1{
  border-radius: 3em;
  background: #eee;
}

.button {
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 20px;
  letter-spacing: 4px;
  position: relative;
  background-color: #16a085;
  border: none;
  color: #fff;
  padding: 20px;
  width: 200px;
  text-align: center;
  transition-duration: 0.4s;
  overflow: hidden;
  box-shadow: 0 5px 15px #193047;
  border-radius: 4px;
}

.button:after {
  content: "";
  background: #1abc9c;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s
}

.button:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}

.button:focus {
  outline:0;
}

.box_2, select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.box_2:focus{
  border: 3px solid orange;
}
</style>
