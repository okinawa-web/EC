<template>
  <h1>会員登録のページ</h1>
  <div>
    <button @click="test">test</button>
  </div>
  <ul>
    <li v-for="member in members" :key="member.id">
      <p>{{ member.name }}</p>
      <p>{{ member.email }}</p>
    </li>
  </ul>
  <div>
    <form @submit.prevent="addMember">
      <label>名前:</label>
      <input type="text" v-model="form.name" required />
      <label>住所:</label>
      <input type="text" v-model="form.address" required />
      <label>電話番号:</label>
      <input type="text" v-model="form.tel" required />
      <!-- <label>登録日:</label>
      <input type="date" v-model="form.registerDate" required /> -->
      <label>メールアドレス:</label>
      <input type="email" v-model="form.email" required />
      <button type="submit">追加</button>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref, reactive } from "vue";

const members = ref([]);

const form = reactive({
  name: "",
  address: "",
  tel: "",
  email: "",
  registerDate: new Date().toISOString(),
});

const addMember = () => {
  axios
    .post("/member", form)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

onMounted(() => {
  axios
    .get("/member")
    .then((res) => {
      console.log(res);
      members.value = res.data;
      console.log("ステータス:", res.status);
      console.log("ボディ：", res.data);
    })
    .catch((err) => {
      console.log("エラー：", err);
    });
});
</script>
