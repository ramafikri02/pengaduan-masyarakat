<template>
  <div id="app">
    <div v-if="isLoggedIn == true">
      <Sidebar />
      <Topbar />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";
export default {
  name: "App",
  components: {
    Sidebar,
    Topbar,
  },

  computed: {
    ...mapGetters({
      isLoggedIn: "isLoggedIn",
    }),
  },
};
</script>

<style>
@import "assets/css/theme/theme.css";
@import "assets/sass/style.css";
</style>
