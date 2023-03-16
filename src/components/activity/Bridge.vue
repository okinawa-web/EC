<template>
  <activity
    :activityTitleEnglish="engTitle"
    :activityTitle="title"
    :explanation="coment"
    :Link="link"
    :Name="linkName"
    :imageIds="imageIds"
  />
  <br />
  <ArrowButton :Link="link" :Name="linkName" />
</template>

<script setup>
import activity from "@/components/activity/ActivityBase.vue";
import ArrowButton from "@/components/button/ArrowButton.vue";
import { ref } from "vue";

//英語タイトル
const engTitle = ref("Bridge");
//タイトル
const title = ref("伊良部大橋");
///説明文
const coment = ref(
  "全長3,540mの無料で渡ることのできる日本最長の橋です。青い空と透き通った宮古ブルーの海にはさまれ、絶景の中を進みます。夕陽も幻想的です。"
);
//画像
// imageIdsに画像のIDを配列で指定する
const imageIds = ref(["45", "46"]);

// //アローボタンコンポーネント
const link = ref(
  "https://ja.wikipedia.org/wiki/%E4%BC%8A%E8%89%AF%E9%83%A8%E5%A4%A7%E6%A9%8B"
);
const linkName = ref("伊良部大橋について");
</script>
