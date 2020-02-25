import * as fb from 'firebase';

class Ad {
   constructor (title, description, ownerId, img = '', promo = false, id = null) {
      this.title = title;
      this.description = description;
      this.ownerId = ownerId;
      this.img = img;
      this.promo = promo;
      this.id = id;
   }
}

export default ({
   state: {
      ads: [
         {
           title: "Firsr ad",
           description: "Firsr ad",
           promo: false,
           img: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
           id: 1
         },
         {
           title: "Second ad",
           description: "Second ad",
           promo: true,
           img: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
           id: 2
         },
         {
           title: "Third ad",
           description: "Third ad",
           promo: true,
           img: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
           id: 3
         },
         {
           title: "ad",
           description: "ad",
           promo: true,
           img: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
           id: 4
         }
       ]
   },
   mutations: {
      createAd (state, payload) {
         state.ads.push(payload);
      }
   },
   actions: {
      async createAd ({commit, getters}, payload) {
         commit('clearError');
         commit('setLoading', true);

         try {
            const newAd = new Ad(
               payload.title,
               payload.description,
               getters.user.id,
               payload.img,
               payload.promo
            );
            const ad = await fb.database().ref('ads').push(newAd);
            
            commit('createAd', {
               ...newAd,
               id: ad.key
            });
            commit('setLoading', false);
            
         } catch (error) {
            commit('setLoading', false);
            commit('setError', error.message);
            throw error;
         }
      }
   },
   getters: {
      ads (state) {
         return state.ads;
      },
      promoAds (state) {
         return state.ads.filter( ad => ad.promo );
      },
      myAds (state) {
         return state.ads;
      },
      adById (state) {
         return adId => state.ads.find( ad => ad.id.toString() === adId );
      }
   }
 });