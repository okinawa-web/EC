<template>
  <Header />
  <PageTop :pagetitle="page" :subTitle="sub" :imageId="imageId" />
  <div class="text">
    <p class="message">東洋一の絶景と称されるビーチリゾート</p>
    <p class="detail">
      白い砂浜と輝くコバルトブルーの海。
      1年を通して温暖な気候と美しい自然が残るこの島で最上の島時間をお過ごしください。
    </p>
  </div>
  <div class="comp">
    <Bridge />
  </div>
  <div class="comp">
    <Mangrove />
  </div>
  <div class="comp">
    <Beach />
  </div>
  <Footer />
</template>

<script setup>
import { ref, watch } from "vue";
import { useImageStore } from "@/stores/image.js";
import Header from "@/components/Header.vue";
import PageTop from "@/components/PageTop.vue";
import Bridge from "../components/activity/Bridge.vue";
import Mangrove from "../components/activity/Mangrove.vue";
import Beach from "../components/activity/Beach.vue";
import Footer from "@/components/Footer.vue";

//ページタイトル
const page = ref("Activity");

//画像
const imageId = ref("3");
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
const sub = ref("アクティビティ");
</script>

<style>
.text {
  color: darkgray;
  text-align: center;
  padding: 6%;
  font-size: 20px;
}
/* .message {
  font-size: 16px;
} */
.detail {
  font-size: 16px;
}
.comp {
  margin: 7%;
}
</style>
