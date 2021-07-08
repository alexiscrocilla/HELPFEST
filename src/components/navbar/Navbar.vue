<template>
    <div>
    <nav class="navbar sticky-top navbar-expand-lg navbar-light shadow p-3 mb-4" style="background-color: #EF7745">
      <div class="container">

        <!-- BURGER -->
        <Collapse type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft"/>

        <!-- LOGO -->
        <a class="ul navbar-brand" href="#/login">
          <img src="@/assets/logos/new-era-text.png" alt="Logo" width="70" class="d-inline-block align-text-top"/>
        </a>

        <!-- MY PROFILE -->
        <Profile/>

      </div>
    </nav>

  <!-- OFF CANVA NAVBAR -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft" ref="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">

        <div class="offcanvas-body small">

          <div v-if="isLoggedIn">
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            <br>

              <span class="dashboardbtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">
                <a class="login" href="#/login"></a>
              </span>

              <LogOut/>

          </div>

          <div v-else>
            <div class="d-flex justify-content-between align-items-center">

              <StaffLogin/>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>

            </div>

            <Login/>
            <Register/>

          </div>

          <Scan/>
      </div>

    </div>
  </div>
</template>

<script setup>

import firebase from 'firebase'

import Login from '@/components/navbar/user/Login.vue'
import Profile from '@/components/navbar/user/Profile.vue'
import Register from '@/components/navbar/user/Register.vue'
import LogOut from '@/components/navbar/user/Logout.vue'
import Collapse from '@/components/navbar/collapser/Collapse.vue'
import Routes from '@/components/navbar/collapser/Routes.vue'
import StaffLogin from '@/components/navbar/user/staff/Login.vue'
import Scan from '@/components/navbar/user/Scan.vue'
import {ref} from "vue";
const isLoggedIn = ref(true)
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    isLoggedIn.value = true // if we have a user
  } else {
    isLoggedIn.value = false // if we do not
  }
})

</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.dashboardbtn{
  position: relative;
  display: inline-flex;
  width: 180px;
  height: 55px;
  margin: 25px;
  perspective: 1000px;
}
.dashboardbtn a{
  font-size: 19px;
  letter-spacing: 1px;
  transform-style: preserve-3d;
  transform: translateZ(-25px);
  transition: transform .25s;
  font-family: 'Montserrat', sans-serif;

}
.dashboardbtn .login:before,
.dashboardbtn .login:after{
  position: absolute;
  content: "DASHBOARD";
  height: 55px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid #bcef44;
  box-sizing: border-box;
  border-radius: 5px;
}
.dashboardbtn a:before{
  color: #f7f7f7;
  background: #989898;
  transform: rotateY(0deg) translateZ(25px);
}
.dashboardbtn a:after{
  color: #fff;
  background: #bcef44;
  transform: rotateX(90deg) translateZ(25px);
}
.dashboardbtn a:hover{
  transform: translateZ(-25px) rotateX(-90deg);
}
</style>
