<script setup>
import ReserveHeader from "@/components/reserve/ReaserveHeader.vue";
import { useSessionStore } from "@/stores/session.js";
import axios from "axios";
import { reactive, onMounted, ref } from "vue";

const sessionStore = useSessionStore();

const state = reactive({
  reserves: [],
});

const User = ref([]);

onMounted(async () => {
  await sessionStore.piniabetu();
  console.log("userData!!!!", sessionStore.userData.user.name);
  if (sessionStore.userData.user !== null) {
    User.value = sessionStore.userData.user;
    state.reserves = sessionStore.userData.user.reserves;
  }
});

const cansel = (id) => {
  axios.delete(`http://localhost:8000/api/delete/${id}`, { data: { id: id } })
    .then((response) => {
      console.log("削除できた");
      console.log(response.data);
    })
    .catch((error) => {
      console.log("削除できない");
      console.error(error);
    });
};
  
const reserves = ref("");
let sessionID = "";


const cansellogin = () => {
  axios
    .post("http://localhost:8000/api/login", {
      username: User.value.email,
      password: User.value.password
    })
    .then((response) => {
      axios.defaults.withCredentials = true; // クッキーを送信する
      axios.defaults.headers.common["Authorization"] = response.data.sessioCn_id;

      console.log("response.dataの中身", response.data);
      reserves.value = response.data.user.reserves;
      state.reserves = response.data.user.reserves;
      sessionID = response.data.session_id;
      console.log("session_id:", sessionID);
      localStorage.setItem("authToken", sessionID);
      location.reload();

      // check2();
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
      } else {
        console.log(error);
      }
    });
};

</script>
<template>
  <ReserveHeader />
  <div class="login_title">予約内容キャンセル｜HAMAJIMA LAND</div>
  <div class="login_wrapper">
    <div class="login_package">
      <div>
        <h2>予約内容をキャンセルされますか？</h2>
        <p>「キャンセル手続き」ボタンをクリックして下さい。</p>
        <ul v-if="state.reserves !== null && state.reserves.length > 0">
          <li
            v-for="reserve in state.reserves"
            :key="reserve.id"
            class="reservespace"
          >
            <p>予約日：{{ new Date(reserve.date).toLocaleDateString() }}</p>
            <!-- {{ reserve.date }} -->
            <p v-if="state.reserves.some((reserve) => reserve.roomId === 1)">
              部屋名：Room 101
            </p>
            <p>予約人数：{{ reserve.reservePeople }}名</p>
            <button @click="cansel(reserve.id)">キャンセル手続きを行う</button>
            <button @click="cansellogin(reserve.id)">確定</button>
          </li>
        </ul>
        <p v-else>予約はありません</p>
      </div>
    </div>
  </div>
</template>

<style>

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


</style>
