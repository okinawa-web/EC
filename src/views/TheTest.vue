<!-- <template>
  <p>こんにちは</p>
</template> -->

<template>
  <Header />
  <PageTop :pagetitle="page" :image="pic" :subTitle="sub" />
  <!-- <Amenities /> -->
  <!-- <Kithen /> -->
  <!-- <FreeService /> -->
  <PaydService />
  <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Kithen from "@/components/roomFacility/Kitchenware.vue";
import Amenities from "@/components/roomFacility/Amenityies.vue";
import FreeService from "@/components/roomFacility/FreeService.vue";
import PaydService from "@/components/roomFacility/PaidService.vue";
import PageTop from "@/components/PageTop.vue";
import { ref } from "vue";
//ページタイトル
const page = ref("Room Facilities");

//画像
const pic = ref("room.jpg");

//サブタイトル
const sub = ref("客室設備・アメニティ");
</script>
