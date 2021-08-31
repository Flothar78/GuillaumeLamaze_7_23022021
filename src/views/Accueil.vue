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
    <v-card elevation="4" class="mt-12 mb-10 font-weight-bold"
      ><p class="ml-3">Inscrivez-vous, ci-dessous:</p>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Prénom*" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Nom*"
                persistent-hint
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Métier*"
                persistent-hint
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Email*" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Mot de passe*"
                type="password"
                required
              ></v-text-field
            ></v-col>
          </v-row>
        </v-container>
        <small>*Informations essentielles pour nous </small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          elevation="4"
          class="mb-2 mr-3"
          color="indigo lighten-2"
          text
          @click="dialog = false"
        >
          Valider
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Accueil",

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
