<template>
    <div>

      <span type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <a class="register" href="#/Register">
        </a>
      </span>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import firebase from 'firebase'
import { useRouter } from 'vue-router' // import router

//const navbar = this.$refs.offcanvasRight
const email = ref('')
const password = ref('')
const verifypassword = ref('')
const errMsg = ref()
const router = useRouter() // get a reference to our vue router
const register = () => {
    if( password.value !== verifypassword.value) {
        errMsg.value = "Les mots de passe ne sont pas identiques"
        return
    }
  firebase
    .auth() // get the auth api
    .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
    .then(() => {
      errMsg.value = 'Successfully registered!'
      router.push('/feed') // redirect to the feed
      //navbar.collapse('hide')
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
span .register:before,
span .register:after{
  position: absolute;
  content: "REGISTER";
  height: 55px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid #5cb85c;
  box-sizing: border-box;
  border-radius: 5px;
}
span a:before{
  color: #fff;
  background: #989898;
  transform: rotateY(0deg) translateZ(25px);
}
span a:after{
  color: #fff;
  background: #5cb85c;
  transform: rotateX(90deg) translateZ(25px);
}
span a:hover{
  transform: translateZ(-25px) rotateX(-90deg);
}
</style>
