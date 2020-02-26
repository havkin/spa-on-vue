<template>
  <div v-if="!loading">
    <v-container fluid>
      <v-row>
        <v-col>
          <v-carousel>
            <v-carousel-item
              v-for="item in promoAds"
              :key="item.id"
              :src="item.img"
              reverse-transition="fade-transition"
              transition="fade-transition"
              :to="'/ad/' + item.id"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col v-for="item in ads" :key="item.id" cols="12" lg="4">
          <v-card class="mx-auto" max-width="400">
            <v-img class="white--text align-end" height="200px" :src="item.img"></v-img>
            <v-card-title>{{item.title}}</v-card-title>

            <v-card-text class="text--primary">
              <div>{{item.description}}</div>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text :to="'/ad/' + item.id">Open</v-btn>
              <v-btn text class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-row align="center" justify="center" style="height: 100vh;">
          <v-progress-circular 
            :size="70"
            :width="7"
            color="primary"
            indeterminate>
            </v-progress-circular>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {
    promoAds() {
      return this.$store.getters.promoAds;
    },
    ads() {
      return this.$store.getters.ads;
    },
    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>

<style>
</style>