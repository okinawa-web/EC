<template>
  <div class="villaTopBox">
    <h1 class="villaTitle">Private Villa</h1>
    <p class="villaSubTitle">1日3組様限定のオールプライベートヴィラ</p>
  </div>
  <div class="roomAll">
    <!-- <div class="roomBox"> -->
    <div class="roomDescription">
      <div class="roomSubDescription">
        <p>オーシャンビューの開放的なお部屋</p>
        <p>
          ３棟のヴィラはオーシャンビューのオールプライベートな空間。セミオープンスタイルの広いリビングの向こうには、自分たちだけのテラスと宮古ブルーが広がります。
        </p>
        <BasicButton :linkName="linkTitle" :link="destination" />
      </div>
    </div>
    <!-- <img :src="imageURL" alt="image" /> -->
    <!-- <div class="photo">
      <img src="src/assets/umigame.jpg" alt="pic" class="photo1" />
      <img src="src/assets/umigame.jpg" alt="pic" class="photo2" />
    </div> -->
  </div>
  <!-- </div> -->
</template>

<script setup>
import BasicButton from "/src/components/button/BasicButton.vue";
import { useImageStore } from "@/stores/image.js";
import { onMounted, ref } from "vue";

const linkTitle = ref("Acsess");
const destination = ref("acsess");

// const imageStore = useImageStore();
// const imageURL = ref("")

// onMounted(async () => {
//   await imageStore.loadImage("6");

//   //imageURL stateを更新する
//   imageURL.value = imageStore.imageURL
// })
</script>

<style>
.roomAll {
  /* width: auto; */
  height: 500px;
}
/* .roomBox {
  font-size: 12px;
  margin: 10%;
} */

.roomSubDescription {
  /* float: left;
  width: 350px; */
  font-size: 20px;
  width: 50%;
}

.photo {
  float: left;
  position: relative;
}

.photo1 {
  position: absolute;
  right: -400px;
  bottom: 100px;
  width: 120%;
  height: 150%;
}

.photo2 {
  width: 50%;
  height: 140%;
  margin-top: 100px;
  margin-left: 40px;
}

.villaTopBox {
  width: 90%;
  margin: auto;
}

.villaTitle {
  font-size: 80px;
  margin-top: 23%;
}

.villaSubTitle {
  font-size: 20px;
}
</style>
