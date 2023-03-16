<template>
  <AboutRikyuParts
    :aboutTitle="parts"
    :subTitle="sub"
    :messages="msg"
    :comments="cmnt"
    :imageIds="imageIds"
  >
  </AboutRikyuParts>
</template>

<script setup>
// import { ref, watch } from "vue";
// import AboutRikyuParts from "@/components/aboutrikyu/AboutRikyuParts.vue";
// import { useImageStore } from "@/stores/image.js";
import { ref } from "vue";
import AboutRikyuParts from "@/components/aboutrikyu/AboutRikyuParts.vue";

//ページタイトル
const parts = ref("Check in");

//サブタイトル
const sub = ref("チェックイン");

//キャッチコピー
const msg = ref("オープンフロントでスムーズチェックイン");

//説明
const cmnt = ref(
  "フロントにてご宿泊者カードをご記入後、当スタッフがお部屋までご案内いたします。また、荷物のお預かりなど御用の際はお気軽にお声かけください。"
);

//画像
// imageIdsに画像のIDを配列で指定する
const imageIds = ref(["5", "6", "7"]);
</script>
