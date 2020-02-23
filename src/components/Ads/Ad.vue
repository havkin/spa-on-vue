<template>
  <v-container>
     <v-row>
        <v-col>
           <v-card>
              <v-img
               src="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
               height="300"
              ></v-img>
              <v-card-text>
                 <h1>Lorem</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptate.</p>
              </v-card-text>
              <v-card-actions>
                 <v-spacer></v-spacer>
                 <v-btn class="warning" tile>Edit</v-btn>
                 <v-btn class="success">Buy</v-btn>
              </v-card-actions>
           </v-card>
        </v-col>
     </v-row>
  </v-container>  
</template>

<script>
export default {
  data () {
     return {}
    
  }
}
</script>

<style>

</style>