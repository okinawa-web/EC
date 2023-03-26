<!-- ログインしている会員登録データをcookieを使ってこのページで読み込み、state.reservesに入れると、予約はありませんが予約日一覧になるはず -->

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { reactive, onMounted } from "vue";
import ReserveHeader from "@/components/reserve/ReaserveHeader.vue";

const state = reactive({
  reserves: null,
});

const username = ref("");
const password = ref("");
const reserves = ref("");

onMounted(async () => {
  axios
    .post("http://localhost:8000/api/login", {
      username: username.value,
      password: password.value,
    })
    .then((response) => {
      console.log("response.dataの中身", response.data.reserves);
      console.log("response.data.takenの中身", response.data.toke);
      reserves.value = response.data.reserves;
      state.reserves = response.data.reserves;
      // localStorage.setItem("token", response.data.token);
      // router.push("/TheReserve");
    })
    .catch((error) => {
      console.log(error.response.data);
      console.log(error);
    });
});
</script>
<template>
  <ReserveHeader />
  <!-- 実装できてそうなやつ -->
  <div>
    <h2>予約履歴</h2>
    <ul v-if="state.reserves !== null && state.reserves.length > 0">
      <li v-for="reserve in reserves" :key="reserve.id">
        {{ reserve.date }}
      </li>
    </ul>
    <p v-else>予約はありません</p>
  </div>
  <div class="login_title">予約内容確認｜HAMAJIMA LAND</div>
  <div class="login_wrapper">
    <div class="login_package">
      <div class="login_box">
        <h2>予約内容を確認されますか？</h2>
        <p>
          予約No. と E-mailアドレス を入力し「確認」ボタンをクリックして下さい。
          E-mailアドレスはアルファベットの大文字と小文字が区別されます。お間違えのないようご注意ください。Ï
        </p>
        <div class="login_form">
          <div class="login_form form">
            <table class="login_table">
              <tr>
                <th>予約No.</th>
                <td>
                  <input type="text" class="login_input" />
                </td>
              </tr>
              <tr>
                <th>予約時のE-mailアドレス</th>
                <td><input type="text" class="login_input" /></td>
              </tr>
            </table>
            <p class="forgot_password">
              <a href="">パスワードを忘れた場合</a>
            </p>
          </div>
          <ul class="ul_button">
            <li class="li_button">
              <input type="button" value="前の画面に戻る" class="back_button" />
            </li>
            <li class="li_button">
              <input type="button" value="確認" class="login_button" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.login_wrapper {
  width: 900px;
  font-size: 100%;
  margin: 0 auto;
  border: 1px solid #a0a0a0;
  padding: 0 20px;
}

.login_title {
  background-color: rgb(0, 83, 92);
  color: white;
  font-size: 115%;
  padding: 10px 18px 8px;
  width: 900px;
  margin: auto;
  border: 3px solid rgb(0, 83, 92);
}

.LOGIN {
  font-size: 143%;
  font-weight: bold;
  border-top: 3px solid #dcdcdc;
  border-bottom: 3px solid #dcdcdc;
  padding: 8px 15px;
  margin-top: 30px;
}

.logon_form {
  width: 70%;
}

.form {
  margin-top: 40px;
}
.login_table {
  margin: auto;
}

.login_input {
  width: 50px;
}
.forgot_password {
  text-align: center;
}

.li_button {
  display: inline;
}

.ul_button {
  width: 90%;
  text-align: center;
}

.back_button,
.login_button {
  border: 1px solid #a0a0a0;
  background-color: white;
  padding: 15px 35px;
  line-height: 1.2;
  border-radius: 3px;
  box-shadow: 0px 2px 2px #a0a0a0;
  cursor: pointer;
}

.login_button {
  background-color: rgb(0, 114, 114);
  color: white;
  margin-left: 15px;
}
</style>
