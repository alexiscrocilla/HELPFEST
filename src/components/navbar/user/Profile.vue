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
                  <img src="https://uploads-ssl.webflow.com/609506e447c8bafc67923dd9/60d1ef56eaae4d95bfd89c52_free-profile-photo-whatsapp-4.png" alt="Profile Picture" class="rounded-circle" width="150">
                  <img src="@/assets/images/QR_profile.png" alt="QR_code" class="ms-2" width="120">
                </div>
                <div class="mt-3">
                  <h4>André Petit</h4>
                  <p class="text-secondary mb-1">Professeur de technologie</p>
                  <p class="text-muted font-size-sm">Lyon, France</p>
                  <button class="btn btn-outline-primary ms-2">Messages</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card mt-3">
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg> Twitter</h6>
                <span class="text-secondary">@petitandré</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> Instagram</h6>
                <span class="text-secondary">@trèspetitandré</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> Facebook</h6>
                <span class="text-secondary">André Petit</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card mb-3">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Email</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  Andre.petit@gmail.com
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Téléphone</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  +33 4 36 65 76 67
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Mobile</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  +33 7 50 24 76 49
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Addresse</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  4 Rue Boileau, 69006 Lyon
                </div>
              </div>
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
