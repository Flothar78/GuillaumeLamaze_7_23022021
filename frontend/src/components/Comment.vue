<template>
  <div>
    <div>
      <div class="my-8 ml-4 py-2">
        <div v-for="comment in comments" :key="comment.content">
          <v-card
            elevation="6"
            class="d-flex justify-space-between px-2 ml-6 mr-16 mb-4 mt-6 shaped"
          >
            {{ comment.content }}
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
  props: ["messageId"],
  data() {
    return {
      comments: [],
      comment: "",
      styleResize: {
        resize: "both",
      },
    };
  },
  emits: ["comment"],
  async created() {
    this.comments = await axios
      .get("http://localhost:3000/comments?messageId=" + this.messageId)
      .then((this.comments = (res) => res.data));
  },
  computed: { ...mapGetters(["isAdmin", "userId", "username"]) },
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
        .then((comment) => this.comments.unshift(comment.data))
        .catch((error) => error.status(401).json(error));
    },
  },
};
</script>

<style>
#orange {
  background-color: #fd2d01;
}
</style>
