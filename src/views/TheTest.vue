<template>
  <div>
    <h1>予約フォーム</h1>
  </div>
  <div>
    <form @submit.prevent="addReserve">
      <label>予約人数</label>
      <select name="reserveNumber" v-model="form.reservePeople">
        <option value="1">1人</option>
        <option value="2">2人</option>
        <option value="3">3人</option>
        <option value="4">4人</option>
      </select>
      <input type="date" v-model="form.date" />
      <button type="submit" @click="getUsers">予約</button>
    </form>
  </div>
</template>
<script setup>
import { reactive } from "vue";

import axios from "axios";

const form = reactive({
  reservePeople: "",
  date: "",
});

const addReserve = async () => {
  const { reservePeople, date } = form;
  const memberId = 1; // 仮に1を指定
  const reserve = await axios.post("/reserve", {
    memberId: memberId,
    reservePeople: parseInt(reservePeople),
    date: new Date(date + "T10:00:00Z"),
  });
  console.log(reserve);
};
</script>
