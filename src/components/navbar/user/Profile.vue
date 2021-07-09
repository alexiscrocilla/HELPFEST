<template>
<div>

  <button class="position-relative btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#Profile1" aria-controls="offcanvasRight">
    <img src="@/assets/icons/account.svg" alt="Account">
  </button>

  <!-- OFF CANVA USER -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="Profile1" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">MY PROFILE</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">

      <!-- /Breadcrumb -->
      <div class="row gutters-sm">
        <div class="col-md-4 mb-3">

          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-evenly flex-column align-items-center text-center">
                <div>
                  <img src="../../../assets/images/Persona1.png" alt="Profile Picture" class="rounded-circle" width="150">
                </div>
                <div class="mt-3">
                  <h4>Simon Dupuis</h4>
                  <p class="text-secondary mb-1">b1-usr1</p>
                  <p class="text-muted font-size-sm">Gestion Bar</p>
                  <button class="btn btn-outline-primary ms-2">Support</button>
                </div>
              </div>
            </div>
          </div>

          <div class="container card mt-3">
            <div class="row card-body">
              <img src="../../../assets/images/barcode-bar1.png"/>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script setup>

import firebase from 'firebase'
import { useRouter } from 'vue-router' // import router
const router = useRouter()

const authListener = firebase.auth().onAuthStateChanged(function(user) {
  if (user) { // logged in
    if (user.uid == "seXeNfFzdvgOEeVKRctyftZaNkQ2") {
      router.push('/')
    }
  }
})
</script>

<style scoped>

</style>
