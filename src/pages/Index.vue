<template>
  <Layout>
<<<<<<< HEAD
    <Menu />
    <About />
    <Icons />
    <MedicalAssistance />
    <!--     <Projects />
    <Education />
    <Contact /> -->
=======
    <Icons />
    <MedicalAssistance />
>>>>>>> issue-5
  </Layout>
</template>

<script>
import Icons from "@/components/Icons.vue";
<<<<<<< HEAD
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Education from "@/components/Education.vue";
import Contact from "@/components/Contact.vue";
=======
>>>>>>> issue-5
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
