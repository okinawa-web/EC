<template>
  <p>画像表示チェック</p>
  {{ Image }}
</template>

<script>
// import { ref } from 'vue';
// import axios from "axios";
// import { getStorage, ref } from "firebase/storage";

// const storage = getStorage();
// const imageRef = ref(storage, "images");
// const spaceRef = ref(storage, "images/bbq.jpg");

// console.log("こんにちは", imageRef);
// console.log("こんばんは", spaceRef);

import http from "../http-common";

class Image {
  getAll() {
    return http.get("/");
  }
  get(id) {
    return http.get(`/${id}`);
  }
}

export default new Image();

console.log("画像", Image);
</script>
