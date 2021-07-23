<template>
  <div>
    <!-- 開始日及び出張先の入力フォームここから -->
    <h3>【実績入力(/users/id/input)】</h3>
    <label for="">開始日</label>
    <input type="text" />
    <label for="">出張先 </label>
    <input type="text" />
    <!-- 開始日及び出張先の入力フォームここまで -->
    <hr />
    <!-- 時間及び作業内容の入力フォームここから -->
    <p>【実績追加】</p>
    <form action="">
      <label for="">開始</label>
      <vue-timepicker v-model="startTime"> </vue-timepicker>
      <label for="">終了</label>
      <vue-timepicker v-model="endTime"> </vue-timepicker>

      <label for="">作業内容</label>
      <select name="" id=""></select>
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
      <li v-for="list in lists" :key="list.id">
        <p>
          【時間】{{ list.start }}～{{ list.end }} 【作業内容】{{ list.work }}
        </p>
      </li>
    </ol>
    <!-- todo：記入した実績をfirestoreに保存する処理を追加 -->
    <button @click.prevent="">登録</button>
    <!-- 実績の一覧表示ここまで -->
  </div>
</template>

<script>
import VueTimepicker from "vue2-timepicker";
import "vue2-timepicker/dist/VueTimepicker.css";

export default {
  data() {
    return {
      startTime: "",
      endTime: "",
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
        work: "dammy"
      };

      // 入力欄初期化
      this.startTime = "";
      this.endTime = "";

      // 入力した実績を配列addTripに保存
      this.tripData.push(addTrip);
    }
  },
  computed: {
    lists() {
      return this.tripData;
    }
  }
};
</script>
