<template>
    <div>
      <div class="p-4 shadow p-3 bg-white AVenirCard text-dark">
        <div class="shadow p-3 mb-3 bg-info AVenirCard2">
          <p>Continuer sur Facebook</p>
        </div>
        <div class="shadow p-3 mb-3 bg-danger AVenirCard2">
          <p>Continuer sur Google</p>
        </div>


          <div class="shadow p-3 mb-3 bg-secondary AVenirCard text-dark">
            <img class="d-flex justify-content-end mb-4" src="@/assets/icons/email_1.png" alt="Email">
            <input type="text" class="shadow p-3 mb-3 bg-light text-secondary AVenirCard2" placeholder="Adresse mail" v-model='email' />
            <input type="password" class="shadow p-3 mb-3 bg-light text-secondary AVenirCard2"  placeholder="Mot de passe" v-model='password'/>
            <p v-if="errMsg"> {{ errMsg }} </p>
          </div>
          <button class="btn btn-dark AVenirCard" @click="signIn">
            Connexion
          </button><br>
          <button class="link mt-3 fs-6 text-decoration-underline">Première connexion ?</button>


      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import firebase from 'firebase'
import { useRouter } from 'vue-router' // import router

const email = ref('')
const password = ref('')
const errMsg = ref() // ERROR MESSAGE
const router = useRouter() // get a reference to our vue router
const signIn = () => { // we also renamed this method
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value) // THIS LINE CHANGED
    .then(() => {
      console.log('Successfully logged in!');
      email.value = ''
      password.value = ''
      router.push('/feed') // redirect to the feed
    })
    .catch(error => {
      password.value = ""
      switch (error.code) {
        case 'auth/invalid-email':
            errMsg.value = 'L\'email n\'est pas valide'
            break

        default:
            errMsg.value = 'Email or password was incorrect'
            break
      }
    });
}
</script>

<style scoped>
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
</style>
