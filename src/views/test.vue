<template>
  <h1>Room Facilities & Equipment</h1>
  <p>客室設備＆備品</p>
  <!-- コンポーネント呼び出し↓ -->
  <!-- <Item :image="itemImage" :amenitieName="itemName" /> -->
</template>

<script>
import { ref } from "vue";
import Item from "@/components/roomFacility/AmenitesItem.vue";

// const itemImage = ref("toilet.jpg");
// const itemName = ref("トイレ");

export default {
  components: {
    Item,
  },
};
</script>
