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
      <LOGIN />
      <!-- ログインコンポーネントの呼び出し -->

      <!-- user.loginでストアのuser.loginの状態により -->
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
  .title {
    text-align: center;
    //   .link {
    //     cursor: pointer;
    //   }
  }
}
</style>
