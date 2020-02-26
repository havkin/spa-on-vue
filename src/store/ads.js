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
      ads: []
   },
   mutations: {
      createAd (state, payload) {
         state.ads.push(payload);
      },
      loadAds (state, payload) {
         state.ads = payload;
      }
   },
   actions: {
      async createAd ({commit, getters}, payload) {
         commit('clearError');
         commit('setLoading', true);

         const imgFile = payload.img;

         try {
            const newAd = new Ad(
               payload.title,
               payload.description,
               getters.user.id,
               "",
               payload.promo
            );
            const ad = await fb.database().ref('ads').push(newAd);

            const imgFileExt = imgFile.name.slice(imgFile.name.lastIndexOf('.'));
            
            const imgRef = `ads/${ad.key}${imgFileExt}`;

            const fileData = await fb.storage().ref(imgRef).put(imgFile);

            const imageSrc = await fileData.ref.getDownloadURL();

            await fb.database().ref('ads').child(ad.key).update({
               img: imageSrc
            });

            commit('createAd', {
               ...newAd,
               id: ad.key,
               img: imageSrc
            });
            commit('setLoading', false);
            
         } catch (error) {
            commit('setLoading', false);
            commit('setError', error.message);
            // console.log(error);
            throw error;
         }
      },

      async fetchAds ({commit}) {
         commit('clearError');
         commit('setLoading', true);

         const resultAds = [];

         try {
            const fbVal = await fb.database().ref('ads').once('value');
            const ads = fbVal.val();

            Object.keys(ads).forEach(key => {
               const ad = ads[key];
               resultAds.push(
                  new Ad(
                     ad.title,
                     ad.description,
                     ad.ownerId,
                     ad.img,
                     ad.promo,
                     key
                  )
               );
            });
            commit('loadAds', resultAds);
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