<template>
  <div class="navbarall">
    <v-app-bar
      fixed
      height="56"
      color="#3F4E4F"
      dark
      elevate-on-scroll
    >
      <img
        class="me-2 mb-1"
        alt="Awny Aboughaly Portfolio"
        src="/logo.png"
        width="58"
        height="54"
      />
      <v-toolbar-title class="hidden-sm-and-up" v-if="!drawer">Awny Aboughaly</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="navItem in navItems" :key="navItem.id" :href="navItem.path"
        class="hidden-xs-only"
        text plain rounded dark active-class="active" exact-active-class="active"
      >
        {{ navItem.title }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      temporary
    >
      <v-list>
        <v-toolbar-title v-if="drawer"
          class="sidebartitle text-center font-weight-bold"
        >
          <span class="d-inline-block pb-1">Awny Aboughaly</span>
        </v-toolbar-title>
        <v-list-item
          v-for="navItem in navItems"
          :key="navItem.id"
          :class="`${+navItem.id === 1 ? 'mt-8':''}`"
          :href="navItem.path">
          <v-list-item-title class="font-weight-bold text-center">{{ navItem.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data(){
    return {
      drawer: false,
      navItems: [
        { id: "1", title: "Home", path: "#landing" },
        { id: "2", title: "Resume", path: "#resume" },
        { id: "3", title: "Portfolio", path: "#portfolio" },
        { id: "4", title: "Contact", path: "#contact" },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.navbarall {
  .sidebartitle span {
    border-bottom: 2px solid #E0A96D;
  }
}
</style>