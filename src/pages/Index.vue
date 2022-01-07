<template>
  <Layout>
    <Menu />
    <AboutUs />
    <Icons />
    <MedicalAssistance />
    <MedicalInsurancePrices />
    <Footer />
  </Layout>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Icons from "@/components/Icons.vue";
import AboutUs from "@/components/AboutUs.vue";
import MedicalAssistance from "@/components/MedicalAssistance.vue";
import MedicalInsurancePrices from "@/components/MedicalInsurancePrices.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Menu,
    Icons,
    AboutUs,
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
