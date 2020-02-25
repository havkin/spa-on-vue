<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-form v-model="valid">
          <v-text-field
            label="Ad title"
            name="title"
            type="text"
            v-model="title"
            :rules="[v => !!v || 'Title is required']"
          />

          <v-textarea
            label="Ad description"
            name="description"
            v-model="description"
            :rules="[v => !!v || 'Description is required']"
          />
        </v-form>
        <v-row class="mb-6">
          <v-btn class="ma-2 white--text warning">
            Upload
            <v-icon right dark>mdi-cloud-upload</v-icon>
          </v-btn>
        </v-row>
        <v-row justify="center">
          <img
            src="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
            alt="ad preview"
            height="100"
          />
        </v-row>
        <v-row justify="center">
          <v-switch v-model="promo" label="Add to promo?"></v-switch>
        </v-row>
        <v-row justify="end">
          <v-btn 
            :loading="loading"
            :disabled="!valid || loading" 
            @click="createAd"
          >Create ad</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      title: "",
      description: "",
      promo: false
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    createAd() {
      if (this.valid) {
        const newAd = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          img: "http://placeimg.com/640/480/any"
        };
        this.$store.dispatch("createAd", newAd)
          .then(() => {
            this.$router.push("/list");
          })
          .catch(() => {});;
      }
    }
  }
};
</script>

<style>
</style>