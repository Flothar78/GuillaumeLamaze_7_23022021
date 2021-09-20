<template>
  <v-card elevation="8" class="py-6 px-8 font-weight-bold">
    <v-card elevation="4" class="px-2 mt-4">
      <div class="pt-4">
        <small>Si vous êtes déja inscrit,</small>
      </div>
      <v-spacer></v-spacer>
      <p class="ml-3 mt-6">Connectez-vous ici:</p>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-form>
            <v-text-field
              label="Nom d'utilisateur**"
              persistent-hint
              required
              v-model="user.nom"
            ></v-text-field
          ></v-form>
        </v-col>
        <v-col cols="12">
          <v-form>
            <v-text-field
              label="Email**"
              required
              v-model="user.email"
            ></v-text-field
          ></v-form>
        </v-col>
        <v-col cols="12">
          <v-form>
            <v-text-field
              label="Mot de passe*"
              type="password"
              required
              v-model="user.password"
            ></v-text-field
          ></v-form>
        </v-col>
        <v-card elevation="2" class="ml-6 mb-4 px-2">
          <small
            >*Informations indispensables<br />**Mail et pseudos doivent être
            uniques</small
          >
        </v-card>
      </v-row>
      <v-btn
        elevation="4"
        class="mb-8 mt-6 mx-3"
        color="indigo lighten-2"
        text
        @click="login"
      >
        Connexion
      </v-btn>
    </v-card>
  </v-card>
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
        .post("http://localhost:3000/users/login", this.user)
        .then((response) => {
          this.$store.commit("LOGIN_SUCCESS", response.data);
        })
        .then(() => this.$router.push("/forum"))
        .catch((error) => error.status(401).json(error));
    },
  },
};
</script>
