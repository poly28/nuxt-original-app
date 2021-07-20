<template>
  <div class="page">
    <Login />
    <!-- user.loginでストアのuser.loginの状態により -->
    <!-- 表示非表示の切り替えが可能 -->
    <p v-if="user.login" class="text">
      ログインに成功！
    </p>
  </div>
</template>

<script>
import Login from "~/components/Login.vue";

export default {
  components: {
    Login: Login
  },
  computed: {
    // getterの呼出し
    // getterを呼び出すときは関数名を[]で囲む
    user() {
      return this.$store.getters["user"];
    }
  }
};
</script>
