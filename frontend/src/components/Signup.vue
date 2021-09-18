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
                :rules="usernameRules"
              ></v-text-field
            ></v-form>
          </v-col>
          <v-col cols="12">
            <v-form>
              <v-text-field
                label="Email*"
                required
                v-model="user.email"
                :rules="emailRules"
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
                :rules="passwordRules"
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
      user: { username: null, email: null, password: null },
      usernameRules: [
        (v) =>
          /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/.test(v) ||
          "Chiffres et lettres uniquement, sans espace",
      ],
      emailRules: [
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          " Un @ au milieu, une extension (par ex .com) à la fin ",
      ],
      passwordRules: [
        (v) =>
          /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/.test(v) ||
          " Au moins 8 caractères, dont une majuscule, un chiffre et un caractère spécial",
      ],
    };
  },
  methods: {
    signup() {
      axios
        .post("http://localhost:3000/users/signup", this.user)
        .then(
          this.$alert("Votre compte a bien été créé, merci de vous connecter.")
        )
        .catch((error) => error.status(401).json(error));
    },
  },
};
</script>
