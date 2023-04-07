<template>
  <Header />
  <PageTop :pagetitle="page" :subTitle="sub" :imageId="imageId" />
  <div class="acsses">
    <Googlemap />
    <!-- <p class="start">浜島空港</p>
    <p class="center">----お車で20分🚕💨----</p>
    <p class="goal">HAMAJIMA LAND</p> -->
  </div>
  <Footer />
</template>

<script setup>
import Header from "../components/Header.vue";
import PageTop from "@/components/PageTop.vue";
import Googlemap from "@/components/access/Googlemap.vue";
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

<style>
.acsses {
  display: flex;
  color: black;
  font-size: 30px;
  text-align: center;
  justify-content: space-between;
}
/* .start,
.goal {
  background-color: rgb(246, 210, 143);
  width: 20%;
}
.start {
  margin-left: 10%;
}
.goal {
  margin-right: 10%;
} */

@media (max-width: 768px) {
  .acsses {
    display: flex;
    color: black;
    font-size: 15px;
    text-align: center;
  }
}
</style>
