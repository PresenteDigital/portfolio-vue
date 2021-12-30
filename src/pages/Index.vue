<template>
  <Layout>
    <Menu />
    <Icons />
    <MedicalAssistance />
    <About />
    <Projects />
    <Education />
    <Contact />
  </Layout>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Icons from "@/components/Icons.vue";
import MedicalAssistance from "@/components/MedicalAssistance.vue";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Education from "@/components/Education.vue";
import Contact from "@/components/Contact.vue";

export default {
  metaInfo: {
    title: "Hello, world!",
  },
  components: {
    Menu,
    Icons,
    MedicalAssistance,
    About,
    Projects,
    Education,
    Contact,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
