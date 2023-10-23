import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'

createApp(App).use(store).use(router).use(VueFire).mount('#app')
firebase.initializeApp({
	apiKey: "AIzaSyCfJ5nuiD2Gc8r6J4c3pizJap4tF1OgFU0",
	authDomain: "chat-app-2c7bc.firebaseapp.com",
	databaseURL: "https://chat-app-2c7bc-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "chat-app-2c7bc",
	storageBucket: "chat-app-2c7bc.appspot.com",
	messagingSenderId: "112508813916",
	appId: "1:112508813916:web:b2cf28b1b4605782485c99"
})
