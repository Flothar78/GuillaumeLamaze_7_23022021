<template>
  <container name:>
    <div class="d-flex">
      <textarea v-bind:style="styleResize" placeholder="Un commentaire ?" v-model="comment"></textarea>
      <v-spacer></v-spacer>
      <button class="px-2 indigo lighten-4 mr-4" @click="sendComment">
        Envoyer votre commentaire
      </button>
    </div>
  </container>
</template>

<script>
import axios from "axios";
export default {
  name: "Comment",
  props:["messageId"],
  data() {
    return {
      comment: "",
      styleResize: {
        resize: "both"
      }
    };
  },
  emits: ["comment"],
  methods: {
    sendComment() {
   //   this.$emit("comment", this.comment);
      axios.post("http://localhost:3000/comments", {content: this.comment, messageId:this.messageId}, {
        headers: { Authorization: "Bearer" + " " + this.$store.state.token },
      });
    },
  },
};
</script>


