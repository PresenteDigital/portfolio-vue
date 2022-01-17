<template>
  <section class="open-salud-about">
    <v-row class="row container-assistance">
      <v-col sm="6" class="main-container-text px-lg-16">
        <v-row>
          <v-col>
            <p>{{ subtitle }}</p>
            <h3>{{ title }}</h3>
            <v-list class="mt-8 icons-listed">
              <v-list-item-group :aria-label="title">
                <v-list-item
                  :aria-label="text"
                  v-for="({ icon, text }, index) in items"
                  :key="index"
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
          </v-col>
        </v-row>
        <v-row class="mt-4 button-floating">
          <v-col sm="6">
            <v-btn class="px-10 py-5 ml-4" rounded outlined>
              {{ button_text }}
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div>
              <div class="floating-line"></div>
              <div class="floating-label">{{ label_text }}</div>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col sm="6" class="col-img d-flex flex-row justify-center col-image">
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
  background-color: #e4e4e4;
  font-family: "Space Grotesk", sans-serif;
}

.open-salud-about p {
  color: black;
  line-height: 1.2;
  font-weight: 400;
  font-size: 1rem;
}

.open-salud-about h3 {
  font-size: 4rem;
  line-height: 4.5rem;
  margin-top: 1rem;
  font-weight: 100;
}
.open-salud-about .main-container-text {
  padding-left: 100px;
  position: relative;
}
.open-salud-about .container-assistance {
  margin: 0px;
  min-height: 100vh;
}

.open-salud-about .v-btn {
  color: #3238c4;
  border-color: #3238c4;
  font-size: 0.8rem;
  box-shadow: 13px 12px 39px -5px #87888a;
  background-color: #fff;
}

.open-salud-about .col-img {
  background-color: #fbfafa;
  padding: 0;
  margin-left: 0;
}

.open-salud-about .g-image {
  width: 50vw;
}

.open-salud-about .v-list.v-sheet.theme--light {
  background-color: transparent;
}
.open-salud-about .v-list-item__title {
  white-space: normal;
}

.open-salud-about .v-list-item.v-list-item--link.theme--light {
  padding: 0;
  width: 25rem;
}
.open-salud-about .floating-line {
  border-right: 1px solid #3238c4;
  cursor: pointer;
  height: 7rem;
  position: absolute;
  right: 3.5rem;
  bottom: 0;
}

.open-salud-about .floating-label {
  transform: rotate(-90deg);
  color: #3238c4;
  right: 0;
  position: absolute;
  font-size: 0.8rem;
  bottom: 4rem;
}

@media (max-width: 1263px) {
  .open-salud-about .container-assistance {
    display: block;
  }
  .open-salud-about .main-container-text,
  .open-salud-about .col-img {
    max-width: 100%;
  }

  .open-salud-about .button-floating {
    margin-bottom: 1rem;
    color: #3238c4;
    display: flex;
    justify-content: initial;
    align-items: baseline;
  }
  .open-salud-about .g-image {
    width: 100vw;
  }
}
@media (max-width: 600px) {
  .open-salud-about .main-container-text {
    padding: 1rem;
  }
  section.open-salud-about h3 {
    width: 100%;
    margin-left: 0;
    margin-top: 2rem;
    font-size: 2rem;
    line-height: 2rem;
  }
  .open-salud-about .v-list-item.v-list-item--link.theme--light {
    width: 80%;
  }
  .open-salud-about.section-icons {
    margin-top: 35rem;
  }
}
</style>
