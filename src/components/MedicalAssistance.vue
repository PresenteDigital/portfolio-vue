<template>
  <section class="open-salud-medical-assistance">
    <v-row class="row container-assistance">
      <v-col sm="6" class="col-img d-flex flex-row justify-center">
        <g-image
          alt="Asistencia médica"
          src="~/assets/images/medical-assistance-image.PNG"
        />
      </v-col>
      <v-col sm="6" class="main-container-text">
        <h3>{{ title }}</h3>
        <p class="mt-8 mb-4">
          {{ subtitle }}
        </p>
        <p class="mt-8 mb-4">{{ subtitle2 }}</p>
        <div>
          <v-list class="mt-md-8">
            <v-list-item-group :aria-label="title">
              <v-list-item
                v-for="({ icon, text }, index) in items"
                :key="index"
                :aria-labelledby="text"
              >
                <v-list-item-icon>
                  <v-icon large v-text="icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    :aria-labelledby="text"
                    v-text="text"
                  ></v-list-item-title>
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
section.open-salud-medical-assistance {
  font-family: "Space Grotesk", sans-serif;
}
.open-salud-medical-assistance h3 {
  font-size: 4rem;
  line-height: 5rem;
  margin-top: 5rem;
  font-weight: 400;
  color: #e1e1e1;
  width: 35%;
}

.open-salud-medical-assistance p {
  color: #828282;
  line-height: 1.2;
  font-size: 1.2rem;
}
.open-salud-medical-assistance .main-container-text {
  padding: 30px 70px;
}
.open-salud-medical-assistance .container-assistance {
  margin: 0px;
  min-height: 100vh;
  background-color: #1d1d1f;
}

.open-salud-medical-assistance .col-img {
  background-color: #fbfafa;
  padding: 0px;
  margin-left: 0;
}
.open-salud-medical-assistance .col-img .g-image {
  width: 50vw;
}

.open-salud-medical-assistance .theme--light.v-icon {
  color: #ffffff;
}

.open-salud-medical-assistance .v-list.v-sheet.theme--light {
  background-color: transparent;
}
.open-salud-medical-assistance .v-list-item__title {
  color: #e1e1e1;
  font-size: 1.3rem;
}

.open-salud-medical-assistance .v-list-item.v-list-item--link.theme--light {
  padding: 0;
}
@media (max-width: 1263px) {
  .open-salud-medical-assistance .container-assistance {
    display: block;
  }
  .open-salud-medical-assistance .main-container-text,
  .open-salud-medical-assistance .col-img {
    max-width: 100%;
  }
  .open-salud-medical-assistance h3 {
    width: 100%;
  }
  .open-salud-medical-assistance .main-container-text {
    min-height: 50px;
  }
  .open-salud-medical-assistance .col-img {
    height: 50vh;
  }
  .open-salud-medical-assistance .col-img .g-image {
    width: 100vw;
  }
}
@media (max-width: 600px) {
  .open-salud-medical-assistance h3 {
    font-size: 2rem;
    line-height: 2rem;
    width: 100%;
    margin-top: 2rem;
  }

  .open-salud-medical-assistance .main-container-text {
    padding: 20px 40px;
  }

  .open-salud-medical-assistance .main-container-text,
  .open-salud-medical-assistance .col-img {
    min-height: 50vh;
  }
}
</style>
