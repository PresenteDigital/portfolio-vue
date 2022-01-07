<template>
  <section id="medical-assistance" class="open-salud-medical-assistance">
    <v-row class="row container-assistance">
      <v-col sm="6" class="px-16 main-container-text">
        <p class="mt-8">
          {{ subtitle }}
        </p>
        <h3 class="title">{{ title }}</h3>

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
          <v-btn class="ma-2" outlined rounded>
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
          text: `Asistencia medica online ilimitada, con libre elección de médido de familia y pediatra`,
        },
        {
          icon: "mdi-check-circle-outline",
          text: `Además, consultas presenciales, pruebas, intervenciones y tratamientos a precio bonificado`,
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
section {
  background-color: #fbfafa;
  font-family: "Space Grotesk", sans-serif !important;
}
.main-container-text {
  padding-left: 100px !important;
  padding-top: 40px;
}
.container-assistance {
  margin: 0px;
}
.row {
  background-color: #e4e4e4;
}
.col-img {
  background-color: #fbfafa;
  padding: 0px;
  margin-left: 0;
}
.v-btn {
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

.v-application .title {
  font-size: 4rem !important;
  line-height: 5rem;
  margin-top: 1rem;
  font-family: "Space Grotesk", sans-serif !important;
  font-weight: 100;
  color: black !important;
  font-weight: 200;
  width: 85%;
  text-align: initial;
}

section p {
  color: black !important;
  line-height: 1.2;
  font-weight: 400;
  font-size: 1.5rem !important;
}

.g-image {
  width: 100vw;
}

.theme--light.v-icon {
  color: black;
}

.v-list.v-sheet.theme--light {
  background-color: transparent;
}
.v-list-item__title {
  color: black !important;
  white-space: normal;
  text-align: initial;
}

.v-list-item.v-list-item--link.theme--light {
  padding: 0;
  width: 25rem;
}
.floating-container {
  position: relative;
}
.floating-text {
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

.floating-label {
  transform: rotate(-90deg);
  display: inline-flex;
  color: #3238c4;
  font-family: "Space Grotesk", sans-serif !important;
  right: -10%;
  position: absolute;
  margin-top: 4%;
}
.floating-label-mobile {
  display: none;
}
@media (max-width: 600px) {
  section h3 {
    width: 100%;
    margin-left: 0;
    margin-top: 2rem !important;
  }
  .main-container-text {
    padding: 1rem 1rem !important;
  }
  .v-list-item.v-list-item--link.theme--light {
    width: 100%;
  }
  .floating-text,
  .floating-label {
    display: none;
  }
  .floating-label-mobile {
    display: block;
  }
  .button-floating {
    margin-bottom: 1rem;
    color: #3238c4;
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
  }

  .subtitle {
    width: 100%;
    margin-left: 0;
    padding: 0 1rem !important;
  }
  .section-icons {
    margin-top: 35rem;
  }

  .v-application .title {
    font-size: 2rem !important;
    line-height: 2rem;
  }
}
</style>
