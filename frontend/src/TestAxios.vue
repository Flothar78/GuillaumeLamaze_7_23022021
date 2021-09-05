import Vue from 'vue';

<template
  ><div id="app">
    {{ info }}
  </div>
</template>

<script>
new Vue({
  el: "#app",
  data() {
    return { info: null };
  },
  mounted() {
    this.$axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.info = response));
  },
});
</script>
