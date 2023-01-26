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
  <!-- <div class="movie">
      <video src="src/assets/umidouga.mp4"></video>
    </div> -->
  <BasicButton :link="site" :linkName="siteName" class="link_btn" />
</template>

<script setup>
import { ref } from "vue";
import AboutRikyuParts2 from "@/components/aboutrikyu/AboutRikyuParts2.vue";
import BasicButton from "@/components/button/BasicButton.vue";

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
const pic01 = ref("div.jpg");
const pic02 = ref("jangul.jpg");
const pic03 = ref("sup1.jpg");

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
/* .movie{
      position: absolute;
  } */
</style>
