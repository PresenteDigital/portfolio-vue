<template>
  <section class="open-salud-menu">
    <v-app-bar app elevation="0" color="#fbfafa" class="menu-open-salud">
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>
      <g-image src="~/assets/images/logo.svg" width="150px" alt="Open salud" />

      <v-toolbar-items class="hidden-sm-and-down nav-buttons">
        <v-btn
          v-for="item in nav_buttons"
          :key="item.title"
          :to="item.link"
          text
          >{{ item.title }}{{ item.icon }}</v-btn
        >
      </v-toolbar-items>

      <v-item-group class="log-buttons hidden-sm-and-down">
        <v-btn
          v-for="item in login_buttons"
          :key="item.title"
          rounded
          :outlined="item.outlined"
          :to="item.link"
          color="primary"
          class="px-10 py-5 ml-12 text-button"
          >{{ item.title }}</v-btn
        >
      </v-item-group>
      <v-item-group class="log-buttons hidden-md-and-up">
        <v-btn class="mx-4" icon>
          <v-btn class="mx-4" icon>
            <v-icon size="24px">
              mdi-login
            </v-icon>
          </v-btn>
          <v-icon size="24px">
            mdi-account-plus
          </v-icon>
        </v-btn>
      </v-item-group>
    </v-app-bar>
    <!-- Add a navigation bar -->
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
.menu-open-salud {
  background: rgb(228, 228, 228);
  background: linear-gradient(
    90deg,
    rgba(228, 228, 228, 1) 50%,
    rgba(233, 233, 233, 1) 100%
  );
}
.v-toolbar__content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
}
.open-salud-menu .nav-buttons .v-btn {
  font-family: "Space Grotesk", sans-serif;
  color: #3238c4 !important;
  text-transform: capitalize;
  font-weight: 400;
}
.open-salud-menu .log-buttons .v-btn {
  margin: 0;
}

.open-salud-menu .log-buttons .v-btn.v-btn--outlined {
  color: #3238c4;
  border-color: 3238c4;
}
.open-salud-menu .log-buttons .v-btn.v-btn--is-elevated {
  background-color: #3238c4 !important;
  border-color: #3238c4 !important;
  color: #eee;
}

.open-salud-menu .log-buttons .v-btn .v-btn__content {
  letter-spacing: 0px;
  font-weight: 600;
  font-size: 0.8rem;
}
</style>
