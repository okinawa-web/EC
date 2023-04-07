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
const amenityTitleEnglish = ref("Amenities");
//タイトル
const amenityTitle = ref("アメニティ");
//画像
// imageIdsに画像のIDを配列で指定する
const imageIds = ref(["28", "29", "30", "31"]);
</script>
