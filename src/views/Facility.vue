<!-- <template>
  <p>客室設備・アメニティ</p>
</template> -->

<template>
  <Header />
  <PageTop :pagetitle="page" :imageId="imageId" :subTitle="sub" />
  <div>
    <p class="facirity_msg">
      当ヴィラには、快適にご滞在いただけるような多彩な設備・備品、
    </p>
    <p class="facirity_msg">アメニティをご用意しております。</p>
  </div>
  <Kithen />
  <FreeService />
  <PaydService />
  <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Kithen from "@/components/roomFacility/Kitchenware.vue";
import FreeService from "@/components/roomFacility/FreeService.vue";
import PaydService from "@/components/roomFacility/PaidService.vue";
import PageTop from "@/components/PageTop.vue";
import { ref, watch } from "vue";
import { useImageStore } from "@/stores/image.js";

//ページタイトル
const page = ref("Room Facilities");

//サブタイトル
const sub = ref("客室設備・アメニティ");

//画像
const imageId = ref("4");
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


</script>

<style>
.facirity_msg {
  text-align: center;
}
</style>
