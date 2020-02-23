<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-carousel>
            <v-carousel-item
              v-for="item in ads"
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
</template>

<script>
export default {
  data() {
    return {
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
          id: 5
        }
      ]
    };
  }
};
</script>

<style>
</style>