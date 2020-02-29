<template>
  <v-container>
    <v-row v-if="!loading && orders.length !== 0">
      <v-col cols="12" sm="6" offset-sm="3">
        <h1 class="text--secondary mb-3">Orders</h1>
        <v-list subheader two-line flat>
            <v-list-item v-for="order in orders" :key="order.id">
              <template>
                <v-list-item-action>
                  <v-checkbox
                    color="success"
                    @change="markDone(order)"
                    :input-value="order.done"
                    :readonly="order.done"
                  ></v-checkbox>
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
    <v-row v-else-if="!loading && orders.length === 0">
      <v-col cols="12" sm="8" offset-sm="2" md="6" offset-md="3">
        <h1 class="text--secondary mb-3">You have no orders</h1>
      </v-col>
    </v-row>
    <v-row v-else align="center" justify="center" style="height: 100vh;">
       <v-progress-circular :size="70" :width="7" color="primary" indeterminate></v-progress-circular>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  created () {
    this.$store.dispatch('fetchOrders')
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    orders() {
      return this.$store.getters.orders
    }
  },
  methods: {
    markDone(order) {
      this.$store.dispatch('markOrderDone', order.id)
        .then(() => {
          order.done = true;
        })
        .catch(() => {})
    }
  }
};
</script>

<style>
</style>