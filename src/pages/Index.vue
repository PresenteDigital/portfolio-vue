<template>
  <Layout>
    <section>
      <v-container>
        <v-row>
          <v-col sm="6">
            <g-image alt="Example image" src="~/profile.png" width="400" />
          </v-col>
          <v-col>
            <h1>Hi, I'm Alex</h1>
            <p>I'm a software developer...</p>
          </v-col sm="6">
        </v-row>
      </v-container>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
