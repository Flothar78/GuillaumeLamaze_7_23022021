<template
  ><v-btn
    elevation="4"
    class="mb-8 mt-6 mx-3"
    color="indigo lighten-2"
    text
    @click="login"
  >
    Déconnexion
  </v-btn>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:3000/users/login", this.user, {
          headers: { Authorization: "Bearer" + " " + this.$store.state.token },
        })
        .then((response) => {
          console.log(response.data.token);
        });
    },
  },
};
</script>
