<script setup>
import axios from "axios";

axios.defaults.withCredentials = true;

const getLoginUser = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/TheReserve", {
      withCredentials: true // クッキーを送信する
    });
    console.log("RESPONSEデータ", response.data);
  } catch (error) {
    console.log("セッション持って来れてない！！", error);
  }
};


</script>

<template>
  <div class="HAMAJIMA">〜HAMAJIMA☆LAND〜</div>
  <button @click="getLoginUser">ゲットログインユーザー</button>
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
    <div class="header_div">
      <ul class="reserve_link">
        <li><a href="/login" class="reserve_color">ログイン</a></li>
      </ul>
    </div>
  </div>
</template>

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
