<template>
  <div>TEst Composant message</div>
</template>

<script>
import axios from "axios";
export default {
  name: "Message",
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
