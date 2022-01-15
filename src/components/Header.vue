<template>
  <section class="open-salud-header">
    <v-app-bar app elevation="0" class="px-lg-16 px-xs-0">
      <!-- Navigation buttons in RWD -->
      <v-app-bar-nav-icon
        aria-label="toggle-menu"
        @click="drawer = true"
        class="d-flex d-lg-none"
      ></v-app-bar-nav-icon>

      <g-image src="~/assets/images/logo.svg" width="150px" alt="Open salud" />

      <!-- Navigation buttons in desktop -->
      <v-toolbar-items class="hidden-md-and-down nav-buttons">
        <v-btn
          v-for="item in nav_buttons"
          :key="item.title"
          :to="item.link"
          text
          >{{ item.title }}{{ item.icon }}</v-btn
        >
      </v-toolbar-items>

      <!-- Login buttons desktop -->
      <v-item-group class="log-buttons-desktop hidden-md-and-down">
        <v-btn
          v-for="item in login_buttons"
          :key="item.title"
          rounded
          :outlined="item.outlined"
          :to="item.link"
          class="px-10 py-5 ml-6"
          >{{ item.title }}
          <v-icon v-if="item.icon" right dark>
            {{ item.icon }}
          </v-icon></v-btn
        >
      </v-item-group>

      <!-- Login buttons in RWD -->
      <v-item-group class="log-buttons-rwd hidden-lg-and-up">
        <v-btn icon small class="mx-1">
          <v-icon>mdi-login</v-icon>
        </v-btn>
        <v-btn icon small class="mx-1">
          <v-icon>
            mdi-account-plus
          </v-icon>
        </v-btn>
      </v-item-group>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="(item, index) in nav_buttons" :key="item.title">
            <v-list-item-title @click="tab = index">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </section>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      tab: null,
      nav_buttons: [
        {
          link: "https://www.opensalud.es/es/Home/servicios-tarifas",
          title: "Paciente",
        },
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
      login_buttons: [
        {
          link: "https://www.opensalud.es/es/#dlgRegisterPatient",
          title: "Regístrate",
          outlined: true,
        },
        {
          link: "https://www.opensalud.es/es/#/login",
          title: "Acceder",
          icon: "mdi-arrow-right",
          outlined: false,
        },
      ],
    };
  },
};
</script>

<style>
.open-salud-header .v-app-bar {
  background: rgb(228, 228, 228);
  background: linear-gradient(
    90deg,
    rgba(228, 228, 228, 1) 50%,
    rgba(233, 233, 233, 1) 100%
  );
}
.open-salud-header .v-toolbar__content {
  display: flex;
  justify-content: space-between;
  /* padding: 20px 100px; */
}
.open-salud-header .nav-buttons .v-btn {
  font-family: "Space Grotesk", sans-serif;
  color: #3238c4;
  text-transform: capitalize;
  font-weight: 400;
}

.open-salud-header .log-buttons-desktop .v-btn.v-btn--outlined {
  color: #3238c4;
  border-color: #3238c4;
  margin: 0;
}
.open-salud-header .log-buttons-desktop .v-btn.v-btn--is-elevated {
  background-color: #3238c4;
  border-color: #3238c4;
  color: #eee;
  margin: 0;
}

.open-salud-header .log-buttons-desktop .v-btn .v-btn__content {
  letter-spacing: 0px;
  font-weight: 600;
  font-size: 0.8rem;
}
</style>
