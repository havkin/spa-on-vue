import store from '../store';
// import * as fb from 'firebase';

export default function (to, from, next) {
   if (store.getters.user) {
      next();
   } else {
      next('/');
      // next('/login?loginError=true');
   }
}