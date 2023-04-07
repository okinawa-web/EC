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
          <img :src="url" alt="about_image" class="frameimage" />
        </div>
      </div>
    </div>
  </div>
  <!-- <BasicButton /> -->
</template>

<script setup>
import { watch, onMounted, ref } from "vue";
import { useImageStore } from "@/stores/image.js";
import BasicButton from "@/components/button/BasicButton.vue";

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

<style>
.about {
  display: flex;
  flex-direction: row;
  margin: 5%;
  margin-bottom: 0;
  background-color: bisque;
}

.about-text {
  flex: 1;
}
.ab_title {
  margin: 5%;
}

.about-title {
  font-size: 55px;
  margin-bottom: 0;
}

.title_hyphen {
  font-size: 20px;
}

.about_messages {
  font-size: 20px;
}

.subcoment {
  font-size: 16px;
}

.clear_box {
  width: 70%;
  margin-left: 20%;
  margin-top: 8%;
}
.img-frame {
  flex: 1;
  margin-top: 3%;
  max-width: 100%;
}

.about-image img {
  /* width: 22%;
  height: 230px; */
  width: 100%;
  height: auto;
  object-fit: cover; /* 画像を縦横比を維持したまま指定したサイズに収める */
}
@media (max-width: 768px) {
  .about {
    flex-direction: column;
    margin-bottom: 0;
    width: 100%;
  }
  .about-title {
    font-size: 35px;
  }
  .title_hyphen {
    font-size: 18px;
  }
  .about_messages {
    font-size: 18px;
    margin-bottom: 0;
  }
  .subcoment {
    font-size: 14px;
  }
  .clear_box {
    margin-top: 5%;
  }
  .img-frame {
    margin: auto;
  }
  .about-image img {
    width: 100%;
  }
  .frameimage {
    width: 90%;
    margin-left: 5%;
  }
}
</style>
