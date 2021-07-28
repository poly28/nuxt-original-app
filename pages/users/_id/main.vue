<template>
  <div>
    <p>ユーザーメイン画面(/users/id/main)</p>
    <section class="main">
      <div>
        <v-calendar
          :attributes="attrs"
          :style="addStyleTextColor(weekday)"
        ></v-calendar>
      </div>
      <div class="menu">
        <!-- <button to="/pages/users/_id/input.vue" nuxt>実績記録</button> -->
        <button @click="toInput">実績記録</button>
        <button @click="toReport">実績一覧</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attrs: [
        {
          key: "today",
          highlight: {
            backgroundColor: "#ff8080"
          },
          dates: new Date(),
          popover: {
            label: "メッセージを表示できます"
          }
        }
      ]
    };
  },
  methods: {
    toInput: function() {
      // this.$router.push("/pages/users/1/input.vue");
      this.$router.push("/");
    },
    toReport: function() {
      // this.$router.push("/pages/users/1/input.vue");
      this.$router.push("/");
    },
    addStyleTextColor: function(weekday) {
      if (weekday === 1) {
        return {
          color: "red"
        };
      } else if (weekday === 7) {
        return {
          color: "#00c0ff"
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  .menu {
    display: flex;
    flex-direction: column;
  }
}
</style>
