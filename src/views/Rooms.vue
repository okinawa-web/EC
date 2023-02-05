<template>
  <Header />
  <PageTop :pagetitle="page" :image="pic" :subTitle="sub" />
  <div class="room_text">
    <p class="point">プライベートな休日や長期のご滞在にも最適な空間</p>
    <p>当館には３つのお部屋を設けており、</p>
    <p>全てのお部屋にプールや本格的なキッチンをご用意しております。</p>
  </div>
  <Rooms />
  <Amenity />
  <Footer />
</template>

<script setup>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import PageTop from "@/components/PageTop.vue";
import Rooms from "@/components/rooms/MoveRooms.vue";
import Amenity from "@/components/rooms/Amenitys&Facilityes.vue";
import Footer from "@/components/Footer.vue";

//ページタイトル
const page = ref("Rooms");
//画像
const pic = ref("umigame.jpg");
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
</style>
