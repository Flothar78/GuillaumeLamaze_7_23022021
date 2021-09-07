<template>
  <v-app>
    <Navbar />
    <v-card class="d-flex justify-center mb-2 mt-4 pb-4"
      ><div id="nav">
        <router-link to="/">Accueil</router-link> ///
        <router-link to="/forum">Forum</router-link>
      </div></v-card
    >

    <div><router-view /></div>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: { Navbar },
  data: () => ({
    //
  }),
};
</script>
