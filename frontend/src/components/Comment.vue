<template>
  <container>
    <textarea v-model="comment"></textarea>
    <button @click="sendComment">Commentaire</button>
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
