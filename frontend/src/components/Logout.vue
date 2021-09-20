<template
  ><v-btn elevation="4" class="mb-8 mt-12 mx-3 white" text @click="logout">
    Vous déconnecter
  </v-btn>
</template>

<script>
export default {
  name: "Logout",

  methods: {
    logout() {
      ////// suppression token du vue x store == plsu de userId ==>  redirection page d'accueil == Déconnexion //////
      this.$store.commit("LOGOUT_SUCCESS", this.$store.token);
      this.$router.push("/");
      this.$alert(
        "Vous avez bien été déconnecté de GroupTook."
      ).catch((error) => error.status(401).json(error));
    },
  },
};
</script>
