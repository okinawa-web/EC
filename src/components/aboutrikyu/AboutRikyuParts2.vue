<template>
  <div class="about">
    <div class="about-text">
      <div class="ab_title">
        <h1 class="about-title">{{ props.aboutTitle }}</h1>
        <span class="title_hyphen">
          <p>−{{ props.subTitle }}</p></span
        >
      </div>
      <div class="clear_box">
        <p class="about_messages">~{{ props.messages }}~</p>
        <br />
        <p class="subcoment">{{ props.comments }}</p>
      </div>
    </div>
    <div class="img-frame">
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
</script>

