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
    <v-card>
      <div>Postez un nouveau message</div>
      <v-form>
        <v-text-field
          label="A quel sujet ?*"
          persistent-hint
          required
          v-model="message.title"
        ></v-text-field
      ></v-form>
      <v-form>
        <v-text-field
          label="Racontez-nous ce qu'il vous plaira*"
          persistent-hint
          required
          v-model="message.content"
        ></v-text-field
      ></v-form>
      <v-form>
        <v-text-field
          label="Mettez-une photo, un dessin, si vous le souhaitez."
          persistent-hint
          v-model="message.attachment"
        ></v-text-field
      ></v-form>
      <button
        elevation="4"
        class="mb-2 mr-3"
        color="indigo lighten-2"
        text
        @click="newMessage()"
      >
        Envoyer
      </button>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Message",
  data() {
    return {
      messages: [],
      message: {},
    };
  },

  async created() {
    this.messages = await axios
      .get("http://localhost:3000/messages")
      .then((this.messages = (res) => res.data))
      .catch((err) => err.status(400).json(err));
  },

  methods: {
    newMessage() {
      axios.post("http://localhost:3000/messages", this.message).then((res) => {
        this.messages.push(res.data);
        this.message = {};
      });
    },
  },
};
</script>
