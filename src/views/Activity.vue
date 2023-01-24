<template>
  <PageTop :pagetitle="page" :image="pic" :subTitle="sub"/>
</template>

<script setup>
import { ref } from "vue";
import PageTop from "@/components/PageTop.vue";

//ページタイトル
const page = ref("Activity");

//画像
const pic = ref("umigame.jpg");

//サブタイトル
const sub = ref("アクティビティ");

</script>
