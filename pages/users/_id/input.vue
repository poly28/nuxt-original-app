<template>
  <div>
    <!-- 開始日及び出張先の入力フォームここから -->
    <h3>【実績入力(/users/id/input)】</h3>
    <label for="">開始日</label>
    <input type="text" v-model="date" />
    <label for="">出張先 </label>
    <input type="text" />
    <!-- 開始日及び出張先の入力フォームここまで -->
    <hr />
    <!-- 時間及び作業内容の入力フォームここから -->
    <p>【実績追加】</p>
    <form action="">
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

      <label for="">作業内容</label>
      <select name="" id="" v-model="select">
        <option value=""></option>
        <option value="移動">移動</option>
        <option value="作業">作業</option>
      </select>
      <button @click.prevent="add">追加</button>
    </form>
    <!-- 時間及び作業内容の入力フォームここまで -->
    <hr />

    <!-- デバッグ用 -->
    <!-- <pre>{{ $data }}</pre> -->
    <!-- デバッグ用 -->

    <!-- 実績の一覧表示ここから -->
    <p>【実績一覧】</p>
    <ol>
      <li v-for="(list, index) in lists" :key="list.id">
        <p>
          【時間】{{ list.start }}～{{ list.end }} 【作業内容】{{ list.work }}
          <button @click.prevent="del(index)">削除</button>
        </p>
      </li>
    </ol>
    <!-- todo：記入した実績をfirestoreに保存する処理を追加 -->
    <button @click.prevent="register">登録</button>
    <!-- 実績の一覧表示ここまで -->
  </div>
</template>

<script>
import VueTimepicker from "vue2-timepicker";
import "vue2-timepicker/dist/VueTimepicker.css";

export default {
  mounted() {
    // ここで日付を自動で読み込ませる
    this.date = "読み込み時に自動で取得";

    // todo
    // ここで出張先を自動で読み込ませる
  },
  data() {
    return {
      date: "",
      select: "",

      // 開始時間の初期値を設定する
      startTime: "09:00",

      // 終了時間の初期値を設定する
      endTime: "09:00",
      tripData: []
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
        work: this.select
      };

      // 入力欄初期化
      this.startTime = this.endTime;
      this.endTime = "";

      // 入力した実績を配列addTripに保存
      this.tripData.push(addTrip);
    },
    register() {
      if (alert("実績を登録しますか？")) {
        console.log("実績を登録します");
      }
    },
    del(index) {
      this.tripData.splice(index, 1);
    }
  },
  computed: {
    lists() {
      return this.tripData;
    }
  }
};
</script>
