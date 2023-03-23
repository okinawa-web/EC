<template>
  <p class="logo-image" v-if="imageLoaded">
    <!--画像の読み込みが完了するまで非表示-->
    <router-link to="/" class="zero">
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
.logo-image {
  /* max-width: 100%; */
  /* width: 25%; */
  margin: 0;
  height: auto;
}
.zero {
  margin: 0%;
  padding: 0%;
}
</style>
