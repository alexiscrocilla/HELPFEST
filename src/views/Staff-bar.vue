<template v-if="isLoggedIn == true">
<div class="mt-3 text-light">
  <div>
    <h4>Commandes</h4>
    <button @click="router.push('/Add-Order')">Add new command</button>

    <div v-for="command in commands" :key="command">
      <div class="d-flex justify-content-between shadow rounded p-3 m-3 bg-white AVenirCard text-start text-dark">
        <div class="flex-row bd-highlight">
          <h4 class="font-weight-bold">N°{{command.id}}</h4>
          <div class="container">
            <div class="row ms-3">
              <span v-for="product in Object.entries(command.products)" :key="product">
                x{{ product[1] }} {{ drinks.find(element => element.id == product[0]).name }}
              </span>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <button @click="commandDone(command.id)"><svg class="m-1 bd-highlight" xmlns="http://www.w3.org/2000/svg" width="34.875" height="34.875" viewBox="0 0 34.875 34.875">
            <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle" d="M35.438,18A17.438,17.438,0,1,1,18,.563,17.437,17.437,0,0,1,35.438,18ZM15.983,27.233,28.921,14.3a1.125,1.125,0,0,0,0-1.591L27.33,11.114a1.125,1.125,0,0,0-1.591,0L15.188,21.665l-4.926-4.926a1.125,1.125,0,0,0-1.591,0L7.079,18.329a1.125,1.125,0,0,0,0,1.591l7.313,7.313a1.125,1.125,0,0,0,1.591,0Z" transform="translate(-0.563 -0.563)" fill="#0da71f"/>
          </svg>
          </button>
          <svg class="m-1 bd-highlight" xmlns="http://www.w3.org/2000/svg" width="14.625" height="14.625" viewBox="0 0 14.625 14.625">
            <path id="Icon_ionic-ios-information-circle" data-name="Icon ionic-ios-information-circle" d="M10.688,3.375A7.313,7.313,0,1,0,18,10.688,7.311,7.311,0,0,0,10.688,3.375Zm.668,10.688H10.012V9h1.343Zm-.671-5.618a.7.7,0,1,1,.728-.7A.7.7,0,0,1,10.684,8.445Z" transform="translate(18 18) rotate(180)" fill="#d32222"/>
          </svg>
        </div>
      </div>
    </div>

  </div>

  <!-- BEERS -->
  <div>
    <h4>Bières</h4>

    <div class="scrolling-wrapper container testimonial-group text-dark">

    <div v-for="drink in drinks.filter(obj => { return obj.category === 'beer' })" :key="drink">
      <div class="shadow p-3 m-3 bg-white BeerCard">
        <p>{{ drink.name }}</p>
        <img :src="drink.image"
             :alt="drink.name" class="card-img" style="margin:6px ; height: 120px; width: auto;">
        <div class="progress">
          <div class="progress-bar" :class="setProgressBar(drink.stock)" role="progressbar" :style="'width: ' + drink.stock + '%'" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>

      <div class="shadow p-3 m-3 bg-white BeerCard">
        <a href="#/Add-beer" style="text-decoration: none !important;">
          <p>Recharge</p>
          <img src="../.././src/assets/icons/plus.svg" alt="Ajouter boisson" class="card-img" style="margin:6px; height: 120px; width: auto;">
              <div class="progress"></div>
        </a>
      </div>

    </div>
  </div>

  <!-- SOFTS -->
  <div>
    <h4>Softs</h4>

    <div class="scrolling-wrapper container testimonial-group text-dark">

    <div v-for="drink in drinks.filter(obj => { return obj.category === 'soft' })" :key="drink">
      <div class="shadow p-3 m-3 bg-white BeerCard">
        <p>{{ drink.name }}</p>
        <img :src="drink.image"
             :alt="drink.image" class="card-img" style="margin:6px ; height: 120px; width: auto;">
        <div class="progress">
          <div class="progress-bar" :class="setProgressBar(drink.stock)" role="progressbar" :style="'width: ' + drink.stock + '%'" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>

      <div class="shadow p-3 m-3 bg-white BeerCard">
        <a href="#/Add-soft" style="text-decoration: none !important;">
          <p>Recharge</p>
          <img src="../.././src/assets/icons/plus.svg" alt="Ajouter Soft" class="card-img" style="margin:6px ; height: 120px; width: auto;">
          <div class="progress"></div>
        </a>
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
const drinks = ref(new Array)
const commands = ref(new Array)
const commandDone = async (commandID) => {
  let query = db.collection("commandes").where("id", "==", commandID)

  let res = await query.get()

  res.forEach(async(doc) => {
    if (doc.exists) {

      let command = commands.value.find(el => el.id == commandID)
      let commandProducts = Object.entries(command.products)
      commandProducts.forEach(async(product) => {
        let query = db.collection("drinks").where("id", "==", product[0])
        let res = await query.get()
        res.forEach(async(doc) => {
          if (doc.exists) {
            let dat = doc.data()
            dat.stock = parseInt(dat.stock) - product[1]
            if (dat.stock < 0) { dat.stock = 0 }
            let updateQuery = db.collection("drinks").doc(doc.id)
            await updateQuery.set(dat)
          }
        })
      })
      await db.collection("commandes").doc(doc.id).delete()
      router.go("/bar")
    }
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

  let req = await db.collection("commandes").get()
  req.forEach(doc => {
    commands.value.push(doc.data())
  })
  commands.value.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
}
req()

})

</script>

<style scoped>
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}

.BeerCard {
  display: inline-block;
  border-radius: 25px;
}

/* The heart of the matter */
.testimonial-group {
  overflow-x: auto;
  white-space: nowrap;
}
.testimonial-group {
  display: inline-block;
  float: none;
}
.container {
  display: flex;
}

</style>
