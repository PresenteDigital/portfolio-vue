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
<script>
export default {
  el: "#app",
  data() {
    return {
      drawer: false,
      tab: null,
      items: [
        { link: "https://www.opensalud.es/es/", title: "Paciente" },
        {
          link: "https://www.opensalud.es/es/Home/servicios-profesionales",
          title: "Profesional",
        },
        {
          link: "https://www.opensalud.es/opensalud360/empresas",
          title: "Empresas",
        },
        { link: "https://www.opensalud.es/es/Home/saas", title: "Saas" },
        { link: "https://blog.opensalud.es/", title: "Blog" },
      ],
    };
  },
};
</script>
<style>
.navigation-buttons {
  color: #3238c4 !important;
  text-transform: capitalize;
  font-size: 1.2rem !important;
}
.navbar-brand-img {
  width: 150px;
}
</style>
