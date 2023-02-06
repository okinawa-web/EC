<template>
  <div class="hamajma">〜HAMAJIMA LAND〜</div>
  <div class="header_all">
    <div class="header_bar">
      <router-link to="/" class="header_link"> 予約の確認 </router-link>
      <router-link to="/" class="header_link"> 予約の変更 </router-link>
      <router-link to="/" class="header_link"> 予約のキャンセル </router-link>
    </div>
    <div class="login">
      <router-link to="/" class="header_link"> ログイン </router-link>
    </div>
  </div>
</template>

<style setup>
.header_all {
  display: flex;
}
.header_bar {
  background-color: darkgray;
  width: 900px;
  height: 35px;
  text-align: right;
}
.header_link {
  color: white;
  margin: auto 20px;
}
.login {
  background-color: rgb(14, 109, 130);
  width: 120px;
  text-align: center;
}
.hamajima {
  width: 1020px;
  text-align: right;
}
</style>
