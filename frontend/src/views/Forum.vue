<template>
  <v-container>
    <v-card><Message /></v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import Message from "../components/Message";
export default {
  name: "Forum",
  components: { Message },
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
