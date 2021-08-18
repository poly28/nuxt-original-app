<template>
  <div class="login">
    <!-- ログイン成功時、userの情報を表示する -->
    <p v-if="user.login" class="text">
      {{ user }}
    </p>

    <!-- ログイン前 -->
    <form v-else class="form" @submit.prevent>
      <!-- メール入力画面 -->
      <label class="label">
        <span class="label">
          email
        </span>
        <input class="input" type="text" v-model="email" /><br />
      </label>
      <!-- メール入力画面 -->

      <!-- パスワード入力画面 -->
      <label class="label">
        <span class="label">
          password
        </span>
        <input class="input" type="password" v-model="password" /><br />
      </label>
      <!-- パスワード入力画面 -->

      <!-- ログインボタン -->
      <button class="button" type="submit" @click="login">
        Login
      </button>
      <!-- ログインボタン -->

      <!-- 開発機能 -->
      <button class="button" @click="test">
        開発機能
      </button>
      <!-- 開発機能 -->
    </form>
    <!-- ログイン前 -->
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
    }
  }
};
</script>
