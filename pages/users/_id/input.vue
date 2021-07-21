<template>
  <div>
    <h3>【実績入力(/users/id/input)】</h3>
    <label for="">開始日</label>
    <input type="text" />
    <label for="">出張先 </label>
    <input type="text" />
    <hr />
    <p>【実績追加】</p>
    <form action="">
      <label for="">開始</label>
      <vue-timepicker> </vue-timepicker>
      <label for="">終了</label>
      <vue-timepicker> </vue-timepicker>

      <label for="">作業内容</label>
      <select name="" id=""></select>
      <button>追加</button>
    </form>
    <hr />
    <p>【実績一覧】</p>
    <ol>
      <li></li>
    </ol>
    <button>登録</button>
  </div>
</template>

<script>
import VueTimepicker from "vue2-timepicker";
import "vue2-timepicker/dist/VueTimepicker.css";

export default {
  data: {
    return() {
      official_trip: [];
    }
  },
  components: {
    "vue-timepicker": VueTimepicker
  },
  methods: {}
};
</script>
