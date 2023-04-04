<template>
  <footer id="footer">
    <!-- <p class="side_img"> -->
    <div class="footer_text">
      <p class="footer_logo" v-if="imageLoaded">
        <!--画像の読み込みが完了するまで非表示-->
        <router-link to="/" class="footer_zero">
          <img :src="imageURL" alt="logo" class="logo" :key="imageURL" />
        </router-link>
      </p>
      <div class="footer_info">
        <p>~HAMAJIMA~</p>
        <p>〒000-0000 <br />沖縄県浜島2207</p>
        <p>Tel:0000-000-000</p>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 5%;
}

.footer_text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.footer_logo {
  width: 30%;
  max-width: 100%;
  height: auto;
}

.footer_info {
  font-size: 16px;
}

.footer_zero {
  display: inline-block;
}

#footer .copyright {
  text-align: center;
}

/* @media screen and (min-width: 768px) {
  .footer_text {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer_logo {
    margin-right: 0;
    margin-left: auto;
  }

  .footer_info {
    margin-left: 0;
    margin-right: auto;
  }
} */
</style>
