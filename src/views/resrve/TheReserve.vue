<template>
  <ReserveHeader />

  <div class="login_title">予約フォーム｜HAMAJIMA LAND</div>
  <div class="login_wrapper">
    <div class="login_package">
      <div >
        <h2>予約フォーム</h2>
        <p>予約人数を選択し予約ボタンを押してください。</p>
        <ul>
          <li class="reservespace">
            <div class="reserveForm">
              <!-- prevent＝ボタン押した後も画面更新しない -->
              <form @submit.prevent="addReserve">
                <label>予約人数：</label>
                <select name="reserveNumber" v-model="form.reservePeople">
                  <option value="" selected>選択してください</option>
                  <option value="1">1人</option>
                  <option value="2">2人</option>
                  <option value="3">3人</option>
                  <option value="4">4人</option>
                  <option value="5">5人</option>
                </select>
                <div>
                  <span>予約日：　</span>
                  <input type="date" v-model="form.date" />
                  <button type="submit">予約</button>
                </div>
              </form>

            </div>
            <VacancySearch />
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="reserveBox">
    <div></div>
  </div>
  <Footer />
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import ReserveHeader from "@/components/reserve/ReaserveHeader.vue";
import axios from "axios";
import { useSessionStore } from "@/stores/session.js";
import { useRoute } from "vue-router";
import Footer from "@/components/Footer.vue";
import VacancySearch from "@/components/reserve/VacancySearch.vue";

const sessionStore = useSessionStore();

const User = ref(null);
const errorMessage = ref("");

const form = reactive({
  reservePeople: "",
  date: "",
});
const addReserve = async () => {
  if (!form.reservePeople) {
    errorMessage.value = "予約人数を選択してください";
    return;
  }
  const { reservePeople, date } = form;
  const memberId = User.value?.id; //memberIdがnullの場合はundefinedを代入
  const roomId = 1;
  console.log("会員ID!", User.value?.id);
  if (!memberId) {
    alert("ログインしてください");
    return;
  }
  if (User.value) {
    try {
      const reserve = await axios.post("/reserve", {
        memberId: memberId,
        reservePeople: parseInt(reservePeople),
        date: new Date(date + "T10:00:00Z"),
        roomId: roomId,
      });
      console.log(reserve.data);
    } catch (error) {
      console.error(error);
    }
  }
};

onMounted(async () => {
  await sessionStore.piniabetu();
  console.log("userData!!!!", sessionStore.userData.user.id);
  User.value = sessionStore.userData.user;
});

const route = useRoute();
onMounted(() => {
  form.date = route.query.date;
});
</script>

<style>
.reserveBox {
  width: 90%;
  margin: auto;
  margin-bottom: 20%;
}

.reserveForm {
  font-size: 16px;
  width: 800px;
  margin: auto;
}

select[name="reserveNumber"] {
    font-size: 16px; /* 例として24pxに設定 */
  }
</style>
