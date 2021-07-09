<template>
  <div class="home">

  <div class="container">

    <div class="d-flex justify-content-center drop-container">
      
      <div class="drop">
        <img alt="Logo Planète" class="logo" src="../assets/logos/new-era-world.png"/>
      </div>
      <div>
        <img alt="Logo Nom" class="fade-in logo-text" src="../assets/logos/new-era-text-only.png"/>
      </div>

      <div v-if="isLoggedIn = true">
        <div class="btns fixed-bottom">
          <a href="#/Login">
            <button type="button" class="btn btn-warning btn-lg me-1">DASHBOARD</button>
          </a>
          <a href="#/" @click="logOut">
            <button type="button" class="btn btn-danger btn-lg ms-1">LOGOUT</button>
          </a>
        </div>
      </div>

      <div v-else>
        <div class="btns btns-anim fixed-bottom">
          <a href="#/Login"><button type="button" class="btn btn-info btn-lg me-1">LOG IN</button></a>
          <a href="#/Register"><button type="button" class="btn btn-success btn-lg ms-1">REGISTER</button></a>
        </div>
      </div>

    </div>
  </div>

    <div class="area">
      <ul class="circles">
        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import {ref} from "vue";
import {useRouter} from "vue-router";
const router = useRouter()

const isLoggedIn = ref(true)
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

export default {
  name: 'Home',
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Exo:400,700');

body {
  background: #4B4945;
}

.context {
  width: 100%;
  top:50vh;
  overflow: hidden;
}

div.drop-container {
  z-index: 10;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 200px;
  width: 200px;
}


div.drop {
  z-index: 10;
  position: absolute;
  top: -25%;
  width: 100%;
  height: 100%;
  border-radius: 100% 5% 100% 100%;
  transform: rotate(-45deg);
  background: #EF7745;
  animation: drip 4s forwards;
}

.logo {
  position:relative;
  z-index:5;
  height: 100%;
  width: 100%;
  opacity: 0;
  animation: appear 3s 2.5s forwards;
}

.btns {
  float: none;
  margin-bottom: 70px;
  z-index: 10;
}

.btns-anim{
  z-index: 10;
  opacity: 0;
  animation: appear 3s 4s forwards;
}

.logo-text {
  height: 14vh;
  margin-top: 26vh;
  z-index: 10;
  opacity: 0;
  animation: appear 3s 4s forwards;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

div.drop-container:before,
div.drop-container:after {
  position: absolute;
  z-index: 1;
  top: 55%;
  right: 50%;
  transform: translate(50%) rotateX(75deg);
  border-radius: 100%;
  opacity: 0;
  width: 75%;
  height: 75%;
  border: 5px solid #6b99a7;
  animation: dripple 2s ease-out 1s;
}

div.drop-container:after {
  animation: dripple 2s ease-out 1.7s;
}

@keyframes drip {
  45% {
    top: 0;
    border-radius: 100% 5% 100% 100%;
    transform: rotate(-45deg);
  }
  100% {
    top: 0;
    transform: rotate(0deg);
    border-radius: 100%;
  }
}

@keyframes dripple {
  0% {
    width: 150px;
    height: 150px;
  }
  25% {
    opacity: 1;
  }
  100% {
    width: 500px;
    height: 500px;
    top: -20%;
    opacity: 0;
  }
}

.circles li{
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -40vh;

}

.circles li:nth-child(1){
  left: 5%;
  width: 80px;
  height: 80px;
  animation-delay: 1s;
}


.circles li:nth-child(2){
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(9){
  left: 20%;
  width: 150px;
  height: 150px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(7){
  left: 30%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(4){
  left: 40%;
  width: 30px;
  height: 30px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(8){
  left: 55%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(5){
  left: 60%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(3){
  left: 70%;
  width: 70px;
  height: 70px;
  animation-delay: 4s;
}

.circles li:nth-child(6){
  left: 80%;
  width: 31px;
  height: 31px;
  animation-delay: 3s;
}

.circles li:nth-child(10){
  left: 85%;
  width: 100px;
  height: 100px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {

  0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 80%;
  }

  100%{
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 100%;
  }

}
</style>
