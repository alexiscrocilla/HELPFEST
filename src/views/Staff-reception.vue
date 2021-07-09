<template v-if="isLoggedIn == true">
<div class="mt-3 text-light">

  <div class="shadow-sm BigCard m-2 p-2 text-dark" style="background-color: #EDA486">
    <h1 class="display-4 fw-normal">Map</h1>
    <div>
      <img class="shadow mb-4 mt-3 BigCard" src="../assets/images/map-staff.png" alt="map" style="width:98%;">

    </div>
  </div>

  <div class="shadow-sm BigCard m-2 p-2 text-dark" style="background-color: #EDA486">
    <h1 class="display-4 fw-normal">Vendredi</h1>
      <div class="d-flex justify-content-center row">
        <img class="col" src="../assets/images/programme.png"/>
      </div>
  </div>


  <!-- BADGE (BARCODE) BUTTON -->
  <div class="container">
    <a class="d-flex justify-content-end fixed-bottom mb-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
      <button type="button" style="width: 15%;" class="m-2 btn btn-info">
        <img src="../.././src/assets/icons/badge.svg" alt="BADGE" style="width: 100%">
      </button>
    </a>
  </div>

  <!-- BADGE (BARCODE) OFFCANVA -->
  <div class="container offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasBottomLabel">BADGE STAFF</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="row offcanvas-body small">
      <img class="col" src="../.././src/assets/images/barcode-reception1.png" alt="Barcode">
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
