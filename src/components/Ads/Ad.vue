<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-img 
            :src="ad.img"
            height="300"
         ></v-img>
          <v-card-text>
            <h1>{{ ad.title }}</h1>
            <p>{{ ad.description }}</p>
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
  props: ["id"],
  computed: {
     ad () {
        const id = this.id
        return this.$store.getters.adById(this.id)
     }
  }
};
</script>

<style>
</style>