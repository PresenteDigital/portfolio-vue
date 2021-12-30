<template>
  <Layout>
    <Icons />
    <MedicalAssistance />
    <MedicalInsurancePrices />
    <Footer />
  </Layout>
</template>

<script>
import Icons from "@/components/Icons.vue";
import MedicalAssistance from "@/components/MedicalAssistance.vue";
import MedicalInsurancePrices from "@/components/MedicalInsurancePrices.vue";
import Footer from "@/components/Footer.vue";

export default {
  metaInfo: {
    title: "Hello, world!",
  },
  components: {
    Icons,
    MedicalAssistance,
    MedicalInsurancePrices,
    Footer,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
