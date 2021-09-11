<template>
  <v-card>
    <v-btn
      elevation="4"
      class="mb-8 mt-6 mx-3"
      color="indigo lighten-2"
      text
      @click="deleteAccount"
    >
      Supprimer votre compte
    </v-btn></v-card
  >
</template>

<script>
import axios from "axios";
export default {
  name: "deleteAccount",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    deleteAccount() {
      axios
        .delete("http://localhost:3000/users/:id/delete", this.user, {
          headers: { Authorization: "Bearer" + " " + this.$store.state.token },
        })
        .then((user) => {
          console.log(user);
        });
    },
  },
};
</script>
