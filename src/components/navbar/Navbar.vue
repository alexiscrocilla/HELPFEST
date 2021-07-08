<template>
    <div>
    <nav class="navbar sticky-top navbar-expand-lg navbar-light shadow p-3 mb-4" style="background-color: #EF7745">
      <div class="container">
        <Collapse/>
        <!-- LOGO -->
        <a class="position-relative navbar-brand" href="#">
          <img src="@/assets/logos/new-era-text.png" alt="Logo" width="70" class="d-inline-block align-text-top"/>
        </a>

        <button class="position-relative btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <img src="@/assets/icons/account.svg" alt="Account">
        </button>

      </div>
    </nav>

  <!-- OFF CANVA -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" ref="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <StaffLogin/>
      <div class="offcanvas-body">
        <Login/>
        <Register/>
      </div>
        <Scan/>
    </div>

  </div>
</template>

<script setup>
import Login from '@/components/navbar/user/Login.vue'
import Register from '@/components/navbar/user/Register.vue'
import Collapse from '@/components/navbar/collapser/Collapse.vue'
import Routes from '@/components/navbar/collapser/Routes.vue'
import StaffLogin from '@/components/navbar/user/staff/Login.vue'
import Scan from '@/components/navbar/user/Scan.vue'

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
</style>
