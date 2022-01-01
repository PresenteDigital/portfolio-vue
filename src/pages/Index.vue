<template>
  <Layout>
    <Menu />
    <About />
    <Icons />
    <MedicalAssistance />
    <MedicalInsurancePrices />
    <Footer />
  </Layout>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Icons from "@/components/Icons.vue";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Education from "@/components/Education.vue";
import Contact from "@/components/Contact.vue";
import MedicalAssistance from "@/components/MedicalAssistance.vue";
import MedicalInsurancePrices from "@/components/MedicalInsurancePrices.vue";
import Footer from "@/components/Footer.vue";

export default {
  metaInfo: {
    title: "Hello, world!",
  },
  components: {
    Menu,
    Icons,
    About,
    Projects,
    Education,
    Contact,
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
