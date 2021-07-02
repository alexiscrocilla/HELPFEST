<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <img class="map mb-4 mt-3" src="../assets/images/usa.png" alt="map">
    <div class="shadow p-3 m-3 bg-white AVenirCard3"></div>
    <div class="shadow p-3 m-3 bg-white AVenirCard3"></div>
    <div class="shadow p-3 m-3 bg-white AVenirCard3"></div>
    <div class="shadow p-3 m-3 bg-white AVenirCard3"></div>
    <div class="shadow p-3 m-3 bg-white AVenirCard3"></div>
    <div class="shadow p-3 m-3 bg-white AVenirCard3"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style>
.AVenirCard3 {
  height: 12vh;
  border-radius: 2vh;
}
.map {
  width: 40vh;
}
</style>
