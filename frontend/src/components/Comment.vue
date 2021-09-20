<template>
  <div>
    <div>
      <div class="my-8 ml-4 py-2">
        <div v-for="(comment, i) in comments" :key="i">
          <v-card
            elevation="6"
            class="d-flex justify-space-between px-2 ml-6 mr-16 mb-4 mt-6 shaped"
          >
            {{ comment.content }}

            <button
              @click="deleteComment(comment.id, i)"
              v-if="isAdmin || comment.UserId == userId"
            >
              <small>Supprimer</small>
            </button>
          </v-card>
        </div>
      </div>
    </div>
    <div class="d-flex justify-space-between pr-1 ml-1 mb-1">
      <input
        class="pr-1 ml-1 mb-1"
        v-bind:style="styleResize"
        placeholder="Ajouter un commentaire ?"
        v-model="comment"
      />
      <div>
        <button class="px-2 indigo lighten-4 mr-1 mb-1" @click="sendComment">
          Envoyer votre commentaire
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "Comment",
  ////// Importation de la propriété messageId depuis le composant parent (message.vue) ///////
  props: ["messageId"],
  ////// Déclaration de données à utiliser dans ce composant //////
  data() {
    return {
      comments: [],
      comment: "",
      styleResize: {
        resize: "both",
      },
    };
  },
  ////// importation de données depuis Vue X store //////
  computed: { ...mapGetters(["isAdmin", "userId", "username"]) },

  emits: ["comment"],

  async mounted() {
    this.comments = await axios
      .get("http://localhost:3000/comments?messageId=" + this.messageId)
      .then((this.comments = (res) => res.data));
  },
  watch: {
    messageId: async function(newId) {
      this.comments = await axios
        .get("http://localhost:3000/comments?messageId=" + newId)
        .then((this.comments = (res) => res.data));
    },
  },
  methods: {
    sendComment() {
      axios
        .post(
          "http://localhost:3000/comments",
          { content: this.comment, messageId: this.messageId },
          {
            headers: {
              Authorization: "Bearer" + " " + this.$store.state.token,
            },
          }
        )
        .then((comment) => {
          comment.data.User = { userName: this.username };
          this.comments.push(comment.data);
          this.comment = "";
        })
        .catch((error) => error.status(401).json(error));
    },
    deleteComment(commentId, index) {
      ////// suppression de l'item dans le array de comment //////
      this.comments.splice(index, 1);
      axios.delete("http://localhost:3000/comments/" + commentId, {
        headers: {
          Authorization: "Bearer " + this.$store.state.token,
        },
      });
    },
  },
};
</script>
