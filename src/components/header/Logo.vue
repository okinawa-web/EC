<!-- <template>
  <p class="logo">
    <router-link to="/" class="zero">
      <img :src="imageURL" alt="logo" class="logo" :key="imageURL" />
    </router-link>
  </p>
</template>

<script setup>
import { useImageStore } from "@/stores/image.js";

const imageStore = useImageStore();
imageStore.loadImage("1");

const imageURL = imageStore.imageURL;
</script> -->
<template>
  <p class="logo">
    <router-link to="/" class="zero">
      <img :src="imageURL" alt="logo" class="logo" :key="imageURL" />
    </router-link>
  </p>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useImageStore } from "@/stores/image.js";

const imageStore = useImageStore();
const imageURL = ref("");

onMounted(async () => {
  try {
    await imageStore.loadImage("1"); //imageId指定
    imageURL.value = imageStore.imageURL;
  } catch (error) {
    console.error(error);
  }
});
</script>

<style>
.logo {
  width: 45%;
  margin: 0;
}

.logo-image {
  max-width: 100%;
  height: auto;
}
.zero {
  margin: 0%;
  padding: 0%;
}
</style>
