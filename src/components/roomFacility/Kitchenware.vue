<template>
  <p>Kitchenware</p>
  <!-- コンポーネント呼び出し↓ -->
  <!-- <Item :image="itemImage" :amenitieName="itemName" /> -->
  <p>キッチン用品</p>
  <div class="col_4">
    <div class="amenitieItem">
      <Item />
    </div>
    <div class="amenitieItem">
      <Item />
    </div>
    <div class="amenitieItem">
      <Item />
    </div>
    <div class="amenitieItem">
      <Item />
    </div>
    <div class="amenitieItem">
      <Item />
    </div>
    <div class="amenitieItem">
      <Item />
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
import Item from "@/components/roomFacility/AmenitesItem.vue";

// const itemImage = ref<"toilet.jpg">;
// const itemName = ref<"トイレ">;
export default {
  // props: [itemImage: ref(""), itemName],
  components: {
    Item,
  },
};
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
  /* padding: 16px;
  display: -ms-flexbox;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box; */
}

.col_4:after {
  content: "";
  display: block;
  width: 25%;
  height: 0;
  order: 1;
}
/* .col_4:before {
  content: "";
  display: block;
  width: 25%;
  height: 0;
} */

.amenitieItem {
  width: 20%;
  padding: 10px;
}
</style>
