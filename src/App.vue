<template>
  <v-app>
    <navbar-all />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavbarAll from "./components/Layout/NavbarAll.vue";
export default {
  components: { NavbarAll },
  name: "App",
};
</script>
