<template>
  <section class="project-section">
    <v-container>
      <v-row>
        <v-col>
          <h1>Projects</h1>
        </v-col>
      </v-row>
      <v-row class="justify-space-around mb-8 mt-4">
        <v-card
          v-for="project in projects"
          :key="project.name"
          class=""
          max-width="400"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title> {{ project.name }}</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            {{ truncate(project.description) }}
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text>
              Share
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "Deck cards",
          github: "https://github.com/Vegabytes/deck_cards",
          description:
            "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. ",
          image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
        {
          name: "Vending Machine",
          github: "https://github.com/Vegabytes/vending_machine",
          description:
            "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. ",
          image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
        {
          name: "Login Passport",
          github: "https://github.com/Vegabytes/vending_machine",
          description:
            "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. ",
          image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
      ],
    };
  },
  methods: {
    truncate(str) {
      if (str.length > 60) {
        return str.slice(0, 59) + "...";
      }
      return str;
    },
  },
};
</script>

<style scoper>
.project-section {
  background-color: #fab742;
}
.v-image__image {
  /*filter: grayscale(100%);*/
  opacity: 0.5;
}
</style>
