<template>
  <Header />

  <PageTop :pagetitle="page" :subTitle="sub" :imageId="imageId" />
  <div class="about_text">
    <p class="about_text_font">~1日1組限定のプライベートヴィラ~</p>
    <p>オーシャンビューのオールプライベート空間。</p>
    <p>素敵なひとときをお過ごしください。</p>
  </div>

  <Privete />
  <Checkin />
  <Meals />
  <Activity />

  <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import PageTop from "@/components/PageTop.vue";
import Privete from "@/components/aboutrikyu/Rikyuprivetevilla.vue";
import Checkin from "@/components/aboutrikyu/Checkin.vue";
import Meals from "@/components/aboutrikyu/Meals.vue";
import Activity from "@/components/aboutrikyu/RikyuActivitys.vue";
import Footer from "@/components/Footer.vue";
import { ref, watch } from "vue";
import { useImageStore } from "@/stores/image.js";

//ページタイトル
const page = ref("About HAMAJIMA");

//画像
const imageId = ref("11");
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
const sub = ref("HAMAJIMAについて");
</script>

<style>
.about_text_font {
  font-size: 25px;
}
.about_text {
  text-align: center;
}
</style>
