<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card v-if="!loading">
          <v-img :src="ad.img" height="300"></v-img>
          <v-card-text>
            <h1>{{ ad.title }}</h1>
            <p>{{ ad.description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <editAdModal :ad="ad" v-if="isOwner"></editAdModal>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
        <div v-else>
            <v-row align="center" justify="center" style="height: 100vh;">
              <v-progress-circular :size="70" :width="7" color="primary" indeterminate></v-progress-circular>
            </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import editAdModal from "./editAdModal";

export default {
  props: ["id"],
  computed: {
    ad() {
      const id = this.id;
      return this.$store.getters.adById(this.id);
    },
    loading() {
      return this.$store.getters.loading;
    },
    isOwner() {
      return this.ad.ownerId === this.$store.getters.user.id;
    }
  },
  components: {
    editAdModal
  }
};
</script>

<style>
</style>