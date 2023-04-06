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
<template>
  <footer id="footer">
    <!-- <p class="side_img"> -->
    <div class="footer_text">
      <p class="footer_logo" v-if="imageLoaded">
        <!--画像の読み込みが完了するまで非表示-->
        <router-link to="/" class="footer_zero">
          <img :src="imageURL" alt="logo" class="llogo" :key="imageURL" />
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
    <div class="footerline"></div>
  </footer>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

#footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 5%;
  margin: 0;
}

.footer_text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 280px;
  margin-top:50px;
}

.footer_logo {
  width: 30%;
  max-width: 100%;
  height: auto;
  max-height: 100%;
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

.footerline {
  height: 60px;
  width: 100%;
  background-color:rgb(0, 150, 150);
  z-index: 2;
  /* position: fixed; */
  top: 0;
}
@media (max-width: 768px) {
  .footer_text {
    width: 80%;
  }
  .footer_info {
    font-sze: 12px;
  }
  .footer_logo {
    width: 10%;
    height: auto;
  }
  .llogo {
    width: 250%;
  }
  #footer .copyright {
    font-size: 12px;
  }
}
</style>
