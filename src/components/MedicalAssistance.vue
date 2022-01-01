<template>
  <section id="medical-assistance" class="open-salud-icons">
    <v-row class="row">
      <v-col sm="6" class="col-img d-flex flex-row justify-center">
        <g-image alt="Example image" src="~/img/medical-assistance-image.PNG" />
      </v-col>
      <v-col sm="6" class="d-flex flex-column justify-center assistance-text">
        <h3 class="title">Asistencia médica</h3>
        <p class="subtitle">
          Incluida sin coste con libre elección de médico de familia y pediatra,
          disponible los 7 días ed la semana.
        </p>
        <p class="subtitle">Tipos de consulta disponibles:</p>
        <v-col offset="3" sm="6">
          <v-list class="mt-8">
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
          text: `Videoconsulta`,
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
          icon: "mdi-file-document-multiple-outline",
          text: `Chat`,
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  background-color: #fbfafa;
  position: relative;
  height: 100vh;
}
.row {
  background-color: #1d1d1f;
}
.col-img {
  background-color: #fbfafa;
  padding: 1px;
  margin-left: 0;
}
.assistance-text {
  margin-left: 0;
}
.v-application .title {
  font-size: 4.5rem !important;
  line-height: 6rem;
}
section h3 {
  color: #e1e1e1 !important;
  font-weight: 400;
  font-size: 5rem !important;
  width: 100%;
}
section p {
  color: #828282 !important;
  line-height: 1.2;
  font-weight: 400;
  font-size: 1.5rem !important;
  width: 100%;

  margin-top: 5rem;
}
.subtitle {
  margin-top: 2rem;
}
.g-image {
  /* border-radius: 100%; */
  width: 100vw;
}
.theme--light.v-icon {
  color: #ffffff;
}

.v-list.v-sheet.theme--light {
  background-color: transparent;
}
.v-list-item__title {
  color: #e1e1e1 !important;
  white-space: normal;
}

.v-list-item.v-list-item--link.theme--light {
  padding: 0;
}
</style>
