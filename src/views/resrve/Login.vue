<template>
  <button @click="getLoginUser">ゲットログインユーザー</button>
  <button @click="check">ログインチェックcheck</button>
  <button @click="check2">認証トークンチェックcheck2</button>
  <button @click="session">セッションデータチェックsession</button>

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
    <p v-if="errorMessage">{{ errorMessage }}</p>
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
import { reactive, onMounted } from "vue";

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

onMounted(async () => {
  console.log("axiosのデフォルト", axios.defaults);
  console.log("withCredentialsの設定", axios.defaults.withCredentials);
});

// axios.interceptors.request.use(
//   function (config) {
//     console.log("リクエストの詳細", config); // リクエストの詳細を表示
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

const getLoginUser = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/TheReserve", {
      withCredentials: true, // クッキーを送信する
    });
    console.log("RESPONSEデータ", response.data);
  } catch (error) {
    console.log("セッション持って来れてない????", error);
  }
};

let sessionID = "";

const login = () => {
  axios
    .post("http://localhost:8000/api/login", {
      username: username.value,
      password: password.value,
    })
    .then((response) => {
      axios.defaults.withCredentials = true; // クッキーを送信する
      axios.defaults.headers.common["Authorization"] = response.data.session_id;
      console.log("response.dataの中身", response.data);
      reserves.value = response.data.reserves;
      state.reserves = response.data.reserves;
      // localStorage.setItem("token", response.data.token);
      sessionID = response.data.session_id;
      console.log("session_id:", sessionID);
      console.log("session_id:", response.data.user.email);
      // router.push("/TheReserve");
      localStorage.setItem("authToken", sessionID);
    })
    .catch((error) => {
      console.log(error.response.data);
      console.log(error);
      errorMessage.value = "ユーザー名またはパスワードが違います";
    });
};

const check = () => {
  return localStorage.getItem("authToken");
}

const check2 = () => {
  const sessionID = check();
  console.log("トークンの中見", sessionID);
  axios.defaults.headers.common["x-session-id"] = sessionID;
  axios
    .get("http://localhost:8000/api/session")
    .then(function (response) {
      console.log("サーバーから受け取ったユーザーデータ:", response.data);
    })
    .catch(function (error) {
      console.log("エラーが発生しました:", error);
    });
};


const session = () => {
  axios
    .get("http://localhost:8000/api/session")
    .then((response) => {
      const sessionData = response.data;
      // 取得したセッション情報を利用する
      console.log("セッションデータ", sessionData);
    })
    .catch((error) => {
      console.error(error);
    });
};
</script>
