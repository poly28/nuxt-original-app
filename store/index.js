import firebase from "~/plugins/firebase";
import { firebaseMutations, firestoreAction } from "vuexfire";

const db = firebase.firestore();
const usersRef = db.collection("users");

export const state = () => ({
  // ******************
  // ログイン処理
  // ******************
  user: {
    uid: "",
    email: "",
    login: false,

    // ******************
    // ユーザメインページ
    // (date-picker)
    // ******************
    picker: ""
  }
});

export const getters = {
  user: state => {
    return state.user;
  }
};

export const actions = {
  // ******************
  // ログイン処理
  // ******************
  login({ dispatch }, payload) {
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        console.log("成功！");
        dispatch("checkLogin");
      })
      .catch(error => {
        alert(error);
      });
  },
  checkLogin({ commit }) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        commit("getData", { uid: user.uid, email: user.email });
        commit("switchLogin");
      }
    });
  },

  // ******************
  // ユーザメインページ
  // ******************
  // 選択した日付をfirestoreに登録
  // todo:追加になっているので値の上書き処理にする
  addPicker: firestoreAction((context, picker) => {
    usersRef.add({
      picker: picker
    });
  })
};

export const mutations = {
  // ******************
  // ログイン処理
  // ******************
  // ...firebaseMutations,
  getData(state, payload) {
    state.user.uid = payload.uid;
    state.user.email = payload.email;
  },
  switchLogin(state) {
    state.user.login = true;
  }

  // ******************
  // ユーザメインページ
  // ******************
  //   setDatepicker(state) {
  //     state.user.picker;
  //   }
};
