<!-- <template>
    <p>ROompage</p>
</template> -->
<template>
  <Header />
  <div class="room">
    <Pagetop :pagetitle="page" :imageId="imageId" :subTitle="sub" />
    <div class="room_coments">
      <p>
        広々としたオープンスタイルのリビングから見えるプライベートテラスやプールをはじめ、
      </p>
      <p>リゾート感あふれる空間で、のんびりとお過ごしいただけます。</p>
      <Reserve class="reserve_btn" />
    </div>

    <div class="items">
      <div class="item">
        <div class="terrace">
          <p>Terrace</p>
          <img src="@/assets/terasu.jpg" alt="" class="item_image" />
        </div>
        <div class="living">
          <p>Living</p>
          <img src="@/assets/room1.jpg" alt="" class="item_image" />
        </div>
        <!-- <div class="bath">
          <p>Toilet</p>
          <img src="@/assets/toilet.jpg" alt="" class="item_image" />
        </div> -->
      </div>
    </div>
    <Info />
  </div>
  <Footer />
</template>

<script setup>
import { ref, watch } from "vue";
import { useImageStore } from "@/stores/image.js";
import Header from "@/components/Header.vue";
import Pagetop from "@/components/PageTop.vue";
import Reserve from "@/components/header/Reserve.vue";
import Info from "@/components/room/Information.vue";
import Footer from "@/components/Footer.vue";

//Pagetop
const page = ref("Room 101");
// const pic = ref("room1.jpg");
const sub = ref("101号室");

//画像
const imageId = ref("15");
const store = useImageStore();
watch(
  () => imageId.value,
  async (newValue) => {
    try {
      await store.loadImage(newValue);
    } catch (error) {
      console.log(`画像取得失敗:${error}`);
    }
  }
);
</script>

<style>
.room {
  color: darkgray;
}
.items {
  color: darkgray;
  font-size: 200%;
  background-color: rgb(226, 238, 248);
  width: 90%;
  margin: auto;
}
.item {
  color: darkgray;
  font-size: 200%;
  width: 70%;
  margin: auto;
}
.room_coments {
  text-align: center;
}
.reserve_btn {
  /* text-align: center; */
  margin-left: 40%;
  margin-bottom: 10%;
}
.item_image {
  width: 50%;
}
.living {
  text-align: right;
}
</style>
