<template>
<div class="mt-3 text-light container">

  <div class="shadow-sm BigCard m-2 p-2 text-dark row" style="background-color: #EDA486">
    <h1 class="display-4 fw-normal">Map</h1>
    <div>
      <img class="shadow mb-4 mt-3 BigCard" src="../assets/images/map-staff.png" alt="map" style="width:100%;">

    </div>
  </div>

  <div class="shadow-sm BigCard m-2 p-2 text-dark" style="background-color: #EDA486">
    <h1 class="display-4 fw-normal">Vendredi</h1>
      <div class="row">
        <img class="col" src="../assets/images/programme.png"/>
      </div>
  </div>

  </div>
</template>

<script setup>

import firebase from 'firebase'
import { useRouter } from 'vue-router' // import router
const router = useRouter()
import {ref} from "vue";

const isLoggedIn = ref(false)
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user.uid)
    if (user.uid == "ptiRDOkvYjUroeYO4jxRJkaz2Ig2") {
      isLoggedIn.value = true // if we have a user
    } else {
      router.push("/") // if we do not
    }
  } else {
    router.push("/")
  }

})

</script>

<style>
.BigCard {
  display: inline-block;
  border-radius: 25px;
}
</style>
