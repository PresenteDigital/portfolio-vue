<template>
  <section id="about">
    <v-container>
      <v-row>
        <v-col offset-sm="1" sm="4" class="d-flex flex-column justify-center">
          <p>TELEMEDICINA</p>
          <h3>Opensaludpass cuida de ti, siempre</h3>
          <v-list class="mt-8">
            <v-list-item-group>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon large>mdi-check-circle-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    >Asistencia medica online ilimitada, con libre elección de
                    médido de familia y pediatra</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon large>mdi-check-circle-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    >Además, consultas presenciales, pruebas, intervenciones y
                    tratamientos a precio bonificado</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <div class="text-center">
            <v-btn class="ma-2" outlined rounded color="indigo">
              Contratar ahora
            </v-btn>
          </div>
          <div class="learn-more"><span>Saber más</span></div>
        </v-col>
        <v-col offset-sm="1" sm="6" class="d-flex flex-row justify-center">
          <g-image alt="Example image" src="~/img/social-benefits.jpg" />
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

section h3 {
  line-height: 1.2;
  font-size: 3rem;
  font-weight: 400;
}
.g-image {
  /* border-radius: 100%; */
  width: 100%;
}

.learn-more {
  position: absolute;
  bottom: 0;
  color: #3238c4;
  border-right: 1px solid #3238c4;
  padding: 0 0 2rem 0.5rem;
  cursor: pointer;
  font-size: 0.8rem;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
.v-list.v-sheet.theme--light {
  background-color: transparent;
}
.v-list-item__title {
  white-space: normal;
}

.learn-more span {
  -webkit-writing-mode: tb-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: tb-rl;
  -webkit-transform: rotate(-180deg);
  transform: rotate(-180deg);
  text-align: right;
}
.v-list-item.v-list-item--link.theme--light {
  padding: 0;
}
</style>
