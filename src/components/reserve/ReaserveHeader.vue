<template>
  <div>
    <h1 class="HAMAJIMA">
      ようこそ、 {{ User && User.name ? User.name : "ゲスト" }} 様
    </h1>
    <h1 class="HAMAJIMA">〜HAMAJIMA☆LAND〜</h1>
    <div class="header">
      <div class="reserve_header">
        <ul class="header_link">
          <li class="reserve_link">
            <a href="/comfirm" class="reserve_color">予約の確認</a>
          </li>
          <li class="reserve_link">
            <a href="/cansel" class="reserve_color">予約のキャンセル</a>
          </li>
          <li class="mypage">
            <a href="/mypage" class="reserve_color">会員情報</a>
          </li>
          <li v-if="loginSuccess" class="reserve_link">
            <a href="/logout" class="reserve_color" @click.prevent="logout"
              >ログアウト</a
            >
          </li>
          <li v-else class="reserve_link">
            <a href="/login" class="reserve_color">ログイン</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useSessionStore } from "@/stores/session.js";
import axios from "axios";
const sessionStore = useSessionStore();

const User = ref(null);
onMounted(async () => {
  await sessionStore.piniabetu();
  console.log("userData!!!!", sessionStore.userData.user.name);
  User.value = sessionStore.userData.user;
});

const logout = () => {
  axios
    .post("http://localhost:8000/api/logout")
    .then(() => {
      localStorage.setItem("authToken", null); // ログアウトが成功した場合はnullにする
      console.log(
        "確認",
        localStorage.getItem("authToken") !== null &&
          localStorage.getItem("authToken") !== "null"
      ); //ログアウト時はfalseが返ってくる

      User.value = null;
      console.log(User.value);
      console.log("ログアウト完了");
      location.reload(); // ログアウト後にページを再読み込みする
    })
    .catch((error) => {
      console.log(error);
    });
};

const loginSuccess = computed(() => {
  const authToken = localStorage.getItem("authToken");
  return authToken !== null && authToken !== "null";
});

console.log("loginSuccessの結果", loginSuccess.value);
</script>

<style>
.HAMAJIMA {
  width: 90%;
  margin: auto;
  text-align: right;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
}
.reserve_header {
  background-color: rgb(65, 65, 65);
  color: white;
  width: 80%;
}

.header_div {
  background-color: rgb(34, 167, 154);
  display: flex;
  width: 10%;
  padding: 5px 0;
  justify-content: center;
}
.header_div ul {
  text-align: center;
  /* height: 100%; */
}

.header_link {
  display: flex;
  text-align: right;
  justify-content: flex-end;
  align-items: center;
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 5px;
}

.reserve_color {
  color: white;
  text-align: center;
}

.reserve_link {
  margin: 10px 20px;
  padding-inline-start: 0;
  text-align: center;
}

.reserve_link_login {
  margin: 10px 20px;
  text-align: center;
}
</style>
