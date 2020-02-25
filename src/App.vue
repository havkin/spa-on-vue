<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list>
        <v-list-item v-for="item in links" :key="item.title" :to="item.url">
          <v-list-item-icon>
            <v-icon v-if="item.icon">mdi-{{item.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>

        </v-list-item>
        <v-list-item @click="onLogout" v-if="isUserLoggedIn">
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>

        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dense color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Ad application</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text height="100%" tile v-for="item in links" :key="item.title" :to="item.url">
          <v-icon left>mdi-{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
        <v-btn 
          text
          height="100%"
          tile 
          @click="onLogout"
          v-if="isUserLoggedIn"
        >
          <v-icon left>mdi-exit-to-app</v-icon>Logout
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <template v-if="error">
      <v-snackbar
        color="error"
        :multi-line="true"
        :timeout="6000"
        @input="closeError"
        :value="true"
      >
        {{ error }}
        <v-btn dark text @click.native="closeError">Close</v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false
    };
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
    links() {
      if (this.isUserLoggedIn) {
        return [
          { title: "Orders", icon: "bookmark-outline", url: "/orders" },
          { title: "New ad", icon: "file-plus", url: "/new" },
          { title: "My ads", icon: "format-list-bulleted", url: "/list" }
        ];
      } else {
        return [
          { title: "Login", icon: "lock", url: "/login" },
          { title: "Registration", icon: "face", url: "/registration" }
        ];
      }
    }
  },
  methods: {
    closeError() {
      this.$store.dispatch("clearError");
    },
    onLogout() {
      this.$store.dispatch("logoutUser");
      this.$router.push("/")
    }
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>