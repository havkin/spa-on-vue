<template>
  <v-container>
     <v-row>
        <v-col 
         cols="12" 
         sm="8" offset-sm="2"
         md="6" offset-md="3"
         >
           <h1 class="text--secondary mb-3">My ads</h1>

           <v-card 
            class="elevation-10 mb-5" 
            v-for="item in myAds"
            :key=item.id
            >
              <v-row>
                 <v-col cols="4">
                    <v-img
                       :src="item.img"
                       height="150"
                     >
                    </v-img>
                 </v-col>
                 <v-col cols="8">
                    <v-card-text>
                       <h2>{{ item.title }}</h2>
                       <p>{{ item.description }}</p>
                    </v-card-text>
                    <v-card-actions>
                       <v-spacer></v-spacer>
                       <v-btn 
                        class="info"
                        :to="'/ad/' + item.id"
                        >Open</v-btn>
                    </v-card-actions>
                 </v-col>
              </v-row>
           </v-card>
        </v-col>
     </v-row>
  </v-container>
  
</template>

<script>
export default {
  data() {
    return {
       
    }
  },
  computed: {
    myAds () {
      return this.$store.getters.myAds
    }
  }
}
</script>

<style>

</style>