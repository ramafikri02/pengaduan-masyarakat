<template>
  <aside class="menu-sidebar d-none d-lg-block">
    <div class="logo">
      <a href="#">
        <img :src="getLogo()" alt="Wangsaff" />
      </a>
    </div>
    <div class="menu-sidebar__content js-scrollbar1">
      <nav class="navbar-sidebar">
        <ul class="list-unstyled navbar__list">
          <li>
            <router-link
              :to="{
                name: 'Home',
              }"
            >
              <i class="fab fa-phoenix-framework"></i>Beranda
            </router-link>
          </li>
          <li>
            <router-link
              :to="{
                name: 'ReadPengaduan',
              }"
            >
              <i class="fas fa-book-open"></i>Daftar Laporan
            </router-link>
          </li>
          <li>
            <router-link
              :to="{
                name: 'CreatePengaduan',
              }"
            >
              <i class="fas fa-pen"></i>Buat Laporan
            </router-link>
          </li>
          <li>
            <router-link
              :to="{
                name: 'CreatePengaduan',
              }"
            >
              <i class="fas fa-skating"></i>Wuzzz
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },

  methods: {
    getLogo() {
      return "assets/images/logo/mihoyo1.png";
    },
  },

  computed: {
    ...mapGetters({
      isLoggedIn: "isLoggedIn",
      user: "user",
    }),
  },
};
</script>
