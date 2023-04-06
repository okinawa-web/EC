<template>
  <div class="all">
    <h1 class="pagetitle">{{ props.pagetitle }}</h1>
    <p class="subTitle">{{ props.subTitle }}</p>
    <div class="toplink">
      <a href="/">TOP</a>
      <span class="hyphen">-</span>
      <span>{{ props.subTitle }}</span>
    </div>
    <img v-if="imageLoaded" :src="imageURL" alt="image" class="topPhoto" />
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

const imageURL = ref("");
const imageLoaded = ref(false);

const store = useImageStore();
onMounted(async () => {
  try {
    await store.loadImage(props.imageId);
    imageURL.value = store.imageURL;
    imageLoaded.value = true;
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
  margin: 15% auto;
}

.pagetitle {
  font-size: 450%;
  width: 90%;
  margin: 5% auto auto auto;
}

.subTitle {
  font-size: 150%;
  width: 90%;
  margin: auto;
}

.toplink {
  font-size: 150%;
  width: 90%;
  margin: 5% auto auto auto;
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
@media (max-width: 768px) {
  .all {
    color: darkgray;
    /* margin: 35% auto; */
  }
  .pagetitle {
    font-size: 350%;
    width: 90%;
    margin: 5% auto auto auto;
  }
  .subTitle {
    font-size: 130%;
  }
  .toplink {
    font-size: 130%;
  }
  .topPhoto {
    height: 200px;
  }
}
</style>
