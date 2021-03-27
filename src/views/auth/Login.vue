<template>
  <div class="login-wrap">
    <div class="login-content">
      <div class="login-logo">
        <a href="#">
          <img
            alt="Vue logo"
            src="../../assets/images/logo/mihoyo1.png"
            width="300px"
          />
        </a>
      </div>
      <div class="login-form">
        <form @submit.prevent="login()">
          <div class="form-group">
            <label>Email Address</label>
            <input
              class="au-input au-input--full"
              type="text"
              name="email"
              v-model="form.email"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              class="au-input au-input--full"
              type="password"
              name="password"
              v-model="form.password"
              placeholder="Password"
            />
          </div>
          <div class="login-checkbox">
            <label>
              <input type="checkbox" name="remember" />Remember Me
            </label>
            <label>
              <a href="#" style="color: blue">Forgotten Password?</a>
            </label>
          </div>
          <button
            class="au-btn au-btn--block au-btn--green m-b-20"
            type="submit"
          >
            sign in
          </button>
        </form>
        <div class="register-link">
          <p>
            Don't you have account?
            <a href="#" style="color: blue">Sign Up Here</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    login() {
      this.$store
        .dispatch("login", this.form)
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "ReadPengaduan" });
          this.$swal.fire({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            icon: "success",
            title: "Signed in successfully",
          });
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
        });
    },
  },
};
</script>
