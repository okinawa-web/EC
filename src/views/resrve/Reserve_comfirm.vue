<!-- ログインしている会員登録データをcookieを使ってこのページで読み込み、state.reservesに入れると、予約はありませんが予約日一覧になるはず -->

<script setup>
import { ref } from "vue";
import { reactive, onMounted } from "vue";
import ReserveHeader from "@/components/reserve/ReaserveHeader.vue";
import { useSessionStore } from "@/stores/session.js";

const sessionStore = useSessionStore();

const state = reactive({
  reserves: [],
});

const User = ref([]);

onMounted(async () => {
  await sessionStore.piniabetu();
  console.log("userData!!!!", sessionStore.userData.user.name);
  User.value = sessionStore.userData.user;
  state.reserves = sessionStore.userData.user.reserves;
});
</script>
<template>
  <ReserveHeader />
  <div class="login_title">予約内容確認｜HAMAJIMA LAND</div>
  <div class="login_wrapper">
    <div class="login_package">
      <div class="login_box">
        <h2>予約履歴</h2>
        <p>現在予約している一覧です</p>
        <ul v-if="state.reserves !== null && state.reserves.length > 0">
          <li v-for="reserve in state.reserves" :key="reserve.id" class="reservespace">
            <p>予約日：{{ new Date(reserve.date).toLocaleDateString() }}</p>
            <!-- {{ reserve.date }} -->
            <p v-if="state.reserves.some((reserve) => reserve.roomId === 1)">
              部屋名：Room 201
            </p>
            <p>予約人数：{{ reserve.reservePeople }}名</p>
          </li>
        </ul>
        <p v-else>予約はありません</p>
      </div>
    </div>
  </div>
</template>
<style>
.reservespace {
  margin: 60px auto;
  width: 85%;
}
.login_wrapper {
  max-width: 80%;
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
  width: 80%;
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
  max-width: 70%;
}

.form {
  margin-top: 40px;
}
.login_table {
  margin: auto;
}

.login_input {
  max-width: 50px;
}
.forgot_password {
  text-align: center;
}

.li_button {
  display: inline;
}

.ul_button {
  max-width: 90%;
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
