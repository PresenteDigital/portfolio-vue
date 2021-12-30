<template>
  <section class="section-icons">
    <div class="section-title">
      <h2>
        Consulta online a los mejores profesionales de medicina general y
        pediatría
      </h2>
    </div>
    <v-container grid-list-md py-16 class="icons-main-container">
      <v-layout row wrap>
        <v-flex xs12 sm4>
          <v-card class="card-container">
            <div class="icons-container">
              <div class="container-image">
                <g-image class="g-image-icons" src="../img/star.svg" />
              </div>
            </div>
            <v-card-title class="mt-6 d-flex justify-center"
              ><h2 class="title">Los mejores</h2></v-card-title
            >

            <v-card-text class="mt-6 d-flex justify-center"
              >Los mejores médicos online</v-card-text
            >
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-card class="card-container">
            <div class="icons-container">
              <div class="container-image" sm6>
                <g-image class="g-image-icons" src="../img/price.svg" />
              </div>
            </div>
            <v-card-title class="mt-6 d-flex justify-center"
              ><h2 class="title">Precio a tu medida</h2></v-card-title
            >
            <v-card-text class="mt-6 d-flex justify-center"
              >Precio a tu medida</v-card-text
            >
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-card class="card-container">
            <div class="icons-container">
              <div class="container-image">
                <g-image class="g-image-icons" src="../img/lock.svg" />
              </div>
            </div>
            <v-card-title class="mt-6 d-flex justify-center"
              ><h2 class="title">Cuadro médico</h2></v-card-title
            >
            <v-card-text class="mt-6 d-flex justify-center"
              >El mejor cuadro médico</v-card-text
            >
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scooper>
.section-icons {
  background-color: #e4e4e4;
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
.icons-main-container {
  max-width: 1400px;
}
.card-container {
  box-shadow: none !important;
  background: transparent !important;
}
.icons-container {
  display: flex;
  justify-content: center;
}

.container-image {
  display: flex;
  justify-content: center;
  width: 15rem;
  height: 20rem;
  background-color: #e4e4e4;
  border-radius: 1rem;
  -webkit-box-shadow: 3px 10px 15px 15px #bebebe;
  box-shadow: 3px 10px 15px 15px #bebebe;
}
.g-image-icons {
  -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(12px 9px 4px rgba(0, 0, 0, 0.1));
  /* Similar syntax to box-shadow */
}
.title {
  color: #3238c4 !important;
}
</style>
