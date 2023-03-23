<template>
  <AboutRikyuParts2
    :aboutTitle="parts"
    :subTitle="sub"
    :messages="msg"
    :comments="cmnt"
    :imageIds="imageIds"
  />
  <!-- <BasicButton :link="site" :linkName="siteName" class="link_btn" /> -->
</template>

<script setup>
import { ref, watch } from "vue";
import AboutRikyuParts2 from "@/components/aboutrikyu/AboutRikyuParts.vue";
import BasicButton from "@/components/button/BasicButton.vue";
// import { useImageStore } from "@/stores/image.js";

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
// imageIdsに画像のIDを配列で指定する
const imageIds = ref(["17"]);

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
