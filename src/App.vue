<template>
  <Navbar/>
  <div>
    <router-view />
  </div>
</template>

<script setup>
import Navbar from '@/components/navbar/Navbar.vue'

import { ref, watchEffect } from 'vue' // used for conditional rendering
import firebase from 'firebase'
const isLoggedIn = ref(true)
// runs after firebase is initialized
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      isLoggedIn.value = true // if we have a user
    } else {
      isLoggedIn.value = false // if we do not
    }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
