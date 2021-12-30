<template>
  <Layout>
    <Icons />
    <MedicalAssistance />
    <MedicalInsurancePrices />
  </Layout>
</template>

<script>
import Icons from "@/components/Icons.vue";
import MedicalAssistance from "@/components/MedicalAssistance.vue";
import MedicalInsurancePrices from "@/components/MedicalInsurancePrices.vue";

export default {
  metaInfo: {
    title: "Hello, world!",
  },
  components: {
    Icons,
    MedicalAssistance,
    MedicalInsurancePrices,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
