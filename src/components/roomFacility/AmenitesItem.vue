<template>
  <div class="freeBox">
    <h1 class="freeServise">{{ props.amenityTitleEnglish }}</h1>
    <p>{{ props.amenityTitle }}</p>
    <img
      v-for="url in imageURLs"
      :key="url"
      :src="url"
      alt="image"
      class="amenitieItem"
    />
    <!-- <h3>{{ amenityTitle }}</h3>
      <h1>{{ amenityTitleEnglish }}</h1> -->
  </div>
</template>

<script setup>
import { useImageStore } from "@/stores/image.js";
import { ref, onMounted } from "vue";

const props = defineProps({
  amenityTitleEnglish: String,
  amenityTitle: String,
  imageIds: {
    type: Array,
    required: true,
  },
});

const store = useImageStore();
const imageURLs = ref([]);
// const imageLoaded = ref(false);

// 初回表示時に各画像のURLを取得する
onMounted(async () => {
  await getImageURLs();
});

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
