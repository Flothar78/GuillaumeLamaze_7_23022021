<template>
  <div>
    <div class="commentsRender">
      <div v-for="comment in comments" :key="comment.content">
        <span>{{ comment.content }}</span>
      </div>
    </div>
    <div class="d-flex">
      <textarea
        v-bind:style="styleResize"
        placeholder="Ajouter un commentaire ?"
        v-model="comment"
      ></textarea>
      <v-spacer></v-spacer>
      <button class="px-2 indigo lighten-4 mr-4" @click="sendComment">
        Envoyer votre commentaire
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
