<template>
    <div class="collapse navbar-collapse" id="navbarNav">
      <nav>
          <router-link to="/"><button class="nav-btn"> Home </button></router-link> |
        <span v-if="isLoggedIn">
        <button class="nav-btn-logout" @click="logOut"> Logout </button> |
        <router-link to="/feed"><button class="nav-btn"> Feed </button></router-link>
      </span>
        <span v-else>
      <router-link to="/register"> Register </router-link> |
      <router-link to="/login"> Login </router-link>
      </span>
      </nav>
    </div>

</template>

<script setup>
import Navbar from '@/components/navbar/Navbar.vue'

import { ref, watchEffect } from 'vue' // used for conditional rendering
import firebase from 'firebase'
import { useRouter } from 'vue-router'
const router = useRouter()
const isLoggedIn = ref(true)
// runs after firebase is initialized
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    isLoggedIn.value = true // if we have a user
  } else {
    isLoggedIn.value = false // if we do not
  }
})
const logOut = () => {
  firebase.auth().signOut()
  router.push('/')
}
</script>

<style>
form {
  margin: 0 auto;
  text-align: center;
}
.nav-btn {
  height: auto;
  width: auto;
  font-size: 15px;
  font-weight: 600;
  border: none;
  background-color: #2371DF;
  color: #FFFFFF;
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 4px;
}
.nav-btn-logout {
  height: auto;
  width: auto;
  font-size: 15px;
  font-weight: 600;
  border: none;
  background-color: #df3322;
  color: #FFFFFF;
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 4px;
}
</style>
