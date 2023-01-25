<template>
  <AboutRikyuParts2
    :aboutTitle="parts"
    :subTitle="sub"
    :messages="msg"
    :comments="cmnt"
    :img01="pic01"
    :img02="pic02"
    :img03="pic03"
  />
</template>

<script setup>
import { ref } from "vue";
import AboutRikyuParts2 from "@/components/aboutrikyu/AboutRikyuParts2.vue";

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
const pic01 = ref("sisa.jpg");
const pic02 = ref("umigame.jpg");
const pic03 = ref("yuuhi.jpg");
</script>
