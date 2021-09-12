<template
  ><v-btn
    elevation="4"
    class="mb-8 mt-12 mx-3"
    color="indigo lighten-2"
    text
    @click="logout"
  >
    Vous déconnecter
  </v-btn>
</template>

<script>
export default {
  name: "Logout",

  methods: {
    logout() {
      this.$store.commit("LOGOUT_SUCCESS", this.$store.token);
      this.$router.push("/");
      this.$alert("Vous avez bien été déconnecté de GroupTook.");
    },
  },
};
</script>
