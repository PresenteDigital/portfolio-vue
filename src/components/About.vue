<template>
  <section class="open-salud-about pt-8">
    <v-container>
      <v-row>
        <v-col sm="5">
          <h5 class=" mb-8">{{ subtitle }}</h5>
          <h1>{{ title }}</h1>
          <v-list class="mt-8">
            <v-list-item-group>
              <v-list-item v-for="{ icon, text } in items" :key="text">
                <v-list-item-icon>
                  <v-icon large dense>{{ icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-row class="mt-4">
            <v-btn class="ma-2" outlined rounded>
              Contratar ahora
            </v-btn>
          </v-row>
          <div class="floating-text mt-8">
            <div>Saber más</div>
          </div>
        </v-col>
        <v-col offset="1" sm="6">
          <g-image
            alt="Example image"
            src="~/img/social-benefits.jpg"
            fit="fill"
          />
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
      default: "Telemedicina",
    },
  },
};
</script>

<style scoped>
section.open-salud-about {
  background-color: #fbfafa;
  position: relative;
  height: 100vh;
}

.open-salud-about h1 {
  line-height: 1.2;
  font-size: 3.5rem;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 400;
  color: rgb(29, 29, 30);
  letter-spacing: 0.2px;
}

.open-salud-about h5 {
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.1rem;
}

.open-salud-about div.v-list-item__title {
  font-family: "Space Grotesk", sans-serif;
  white-space: normal;
}

.open-salud-about .v-list.v-sheet.theme--light {
  background-color: transparent;
}

.open-salud-about .g-image {
  height: 80vh;
  width: 100%;
}

.open-salud-about .v-btn {
  color: #3238c4 !important;
  border-color: #3238c4 !important;
  letter-spacing: 0px;
  font-weight: 600;
  font-size: 0.8rem;
  font-family: "Space Grotesk", sans-serif;
}

.open-salud-about .floating-text {
  /*   position: absolute;
  bottom: 0; */
  color: #3238c4;
  border-right: 1px solid #3238c4;
  padding: 0 0 2rem 0.5rem;
  cursor: pointer;
  font-size: 0.8rem;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  text-align: right;
}

.open-salud-about .floating-text div {
  transform: rotate(-90deg);
  /* position: relative; */
  display: inline-flex;
}
</style>
