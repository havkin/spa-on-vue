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
          <v-btn class="ma-2 white--text warning" @click="triggerUpload">
            Upload
            <v-icon right dark>mdi-cloud-upload</v-icon>
          </v-btn>
          <input 
            type="file"
            accept="image/*"
            class="d-none"
            ref="fileInput"
            @change="onFileChange"
          >
        </v-row>
        <v-row>
          <img
            v-if="imgSrc"
            :src="imgSrc"
            alt="ad preview"
            height="100"
          />
        </v-row>
        <v-row>
          <v-switch v-model="promo" label="Add to promo?"></v-switch>
        </v-row>
        <v-row justify="end">
          <v-btn 
            :loading="loading"
            :disabled="!valid || !imgSrc || loading" 
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
      promo: false,
      imgFile: null,
      imgSrc: ''
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    createAd() {
      if (this.valid && this.imgFile) {
        const newAd = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          img: this.imgFile
        };
        this.$store.dispatch("createAd", newAd)
          .then(() => {
            this.$router.push("/list");
          })
          .catch(() => {});;
      }
    },
    triggerUpload () {
      this.$refs.fileInput.click()
    },
    onFileChange () {
      const file = event.target.files[0]

      const reader = new FileReader()
      reader.onload = () => {
        this.imgSrc = reader.result
        // console.log(this.imgSrc)
      }

      reader.readAsDataURL(file)
      this.imgFile = file

    }
  }
};
</script>

<style>
</style>