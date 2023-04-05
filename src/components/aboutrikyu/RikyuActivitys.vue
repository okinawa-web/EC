<template>
  <AboutRikyuParts
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
import AboutRikyuParts from "@/components/aboutrikyu/AboutRikyuParts.vue";
import BasicButton from "@/components/button/BasicButton.vue";
// import { useImageStore } from "@/stores/image.js";

//ページタイトル
const parts = ref("Activities");

//サブタイトル
const sub = ref("アクティビティ");

//キャッチコピー
const msg = ref("大自然に癒され神秘的な景色に魅了される");

//説明
const cmnt = ref(
  "日常では感じることの少ない大自然に癒される神秘的な空間。透き通る海、澄み渡る森、夜空には手の届きそうな満点の星空。大自然を満喫できる絶景スポットをお愉しみください"
);

//画像
// imageIdsに画像のIDを配列で指定する
const imageIds = ref(["12"]);

//リンク
const site = ref("activity");

//リンク先の名前
const siteName = ref("Activity");
</script>

<style>
.link_btn {
  position: absolute;
  left: 3%;
  top: 85%;
}
</style>
