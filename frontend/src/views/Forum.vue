<template>
  <v-container>
    <v-card><DeleteAccount /></v-card>
    <v-card><Message /></v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import Message from "../components/Message";
import DeleteAccount from "../components/DeleteAccount";

export default {
  name: "Forum",
  components: { Message, DeleteAccount },
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
    deleteAccount() {
      axios.delete("http://localhost:3000/users/delete", this.user);
    },
  },
};
</script>
