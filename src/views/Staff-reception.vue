<template>
<div>

  <div>
    <h1>Map</h1>
    <div>
      <img class="mb-4 mt-3" src="../assets/images/map-staff.png" alt="map" style="width:95%;">

    </div>
  </div>

  <div class="shadow-sm rounded m-3 p-2" style="background-color: #EDA486">
    <h1 class="display-1">Vendredi</h1>
      <div class="d-flex justify-content-center">
        <img src="../assets/images/programme.png"/>
      </div>
  </div>

  </div>
</template>

<script setup>

import firebase from 'firebase'
import { useRouter } from 'vue-router' // import router
const router = useRouter()

const authListener = firebase.auth().onAuthStateChanged(function(user) {
    if (user.uid !== "ptiRDOkvYjUroeYO4jxRJkaz2Ig2") { // not logged in
        router.push('/')
    }
})

</script>

<style>
.map {
  width: 40vh;

}
</style>
