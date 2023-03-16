<template>
  <Header />
  <!-- <img src="/src/assets/map.jpg" alt="">
  <img src="/src/assets/access.jpg" alt=""> -->
  <PageTop :pagetitle="page" :subTitle="sub" :imageId="imageId" />
  <Footer />
</template>

<script setup>
import Header from "../components/Header.vue";
import PageTop from "@/components/PageTop.vue";
import Footer from "../components/Footer.vue";
import { ref, watch } from "vue";
import { useImageStore } from "@/stores/image.js";

//ページタイトル
const page = ref("Access");

//画像
const imageId = ref("49");
const store = useImageStore();
watch(
  () => imageId.value,
  async (newValue) => {
    try {
      await store.loadImage(newValue);
    } catch (error) {
      console.log(`画像取得失敗:${error}`);
    }
  }
);

//サブタイトル
const sub = ref("アクセス");
</script>
