<template>
  <div class="d-flex justify-content-center mt-4">
    <div class="registercard neon text-light">

      <h1> Create an Account </h1>
      <div class="form-text">
        <a href="#/login">Already have an account?</a>
      </div>

      <form class="p-1">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" v-model='email'>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model='password'>
        </div>
        <p v-if="errMsg"> {{ errMsg }} </p>
        <button type="submit" class="btn btn-success btn-lg" @click="register">Register</button>
      </form>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import firebase from 'firebase'
import { useRouter } from 'vue-router' // import router
import { onBeforeUnmount } from 'vue'

const authListener = firebase.auth().onAuthStateChanged(function(user) {
  if (user) { // Already logged in
    router.push('/feed')
  }
})

const email = ref('')
const password = ref('')
const router = useRouter() // get a reference to our vue router
const register = () => {
  firebase
      .auth() // get the auth api
      .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
      .then(() => {
        console.log('Successfully registered!');
        router.push('/feed') // redirect to the feed
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
}
onBeforeUnmount(() => {
  // clear up listener
  authListener()
})
</script>

<style>
.registercard {
  width: 90%;
  border: 6px solid rgba(0, 0, 0, 0.3);
  padding: 30px;

  background: rgba(0, 0, 0, 0.2);
  border-radius: 6em;
}

.neon {
  box-shadow:
      rgba(92, 184, 92, 0.4) 5px 5px,
      rgba(92, 184, 92, 0.3) 10px 10px,
      rgba(92, 184, 92, 0.2) 15px 15px,
      rgba(92, 184, 92, 0.1) 20px 20px,
      rgba(92, 184, 92, 0.05) 25px 25px;
}
</style>

