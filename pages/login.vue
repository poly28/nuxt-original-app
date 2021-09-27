<template>
  <div class="page">
    <v-app>
      <!-- アプリタイトル -->
      <section class="title">
        <h3>web noteへようこそ！</h3>
        <h4>『手帳』から『Web』へ移行しよう。</h4>
      </section>
      <!-- アプリタイトル -->

      <!-- ログインコンポーネントの呼び出し -->
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="py-4 d-flex justify-center">
            <LOGIN />
          </v-card>
        </v-col>
      </v-row>
      <!-- ログインコンポーネントの呼び出し -->

      <v-card width="400px" class="mx-auto mt-5">
        <v-card-title>
          <h1 class="display-1">ログイン</h1>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              prepend-icon="mdi-account-circle"
              label="email"
            ></v-text-field>
            <v-text-field
              prepend-icon="mdi-lock"
              append-icon="mdi-eye-off"
              label="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn class="info">ログイン</v-btn>
        </v-card-actions>
      </v-card>
    </v-app>
  </div>
</template>

<script>
// ログインコンポーネントの読み込み
import LOGIN from "~/components/LOGIN.vue";

export default {
  layout: "no-layouts",
  components: {
    // ログインコンポーネントの読み込み
    LOGIN
  },
  computed: {
    // getterの呼出し
    // getterを呼び出すときは関数名を[]で囲む
    user() {
      return this.$store.getters["user"];
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.page {
  background-image: url("~@/assets/top.jpg");
  .title {
    text-align: center;
    //   .link {
    //     cursor: pointer;
    //   }
  }
}
</style>
