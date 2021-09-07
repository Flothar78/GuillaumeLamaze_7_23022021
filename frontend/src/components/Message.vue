<template>
  <v-container>
    <div class="mb-4">
      Messages des salariés de Groupomania
    </div>
    <div
      class="d-flex flex-column-reverse"
      v-for="(message, i) in messages"
      :key="i"
    >
      <v-card elevation="4" class="mb-4 mx-2 pl-4 py-2 "
        ><v-card elevation="1" class="font-weight-medium d-flex justify-center">
          {{ message.title }}
        </v-card>
        <br />
        <div>{{ message.content }}</div>
        <br />
        <v-card>{{ message.attachment }}</v-card>
        <v-spacer></v-spacer>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Message",
  data() {
    return {
      messages: [],
    };
  },
  async created() {
    this.messages = await axios
      .get("http://localhost:3000/messages")
      .then((this.messages = (res) => res.data))
      .catch((err) => console.log(err));
  },
  async newMessage() {},
};
</script>
