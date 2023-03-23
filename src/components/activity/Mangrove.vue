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
const engTitle = ref("Mangrove");
//タイトル
const title = ref("マングローブ");
///説明文
const coment = ref(
  "独特の見た目と手付かずの大自然が沖縄の豊かさを感じさせるマングローブ。マングローブ林の中をカヤックで漕ぎ進めるアクティビティもおすすめです。"
);
//画像
// imageIdsに画像のIDを配列で指定する
const imageIds = ref(["47", "48"]);

// //アローボタンコンポーネント
const link = ref(
  "https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%B3%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%96"
);
const linkName = ref("マングローブについて");
</script>
