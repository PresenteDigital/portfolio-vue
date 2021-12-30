<template>
  <Layout>
    <Icons />
    <MedicalAssistance />
  </Layout>
</template>

<script>
import Icons from "@/components/Icons.vue";
import MedicalAssistance from "@/components/MedicalAssistance.vue";

export default {
  metaInfo: {
    title: "Hello, world!",
  },
  components: {
    Icons,
    MedicalAssistance,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
