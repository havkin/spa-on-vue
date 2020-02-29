<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn class="primary mx-2" v-on="on">Buy</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">Do you want to buy it?</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-form v-model="valid">
          <v-text-field
            label="Your name"
            name="name"
            type="text"
            v-model="name"
            :rules="[v => !!v || 'Title is required']"
          />

          <v-text-field
            label="Your phone"
            name="phone"
            v-model="phone"
            :rules="[v => !!v || 'Description is required']"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
         text
         @click="onCancel"
         :disabled="localLoading" 
      >Cancel</v-btn>
        <v-btn
         color="success"
         @click="onSave"
         :disabled="!valid || localLoading"
         :loading="localLoading"
         >Buy it!</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["ad"],
  data() {
    return {
      dialog: false,
      name: "",
      phone: "",
      valid: false,
      localLoading: false,
    };
  },
  methods: {
    onCancel() {
      this.name = "";
      this.phone = "";
      this.dialog = false;
    },
    onSave() {
       this.localLoading = true;
      this.$store
        .dispatch("createOrder", {
          name: this.name,
          phone: this.phone,
          adId: this.ad.id,
          ownerId: this.ad.ownerId
        })
        .finally(() => {
          this.name = "";
          this.phone = "";
          this.dialog = false;
          this.localLoading = false;
        });
    }
  }
};
</script>

<style>
</style>