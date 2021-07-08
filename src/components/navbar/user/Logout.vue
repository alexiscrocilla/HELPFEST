<template>
    <div>
      <span v-if="isLoggedIn">
        <div type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <a class="login" @click="logOut">
          </a>
        </div>
      </span>
    </div>
</template>

<script setup>
import firebase from 'firebase'
import { useRouter } from 'vue-router'
import {ref} from "vue";
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
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:600&display=swap');

button.link {
  background:none;
  border:none;
}
.AVenirCard {
  border-radius: 2vh;
}

.AVenirCard2 {
  height: 5vh;
  border-radius: 3vh;
}
span{
  position: relative;
  display: inline-flex;
  width: 180px;
  height: auto;
  margin: 25px;
  perspective: 1000px;
}
span a{
  font-size: 19px;
  letter-spacing: 1px;
  transform-style: preserve-3d;
  transform: translateZ(-25px);
  transition: transform .25s;
  font-family: 'Montserrat', sans-serif;

}
span .login:before,
span .login:after{
  position: absolute;
  content: "LOG OUT";
  height: 55px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid #ef4467;
  box-sizing: border-box;
  border-radius: 5px;
}
span a:before{
  color: #f7f7f7;
  background: #989898;
  transform: rotateY(0deg) translateZ(25px);
}
span a:after{
  color: #fff;
  background: #ef4467;
  transform: rotateX(90deg) translateZ(25px);
}
span a:hover{
  transform: translateZ(-25px) rotateX(-90deg);
}
</style>
