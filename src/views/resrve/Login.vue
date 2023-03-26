<template>
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
  <div>
    <h2>予約履歴</h2>
    <ul v-if="state.reserves !== null && state.reserves.length > 0">
      <li v-for="reserve in reserves" :key="reserve.id">
        {{ reserve.date }}
      </li>
    </ul>
    <p v-else>予約はありません</p>
  </div>
  <a href="/TheReserve">aaaaa</a>
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

onMounted(async () => {
  const response = await axios.get("http://localhost:8000/api/users");
  state.users = response.data;
});

axios.interceptors.request.use(
  function (config) {
    console.log(config); // リクエストの詳細を表示
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const login = () => {
  axios
    .post("http://localhost:8000/api/login", {
      username: username.value,
      password: password.value,
    })
    .then((response) => {
      console.log("response.dataの中身", response.data.reserves);
      console.log("response.dataの中身", response.data);
      reserves.value = response.data.reserves;
      state.reserves = response.data.reserves;
      // localStorage.setItem("token", response.data.token);
      // router.push("/TheReserve");
    })
    .catch((error) => {
      console.log(error.response.data);
      console.log(error);
      errorMessage.value = "ユーザー名またはパスワードが違います";
    });
};
</script>
