<template>
  <section class="open-salud-footer">
    <v-footer padless dark>
      <v-card class="flex py-16">
        <v-row>
          <v-col class="border" offset-sm="1" sm="3">
            <v-card-text
              class=" white--text"
              v-for="(item, index) in data_first_column"
              :key="index"
            >
              {{ item }}
            </v-card-text>
          </v-col>
          <v-col sm="3" class="border">
            <v-card-text
              class=" white--text"
              v-for="(item, index) in data_second_column"
              :key="index"
            >
              {{ item }}
            </v-card-text>
          </v-col>
          <v-col offset-sm="2" md="3" xs="12" class="d-flex flex-column">
            <g-image class="logo" src="~/assets/images/opensalud_white.svg" />
          </v-col>
        </v-row>
        <v-row class="my-8">
          <v-col offset-md="1" sm="3" class="d-flex flex-column">
            <g-image src="~/assets/images/im_logo_santaria.png" />
          </v-col>
        </v-row>
        <v-row>
          <v-col offset-sm="1" sm="4">
            <v-btn
              class="mx-4"
              icon
              v-for="({ icon, alt }, index) in icons"
              :key="index"
            >
              <g-image
                :src="require(`!!assets-loader!@images/${icon}`)"
                :alt="alt"
              />
            </v-btn>
            <!--          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon> 
            </v-btn> -->
          </v-col>
          <v-col offset-sm="1" sm="6">
            <v-card-text class="copyright"
              >Copyright © 2022 Open Healthcare. Todos los derechos
              reservados.</v-card-text
            >
          </v-col>
        </v-row>
      </v-card>
    </v-footer>
  </section>
</template>

<script>
export default {
  data: () => ({
    data_first_column: [
      "Condiciones para profesionales",
      "Condiciones para pacientes",
      "Telemedicina para empresas",
      "Contacto",
    ],
    data_second_column: ["Aviso legal y cookies", "Preguntas frecuentes"],
    icons: [
      { icon: "ICN_Facebook.svg", alt: "Icono Facebook" },
      { icon: "ICN_Twitter.svg", alt: "Icono Twitter" },
      { icon: "ICN_Linkedin.svg", alt: "Icono Linkedin" },
      { icon: "ICN_Instagram.svg", alt: "Icono Instagram" },
    ],
  }),
};
</script>

<style>
section.open-salud-footer {
  font-family: "Space Grotesk", sans-serif;
}

.border.col-sm-3.col {
  border-top: 1px solid white;
  padding-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #eee;
  display: block;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}

img.g-image.logo {
  width: 15rem;
}

.open-salud-footer
  button.mx-4.v-btn.v-btn--icon.v-btn--round.theme--dark.v-size--default {
  margin-left: 0 !important;
}

.copyright {
  text-align: left;
  text-transform: uppercase;
  background-color: #1d1d1e;
  color: #eee;
}
</style>
