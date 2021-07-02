import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBcrerVdV5Eg85Q2beCfodrtC4ccHW42WE",
  authDomain: "helpfest-82b5d.firebaseapp.com",
  projectId: "helpfest-82b5d",
  storageBucket: "helpfest-82b5d.appspot.com",
  messagingSenderId: "1007471186667",
  appId: "1:1007471186667:web:204bcfbfbdd39350a964ae"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')