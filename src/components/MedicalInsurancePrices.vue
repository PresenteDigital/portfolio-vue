<template>
  <section class="pt-8 px-8 open-salud-prices">
    <h3>
      {{ title }}
    </h3>
    <v-flex xs12 sm12 md12>
      <p class="subtitle">
        {{ subtitle }}
      </p>
    </v-flex>
    <v-flex xs12 class="mt-2">
      <p class="main-text">
        {{ content }}
      </p>
    </v-flex>
    <v-container grid-list-md py-16 class="prices-main-container">
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
                        color="0C0C0C"
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
                  <v-list-item-icon class="icon-img">
                    <v-icon large>{{ icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="icon-text">
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
              icon: "mdi-currency-eur",
              text: "Descuentos en servicios médicos",
            },
            {
              icon: "mdi-spa-outline",
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
              icon: "mdi-currency-eur",
              text: "Descuentos en servicios médicos",
            },
            {
              icon: "mdi-spa-outline",
              text: "Servicios de bienestar",
            },
            {
              icon: "mdi-spa-outline",
              text: "Servicios médicos",
            },
            {
              icon: "mdi-emoticon-outline",
              text: "Servicios dentales",
            },
            {
              icon: "mdi-face-man",
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
              icon: "mdi-currency-eur",
              text: "Descuentos en servicios médicos",
            },
            {
              icon: "mdi-spa-outline",
              text: "Servicios de bienestar",
            },
            {
              icon: "mdi-spa-outline",
              text: "Servicios médicos",
            },
            {
              icon: "mdi-emoticon-outline",
              text: "Servicios dentales",
            },
            {
              icon: "mdi-face-man",
              text: "Servicios de pediatría",
            },
            {
              icon: "mdi-emoticon-outline",
              text: "Servicios dermatológicos",
            },
            {
              icon: "mdi-emoticon-outline",
              text: "Servicios de traumatología",
            },

            {
              icon: "mdi-emoticon-outline",
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
<style scoped>
section.open-salud-prices {
  min-height: 100vh;
  background-color: #e4e4e4;
  font-family: "Space Grotesk", sans-serif;
  text-align: center;
}

.open-salud-prices h3 {
  font-size: 4rem;
  line-height: 4.5rem;
  margin-top: 1rem;
  font-weight: 100;
  line-height: 1.2;
  width: 50%;
  margin: auto;
  text-align: initial;
  margin-bottom: 2rem;
}

.open-salud-prices .section-title {
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  font-size: 2rem;
}
.open-salud-prices .section-title h2 {
  width: 70rem;
  text-align: center;
}
.open-salud-prices .subtitle {
  color: #2f35c3;
  font-size: 2rem;
  font-weight: 500;
  width: 50%;
  margin: auto;
  text-align: initial;
  line-height: 1.2;
}
.open-salud-prices .main-text {
  text-align: center;
  font-size: 1.4rem;
  width: 50%;
  margin: auto;
  text-align: initial;
}

.open-salud-prices .prices-main-container {
  max-width: 1400px;
}
.open-salud-prices .card-container {
  box-shadow: none;
  background: transparent;
}
.open-salud-prices .prices-container {
  display: flex;
  justify-content: center;
}

.open-salud-prices .container-main-text {
  width: 20rem;
  background-color: #e4e4e4;
  border-radius: 1rem;
  -webkit-box-shadow: 3px 10px 15px 15px #bebebe;
  box-shadow: 3px 10px 15px 15px #bebebe;
}
.open-salud-prices .time {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
}
.open-salud-prices .main-price {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 3.8rem;
}
.open-salud-prices .modality {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.open-salud-prices .btn-container {
  width: 80%;
  border-top: 1px solid #a2a2a2;
}
.open-salud-prices .text-button {
  margin-top: 1.5rem;
}
.open-salud-prices .conditions {
  padding: 0 1rem;
  text-align: center;
  margin-top: 1rem;
  color: #0c0c0c;
  margin-bottom: 1rem;
}
.open-salud-prices .list-icons-prices {
  background-color: #e4e4e4;
  width: 85%;
  margin-left: 2.5rem;
  text-align: initial;
}
@media (max-width: 1268px) {
  .open-salud-prices .list-icons-prices {
    display: flex;
    justify-content: initial;
  }
  .open-salud-prices h3 {
    width: 100%;
    padding: 0 1rem;
  }
  .open-salud-prices .subtitle {
    width: 100%;
    padding: 0 1rem;
  }
  .open-salud-prices .main-text {
    width: 100%;
    padding: 0 1rem;
  }
  .open-salud-prices .list-icons-prices {
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
  .open-salud-prices .subtitle {
    width: 100%;
    padding: 0.2rem;
  }
  .open-salud-prices .main-text {
    width: 100%;
    padding: 0.2rem;
  }
  .open-salud-prices .list-icons-prices {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-left: 0;
  }
  .open-salud-prices .icon-text div {
    white-space: unset;
  }
}
</style>
