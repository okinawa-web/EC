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
</script>

<style>
.about {
  color: darkgray;
  display: flex;
  z-index: 1;
  margin-top: 100px; /* 他のコンポーネントとの間隔を調整 */
}
.title {
  padding-left: 5%;
}
.about-text {
  background-color: rgb(249, 246, 242);
  width: 50%;
  height: 60%;
  padding: 50px;
  margin: 4%;
  left: 40%;
  position: absolute;
}
.clear_box {
  width: 80%;
  padding-left: 10%;
}
.about-title {
  margin: -120px 10px 0;
  padding: 20px;
  font-size: 450%;
  width: 90%;
  margin: 50px auto auto auto;
}

.about-titl {
  font-size: 450%;
  width: 90%;
  margin: 50px auto auto auto;
}

.aboutText {
  /* p 
  font-size: 150%;
  width: 90%;
  margin: auto; */
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
/* .img-frame {
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
} */

.img-frame {
  position: absolute;
  left: 0%;
  top: 35%;
  width: 50%;
  height: 300px;
  overflow: hidden;
  margin: auto;
}
.img-01,
.img-02,
.img-03 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}

.img-01 {
  background-image: url("`src/assets/${props.img01}`");
  animation: slide-animation-01 24s infinite;
}
.img-02 {
  background-image: url("`src/assets/${props.img02}`");
  animation: slide-animation-02 24s infinite;
}
.img-03 {
  background-image: url("`src/assets/${props.img03}`");
  animation: slide-animation-03 24s infinite;
}
@keyframes slide-animation-01 {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  30% {
    opacity: 1;
  }
  40% {
    opacity: 0;
    transform: scale(1.15);
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes slide-animation-02 {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
    transform: scale(1.1);
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  70% {
    opacity: 0;
    transform: scale(1);
  }
  100% {
    opacity: 0;
  }
}
@keyframes slide-animation-03 {
  0% {
    opacity: 0;
  }
  60% {
    opacity: 0;
    transform: scale(1);
  }
  70% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1.1);
  }
}
</style>
