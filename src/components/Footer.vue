<template>
  <section class="open-salud-footer">
    <v-footer padless dark class="footer-dark">
      <v-card class="flex py-2 px-6">
        <v-row>
          <v-col sm="3">
            <div class="border-line"></div>
            <v-card-text
              class=" white--text"
              v-for="(item, index) in data_first_column"
              :key="index"
            >
              {{ item }}
            </v-card-text>
          </v-col>
          <v-col sm="3">
            <div class="border-line"></div>
            <v-card-text
              class=" white--text"
              v-for="(item, index) in data_second_column"
              :key="index"
            >
              {{ item }}
            </v-card-text>
          </v-col>
          <v-col
            justify-end
            offset-lg="3"
            lg="2"
            sm="6"
            class="d-flex flex-column column-logo"
          >
            <g-image
              class="logo"
              src="~/assets/images/opensalud_white.svg"
              alt="Open salud"
            />
          </v-col>
        </v-row>
        <div class="container-imgs mt-6">
          <g-image
            v-for="({ src, alt, style }, index) in sanitary_logos"
            :key="index"
            :src="require(`!!assets-loader!@images/${src}`)"
            :alt="alt"
            :style="style"
            class="mb-2"
          />
        </div>
        <v-row class="container-logos-copyright mt-6">
          <v-col>
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
          <v-col offset-sm="1" sm="6" class="copyright">
            <v-card-text class="copyright">{{ copyright }}</v-card-text>
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
      "Condiciones y para profesionales",
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
    sanitary_logos: [
      {
        src: "im_logo_santaria.png",
        alt: "Web sanitaria",
        style: "width: 120px",
      },
      {
        src: "rgpd.png",
        alt: "RGPD",
        style: "width: 120px",
      },
      {
        src: "applus-iso.png",
        alt: "App plus",
        style: "width: 55px",
      },
      {
        src: "iso.png",
        alt: "iso",
        style: "width: 100px",
      },
      {
        src: "logo-receta.png",
        alt: "logo-receta",
        style: "width: 65px",
      },
    ],
    copyright: `Copyright © 2022 Open Healthcare. Todos los derechos
              reservados.`,
  }),
};
</script>

<style>
section.open-salud-footer .v-card {
  padding-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #eee;
  display: block;
  transition-duration: 0.5s;
  box-shadow: none;
}
.open-salud-footer .footer-dark {
  display: block;
  padding: 60px 20px;
  background-color: #1e1e1e;
  box-shadow: none;
}

.open-salud-footer .border-line {
  height: 1px;
  width: 75%;
  background-color: #fff;
  margin-left: 16px;
}

section.open-salud-footer {
  font-family: "Space Grotesk", sans-serif;
}

.open-salud-footer .d-flex.flex-column.column-logo {
  align-items: end;
}
.open-salud-footer img.g-image.logo {
  width: 15rem;
}

.open-salud-footer .flex.py-2.px-6.v-card.v-sheet.theme--dark {
  box-shadow: none;
}

.open-salud-footer .copyright {
  text-align: right;
  text-transform: uppercase;
  background-color: #1d1d1e;
  color: #eee;
}
.open-salud-footer .container-imgs {
  display: flex;
  justify-content: flex-start;
  padding-left: 0px;
  flex-wrap: wrap;
}
.open-salud-footer .container-imgs img {
  align-self: center;
  margin-right: 1.5rem;
}
@media (max-width: 600px) {
  .open-salud-footer .copyright {
    text-align: left;
  }
  .open-salud-footer .container-logos-copyright {
    display: block;
  }
  .open-salud-footer .container-logos-copyright .logos {
    display: flex;
    justify-content: center;
  }
  .open-salud-footer .d-flex.flex-column.column-logo {
    align-items: flex-start;
  }
}
</style>
