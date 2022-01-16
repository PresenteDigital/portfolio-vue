<template>
  <section id="medical-assistance" class="open-salud-medical-assistance">
    <v-row class="row container-assistance">
      <v-col sm="6" class="col-img d-flex flex-row justify-center">
        <g-image
          alt="Asistencia médica"
          src="~/assets/images/medical-assistance-image.PNG"
        />
      </v-col>
      <v-col sm="6" class="main-container-text">
        <h3 class="title">{{ title }}</h3>
        <p class="mt-8">
          {{ subtitle }}
        </p>
        <p class="mt-8">{{ subtitle2 }}</p>
        <div class="icons-description">
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
        </div>
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
          icon: "mdi-video-plus-outline",
          text: "Videoconsulta",
        },
        {
          icon: "mdi-cellphone-information",
          text: `Atención telefónica`,
        },
        {
          icon: "mdi-file-document-multiple-outline",
          text: `Consulta escrita`,
        },
        {
          icon: "mdi-comment-processing-outline",
          text: `Chat`,
        },
      ],
    };
  },
  props: {
    title: {
      type: String,
      default: "Asistencia médica",
    },
    subtitle: {
      type: String,
      default:
        "Incluida sin coste con libre elección de médico de familia y pediatra, disponible los 7 días de la semana.",
    },
    subtitle2: {
      type: String,
      default: "Tipos de consulta disponibles:",
    },
  },
};
</script>

<style scoped>
section {
  background-color: #fbfafa;
  font-family: "Space Grotesk", sans-serif;
}

.main-container-text {
  padding: 30px 70px;
}
.container-assistance {
  margin: 0px;
  min-height: 100vh;
}
.row {
  background-color: #1d1d1f;
}
.col-img {
  background-color: #fbfafa;
  padding: 0px;
  margin-left: 0;
}

.v-application .title {
  font-size: 4rem !important;
  line-height: 5rem;
  margin-top: 5rem;
  font-weight: 400 !important;
  font-family: "Space Grotesk", sans-serif !important;
}
section h3 {
  color: #e1e1e1 !important;
  font-size: 5rem !important;
  width: 35%;
  text-align: initial;
}
section p {
  color: #828282 !important;
  line-height: 1.2;
  font-weight: 400;
  font-size: 1.2rem !important;
}

.g-image {
  width: 100vw;
}

.theme--light.v-icon {
  color: #ffffff;
}

.v-list.v-sheet.theme--light {
  background-color: transparent;
}
.v-list-item__title {
  color: #e1e1e1;
  font-size: 1.4rem;
}

.v-list-item.v-list-item--link.theme--light {
  padding: 0;
}
@media (max-width: 1263px) {
  .container-assistance {
    display: block !important;
  }
  .main-container-text,
  .col-img {
    max-width: 100%;
  }
  section h3 {
    width: 100%;
  }
  .open-salud-medical-assistance .main-container-text {
    min-height: 50px;
  }
  .col-img {
    height: 50vh;
  }
}
@media (max-width: 600px) {
  section h3 {
    width: 100%;
    margin-left: 0;
    margin-top: 2rem !important;
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
  .icons-listed {
    margin-top: 0px !important;
  }

  .main-container-text {
    padding: 20px 40px;
  }

  .open-salud-medical-assistance .main-container-text,
  .col-img {
    min-height: 50vh;
  }
}
</style>
