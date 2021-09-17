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
        <div class="card-img-top w-75 mx-auto">
          <img :src="message.attachment" alt="image" />
        </div>
        <v-card><Comment v-bind:messageId="message.id"/></v-card>
        <v-spacer></v-spacer>
      </v-card>
    </div>
    <v-card class="px-4">
      <div>Postez un nouveau message</div>
      <v-form>
        <v-text-field
          placeholder="A quel sujet ?*"
          persistent-hint
          required
          v-model="message.title"
        ></v-text-field
      ></v-form>
      <v-form>
        <v-text-field
          placeholder="Racontez-nous ce qu'il vous plaira*"
          persistent-hint
          required
          v-model="message.content"
        ></v-text-field
      ></v-form>
      <v-form><input type="file" @change="change"/></v-form>
      <small>*Merci de remplir au moins les champs avec astérique </small>
      <v-spacer></v-spacer>
      <button
        elevation="4"
        class="mb-2 mr-3 mt-6 mb-4 ml-6 px-4 indigo lighten-4"
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
import Comment from "./Comment";
export default {
  name: "Message",
  components: { Comment },
  data() {
    return {
      image: null,
      message: { title: null, content: null },
      messages: [],
    };
  },

  async created() {
    this.messages = await axios
      .get("http://localhost:3000/messages", {
        headers: { Authorization: "Bearer" + " " + this.$store.state.token },
      })
      .then((this.messages = (res) => res.data))
      .catch((error) => {
        error.status(401).json(error);
      });
  },

  methods: {
    onSelectedFile(event) {
      this.image = event.target.files[0];
    },
    newMessage() {
      const data = {
        image: this.image,
        message: this.message,
        userId: this.$store.state.userId,
      };
      axios
        .post("http://localhost:3000/messages", data, {
          headers: {
            Authorization: "Bearer" + " " + this.$store.state.token,
          },
        })
        .then((res) => {
          this.messages.push(res.data);
          this.message = {};
        });
    },
  },
};
</script>
