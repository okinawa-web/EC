<template>
  <h2>画像表示チェック</h2>
  <!-- <button @click="test">PUSH</button> -->
  <img :src="imageURL" alt="Image" />
  <img :src="'http://example.com/images/' + path" alt="Image">
  <!--ここで、http://example.com/images/は画像ファイルが保存された場所のURLであり、
    pathはMySQLから取得された画像パスです-->

</template>

<script setup>
import firebase from "../firebase/firebase";
import { ref as storageRef, getDownloadURL } from "firebase/storage";
import { onMounted, ref } from "vue";
import axios from "axios";

const imageURL = ref("");
// 画像のダウンロードURLを取得
const getImageURL = async () => {
  const firebaseRef = storageRef(
    firebase,
    "gs://okinawa-vue.appspot.com/HAMAJIMAlogo.jpg"
  );
  const url = await getDownloadURL(firebaseRef);
  imageURL.value = url;
  console.log("画像URL", url);
};
getImageURL();


//APIで取得した画像たち
const imagePaths = ref([]);
const API_URL = "http://localhpst:8000/image";
const getImagePaths = async () => {
  try {
    const res = await axios.get(API_URL);
    if (res.status === 200) {
      imagePaths.value = res.data;
      console.log("取得", res);
    }
  } catch (err) {
    console.error("エラー", err);
  }
};
onMounted(() => {
  getImagePaths();
});

// const test = () => {
//   const firebaseRef = storageRef(
//     firebase,"gs://okinawa-vue.appspot.com/HAMAJIMAlogo.jpg");
//   getDownloadURL(firebaseRef).then((url) => {console.log("画像URL", url);}).catch((err) => console.log(err));}
</script>
