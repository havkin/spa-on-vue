<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="6" offset-sm="3">
        <h1 class="text--secondary mb-3">Orders</h1>
        <v-list subheader two-line flat>
            <v-list-item v-for="order in orders" :key="order.id">
              <template>
                <v-list-item-action>
                  <v-checkbox color="success" @change="markDone" :input-value="order.done"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ order.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn 
                     color="primary"
                     :to="'/ad/' + order.adId"
                  >Open</v-btn>
                </v-list-item-action>
              </template>
            </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          id: "fds1",
          name: "Pep",
          phone: "8-999-00-00",
          adId: "123",
          done: false
        }
      ]
    };
  },
  methods: {
    markDone(order) {
      order.done = true;
    }
  }
};
</script>

<style>
</style>