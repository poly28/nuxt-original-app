<template>
  <div class="page">
    <section class="title">
      <h3>web noteへようこそ！</h3>
      <h4>『手帳』から『Web』へ移行しよう。</h4>
    </section>
    <!-- ログインコンポーネントの呼び出し -->
    <Login />
    <!-- user.loginでストアのuser.loginの状態により -->

    <!-- ログイン成功時のページ遷移処理 -->
    <p v-if="user.login" class="text" v-on="toUserMain()"></p>
    <p>
      アカウントをお持ちでない場合、
      <span class="link" @click="toSignUp">
        登録
      </span>
      はこちらから
    </p>
  </div>
</template>

<script>
// ログインコンポーネントの読み込み
import Login from "~/components/Login.vue";

export default {
  layout: "no-layouts",
  components: {
    // ログインコンポーネントの読み込み
    Login
  },
  computed: {
    // getterの呼出し
    // getterを呼び出すときは関数名を[]で囲む
    user() {
      return this.$store.getters["user"];
    }
  },
  methods: {
    toSignUp() {
      this.$router.push(`/signUp`);
    },
    toUserMain() {
      // ログインしたユーザのページに移行する
      // 現時点では決め打ち
      this.$router.push(`/users/poly`);
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  text-align: center;
  .link {
    cursor: pointer;
  }
}
</style>
