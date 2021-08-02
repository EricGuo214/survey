// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyBbfL4Lx8_eLBvfR3YzMyam03-cTK050C8",
  authDomain: "surveyui-d5c7d.firebaseapp.com",
  projectId: "surveyui-d5c7d",
  storageBucket: "surveyui-d5c7d.appspot.com",
  messagingSenderId: "233923669030",
  appId: "1:233923669030:web:074088255b7cfef3260ae7",
  measurementId: "G-639XJ9PJNV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
