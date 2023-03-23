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
const engTitle = ref("Beach");
//タイトル
const title = ref("与那覇前浜");
///説明文
const coment = ref(
  "「マイパマビーチ」とも呼ばれ親しまれている与那覇前浜ビーチは、東洋一美しいビーチと言われています。海の青さのグラデーションと、真珠のように輝く白砂のコントラストが評判です。"
);
//画像
// imageIdsに画像のIDを配列で指定する
const imageIds = ref(["43", "44"]);

// //アローボタンコンポーネント
const link = ref(
  "https://ja.wikipedia.org/wiki/%E4%B8%8E%E9%82%A3%E8%A6%87%E5%89%8D%E6%B5%9C"
);
const linkName = ref("与那覇前浜について");
</script>
