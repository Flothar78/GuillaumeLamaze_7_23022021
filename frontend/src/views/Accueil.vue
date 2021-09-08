<template>
  <v-container>
    <h3 class=" headline ml-sm-12 mt-7">
      GroupTook, rencontres, culture, travail
    </h3>
    <h3 class="subheading ml-sm-12">Le réseau social des salariés.</h3>
    <v-card elevation="12" shaped class="d-flex justify-center mx-sm-12 my-10">
      <v-img
        :src="require('../assets/icon-above-font.png')"
        max-height="200"
        max-width="400"
      />
    </v-card>
    <v-card class="my-10"><Signup /></v-card>
    <v-card><Login /></v-card>
  </v-container>
</template>

<script>
import Signup from "../components/Signup.vue";
import Login from "../components/Login.vue";

export default {
  name: "Accueil",
  components: {
    Login,
    Signup,
  },
};
</script>
