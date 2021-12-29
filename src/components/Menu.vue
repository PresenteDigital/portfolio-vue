<template>
  <v-app>
    <div class="main-container">
      <v-toolbar app color="transparent" class="mb-6 mt-6 xs-12">
        <v-toolbar-title class="ml-10">
          <g-image src="../img/logosvg.svg" class="navbar-brand-img" />
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn text class="no-uppercase ml-12 text-button">Paciente</v-btn>
        <v-btn text class="no-uppercase ml-12 text-button">Profesional</v-btn>
        <v-btn text class="no-uppercase ml-12 text-button">Empresas</v-btn>
        <v-btn text class="no-uppercase ml-12 text-button">Sass</v-btn>
        <v-btn text class="no-uppercase ml-12 text-button">Blog</v-btn>
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
      </v-toolbar>
    </div>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>
<script>
import "../styles.css";
export default {
  data() {
    return {};
  },
};
</script>
<style scoper>
.main-container {
  background-image: url("https://app-dev.opensalud.es/static/img/bgs/employee_walking.jpg"),
    linear-gradient(to left, #eee, transparent);
  background-position-y: center;
  background-size: 120%;
  width: 100%;
  background-blend-mode: overlay;
}
header {
  box-shadow: none !important;
}
.no-uppercase {
  text-transform: none;
  color: #3238c4 !important;
  font-family: Space Grotesk, sans-serif !important;
  font-size: 1.2rem !important;
}

.navbar-brand-img {
  width: 150px;
}
</style>
