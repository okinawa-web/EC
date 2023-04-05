<template>
  <div class="room">
    <div class="items">
      <div class="item" v-for="(item, index) in items" :key="index">
        <div class="terrace" :class="{ left: index === 0, right: index === 1 }">
          <p>{{ item.label }}</p>
          <img
            :src="item.imageURL"
            alt="terrace"
            v-if="item.imageLoaded"
            class="room_img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useImageStore } from "@/stores/image.js";

const imageStore = useImageStore();
const items = ref([
  { id: 6, label: "Terrace", imageURL: "", imageLoaded: false },
  { id: 15, label: "Living", imageURL: "", imageLoaded: false },
]);

onMounted(async () => {
  try {
    for (let i = 0; i < items.value.length; i++) {
      const item = items.value[i];
      await imageStore.loadImage(item.id.toString()); //各画像のimageIdを指定
      item.imageURL = imageStore.imageURL;
      item.imageLoaded = true; //各画像の読み込みが完了するとtrueになる
    }
  } catch (error) {
    console.error(error);
  }
});
</script>

<style>
.room {
  color: darkgray;
}
.items {
  color: darkgray;
  font-size: 200%;
  background-color: rgb(226, 238, 248);
  width: 90%;
  margin: auto;
}
.item {
  color: darkgray;
  font-size: 200%;
  width: 70%;
  margin: auto;
}
.room_coments {
  text-align: center;
}
.room_img {
  width: 60%;
}
.right {
  text-align: right;
}

.reserve_btn {
  margin-left: 40%;
  margin-bottom: 10%;
}
.item_image {
  width: 50%;
}

@media (max-width: 768px) {
  .terrace {
    font-size: 40px;
  }
  .items {
    font-size: 100%;
    width: 80%;
    margin: auto;
  }
}
</style>
<!-- <template>
    <div class="room">
      <div class="items">
        <div class="item">
          <div class="terrace">
            <p>Terrace</p>
            <img :src="imageURL" alt="terrace" v-if="imageLoaded"/>
          </div>
          <div class="living">
            <p>Living</p>
            <img :src="imageURL" alt="living" v-if="imageLoaded" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  import { useImageStore } from "@/stores/image.js";
  
  const imageStore = useImageStore();
  const imageURL = ref("");
  const imageLoaded = ref(false);
  
  onMounted(async () => {
    try {
      await imageStore.loadImage("3"); //imageId指定
      imageURL.value = imageStore.imageURL;
      imageLoaded.value = true; //画像の読み込みが完了するとtrueになる
    } catch (error) {
      console.error(error);
    }
  });
  </script> -->
