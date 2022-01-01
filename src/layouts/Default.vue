<template>
  <v-app>
    <v-main>
      <v-container fluid>
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
