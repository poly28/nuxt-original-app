<template>
  <div class="page">
    <Login />
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
    user() {
      return this.$store.getters["user"];
    }
  }
};
</script>
