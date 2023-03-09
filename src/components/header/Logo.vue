<template>
  <p class="logo">
    <router-link to="/" class="zero">
      <img src="@/assets/HAMAJIMAlogo.jpg" alt="logo" class="logo" />
      <!-- <img :src="imageURL" alt="image" /> -->
    </router-link>
  </p>
</template>

<!-- <script setup>
import { useImageStore } from "@/store/image.js";

const store = useImageStore();

// imageIdを指定して画像を読み込む
store.loadImage("imageId");

const imageURL = store.imageURL;
</script> -->

<style>
.logo {
  margin: 0;
  margin-right: 0%;
  width: auto;
  height: 100%;
}
.zero {
  margin: 0%;
  padding: 0%;
}
</style>
