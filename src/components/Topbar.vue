<template>
  <header class="header-desktop">
    <div class="section__content section__content--p30">
      <div class="container-fluid">
        <div class="header-wrap">
          <div class="au-input--xl"></div>
          <div>
            <b-dropdown id="dropdown-1" :text="getNama()" class="m-md-2">
              <b-dropdown-item>
                <i class="fas fa-baby"></i> Akun
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item @click="logout">
                <i class="fas fa-running"></i> Logout
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Topbar",
  data() {
    return {};
  },

  methods: {
    logout: function () {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
    getNama() {
      return this.user.nama;
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
