<template>
  <div>
    <v-app>
      <!-- 開始日&出張先の入力フォーム -->
      <h3>【実績入力(/users/id/input)】</h3>
      <label for="">開始日</label>

      <!-- <v-date-picker popover="click" v-model="date"> </v-date-picker> -->
      <datepicker v-model="picker"></datepicker>

      <label for="">出張先 </label>
      <input type="text" />
      <!-- 開始日&出張先の入力フォーム -->

      <hr />
      <!-- 時間&作業内容の入力フォーム -->
      <p>【実績追加】</p>
      <form action="">
        <!-- 開始時間 -->
        <label for="">開始</label>
        <vue-timepicker
          v-model="startTime"
          hour-label="時"
          minute-label="分"
          minute-interval="15"
          placeholder="開始"
          advanced-keyboard
          manual-input
          close-on-complete
        >
        </vue-timepicker>
        <!-- 開始時間 -->

        <!-- 終了時間 -->
        <label for="">終了</label>
        <vue-timepicker
          v-model="endTime"
          hour-label="時"
          minute-label="分"
          minute-interval="15"
          placeholder="終了"
          advanced-keyboard
          manual-input
          close-on-complete
        >
        </vue-timepicker>
        <!-- 終了時間 -->

        <!-- 作業内容 -->
        <label for="">作業内容</label>
        <select v-model="currentSelect">
          <option value="移動">移動</option>
          <option value="作業">作業</option>
        </select>
        <!-- 作業内容 -->

        <v-btn @click.prevent="add">追加</v-btn>
      </form>
      <!-- 時間&作業内容の入力フォーム -->
      <hr />

      <!-- デバッグ用 -->
      <pre>{{ $data }}</pre>
      <!-- デバッグ用 -->

      <!-- 実績一覧表示 -->
      <p>【実績一覧】</p>

      <!-- 実績リスト -->
      <ol>
        <li v-for="(list, index) in lists" :key="list.id">
          <p>
            【時間】{{ list.start }}～{{ list.end }} 【作業内容】{{ list.work }}
            <v-btn @click.prevent="del(index)">削除</v-btn>
          </p>
        </li>
      </ol>
      <!-- 実績リスト -->

      <!-- todo：記入した実績をfirestoreに保存する処理を追加 -->
      <v-btn @click.prevent="register">登録</v-btn>
      <!-- 実績一覧表示 -->
    </v-app>
  </div>
</template>

<script>
// VueTimepicker(作業実績の時間記録用)
import VueTimepicker from "vue2-timepicker";
// import "vue2-timepicker/dist/VueTimepicker.css";

// datapickerのインポート
import Datepicker from "vuejs-datepicker";
// datepicker日本語対応
import { ja } from "vuejs-datepicker/dist/locale";

export default {
  mounted() {
    // ここで日付を自動で読み込ませる
    // this.date = "読み込み時に自動で取得";
    // todo
    // ここで出張先を自動で読み込ませる
  },
  data() {
    return {
      // datepicker用
      date: "",
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      // datepicker用

      // 作業内容select
      currentSelect: "",
      // 作業内容select

      // 開始時間の初期値を設定する
      startTime: "09:00",

      // 終了時間の初期値を設定する
      endTime: "09:00",

      // 出張実績格納
      tripData: []
      // 出張実績格納
    };
  },
  components: {
    "vue-timepicker": VueTimepicker
  },
  methods: {
    add() {
      let addTrip = {};

      // 実績追加用のオブジェクトを作成
      addTrip = {
        start: this.startTime,
        end: this.endTime,
        work: this.currentSelect
      };

      // 開始時間のスタートを前作業の終了時刻に変更する
      // 終了時刻は自分で入力するため、終了時刻を空にする
      this.startTime = this.endTime;
      this.endTime = "";

      // 入力した実績を配列addTripに保存する
      this.tripData.push(addTrip);
    },

    // 実績登録処理
    register() {
      if (alert("実績を登録しますか？")) {
        console.log("実績を登録します");
        // todo ここでfirestoreにデータ保存
      }
    },
    // 実績内容を登録した配列をspliceで削除する処理
    del(index) {
      this.tripData.splice(index, 1);
    }
  },
  computed: {
    // 整形したデータをリターンする
    lists() {
      return this.tripData;
    }
  }
};
</script>
