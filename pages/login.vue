<template>
  <div class="page">
    <v-app>
      <!-- ログイン成功時のページ遷移処理 -->
      <p v-if="user.login" class="text" v-on="toUserMain()"></p>
      <!-- ログイン成功時のページ遷移処理 -->
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="8">
          <!-- アプリタイトル -->
          <section class="title">
            <h1>web noteへようこそ！</h1>
            <h2>『手帳』から『Web』へ移行しよう。</h2>
          </section>
          <!-- アプリタイトル -->

          <!-- ログイン -->
          <v-card width="400px" class="mx-auto mt-5" justify center>
            <v-card-title>
              <h1 class="display-1">ログイン</h1>
            </v-card-title>
            <v-card-text>
              <v-form class="form" @submit.prevent="toUserMain()">
                <v-text-field
                  prepend-icon="mdi-account-circle"
                  label="email"
                  v-model="email"
                ></v-text-field>
                <v-text-field
                  prepend-icon="mdi-lock"
                  append-icon="mdi-eye-off"
                  label="password"
                  v-model="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn class="info" type="submit" @click="login">ログイン</v-btn>
              <!-- 開発機能 -->
              <v-btn class="button" @click="test">
                開発機能
              </v-btn>
              <!-- 開発機能 -->
            </v-card-actions>
            <!-- サインアップページへの誘導 -->
            <p>
              アカウントをお持ちでない場合、
              <span class="link" @click="toSignUp">
                登録
              </span>
              はこちらから
            </p>
            <!-- サインアップページへの誘導 -->
          </v-card>
          <!-- ログイン -->
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
// ログインコンポーネントの読み込み
import LOGIN from "~/components/LOGIN.vue";

export default {
  layout: "no-layouts",
  data() {
    return {
      email: "",
      password: ""
    };
  },
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
.page {
  background-image: url("~@/assets/top.jpg");
  .title {
    text-align: center;
    //   .link {
    //     cursor: pointer;
    //   }
  }
  text-align: center;

  .link {
    cursor: pointer;
  }
}
</style>
