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

          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dense color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon> 

      <v-toolbar-title>Ad application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text height="100%" tile v-for="item in links" :key="item.title" :to="item.url">
          <v-icon left>mdi-{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false,
    links: [
      { title: "Login", icon: "lock", url: "/login" },
      { title: "Registration", icon: "face", url: "/registration" },
      { title: "Orders", icon: "bookmark-outline", url: "/orders" },
      { title: "New ad", icon: "file-plus", url: "/new" },
      { title: "My ads", icon: "format-list-bulleted", url: "/list" }
    ]
  })
};
</script>
