<template>
  <div>
    <h2>画像表示チェック</h2>
    <div v-if="imageURL">
      <img :src="imageURL" alt="Image" />
    </div>
  </div>
</template>

<script setup>
import firebase from "../firebase/firebase";
import { ref as storageRef, getDownloadURL } from "firebase/storage";
import { onMounted, ref, watch } from "vue";
import axios from "axios";

const props = defineProps({
  imageId: {
    type: String,
    required: true,
  },
});

const imageURL = ref("");
const API_URL = "/image";

// 画像のダウンロードURLを取得する関数
const getImageURL = async (path) => {
  const firebaseRef = storageRef(firebase, path);
  try {
    const url = await getDownloadURL(firebaseRef);
    console.log("画像URL", url);
    return url;
  } catch (error) {
    console.error(`画像${path}の取得に失敗しました。`);
    return "";
  }
};

// APIで画像パスを取得する関数
const getImagePath = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    if (res.status === 200) {
      const path = res.data.path;
      imageURL.value = await getImageURL(path); // 画像のダウンロードURLを取得する
    }
  } catch (err) {
    console.error("エラー", err);
  }
};

onMounted(async () => {
  await getImagePath(props.imageId);
});

//propsmの値が変更された場合にgetImagePathを再度実行
watch(
  () => props.imageId,
  async (newValue) => {
    await getImagePath(newValue);
  }
);
</script>

<!-- 全件取得
   <template>
  <h2>画像表示チェック</h2>
  <div v-if="imageURLs.length">
    <div v-for="(url, index) in imageURLs" :key="index">
      <img :src="url" alt="Image" />
    </div>
  </div>
</template>

<script setup>
import firebase from "../firebase/firebase";
import { ref as storageRef, getDownloadURL } from "firebase/storage";
import { onMounted, ref } from "vue";
import axios from "axios";

const imagePaths = ref([]);
const imageURLs = ref([]);
const API_URL = "/image";

// APIで画像パスを取得する関数
const getImagePaths = async () => {
  try {
    const res = await axios.get(API_URL);
    if (res.status === 200) {
      imagePaths.value = res.data;
      console.log("取得", res);
      await getImageURLs(); // 画像のダウンロードURLを事前に取得する
    }
  } catch (err) {
    console.error("エラー", err);
  }
};

// 画像のダウンロードURLを事前に取得する関数
const getImageURLs = async () => {
  const urls = await Promise.all(
    imagePaths.value.map(async (path) => {
      const firebaseRef = storageRef(firebase, path);
      try {
        const url = await getDownloadURL(firebaseRef);
        console.log("画像URL", url);
        return url;
      } catch (error) {
        console.error(`画像${path}の取得に失敗しました。`);
        return "";
      }
    })
  );
  imageURLs.value = urls.filter((url) => url !== "");
};

onMounted(async () => {
  await getImagePaths();
});
</script> -->
