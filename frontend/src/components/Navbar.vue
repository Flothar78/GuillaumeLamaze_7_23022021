<template>
  <nav>
    <v-toolbar class="indigo lighten-4">
      <p class="red--text mt-3">Groupomania</p>
      <v-spacer></v-spacer>
      <div class="font-weight-black mr-16">
        G<span class="font-italic">roup</span>Too<span class="font-italic"
          >k</span
        >
      </div>
      <v-spacer></v-spacer>
      <v-img :src="require('../assets/icon.png')" max-width="30px" />
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style>
#orange {
  background-color: #fd2d01;
}
</style>
