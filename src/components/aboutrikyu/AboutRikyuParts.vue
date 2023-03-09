<template>
  <div class="about">
    <div class="about-text">
      <div class="title">
        <h1 class="about-title">{{ props.aboutTitle }}</h1>
        <span class="hyphen">
          <p>{{ props.subTitle }}</p></span
        >
      </div>
      <div class="clear_box">
        <p>{{ props.messages }}</p>
        <br />
        <p class="coments">{{ props.comments }}</p>
      </div>
    </div>
    <div class="img-frame">
      <!-- <img :src="store.imageURL" alt="image" /> -->
      <div v-if="imageURLs.length > 0">
        <div v-for="url in imageURLs" :key="url">
          <img :src="url" alt="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, onMounted, ref } from "vue";
import { useImageStore } from "@/stores/image.js";

// const props = defineProps({
//   aboutTitle: String,
//   subTitle: String,
//   messages: String,
//   comments: String,
//   imageId: {
//     String,
//     required: true,
//   },
// });
const props = defineProps({
  aboutTitle: String,
  subTitle: String,
  messages: String,
  comments: String,
  imageIds: {
    type: Array,
    required: true,
  },
});

// const store = useImageStore();

// onMounted(async () => {
//   try {
//     await store.loadImage(props.imageId);
//   } catch (error) {
//     console.log(`画像取得失敗:${error}`);
//   }
// });
// watch(
//   () => props.imageId,
//   async (newValue) => {
//     await store.loadImage(newValue);
//   }
// );
const store = useImageStore();
const imageURLs = ref([]);

// 初回表示時に各画像のURLを取得する
onMounted(async () => {
  await getImageURLs();
});

// imageIdsが変更された場合に各画像のURLを取得する
watch(
  () => props.imageIds,
  async () => {
    await getImageURLs();
  }
);

async function getImageURLs() {
  // imageURLsを初期化
  imageURLs.value = [];

  // 各imageIdに対して画像のURLを取得する
  for (const imageId of props.imageIds) {
    try {
      await store.loadImage(imageId);
      imageURLs.value.push(store.imageURL);
    } catch (error) {
      console.log(`画像取得失敗:${error}`);
    }
  }
}
</script>

<style>
.about {
  color: darkgray;
  display: flex;
  z-index: 1;
  margin-top: 100px; /* 他のコンポーネントとの間隔を調整 */
}

.about-text {
  background-color: rgb(249, 246, 242);
  width: 50%;
  height: 60%;
  padding: 50px;
  margin: 4%;
  position: absolute;
}
.clear_box {
  width: 80%;
}
.about-title {
  margin: -120px 10px 0;
  padding: 20px;
}
.coments {
  font-size: 100%;
  width: 90%;
  margin: auto;
}
.hyphen {
  display: flex;
  align-items: center; /*垂直中心 */
  justify-content: center; /* 水平中心 */
}
.hyphen:before {
  border-top: 1px solid;
  content: "";
  width: 3em;
}
.img-frame {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

.img-frame > div {
  scroll-snap-align: center;
  width: 100%;
}

.img-frame img {
  max-width: 100%;
  height: auto;
}
</style>
