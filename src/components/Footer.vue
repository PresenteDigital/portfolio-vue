<template>
  <section class="open-salud-footer">
    <v-footer padless dark class="footer-dark">
      <div class="borders">
        <div class="border-line"></div>
        <div class="border-line-second"></div>
      </div>
      <v-card class="flex py-2">
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
          <v-col
            offset-sm="2"
            md="3"
            xs="12"
            class="d-flex flex-column column-logo"
          >
            <g-image
              class="logo"
              src="~/assets/images/opensalud_white.svg"
              alt="Open salud"
            />
          </v-col>
        </v-row>
        <!-- <v-row class="my-8">
          <v-col offset-md="1" sm="3" class="d-flex flex-column">
            <g-image
              src="~/assets/images/im_logo_santaria.png"
              alt="Web sanitaria"
            />
          </v-col>
        </v-row> -->
        <div class="container-imgs">
          <g-image
            src="~/assets/images/im_logo_santaria.png"
            alt="Web sanitaria"
          />
          <g-image src="~/assets/images/rgpd.png" alt="RGPD" />
          <g-image src="~/assets/images/applus-iso.png" alt="applus" />
          <g-image src="~/assets/images/iso.png" alt="iso" />
          <g-image src="~/assets/images/logo-receta.png" alt="logo-receta" />
        </div>
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
.footer-dark {
  display: block;
  background-color: #1e1e1e !important;
}
.borders {
  padding-top: 2rem;
  display: flex;
}

.border-line {
  height: 1px;
  width: 16rem;
  background-color: white;
  margin-left: 9rem;
}
.border-line-second {
  height: 1px;
  width: 16rem;
  background-color: white;
  margin-left: 9rem;
}

section.open-salud-footer {
  font-family: "Space Grotesk", sans-serif;
}

.border.col-sm-3.col {
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
.container-imgs {
  display: flex;
  justify-content: initial;
  margin-left: 9rem;
  margin-top: 2rem;
}
.container-imgs img {
  align-self: center;
  margin-right: 1rem;
}
.border {
  margin-left: 1rem;
}

@media (max-width: 600px) {
  .container-imgs {
    display: block;
    padding: 1px 5px;
    margin-left: 0;
  }
  .border-line {
    width: 9rem;
    margin-left: 2rem;
  }
  .border-line-second {
    width: 9rem;
    margin-left: 4.5rem;
  }
  .column-logo {
    padding: 0 2rem;
    margin-bottom: 1rem;
  }
}
</style>
