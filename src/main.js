import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import * as fb from 'firebase';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyBBg0sQdo931tS4aXNBRw8ZNgZy_sclCtc",
      authDomain: "ad-project-8db0d.firebaseapp.com",
      databaseURL: "https://ad-project-8db0d.firebaseio.com",
      projectId: "ad-project-8db0d",
      storageBucket: "ad-project-8db0d.appspot.com",
      messagingSenderId: "936499911340",
      appId: "1:936499911340:web:adcd73a4a2526c3df3dd09",
      measurementId: "G-9V7BTWY1TL"
    };
    fb.initializeApp(firebaseConfig);
    fb.analytics();
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user);
      }
    });
  },
  render: h => h(App)
}).$mount('#app');
