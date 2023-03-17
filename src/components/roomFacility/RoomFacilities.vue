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
const amenityTitleEnglish = ref("Room Facilities & Equipment");
//タイトル
const amenityTitle = ref("客室設備＆備品");
//画像
// imageIdsに画像のIDを配列で指定する
const imageIds = ref(["19", "20", "21", "23", "24", "25", "26", "27"]);
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.amenitieItem img {
  height: 100%;
  max-width: 100%;
  object-fit: contain;
}
</style>
