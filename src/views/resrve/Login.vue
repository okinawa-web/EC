<template>
  <!-- <button @click="betu">認証トークンチェックbetu</button> -->
  <button @click="check2">認証トークンチェックcheck2</button>
  <div>{{ MemberInformation }}</div>
  <div>
    <form @submit.prevent="login">
      <label>
        email:
        <input type="text" v-model="username" required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" v-model="password" required />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage">{{ errorMessage.value }}</p>
  </div>
  <div>{{ username }}</div>
  <div>
    <h2>予約履歴</h2>
    <!-- <ul v-if="state.reserves !== null && state.reserves.length > 0">
      <li v-for="reserve in reserves" :key="reserve.id">
        {{ reserve.date }}
      </li>
    </ul>
    <p v-else>予約はありません</p> -->
  </div>
  <a href="/TheReserve">予約ページへ</a>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { reactive } from "vue";
// import { betu } from "../../utils/session";

const state = reactive({
  users: null,
  reserves: null,
});

const username = ref("");
const password = ref("");
const errorMessage = ref("");
const reserves = ref("");

const router = useRouter();

axios.defaults.withCredentials = true;

let sessionID = "";

let MemberInformation = "";


const login = () => {
  axios
    .post("http://localhost:8000/api/login", {
      username: username.value,
      password: password.value,
    })
    .then((response) => {
      axios.defaults.withCredentials = true; // クッキーを送信する
      axios.defaults.headers.common["Authorization"] = response.data.sessioCn_id;
      console.log("response.dataの中身", response.data);
      reserves.value = response.data.reserves;
      state.reserves = response.data.reserves;
      sessionID = response.data.session_id;
      console.log("session_id:", sessionID);
      localStorage.setItem("authToken", sessionID);
      // check2();
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
      } else {
        console.log(error);
      }
      errorMessage.value = "ユーザー名またはパスワードが違います";
    });
};

// const check = () => {
//   return localStorage.getItem("authToken");
// }

const check2 = () => {
  console.log("トークンの中見", sessionID);
  axios.defaults.headers.common["x-session-id"] = sessionID;

  axios
    .get("http://localhost:8000/api/session")
    .then(function (response) {
      console.log("サーバーから受け取ったユーザーデータ:", response.data);
      MemberInformation = response.data;
    })
    .catch(function (error) {
      console.log("エラーが発生しました:", error);
    });
};

defineExpose({
  sessionID,
});
// import { useSessionStore } from "@/stores/session.js";
// import { onMounted } from "vue";


// const sessionStore = useSessionStore();

// onMounted(() => {
//   const authToken = localStorage.getItem("authToken");
//   console.log("authToken",authToken);
// })
// const pinia = () => {
//   const sessionA = sessionStore.sessionA;
//   console.log("果たして",sessionA);

// };
</script>
