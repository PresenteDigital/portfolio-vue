<template>
  <v-app class="layout" fixed>
    <template>
      <v-app app>
        <v-app-bar app>
          <v-app-bar-nav-icon
            @click="drawer = true"
            class="d-flex d-sm-none"
          ></v-app-bar-nav-icon>
          <v-toolbar-title
            ><g-image src="../img/logosvg.svg" class="navbar-brand-img"
          /></v-toolbar-title>
          <v-spacer></v-spacer>

          <template>
            <v-toolbar-items class="hidden-sm-and-down">
              <v-btn
                v-for="item in items"
                :key="item.icon"
                :to="item.link"
                text
                class="navigation-buttons"
                >{{ item.title }}</v-btn
              >
            </v-toolbar-items>
            <v-btn
              rounded
              outlined
              color="indigo"
              class="px-10 py-5 ml-12 text-button"
              >REGÍSTRATE</v-btn
            >
            <v-btn
              rounded
              color="#2A2FA6"
              dark
              class="px-10 py-5 ml-12 mr-12 text-button"
              >ACCEDER</v-btn
            >
          </template>
        </v-app-bar>
        <!-- Add a navigation bar -->
        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list nav dense>
            <v-list-item-group>
              <v-list-item v-for="(item, index) in items" :key="item.title">
                <v-list-item-title @click="tab = index">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
        <!-- Navigation bar ends -->
        <v-content class="ma-5">
          <v-tabs-items v-model="tab" class="d-flex flex-column align-center">
            <v-tab-item v-for="item in items" :key="item.title">
              You are on {{ item.title }}
            </v-tab-item>
          </v-tabs-items>
        </v-content>
      </v-app>
    </template>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "About", icon: "mdi-account-box-outline" },
        { title: "Projects", icon: "mdi-apps" },
        { title: "Education & Experience", icon: "mdi-school-outline" },
        { title: "Contact", icon: "mdi-message-text-outline" },
      ],
      right: null,
    };
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
html {
  scroll-behavior: smooth;
}
/* div.v-application--wrap {
  flex-direction: row;
  margin-left: 256px;
} */
</style>
