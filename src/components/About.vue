<template>
  <section class="open-salud-about">
    <v-row class="row container-assistance">
      <v-col sm="6" class="main-container-text px-16">
        <p class="mt-8">
          {{ subtitle }}
        </p>
        <h3>{{ title }}</h3>

        <v-col sm="6" class="icons-description">
          <v-list class="mt-8 icons-listed">
            <v-list-item-group>
              <v-list-item
                v-for="({ icon, text }, index) in items"
                :key="index"
              >
                <v-list-item-icon>
                  <v-icon large v-text="icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-row class="mt-4 button-floating">
          <v-btn class="px-10 py-5 ml-6" rounded>
            {{ button_text }}
          </v-btn>
          <div class="floating-label-mobile">{{ label_text }}</div>
        </v-row>
        <div class="floating-container">
          <div class="floating-text mt-8"></div>
          <div class="floating-label">{{ label_text }}</div>
        </div>
      </v-col>
      <v-col sm="6" class="col-img d-flex flex-row justify-center">
        <g-image
          alt="Asistencia médica"
          src="~/assets/images/man-and-woman-sitting-on-sofa-with-laptop-sized.png"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "mdi-check-circle-outline",
          text: `Asistencia médica online ilimitada, con libre elección de médico de familia y pediatra.`,
        },
        {
          icon: "mdi-check-circle-outline",
          text: `Además, consultas presenciales, pruebas, intervenciones y tratamientos a precio bonificado.`,
        },
      ],
    };
  },
  props: {
    title: {
      type: String,
      default: "Opensaludpass cuida de ti, siempre",
    },
    subtitle: {
      type: String,
      default: "TELEMEDICINA",
    },
    subtitle2: {
      type: String,
      default: "Tipos de consulta disponibles:",
    },
    button_text: {
      type: String,
      default: "Contratar ahora",
    },
    label_text: {
      type: String,
      default: "Saber más",
    },
  },
};
</script>

<style scoped>
section.open-salud-about {
  /*   height: 100vh; */
  background-color: #e4e4e4;
  font-family: "Space Grotesk", sans-serif !important;
}
.open-salud-about p {
  color: black;
  line-height: 1.2;
  font-weight: 400;
  font-size: 1rem;
}
.open-salud-about .main-container-text {
  padding-left: 100px;
  padding-top: 40px;
}
.open-salud-about .container-assistance {
  margin: 0px;
}

.open-salud-about .v-btn {
  color: #3238c4 !important;
  border-color: #3238c4 !important;
  letter-spacing: 0px;
  font-weight: 600;
  font-size: 0.8rem;
  font-family: "Space Grotesk", sans-serif;
  -webkit-box-shadow: 13px 12px 39px -5px #87888a;
  box-shadow: 13px 12px 39px -5px #87888a;
  background-color: #fff;
}

.open-salud-about h3 {
  font-size: 4rem;
  line-height: 4.5rem;
  margin-top: 1rem;
  font-weight: 100;
}

.open-salud-about .col-img {
  background-color: #fbfafa;
  padding: 0;
  margin-left: 0;
}

.open-salud-about .g-image {
  width: 100vw;
}

.v-list.v-sheet.theme--light {
  background-color: transparent;
}
.open-salud-about .v-list-item__title {
  white-space: normal;
}

.open-salud-about .v-list-item.v-list-item--link.theme--light {
  padding: 0;
  width: 25rem;
}
.open-salud-about .floating-container {
  position: relative;
}
.open-salud-about .floating-text {
  color: #3238c4;
  border-right: 1px solid #3238c4;
  padding: 0 0 2rem 0.5rem;
  cursor: pointer;
  font-size: 0.8rem;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  text-align: right;
  margin-top: 0 !important;
  height: 110px;
  position: absolute;
  left: 100%;
}

.open-salud-about .floating-label {
  transform: rotate(-90deg);
  display: inline-flex;
  color: #3238c4;
  font-family: "Space Grotesk", sans-serif !important;
  right: -10%;
  position: absolute;
  margin-top: 4%;
}
.open-salud-about .floating-label-mobile {
  display: none;
}
@media (max-width: 1263px) {
  .open-salud-about .container-assistance {
    display: block !important;
  }
  .open-salud-about .main-container-text,
  .open-salud-about .col-img {
    max-width: 100%;
  }
  .open-salud-about .floating-text,
  .open-salud-about .floating-label {
    display: none;
  }
  .open-salud-about .floating-label-mobile {
    display: block;
  }
  .open-salud-about .button-floating {
    margin-bottom: 1rem;
    color: #3238c4;
    display: flex;
    justify-content: initial;
    align-items: baseline;
  }
}
@media (max-width: 600px) {
  .main-container-text {
    padding: 1rem !important;
  }
  section.open-salud-about h3 {
    width: 100%;
    margin-left: 0;
    margin-top: 2rem !important;
  }
  .open-salud-about.main-container-text {
    padding: 1rem 1rem !important;
  }
  .open-salud-about.v-list-item.v-list-item--link.theme--light {
    width: 100%;
  }
  .open-salud-about.floating-text,
  .open-salud-about.floating-label {
    display: none;
  }
  .open-salud-about.floating-label-mobile {
    display: block;
  }
  .open-salud-about.button-floating {
    margin-bottom: 1rem;
    color: #3238c4;
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
  }

  .open-salud-about.subtitle {
    width: 100%;
    margin-left: 0;
    padding: 0 1rem !important;
  }
  .open-salud-about.section-icons {
    margin-top: 35rem;
  }

  .open-salud-about.v-application .title {
    font-size: 2rem !important;
    line-height: 2rem;
  }

  section.open-salud-about h3 {
    font-size: 2rem !important;
    line-height: 2rem;
  }
}
</style>
