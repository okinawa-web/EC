
<!-- <template>
  <div>
    <h2>Users</h2>
    <ul v-if="state.users !== null && state.users.length > 0">
      <li v-for="user in state.users" :key="user.name">
        {{ user.name }}
      </li>
    </ul>
    <p v-else>Loading...</p>

<script setup>
import ReserveHeader from "@/components/reserve/ReaserveHeader.vue";
</script>
<template>
  <ReserveHeader />
  <div class="login_title">マイページログイン｜HAMAJIMA LAND</div>
  <div class="login_wrapper">
    <div class="login_package">
      <div class="login_box">
        <p>
          マイページでは、予約情報の確認、会員情報の変更、退会手続きが行えます。
          ご登録済みのＩＤ(メールアドレス)、パスワードを入力して、「ログイン」ボタンをクリックしてください。
          E-mailアドレスはアルファベットの大文字と小文字が区別されます。お間違えのないようご注意ください。
        </p>
        <p class="LOGIN">ログイン</p>
        <div class="login_form">
          <div class="login_form">
            <table class="login_table">
              <tr>
                <th>ご登録メールアドレス</th>
                <td>
                  <input type="text" class="login_input" />
                </td>
              </tr>
              <tr>
                <th>パスワード</th>
                <td><input type="text" class="login_input" /></td>
              </tr>
            </table>
            <p class="forgot_password">
              <a href="">パスワードを忘れた場合</a>
            </p>
            <p class="forgot_password">
              <a href="/MemberRegistration">会員登録はこちら</a>
            </p>
          </div>
          <ul class="ul_button">
            <li class="li_button">
              <input type="button" value="前の画面に戻る" class="back_button" />
            </li>
            <li class="li_button">
              <input type="button" value="ログイン" class="login_button" />
            </li>
          </ul>
        </div>
      </div>
    </div>
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
        Username:
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
