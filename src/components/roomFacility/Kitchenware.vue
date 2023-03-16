<template>
  <Item
    :amenityTitleEnglish="amenityTitleEnglish"
    :amenityTitle="amenityTitle"
    :amenityimage="amenityimage"
  />
</template>

<script setup>
import Item from "@/components/roomFacility/AmenitesItem.vue";
import { ref } from "vue";

//英語タイトル
const amenityTitleEnglish = ref("Kitchenware");
//タイトル
const amenityTitle = ref("キッチン用品");
//画像
const amenityimage = ref("toilet.jpg");
</script>

<style>
.amenitieBox {
  text-align: center;
  width: 80%;
  margin: auto;
}

.col_4 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: top;
}
.col_4 .amenitieItem {
  width: 20%;
}

.col_4:after {
  content: "";
  display: block;
  width: 25%;
  height: 0;
  order: 1;
}

.amenitieItem {
  width: 20%;
  padding: 10px;
}
</style>
