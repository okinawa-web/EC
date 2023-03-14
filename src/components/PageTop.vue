<template>
  <div class="all">
    <h1 class="pagetitle">{{ props.pagetitle }}</h1>
    <p class="subTitle">{{ props.subTitle }}</p>
    <div class="link">
      <a href="/">TOP</a>
      <span class="hyphen">-</span>
      <span>{{ props.subTitle }}</span>
    </div>
    <img :src="store.imageURL" alt="image" class="topPhoto" />
  </div>
</template>

<script setup>
import { watch, onMounted, ref } from "vue";
import { useImageStore } from "@/stores/image.js";

const props = defineProps({
  pagetitle: String,
  image: String,
  subTitle: String,
  imageId: {
    String,
    required: true,
  },
});

const store = useImageStore();
onMounted(async () => {
  try {
    await store.loadImage(props.imageId);
  } catch (error) {
    console.log(`画像取得失敗:${error}`);
  }
});
// watch(
//   () => props.imageId,
//   async (newValue) => {
//     await store.loadImage(newValue);
//   }
// );
</script>

<style>
.all {
  color: darkgray;
  margin: 10% auto;
}

.pagetitle {
  font-size: 450%;
  width: 90%;
  margin: 50px auto auto auto;
}

.subTitle {
  font-size: 150%;
  width: 90%;
  margin: auto;
}

.link {
  font-size: 150%;
  width: 90%;
  margin: 80px auto auto auto;
  text-align: right;
}

.hyphen {
  margin: 12px;
}

.topPhoto {
  display: block;
  width: 90%;
  height: 300px;
  margin: 10px auto auto auto;
  /* ↓↓↓画像によって切り取り箇所調整↓↓↓ */
  /* object-fit: none; */
  object-position: 0% 70%;
}
</style>
