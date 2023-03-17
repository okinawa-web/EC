<template>
  <footer id="footer">
    <!-- <p class="side_img"> -->
    <div class="footer_text">
      <p class="logo" v-if="imageLoaded">
        <!--画像の読み込みが完了するまで非表示-->
        <router-link to="/" class="zero">
          <img :src="imageURL" alt="logo" class="logo" :key="imageURL" />
        </router-link>
      </p>
      <div class="footer_info">
        <p>~HAMAJIMA~</p>
        <p>〒000-0000 <br />沖縄県浜島2207</p>
        <p>予約専用ダイヤル</p>
        <h3>Tel:0000-000-000</h3>
        <p>受付時間 10:00~18:00</p>
      </div>
    </div>

    <div class="copyright">©︎2023~ ALL RIGTHS RESERVED HAMAJIMA.</div>
    <!-- </p> -->
  </footer>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useImageStore } from "@/stores/image.js";

const imageStore = useImageStore();
const imageURL = ref("");
const imageLoaded = ref(false);

onMounted(async () => {
  try {
    await imageStore.loadImage("2"); //imageId指定
    imageURL.value = imageStore.imageURL;
    imageLoaded.value = true; //画像の読み込みが完了するとtrueになる
  } catch (error) {
    console.error(error);
  }
});
</script>

<style>
#footer {
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  position: relative;
}

.logo {
  margin-right: auto;
  /* position: absolute; */
}

.footer_text {
  display: flex;
}

.copyright {
  text-align: center;
}
</style>
