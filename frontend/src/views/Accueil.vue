<template>
  <v-container>
    <h3 class=" headline ml-sm-12 mt-7">
      GroupTook, rencontres, culture, travail
    </h3>
    <h3 class="subheading ml-sm-12">Le réseau social de nos salariés.</h3>
    <v-card elevation="12" shaped class="d-flex justify-center mx-sm-12 mt-10">
      <v-img
        :src="require('../assets/icon-above-font.png')"
        max-height="200"
        max-width="400"
      />
    </v-card>
    <v-card elevation="6" class="mt-12">
      <v-col class="mb-5" min-width="400">
        <h2 class="mb-3 ml-7">
          Echangez des idées, des images, des expériences
        </h2>
        <v-col justify="start">
          <a
            v-for="(forum, i) in forumSocial"
            :key="i"
            :href="forum.href"
            class="mx-7"
            target="_blank"
          >
            {{ forum.text }}
          </a>
        </v-col>
      </v-col>
    </v-card>
    <Formulaire />
  </v-container>
</template>

<script>
import Formulaire from "../components/Formulaire.vue";
export default {
  name: "Accueil",
  components: {
    Formulaire,
  },

  data: () => ({
    forumSocial: [
      {
        text: "Reddit",
        href: "https://www.google.com",
      },
      {
        text: "Multimedia",
        href: "https://www.google.com",
      },
      {
        text: "Discutons",
        href: "https://www.google.com",
      },
    ],
  }),
};
</script>
