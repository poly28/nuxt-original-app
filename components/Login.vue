<template>
  <div class="login">
    <v-app>
      <!-- ログイン成功時のページ遷移処理 -->
      <p v-if="user.login" class="text" v-on="toUserMain()"></p>
      <!-- ログイン成功時のページ遷移処理 -->

      <!-- ログインフォーム -->
      <form v-else class="form" @submit.prevent>
        <div class="login-form">
          <!-- メール入力画面 -->
          <v-text-field label="email" type="text" v-model="email" />
          <!-- メール入力画面 -->

          <!-- パスワード入力画面 -->
          <v-text-field label="password" type="password" v-model="password" />
          <!-- パスワード入力画面 -->

          <!-- ログインボタン -->
          <v-btn class="button" type="submit" @click="login">
            Login
          </v-btn>
          <!-- ログインボタン -->

          <!-- 開発機能 -->
          <v-btn class="button" @click="test">
            開発機能
          </v-btn>
          <!-- 開発機能 -->
        </div>
      </form>
      <!-- ログインフォーム -->

      <br />
      <!-- サインアップページへの誘導 -->
      <p>
        アカウントをお持ちでない場合、
        <span class="link" @click="toSignUp">
          登録
        </span>
        はこちらから
      </p>
      <!-- サインアップページへの誘導 -->
    </v-app>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters["user"];
    }
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    // ログイン処理
    login(email, password) {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      });
    },
    // 開発時のログイン情報入力省略
    test() {
      this.email = "test@gmail.com";
      this.password = "test0328";
    },
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
.login {
  text-align: center;
  .form {
    .logim-form {
      width: 300px;
    }
  }
  .link {
    cursor: pointer;
  }
}
</style>
