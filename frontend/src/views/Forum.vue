<template>
  <div class="indigo lighten-4 v-sheet theme--light v-toolbar">
    <v-card><Message /></v-card>

    <div class="d-flex justify-space-between">
      <div><Logout /></div>
      <div><DeleteAccount /></div>
    </div>
  </div>
</template>

<script>
import Message from "../components/Message";
import DeleteAccount from "../components/DeleteAccount";
import Logout from "../components/Logout";

export default {
  name: "Forum",
  components: { Message, DeleteAccount, Logout },
  data() {
    return {
      user: {},
    };
  },
};
</script>
