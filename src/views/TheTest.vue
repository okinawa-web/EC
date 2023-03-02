<template>
  <h1>会員登録のページ</h1>
  <button @click="test">test</button>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const member = ref([]);

const test = () => {
  // axios
  //   .get("/member")
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log("エラー：", err);
  //   });
  axios
    .get("/member")
    .then((res) => {
      console.log(res);
      // console.log("ステータス:", res.status);
      // console.log("ボディ：", res.data);
    })
    .catch((err) => {
      console.log("エラー：", err);
    });
};

onMounted(() => {
  axios
    .get("http://localhost:8001/member")
    .then((res) => {
      console.log(res);
      // console.log("ステータス:", res.status);
      // console.log("ボディ：", res.data);
    })
    .catch((err) => {
      console.log("エラー：", err);
    });
  return { member };
});
</script>
