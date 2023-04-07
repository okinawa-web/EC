<template>
  <div class="activity">
    <p class="activity_title_english">{{ props.activityTitleEnglish }}</p>
    <div class="back_color">
      <p class="activity_title">{{ props.activityTitle }}</p>
      <br />
      <p class="explanation">
        {{ props.explanation }}
      </p>
      <div class="image">
        <div v-if="imageURLs.length > 0">
          <img
            v-for="url in imageURLs"
            :key="url"
            :src="url"
            alt="image"
            class="image_size"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, onMounted, ref } from "vue";
import { useImageStore } from "@/stores/image.js";

const props = defineProps({
  activityTitleEnglish: String,
  activityTitle: String,
  explanation: String,
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
.activity {
  color: darkgray;
  text-align: center;
  padding-top: 60px; /*Headerの高さ*/
}
.activity_title_english {
  font-size: 15px;
}
.activity_title {
  font-size: 25px;
}
.explanation {
  font-size: 16px;
  width: 60%;
  margin: auto;
}
.back_color {
  background-color: aliceblue;
}
.image {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* 画像が横幅を超えた場合は改行する */
}
.image div {
  flex-basis: 40%;
  margin: 1%;
  display: flex;
  justify-content: center;
}
.image img {
  width: 100%;
  height: auto;
  margin: 1%;
}

@media (max-width: 768px) {
  .activity {
    padding-top: 10px;
  }
  .activity_title_english {
    font-size: 15px;
  }
  .activity_title {
    font-size: 22px;
  }
  .explanation {
    font-size: 14px;
  }
}
</style>
