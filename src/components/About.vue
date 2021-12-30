<template>
  <section id="about">
    <v-container>
      <v-row>
        <v-col sm="6" class="d-flex flex-column justify-center">
          <h3>Opensaludpass cuida de ti, siempre</h3>
          <p>
            I'm a software developer who works a sa consultant with Python and
            JavaScript, and sometimes Etherium blockchain
          </p>
        </v-col>
        <v-col sm="6" class="d-flex flex-row justify-center">
          <g-image
            alt="Example image"
            src="~/img/social-benefits.jpg"
            width="380"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
section {
  background-color: #fbfafa;
}

section h3 {
  line-height: 1.2;
  font-size: 3rem;
  font-weight: 400;
}
.g-image {
  /* border-radius: 100%; */
}
</style>
