export default ({
   state: {
      ads: [
         {
           title: "Firsr ad",
           description: "Firsr ad",
           promo: false,
           img: " https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
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
   },
   actions: {
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
   }
 });