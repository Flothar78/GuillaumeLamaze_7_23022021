<template>
  <v-card elevation="8" class="py-6 px-6 font-weight-bold">
    <v-card elevation="4" class="px-2 mt-4">
      <div class="ml-3">
        <div class="pt-4">
          <small>Si vous n'êtes pas encore inscrit,</small>
        </div>
        <v-spacer></v-spacer>
        <p class="ml-3 mt-6">Suivez les infos ci-dessous:</p>
      </div>
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
        <small>*Informations indispensables</small>
      </v-container>
      <v-spacer></v-spacer>
      <v-btn
        elevation="4"
        class="mb-5 mx-3"
        color="indigo lighten-2"
        text
        @click="signup"
      >
        Inscription
      </v-btn>
    </v-card>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  name: "Signup",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    signup() {
      axios
        .post("http://localhost:3000/users/signup", this.user)
        .then((res) => console.log(res))
        .catch((err) => err.status(401).json(err));
    },
  },
};
</script>
