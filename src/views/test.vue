<template>
  <h1>会員登あああ録</h1>

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
import { ref, onMounted } from "vue";
import axios from "axios";

const members = ref([]);
const member = ref("");
const name = ref("");
const address = ref("");
const tel = ref("");
const email = ref("");

//axios データ取得OK
onMounted(() => {
  axios
    .get("http://localhost:8000/member")
    .then((res) => {
      console.log("ステータス:", res.status); 
      console.log("ボディ：", res.data);
    })
    .catch((err) => {
      console.log("エラー：", err);
    });
});

//axios データ送信
// onMounted(() => {
//   const newMember = {
//     name: "新しい人です",
//     address: "NAGOYA",
//     tel: "09044445555",
//     email: "newOK@test.com",
//   };
//   axios
//     .post("http://localhost:8000/member", newMember)
//     .then((res) => {
//       console.log("NEWメンバー:", res.newMember);
//     })
//     .catch((err) => console.log("エラーです", err));
// });

// const addMember = () => {
//   members.value.push({
//     name: name.value,
//     address: address.value,
//     tel: tel.value,
//     email: email.value,
//   });
//   member.value = "";
// };

//Member削除メソッド
// const deleteMember = (id) => {
//   const index = members.value.findIndex((member) => member.id === id);
//   members.value.splice(index, 1);
// };
</script>
