<template>
  <p class="logo-image" v-if="imageLoaded">
    <!--画像の読み込みが完了するまで非表示-->
    <router-link to="/" class="header_zero">
      <img :src="imageURL" alt="logo" :key="imageURL" />
    </router-link>
  </p>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useImageStore } from "@/stores/image.js";

const imageStore = useImageStore();
const imageURL = ref("");
const imageLoaded = ref(false);

onMounted(async () => {
  try {
    await imageStore.loadImage("1"); //imageId指定
    imageURL.value = imageStore.imageURL;
    imageLoaded.value = true; //画像の読み込みが完了するとtrueになる
  } catch (error) {
    console.error(error);
  }
});
</script>

<style>
.logo-image img {
  width: 125%;
  height: 80px;
}

@media (max-width: 768px) {
  .logo-image img {
    width: 60%;
    height: auto;
  }
  /* .logo-image {
    width: auto;
  } */
}
</style>
