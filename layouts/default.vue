<template>
  <section>
    <HEADER />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <FOOTER />
  </section>
</template>

<script>
import HEADER from "~/components/Header.vue";
import FOOTER from "~/components/Footer.vue";

export default {
  components: {
    HEADER,
    FOOTER
  }
};
</script>
