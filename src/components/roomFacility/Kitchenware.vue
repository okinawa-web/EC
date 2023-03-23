<template>
  <div class="col_4">
    <Item
      :amenityTitleEnglish="amenityTitleEnglish"
      :amenityTitle="amenityTitle"
      :imageIds="imageIds"
      class="amenitieItem"
    />
  </div>
</template>

<script setup>
import Item from "@/components/roomFacility/AmenitesItem.vue";
import { ref } from "vue";

//英語タイトル
const amenityTitleEnglish = ref("Kitchenware");
//タイトル
const amenityTitle = ref("キッチン用品");
//画像
// imageIdsに画像のIDを配列で指定する
const imageIds = ref(["32", "33", "34", "35", "36", "37", "38", "39"]);
</script>
