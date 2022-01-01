<template>
  <v-app>
    <v-main>
      <v-container fluid class="ma-0 pa-0">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "About", icon: "mdi-account-box-outline" },
        { title: "Projects", icon: "mdi-apps" },
        { title: "Education & Experience", icon: "mdi-school-outline" },
        { title: "Contact", icon: "mdi-message-text-outline" },
      ],
      right: null,
    };
  },
};
</script>
