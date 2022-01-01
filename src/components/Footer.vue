<template>
  <div id="app">
    <v-app id="inspire">
      <v-footer height="auto">
        <v-card flat tile class="flex">
          <v-card-text class=" white--text pt-12 pb-4 background-container">
            <v-layout>
              <v-flex v-for="(col, i) in rows" :key="i" xs12 sm3>
                <span class="title" v-text="col.title.toUpperCase()"></span>
                <hr width="90%" />
                <div
                  v-for="(child, i) in col.children"
                  :key="i"
                  v-text="child"
                  class="footer-list-items"
                ></div>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>
<script>
export default {
  data: () => ({
    rows: [
      {
        title: "",
        children: [
          "CONDICIONES PARA PROFESIONALES",
          "CONDICIONES PARA PACIENTES",
          "TELEMEDICINA PARA EMPRESAS",
          "CONTACTO",
        ],
      },
      {
        title: "",
        children: ["AVISO LEGAL Y COOKIES", "PREGUNTAS FRECUENTES"],
      },
    ],
  }),
};
</script>
<style>
.footer-list-items {
  margin-top: 1rem;
}
.background-container {
  background-color: #1d1d1f !important;
}
</style>
