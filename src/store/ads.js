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
      createAd ({commit}, payload) {
         payload.id = Math.random();
         commit('createAd', payload);
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