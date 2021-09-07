<template>
  <v-card elevation="4" class="mt-12 mb-10 font-weight-bold">
    <p class="ml-3">Inscrivez-vous (ou connectez-vous) ci-dessous:</p>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-form>
              <v-text-field
                label="Nom d'utilisateur*"
                persistent-hint
                required
                v-model="user.nom"
              ></v-text-field
            ></v-form>
          </v-col>
          <v-col cols="12">
            <v-form>
              <v-text-field
                label="Email*"
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
        </v-row>
      </v-container>
      <small>*Informations essentielles pour nous </small>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        elevation="4"
        class="mb-2 mr-3"
        color="indigo lighten-2"
        text
        @click="signup"
      >
        Inscription </v-btn
      ><v-btn
        elevation="4"
        class="mb-2 mr-3"
        color="indigo lighten-2"
        text
        @click="login"
      >
        Connexion
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  name: "Formulaire",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    signup() {
      axios
        .post("http://localhost:3000/users/signup", this.user)
        .then((res) => console.log(res));
    },
    login() {
      axios
        .post("http://localhost:3000/users/login", this.user)
        .then((res) => console.log(res));
    },
  },
};
</script>
