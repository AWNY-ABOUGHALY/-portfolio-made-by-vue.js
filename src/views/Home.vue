<template>
  <main>
    <Landing style="max-width: 1400px" class="mx-auto"/>
    <Resume style="max-width: 1400px" class="mx-auto"/>
    <Portfolio style="max-width: 1400px" class="mx-auto"/>
    <Contact style="max-width: 1400px" class="mx-auto"/>
    <FooterAll/>
  </main>
</template>

<script>
import Landing from '../components/Landing.vue';
import Resume from '../components/Resume.vue';
import Portfolio from '../components/Portfolio.vue';
import Contact from '../components/Contact.vue';
import FooterAll from '../components/Footer.vue';
export default {
  name: "Home",
  components: {
    Landing,
    Resume,
    Portfolio,
    Contact,
    FooterAll
  },
};
</script>
<style lang="scss" scoped>
main {
  background-color: #f6f6f6;
}
</style>
