<template>
    <div>
      <!-- <div class="p-4 shadow p-3 bg-white AVenirCard text-dark">
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
      </div> -->

      <span type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <a class="login" href="#/Login">
        </a>
      </span>

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
            errMsg.value = 'L\'email ou le mot de passe est incorrect'
            break
      }
    });
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
  height: 55px;
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
  content: "LOG IN";
  height: 55px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid #5bc0de;
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
  background: #5bc0de;
  transform: rotateX(90deg) translateZ(25px);
}
span a:hover{
  transform: translateZ(-25px) rotateX(-90deg);
}

</style>
