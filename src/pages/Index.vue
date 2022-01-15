<template>
  <Layout>
    <Header />
    <About />
    <Professionals />
    <MedicalAssistance />
    <MedicalInsurancePrices />
    <Footer />
  </Layout>
</template>

<script>
import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
import Professionals from "@/components/Professionals.vue";

import MedicalAssistance from "@/components/MedicalAssistance.vue";
import MedicalInsurancePrices from "@/components/MedicalInsurancePrices.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    About,
    Professionals,
    MedicalAssistance,
    MedicalInsurancePrices,
    Footer,
  },
};
</script>
