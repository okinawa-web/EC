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
.col_4 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: top;
}

.col_4 .amenitieItem {
  flex: 1;
  margin-right: 20px;
  margin-bottom: 20px;
}

.col_4 .amenitieItem:last-child {
  margin-right: 0;
}
.amenitieItem {
  margin: 0 10px;
  box-sizing: border-box; /* ボーダーを含めたサイズ指定 */
}

.amenitieItem img {
  width: 22%;
  height: 230px;
  /* object-fit: cover;  */ /* 画像を縦横比を維持したまま指定したサイズに収める */
}

@media (max-width: 768px) {
  .amenitieItem img {
    width: 15%;
    height: 130px;
  }
}
</style>
