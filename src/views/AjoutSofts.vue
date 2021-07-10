<template>
<div class="container">

  <div class="wrapper row justify-content-center">

    <span v-for="drink in drinks.filter(obj => { return obj.category === 'soft' })" :key="drink" class="switch_box box_1 m-1 col">
      <div class="col">
        <label :for="drink.name">
          <img :src="drink.image"
            :alt="drink.name" class="card-img" style="margin:6px ; height: 120px; width: auto;">
          <div class="progress">
            <div class="progress-bar" :class="setProgressBar(drink.stock)" role="progressbar" :style="'width: ' + drink.stock + '%'" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <input :id="drink.name" :name="drink.name" :value="drink.name" type="checkbox" class="switch_1" v-model="toFill">
        </label>
      </div>
    </span>

    <div>
      <button type="button" @click="submit(toFill)" class="btn btn-light mt-2">Ajouter</button>
      <br>
      <input type="button" class="btn btn-danger mt-2" value="Annuler" onclick="history.back(-1)" />
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
const drinks = ref(new Array)
const toFill = ref(new Array)

const submit = (toQuery) => {
  console.log("toQuery", toQuery)
  const query = db.collection("drinks").where('name', 'in', toQuery)

  query.get()
  .then((docs) => {

    docs.forEach(async(doc) => {
      if (doc.exists) {
        await db.collection("drinks").doc(doc.id).update({ stock: 100 })
        console.log("document updated")
      } else {
        alert("an error occured")
      }
    })
    router.push("/bar")
  })
}

const setProgressBar = (score) => {
  let classes = ""
  if (score <= 25) {
    classes += "bg-danger progress-bar-striped progress-bar-animated"
  }
  if (score > 25 && score <= 50) {
    classes += "bg-warning"
  }
  if (score > 50) {
    classes += "bg-success"
  }
  return classes
}
const isLoggedIn = ref(false)
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
const req = async () => {
  let request = await db.collection("drinks").get()
  request.forEach(doc => {
    drinks.value.push(doc.data())
  })
  drinks.value.sort((a,b) => (a.stock > b.stock) ? 1 : ((b.stock > a.stock) ? -1 : 0))
  console.log(drinks.value)
}
req()
})
</script>

<style scoped>

.wrapper{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 70% auto 0px;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.switch_box{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  max-width: 180px;
  min-width: 130px;
  height: 200px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

/* Switch 1 Specific Styles Start */

.box_1{
  border-radius: 3em;
  background: #eee;
}

input[type="checkbox"].switch_1{
  font-size: 30px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 3em;
  height: 1.5em;
  background: #EDA486;
  border-radius: 3em;
  position: relative;
  cursor: pointer;
  outline: none;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

input[type="checkbox"].switch_1:checked{
  background: #1dc64e;
}

input[type="checkbox"].switch_1:after{
  position: absolute;
  content: "";
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  background: #fff;
  -webkit-box-shadow: 0 0 .25em rgba(0,0,0,.3);
  box-shadow: 0 0 .25em rgba(0,0,0,.3);
  -webkit-transform: scale(.7);
  transform: scale(.7);
  left: 0;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

input[type="checkbox"].switch_1:checked:after{
  left: calc(100% - 1.5em);
}

/* Switch 1 Specific Style End */
</style>
