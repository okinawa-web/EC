<template>
  <Header />
  <PageTop :pagetitle="page" :imageId="imageId" :subTitle="sub" />
  <div class="room_text">
    <p class="point">プライベートな休日や長期のご滞在にも最適な空間</p>
    <p>当館のお部屋は癒しとくつろぎをテーマに、</p>
    <p>
      オーシャンビューのテラスやプール、本格的なキッチンなどをご用意しております。
    </p>
  </div>
  <Rooms />
  <Amenity />
  <Footer />
</template>

<script setup>
import { ref, watch } from "vue";
import { useImageStore } from "@/stores/image.js";
import Header from "@/components/Header.vue";
import PageTop from "@/components/PageTop.vue";
import Rooms from "@/components/rooms/MoveRooms.vue";
import Amenity from "@/components/rooms/Amenitys&Facilityes.vue";
import Footer from "@/components/Footer.vue";

//ページタイトル
const page = ref("Rooms");
//画像
const imageId = ref("17");
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
//サブタイトル
const sub = ref("お部屋");
</script>

<style>
.room_text {
  color: darkgray;
  text-align: center;
}
.point {
  font-size: 25px;
}

@media (max-width: 768px) {
  .point {
    font-size: 0.85rem;
  }
  .room_text {
    font-size: 0.65rem;
  }
}
</style>
