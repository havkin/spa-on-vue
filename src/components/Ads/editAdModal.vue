<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn class="warning" tile v-on="on">Edit</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">Edit ad</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-form v-model="valid">
          <v-text-field
            label="Title"
            name="title"
            type="text"
            v-model="editedTitle"
            :rules="[v => !!v || 'Title is required']"
          />

          <v-textarea
            label="Description"
            name="description"
            v-model="editedDescription"
            :rules="[v => !!v || 'Description is required']"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="onCancel">Cancel</v-btn>
        <v-btn
         color="success"
         tile
         @click="onSave"
         :disabled="!valid"
         >Save</v-btn>
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
      editedTitle: this.ad.title,
      editedDescription: this.ad.description,
      valid: false
    };
  },
  methods: {
    onCancel() {
      this.editedTitle = this.ad.title;
      this.editedDescription = this.ad.description;
      this.dialog = false;
    },
    onSave() {
       this.$store.dispatch('updateAd', {
          title: this.editedTitle,
          description: this.editedDescription,
          id: this.ad.id
       })
      this.dialog = false;
    }
  }
};
</script>

<style>
</style>