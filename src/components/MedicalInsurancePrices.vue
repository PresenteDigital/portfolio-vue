<template>
  <section class="pt-8 px-2 open-salud-prices">
    <h3>
      {{ title }}
    </h3>
    <v-flex xs12 sm12 md12>
      <p class="subtitle">
        {{ subtitle }}
      </p>
    </v-flex>
    <v-flex xs12 sm12 md12>
      <p class="main-text">
        {{ content }}
      </p>
    </v-flex>
    <v-container grid-list-md py-16 class="prices-main-container">
      <!--       <v-layout row wrap>
        <v-flex xs12 sm4> -->
      <v-row sm="4" xs="12" md="12">
        <v-col
          v-for="({
            title,
            price,
            subtitle,
            buttonText,
            comment1,
            comment2,
            services,
          },
          index) in items"
          :key="index"
        >
          <v-card class="card-container">
            <div class="prices-container">
              <div class="container-main-text">
                <p class="time">{{ title }}</p>
                <h2 class="main-price">{{ price }}</h2>
                <p class="modality">{{ subtitle }}</p>
                <div class="prices-button">
                  <div class="d-flex justify-center">
                    <div class="btn-container d-flex justify-center">
                      <v-btn
                        rounded
                        outlined
                        color="#898989"
                        class="px-10 py-7 text-button"
                        >{{ buttonText }}</v-btn
                      >
                    </div>
                  </div>
                </div>
                <p class="conditions">
                  {{ comment1 }}
                </p>
                <p class="conditions">
                  {{ comment2 }}
                </p>
              </div>
            </div>
          </v-card>
          <div class="items-list">
            <v-list class="mt-8 list-icons-prices">
              <v-list-item-group>
                <v-list-item
                  v-for="({ icon, text }, index) in services"
                  :key="index"
                >
                  <v-list-item-icon>
                    <v-icon large>{{ icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ text }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Mensual",
          price: "€ 2,95",
          subtitle: `por familia`,
          buttonText: "Contratar",
          comment1: "Familia: Cónyuge/pareja e hijos menores de edad.",
          comment2: "Compromiso de permanencia  mínimo de 3 meses.",
          services: [
            {
              icon: "mdi-video-plus-outline",
              text: "Descuentos en servicios médicos",
            },
            {
              icon: "mdi-cellphone-information",
              text: "Servicios de bienestar",
            },
          ],
        },
        {
          title: "Mensual",
          price: "€ 9,95",
          subtitle: `por familia`,
          buttonText: "Contratar",
          comment1: "Familia: Cónyuge/pareja e hijos menores de edad.",
          comment2: "Compromiso de permanencia  mínimo de 3 meses.",
          services: [
            {
              icon: "mdi-video-plus-outline",
              text: "Descuentos en servicios médicos",
            },
            {
              icon: "mdi-cellphone-information",
              text: "Servicios de bienestar",
            },
            {
              icon: "mdi-file-document-multiple-outline",
              text: "Servicios médicos",
            },
            {
              icon: "mdi-file-document-multiple-outline",
              text: "Servicios dentales",
            },
            {
              icon: "mdi-chat-processing-outline",
              text: "Servicios de pediatría",
            },
          ],
        },
        {
          title: "Mensual",
          price: "€ 14,95",
          subtitle: `por familia`,
          buttonText: "Contratar",
          comment1: "Familia: Cónyuge/pareja e hijos menores de edad.",
          comment2: "Compromiso de permanencia  mínimo de 3 meses.",
          services: [
            {
              icon: "mio-euro_symbol",
              text: "EUroooo",
            },
            {
              icon: "mdi-cellphone-information",
              text: "Servicios de bienestar",
            },
            {
              icon: "mdi-file-document-multiple-outline",
              text: "Servicios médicos",
            },
            {
              icon: "mdi-file-document-multiple-outline",
              text: "Servicios dentales",
            },
            {
              icon: "mdi-chat-processing-outline",
              text: "Servicios de pediatría",
            },
            {
              icon: "mdi-chat-processing-outline",
              text: "Servicios dermatológicos",
            },
            {
              icon: "mdi-chat-processing-outline",
              text: "Servicios de traumatología",
            },

            {
              icon: "mdi-chat-processing-outline",
              text: "Servicios de endocrinología",
            },
          ],
        },
      ],
    };
  },
  props: {
    title: {
      type: String,
      default: "Consultas online incluidas",
    },
    subtitle: {
      type: String,
      default:
        "Sin coste adicional los mejores especialistas los 7 días de la semana.",
    },
    content: {
      type: String,
      default: `Los mejores servicios clínicos (consultas presenciales, pruebas
        diagósticas, tratamientos, intervenciones..) de más de 25.000
        profesionales y centros, con un precio muy reducido.`,
    },
  },
};
</script>
<style scope>
section {
  background-color: #e4e4e4 !important;
}
section.open-salud-prices {
  min-height: 100vh;
  background-color: #fbfafa;
  font-family: "Space Grotesk", sans-serif;
  text-align: center;
}

.open-salud-prices h3 {
  line-height: 1.2;
  font-size: 3.5rem;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 400;
  color: rgb(29, 29, 30);
  letter-spacing: 0.2px;
  width: 50%;
  margin: auto;
  text-align: initial;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.open-salud-prices p-subtitle {
  color: #2f35c3;
  font-size: 2rem;
  font-weight: 500;
  margin-top: 1rem;
}
.section-title {
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  font-size: 2rem;
}
.section-title h2 {
  width: 70rem;
  text-align: center;
}
.subtitle {
  color: #2f35c3;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin-top: 2rem;
  width: 50%;
  margin: auto;
  text-align: initial;
}
.main-text {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 2rem;
  width: 50%;
  margin: auto;
  text-align: initial;
}

.prices-main-container {
  max-width: 1400px;
}
.card-container {
  box-shadow: none !important;
  background: transparent !important;
}
.prices-container {
  display: flex;
  justify-content: center;
}

.container-main-text {
  width: 20rem;
  background-color: #e4e4e4;
  border-radius: 1rem;
  -webkit-box-shadow: 3px 10px 15px 15px #bebebe;
  box-shadow: 3px 10px 15px 15px #bebebe;
}
.time {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
}
.main-price {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 3.8rem;
}
.modality {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.btn-container {
  width: 80%;
  border-top: 1px solid #a2a2a2;
}
.text-button {
  margin-top: 1.5rem;
}
.conditions {
  padding: 0 1rem;
  text-align: center;
  margin-top: 1rem;
  color: #a2a2a2;
  margin-bottom: 1rem;
}
.list-icons-prices {
  background-color: #e4e4e4 !important;
  width: 85%;
  margin-left: 2.5rem;
  text-align: initial;
}
@media (max-width: 1268px) {
  .list-icons-prices {
    display: flex;
    justify-content: initial;
  }
  .open-salud-prices h3 {
    width: 100%;
    padding: 0 1rem;
  }
  .subtitle {
    width: 100%;
    padding: 0 1rem;
  }
  .main-text {
    width: 100% !important;
    padding: 0 1rem;
  }
  .list-icons-prices {
    display: flex;
    justify-content: center;
  }
}
@media (max-width: 600px) {
  .open-salud-prices h3 {
    font-size: 2.5rem;
    margin-top: 0;
  }

  .open-salud-prices h3 {
    width: 100%;
    padding: 0.2rem;
  }
  .subtitle {
    width: 100%;
    padding: 0.2rem;
  }
  .main-text {
    width: 100% !important;
    padding: 0.2rem;
  }
  .list-icons-prices {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-left: 0;
  }
}
</style>
