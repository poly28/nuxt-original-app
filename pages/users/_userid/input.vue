<template>
  <div>
    <v-app>
      <!-- 開始日&出張先の入力フォーム -->
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="12" sm="8" md="6">
            <v-menu max-width="290px" min-width="290px">
              <!-- ポップアップを追加する要素にv-on="on" -->
              <template v-slot:activator="{ on }">
                <v-text-field
                  slot="activator"
                  v-model="fromDate"
                  label="出張日"
                  readonly
                  v-on="on"
                />
              </template>
              <!-- ポップアップされる内容-->
              <v-date-picker
                v-model="fromDate"
                elevation="2"
                locale="jp-ja"
                :day-format="date => new Date(date).getDate()"
              ></v-date-picker>
            </v-menu>
            <v-text-field
              label="出張先"
              placeholder="船名を入力してください"
            ></v-text-field>
          </v-col>
        </v-row>
        <!-- 開始日&出張先の入力フォーム -->

        <!-- 時間&作業内容の入力フォーム -->
        <v-form>
          <v-row justify="center" align-content="center">
            <v-col cols="6" sm="6" md="6">
              <!-- 開始時間 -->
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
              <v-select
                class="py-2"
                :items="workList"
                label="種別"
                v-model="currentSelect"
                outlined
              ></v-select>
              <!-- 作業内容 -->
              <v-btn @click.prevent="add">追加</v-btn>
            </v-col>
          </v-row>
        </v-form>
        <!-- 時間&作業内容の入力フォーム -->

        <!-- デバッグ用 -->
        <!-- <pre>{{ $data }}</pre> -->
        <!-- デバッグ用 -->

        <!-- 実績一覧表示 -->
        <v-row justify="center" align-content="center">
          <v-col cols="6" sm="6" md="6">
            <!-- <ol>
              <li v-for="(list, index) in lists" :key="list.id">
                <p>
                  【時間】{{ list.start }}～{{ list.end }} 【作業内容】{{
                    list.work
                  }}
                  <v-btn @click.prevent="del(index)">削除</v-btn>
                </p>
                <v-text-field></v-text-field>
              </li>
            </ol> -->

            <ul class="work-list">
              <li v-for="(list, index) in lists" :key="list.id">
                <v-icon>mdi-clock-outline</v-icon>
                <span>{{ list.start }}～{{ list.end }}</span>
                <!-- <v-icon>mdi-wrench</v-icon> -->
                <!-- <v-icon>mdi-car-estate</v-icon> -->
                <span>({{ list.work }}) </span>
                <v-icon @click.prevent="del(index)">mdi-close-box</v-icon>
                <!-- <v-btn @click.prevent="del(index)">削除</v-btn> -->
              </li>
            </ul>
          </v-col>
        </v-row>
        <!-- 実績一覧表示 -->

        <!-- 実績登録 -->
        <v-row justify="center" align-content="center">
          <v-col cols="6" sm="6" md="6">
            <!-- todo：記入した実績をfirestoreに保存する処理を追加 -->
            <v-btn @click.prevent="register">登録</v-btn>
          </v-col>
        </v-row>
        <!-- 実績登録 -->
      </v-container>
    </v-app>
  </div>
</template>

<script>
// VueTimepicker(作業実績の時間記録用)
import VueTimepicker from "vue2-timepicker";
// import "vue2-timepicker/dist/VueTimepicker.css";

// datapickerのインポート
// import Datepicker from "vuejs-datepicker";
// datepicker日本語対応
// import { ja } from "vuejs-datepicker/dist/locale";

export default {
  mounted() {
    // ここで日付を自動で読み込ませる
    // this.date = "読み込み時に自動で取得";
    // todo
    // ここで出張先を自動で読み込ませる
  },
  data() {
    return {
      // v-date-picker
      fromDate: "",

      // v-select(作業内容)
      workList: ["移動", "作業"],
      currentSelect: "",

      // 開始時間の初期値を設定する
      startTime: "09:00",

      // 終了時間の初期値を設定する
      endTime: "09:00",

      // 出張実績格納配列
      tripData: []
    };
  },
  components: {
    "vue-timepicker": VueTimepicker
  },
  methods: {
    add() {
      // 実績追加用のオブジェクトを作成
      let addTrip = {
        start: this.startTime,
        end: this.endTime,
        work: this.currentSelect
      };

      // 開始時間のスタートを前作業の終了時刻に変更する
      this.startTime = this.endTime;

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

<style lang="scss" scoped>
.work-list {
  list-style: none;
}
</style>
