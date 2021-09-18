<template>
  <div>
    <v-app>
      <p>ユーザーID：{{ userid }}</p>

      <main>
        <!-- メインカレンダー -->
        <!-- <section class="calender"> -->
        <!-- <v-sheet height="600"> -->
        <!-- <v-calendar
            :attributes="attrs"
            style="width:300px;"
            :day-format="timestamp => new Date(timestamp.date).getDate()"
            :month-format="
              timestamp => new Date(timestamp.date).getMonth() + 1 + ' /'
            "
          >
            <template slot="header-title" slot-scope="page">
              {{ page.yearLabel }}年{{ page.monthLabel }}
            </template>
            <template slot="day-content" slot-scope="props">
              <div class="vc-day-content">
                <div v-bind:style="addStyleTextColor(props.day.weekday)">
                  {{ props.day.day }}
                </div>
              </div>
            </template>
          </v-calendar> -->
        <!-- </v-sheet> -->
        <!-- </section> -->
        <!-- メインカレンダー -->

        <v-date-picker
          v-model="picker"
          :landscape="landscape"
          :reactive="reactive"
          locale="jp-ja"
          :day-format="date => new Date(date).getDate()"
        ></v-date-picker>

        <!-- main calendar-datepicker -->
        <!-- <datepicker
          :inline="true"
          :language="ja"
          :value="this.default"
          :format="DatePickerFormat"
          :highlighted="highlighted"
          v-model="datepicker"
          @selected="toInput"
        ></datepicker> -->
        <!-- main calendar-datepicker -->

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
// datapickerのインポート
import Datepicker from "vuejs-datepicker";
// datepicker日本語対応
import { ja } from "vuejs-datepicker/dist/locale";

export default {
  // ミドルウェアプロパティでログイン状態アクセス制御
  // middleware: "authenticated",
  components: {
    Datepicker
  },
  data() {
    return {
      // datepicker用
      // datepicker: "",
      // default: new Date(),
      // DatePickerFormat: "yyyy/MM/dd",
      // 土日を強調する
      // highlighted: {
      // days: [0, 6]
      // },
      // datepicker用

      userid: this.$route.params.userid,
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
  computed: {
    // datepicker日本語対応
    // ja() {
    //   return ja;
    // }
  },
  methods: {
    toInput: function(userid) {
      this.$router.push(`/users/${this.userid}/input`);
      // todo:カレンダーの選択した日付を遷移先にデータ渡しする処理を記述する
      //
      //
    },
    toReport: function(userid) {
      this.$router.push(`/users/${userid}/report`);
    },
    // holiday: function() {},
    // customFormatter: function(data) {
    //   return moment(date).format("yyyyMMdd");
    // },

    // 土曜日を青色、日曜を赤色にするための処理
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
main {
  display: flex;
  .menu {
    display: flex;
    flex-direction: column;
  }
}
</style>
