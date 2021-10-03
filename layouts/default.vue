<template>
  <v-app>
    <HEADER />
    <v-content>
      <v-container>
        <Nuxt />
      </v-container>
    </v-content>
    <FOOTER />
  </v-app>
</template>

<script>
import HEADER from "~/components/HEADER.vue";
import FOOTER from "~/components/FOOTER.vue";

export default {
  components: {
    HEADER,
    FOOTER
  }
};
</script>
