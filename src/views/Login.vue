<template>
  <div class="d-flex justify-content-center mt-4">
    <div class="neon text-light logincard">

    <h1> Login to Your Account </h1>
    <div class="form-text">
      <a href="#/register">Don't have an account?</a>
    </div><br>

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
    <button type="submit" class="btn btn-info btn-lg" @click="signIn">Log-In</button>
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

      switch (user.uid) {
        //bar@newera.fr
        case "seXeNfFzdvgOEeVKRctyftZaNkQ2":
          console.log('bar')
          router.push('/bar')
          break;
        //reception@newera.fr
        case 'ptiRDOkvYjUroeYO4jxRJkaz2Ig2':
          console.log('reception')
          router.push('/reception')
          break;

        default:
          console.log('default')
          router.push('/feed')
          break;
      }
    }
})

const email = ref('')
const password = ref('')
const errMsg = ref() // ERROR MESSAGE
const router = useRouter() // get a reference to our vue router
const signIn = () => { // we also renamed this method
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value) // THIS LINE CHANGED
    .then((user) => {
      console.log('Successfully logged in!');

    })
    .catch(error => {
      switch (error.code) {
        case 'auth/invalid-email':
            errMsg.value = 'Invalid email'
            break
        case 'auth/user-not-found':
            errMsg.value = 'No account with that email was found'
            break
        case 'auth/wrong-password':
            errMsg.value = 'Incorrect password'
            break
        default:
            errMsg.value = 'Email or password was incorrect'
            break
      }
    });
}
onBeforeUnmount(() => {
    // clear up listener
    authListener()
})
</script>

<style>
.logincard {
  width: 90%;
  border: 6px solid rgba(0, 0, 0, 0.3);
  padding: 30px;

  background: rgba(0, 0, 0, 0.2);
  border-radius: 6em;
}

.neon {
  box-shadow:
      rgba(91, 192, 222, 0.4) 5px 5px,
      rgba(91, 192, 222, 0.3) 10px 10px,
      rgba(91, 192, 222, 0.2) 15px 15px,
      rgba(91, 192, 222, 0.1) 20px 20px,
      rgba(91, 192, 222, 0.05) 25px 25px;
}
</style>
