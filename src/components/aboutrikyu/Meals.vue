<template>
  <AboutRikyuParts
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
import AboutRikyuParts from "@/components/aboutrikyu/AboutRikyuParts.vue";

//ページタイトル
const parts = ref("Meals");

//サブタイトル
const sub = ref("お食事");

//キャッチコピー
const msg = ref("リゾートパーティもテラスBBQも思いのままに");

//説明
const cmnt = ref(
  "お部屋に備えた本格的なキッチンには、調理用具や食器、オーブンレンジなども完備。近くの市場で地元の食材や島野菜を胃好きなように調理していただけます。"
);

//画像
const pic01 = ref("bbq.jpg");
const pic02 = ref("sakana.jpg");
const pic03 = ref("soba.jpg");
</script>

<style>
.link_btn {
  position: absolute;
  left: 3%;
  top: 85%;
}
</style>
