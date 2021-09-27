<template>
  <div>
    <v-app>
      <p>ユーザーID：{{ userid }}</p>

      <main>
        <!-- メインカレンダー -->
        <!-- カレンダーの日付をクリックして実績入力画面へ移行する -->
        <!-- 選択した日付を実績入力画面で引き継ぐ -->
        <!-- @changeでtoInputを実行 -->
        <section class="calender">
          <v-date-picker
            v-model="picker"
            elevation="2"
            locale="jp-ja"
            :day-format="date => new Date(date).getDate()"
            @change="toInput(userid)"
          ></v-date-picker>
          <!-- :reactive="reactive" -->
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
      userid: this.$route.params.userid,
      // v-date-picker
      picker: ""
      // v-date-picker
    };
  },
  methods: {
    toInput: function(userid) {
      // todo:カレンダーの選択した日付を遷移先にデータ渡しする処理を記述する
      // firestoreに日付データを送る処理を記述する
      // this.$store.dispatch("addPicker", this.picker);
      this.$router.push(`/users/${this.userid}/input`);
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
