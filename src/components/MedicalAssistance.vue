<template>
  <section id="medical-assistance">
    <v-container>
      <v-row class="row">
        <v-col
          offset-sm="1"
          sm="6"
          class="col-img d-flex flex-row justify-center"
        >
          <g-image
            alt="Example image"
            src="~/img/medical-assistance-image.PNG"
          />
        </v-col>
        <v-col
          offset-sm="1"
          sm="4"
          class="d-flex flex-column justify-center assistance-text"
        >
          <h3 class="title">Asistencia médica</h3>
          <p class="subtitle">
            Incluida sin coste con libre elección de médico de familia y
            pediatra, disponible los 7 días ed la semana.
          </p>
          <p class="subtitle">Tipos de consulta disponibles:</p>

          <v-list class="mt-8">
            <v-list-item-group>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon large>mdi-video-plus-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Videoconsulta</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon large>mdi-cellphone-information</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Atención telefónica</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon large>mdi-file-document-multiple-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Consulta escrita</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon large>mdi-chat-processing-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Chat</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

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
  <<<<<<<HEAD
=======

>>>>>>> issue-5
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
