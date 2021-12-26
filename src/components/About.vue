<template>
  <section id="about">
    <v-container>
      <v-row>
        <v-col sm="6" class="d-flex flex-row justify-center">
          <g-image alt="Example image" src="~/profile.png" width="380" />
        </v-col>
        <v-col sm="6" class="d-flex flex-column justify-center">
          <h1>Hi, I'm Alex</h1>
          <p>
            I'm a software developer who works a sa consultant with Python and
            JavaScript, and sometimes Etherium blockchain
          </p>
          <p>Github <a href="https://github.com/Vegabytes">Alex</a></p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.g-image {
  border-radius: 100%;
}
</style>
