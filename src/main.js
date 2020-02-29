import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import * as fb from 'firebase';

import BuyModalComponent from '@/components/Shared/BuyModal';

Vue.config.productionTip = false;

Vue.component('app-buy-modal', BuyModalComponent);

new Vue({
  router,
  store,
  vuetify,
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyCPOSRfNY4pb_JVrHqx6gXFqie5u02D-Eg",
      authDomain: "ads-project-1e8d0.firebaseapp.com",
      databaseURL: "https://ads-project-1e8d0.firebaseio.com",
      projectId: "ads-project-1e8d0",
      storageBucket: "ads-project-1e8d0.appspot.com",
      messagingSenderId: "260060060219",
      appId: "1:260060060219:web:c20b8e4f0d787488371a1e",
      measurementId: "G-NWE3BG8JL3"
    };
    fb.initializeApp(firebaseConfig);
    fb.analytics();
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user);
      }
    });
    this.$store.dispatch('fetchAds');
  },
  render: h => h(App)
}).$mount('#app');
