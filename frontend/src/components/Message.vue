<template>
  <v-container id="orangeLight">
    <div class="mb-4">
      <div headline class="font-weight-medium d-flex justify-center ">
        Bienvenue {{ username }} !
      </div>
      <span class="d-flex justify-center"
        >Consultez et répondez aux messages des salariés de Groupomania</span
      >
    </div>

    <div
      class="d-flex flex-column-reverse "
      v-for="(message, i) in messages"
      :key="i"
    >
      <v-card elevation="18" class="mx-6 mb-12 "
        ><v-card
          elevation="6"
          class="mb-12 mx-16 pr-2 mt-6 pl-4 py-2 font-weight-medium d-flex
          justify-space-around"
          id="orangeStrong"
        >
          {{ message.title }}
        </v-card>

        <div class="mb-6 px-4">{{ message.content }}</div>
        <v-card class="card-img-top w-75 mx-3 px-3 py-3 ">
          <v-img
            contain
            max-height="400px"
            :cover="true"
            :src="message.attachment"
            alt="image"
          />
        </v-card>
        <v-spacer></v-spacer>
        <v-card class="mx-3"><Comment v-bind:messageId="message.id"/></v-card>
        <v-spacer></v-spacer>
        <div class="d-flex justify-end">
          <v-card
            elevation="8"
            color="red"
            class="mr-6 my-3 px-3"
            @click="deleteMessage(message.id, i)"
            v-if="isAdmin || message.UserId == userId"
            >Supprimer le message</v-card
          >
        </div>
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
      <v-form><input type="file" @change="fileChange"/></v-form>
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
import { mapGetters } from "vuex";
import Comment from "./Comment";
export default {
  name: "Message",
  components: { Comment },
  data() {
    return {
      image: null,
      message: {},
      messages: [],
    };
  },
  computed: { ...mapGetters(["isAdmin", "userId", "username"]) },

  async created() {
    this.messages = await axios
      .get("http://localhost:3000/messages", {
        headers: { Authorization: "Bearer" + " " + this.$store.state.token },
      })
      .then((this.messages = (res) => res.data));
  },
  methods: {
    ////// Récupération de image sélectionner dans template ///////
    fileChange(event) {
      this.image = event.target.files[0];
    },
    ////// Formdata pour envoi de message avec fichier //////
    newMessage() {
      const data = new FormData();
      ////// Intégration du message et de l'image //////
      data.append("title", this.message.title);
      data.append("content", this.message.content);
      data.append("attachment", this.image);
      axios
        .post("http://localhost:3000/messages", data, {
          headers: {
            Authorization: "Bearer" + " " + this.$store.state.token,
          },
        })
        .then((res) => {
          this.messages.unshift(res.data);
          this.message = {};
        })
        .catch((res) => res.status(401).json(res));
    },
    deleteMessage(messageId, index) {
      this.messages.splice(index, 1);
      axios.delete("http://localhost:3000/messages/" + messageId, {
        headers: {
          Authorization: "Bearer " + this.$store.state.token,
        },
      });
    },
  },
};
</script>

<style>
#orangeLight {
  background-color: #ffd7d7;
}
#orangeStrong {
  background-color: #fd2d01;
}
#blue {
  background-color: #d7ffff;
}
</style>
