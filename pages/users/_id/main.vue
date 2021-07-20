<template>
  <div>
    <p>ユーザーメイン画面(/users/id/main)</p>
    <v-calendar
      :attributes="attrs"
      :style="addStyleTextColor(weekday)"
    ></v-calendar>
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
