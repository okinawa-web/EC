<!-- <template>
  <div>
    <h2>Users</h2>
    <ul v-if="state.users !== null && state.users.length > 0">
      <li v-for="user in state.users" :key="user.name">
        {{ user.name }}
      </li>
    </ul>
    <p v-else>Loading...</p>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import axios from "axios";

const state = reactive({
  users: null,
});

onMounted(async () => {
  const response = await axios.get("http://localhost:8000/api/users");
  state.users = response.data;
});
</script> -->

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
    <h2>Users</h2>
    <ul v-if="state.users !== null && state.users.length > 0">
      <li v-for="user in state.users" :key="user.name">
        {{ user.name }}
      </li>
    </ul>
    <p v-else>Loading...</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { reactive, onMounted } from "vue";

const state = reactive({
  users: null,
});

const username = ref("");
const password = ref("");
const errorMessage = ref("");

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
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      router.push("/");
    })
    .catch((error) => {
      console.log(error.response.data);
      console.log(error);
      errorMessage.value = "ユーザー名またはパスワードが違います";
    });
};
</script>
