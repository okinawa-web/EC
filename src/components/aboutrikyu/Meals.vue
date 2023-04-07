<template>
  <AboutRikyuParts
    :aboutTitle="parts"
    :subTitle="sub"
    :messages="msg"
    :comments="cmnt"
    :imageIds="imageIds"
  />
</template>

<script setup>
import { ref } from "vue";
import AboutRikyuParts from "@/components/aboutrikyu/AboutRikyuParts.vue";
// import { useImageStore } from "@/stores/image.js";

//ページタイトル
const parts = ref("Meals");

//サブタイトル
const sub = ref("お食事");

//キャッチコピー
const msg = ref("リゾートパーティもテラスBBQも思いのままに");

//説明
const cmnt = ref(
  "お部屋に備えた本格的なキッチンには、調理用具や食器、オーブンレンジなども完備。近くの市場で地元の食材や島野菜を好きなように調理していただけます。"
);

//画像
// imageIdsに画像のIDを配列で指定する
const imageIds = ref(["10"]);
</script>
