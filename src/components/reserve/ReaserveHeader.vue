<!-- <script setup>
import { sessionID } from "../../views/resrve/Login.vue";
import axios from "axios";


const check2 = () => {
  console.log("トークンの中見", sessionID);
  axios.defaults.headers.common["x-session-id"] = sessionID;
  axios
    .get("http://localhost:8000/api/session")
    .then(function (response) {
      console.log("サーバーから受け取ったユーザーデータ:", response.data);
      // MemberInformation.value = response.data;
    })
    .catch(function (error) {
      console.log("エラーが発生しました:", error);
    });
};
</script> -->

<template>
  <div class="HAMAJIMA">〜HAMAJIMA☆LAND〜</div>
  <div class="header">
    <div class="reserve_header">
      <ul class="header_link">
        <li class="reserve_link">
          <a href="/comfirm" class="reserve_color">予約の確認</a>
        </li>
        <li class="reserve_link">
          <a href="/cansel" class="reserve_color">予約のキャンセル</a>
        </li>
      </ul>
    </div>
    <div class="header_div" v-if="!loginSuccess">
      <ul class="reserve_link">
        <li><a href="/login" class="reserve_color">ログイン</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const loginSuccess = computed(() => {
  return localStorage.getItem("authToken") !== null;
})
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
