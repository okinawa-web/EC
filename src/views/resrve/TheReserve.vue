<template>
  <ReserveHeader />
  <div class="reserveBox">
    <div>
      <h1>予約フォーム</h1>
    </div>
    <div>
      <!-- prevent＝ボタン押した後も画面更新しない -->
      <form @submit.prevent="addReserve">
        <label>予約人数</label>
        <select name="reserveNumber" v-model="form.reservePeople">
          <option value="1">1人</option>
          <option value="2">2人</option>
          <option value="3">3人</option>
          <option value="4">4人</option>
          <option value="5">5人</option>
        </select>
        <input type="date" v-model="form.date" />
        <button type="submit">予約</button>
      </form>
    </div>
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

const sessionStore = useSessionStore();

const User = ref(null);
onMounted(async () => {
  await sessionStore.piniabetu();
  console.log("userData!!!!", sessionStore.userData.user.id);
  User.value = sessionStore.userData.user;
});

const form = reactive({
  reservePeople: "",
  date: "",
});
const addReserve = async () => {
  const { reservePeople, date } = form;
  const memberId = User.value.id;
  const roomId = 1;
  console.log("会員ID!", User.value.id);
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
};

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
</style>
