<template>
  <h1>会員登録</h1>
  <ul>
    <li v-for="member in members" :key="member.id">
      <span>名前<input type="text" v-model="member.name" /></span>
      <span>{{ member.name }}</span>
    </li>
  </ul>
  <form @submit.prevent="addMember">
    <div>
      <input v-model="member" />
    </div>
    <div>
      <button type="submit" @click="getMembers">会員登録</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import axios from "axios";

const members = ref([]);
const member = ref("");
const name = ref("");
const address = ref("");
const tel = ref("");
const email = ref("");

//fetch
// const getMembers = async () => {
//   const response = await fetch("http://localhost:8000/member");
//   const memberData = await response.json();
//   members.value = memberData;
// };

//axios
onMounted(() => {
  axios
    .get("http://localhost:8000/")
    .then((res) => {
      console.log("ステータス:", res.status);
      console.log("ボディ：", res.data);
    })
    .catch((err) => {
      console.log("エラー：", err);
    });
});

const addMember = () => {
  members.value.push({
    name: name.value,
    address: address.value,
    tel: tel.value,
    email: email.value,
  });
  member.value = "";
};

//Member削除メソッド
// const deleteMember = (id) => {
//   const index = members.value.findIndex((member) => member.id === id);
//   members.value.splice(index, 1);
// };
</script>
