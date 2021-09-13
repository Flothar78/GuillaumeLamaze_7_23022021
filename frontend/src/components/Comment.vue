<template>
  <container>
    <textarea placeholder="Un commentaire ?" v-model="comment"></textarea>
    <v-spacer></v-spacer>
    <button class="px-2 indigo lighten-4" @click="sendComment">
      Envoyer votre commentaire
    </button>
  </container>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {
      comment: "",
    };
  },
  emits: ["comment"],
  methods: {
    sendComment() {
      this.$emit("comment", this.comment);
    },
  },
};
</script>
