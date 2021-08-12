<template>
  <div>
    <p>ユーザーメイン画面(/users/id)</p>
    <p>ユーザーID：{{ userid }}</p>
    <section class="main">
      <div>
        <v-calendar :attributes="attrs"></v-calendar>
      </div>
      <!-- :style="addStyleTextColor(weekday)" -->
      <div class="menu">
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
      // this.$router.push("/pages/users/_id/input.vue");
      this.$router.push("/");
    },
    toReport: function() {
      // this.$router.push("/pages/users/1/input.vue");
      this.$router.push("/");
    }
    // todo:土曜日を青色、日曜を赤色にしたい
    // addStyleTextColor: function(weekday) {
    //   if (weekday === 1) {
    //     return {
    //       color: "red"
    //     };
    //   } else if (weekday === 7) {
    //     return {
    //       color: "#00c0ff"
    //     };
    //   }
    // }
  },
  async asyncData({ $content, params }) {
    const userid = params.userid;
    return userid;
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
