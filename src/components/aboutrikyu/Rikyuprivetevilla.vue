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
  <BasicButton :link="site" :linkName="siteName" class="link_btn" />
</template>

<script setup>
import { ref } from "vue";
import AboutRikyuParts2 from "@/components/aboutrikyu/AboutRikyuParts2.vue";
import BasicButton from "@/components/button/BasicButton.vue";

//ページタイトル
const parts = ref("Private Villa");

//サブタイトル
const sub = ref("プライベートヴィラ");

//キャッチコピー
const msg = ref("時間を忘れくつろぐ自分たちだけの上質な空間");

//説明
const cmnt = ref(
  "広々としたリビングルームとプライベートプール。各棟には本格キッチンを備えておりますのでリゾートパーティーを愉しめる他、テラスではBBQもお愉しみいただけます。"
);

//画像
const pic01 = ref("room.jpg");
const pic02 = ref("room2.webp");
const pic03 = ref("room3.jpg");

//リンク
const site = ref("rooms");

//リンク先の名前
const siteName = ref("Room");
</script>

<style>
.link_btn {
  position: absolute;
  left: 3%;
  top: 85%;
}
</style>
