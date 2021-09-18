<template>
  <div>
    <v-app>
      <p>ユーザーID：{{ userid }}</p>

      <main>
        <!-- メインカレンダー -->
        <section class="calender">
          <v-date-picker
            v-model="picker"
            :landscape="landscape"
            :reactive="reactive"
            locale="jp-ja"
            :day-format="date => new Date(date).getDate()"
          ></v-date-picker>
        </section>
        <!-- メインカレンダー -->

        <!-- 機能メニュー -->
        <section class="menu">
          <v-btn @click="toInput(userid)">実績記録</v-btn>
          <v-btn @click="toReport(userid)">実績一覧</v-btn>
        </section>
        <!-- 機能メニュー -->

        <!-- デバッグ -->
        <pre>
        {{ $data }}
      </pre
        >
        <!-- デバッグ -->
      </main>
    </v-app>
  </div>
</template>

<script>
export default {
  // ミドルウェアプロパティでログイン状態アクセス制御
  // middleware: "authenticated",
  data() {
    return {
      userid: this.$route.params.userid
    };
  },
  computed: {},
  methods: {
    toInput: function(userid) {
      this.$router.push(`/users/${this.userid}/input`);
      // todo:カレンダーの選択した日付を遷移先にデータ渡しする処理を記述する
      //
      //
    },
    toReport: function(userid) {
      this.$router.push(`/users/${userid}/report`);
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  .menu {
    display: flex;
    flex-direction: column;
  }
}
</style>
