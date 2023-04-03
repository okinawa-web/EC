<template>
  <div class="top_fresh">
    <div class="fresh">
      <p>波の音、清々しい</p>
      <p>心休めは贅沢な時間とともに</p>
      <p class="fresh_mini">
        都会の騒音から離れ、ゆっくりと心から深呼吸。<br />
        中心地から程よく離れた海を望む高台に佇む<br />
        HAMAJIMA<br />
        お部屋から望む海を眺めながら、自由に、赴くままに。<br />
        大切な人と大切な時を刻む、極上のひとときをお過ごしください。
      </p>
    </div>
    <div class="fresh_info">
      <div class="fresh_img">
        <img :src="imageURL" alt="image" />
        <div class="news-banner">
          <div class="news-banner__content">
            <p>HAVE A GREAT HOLIDAY</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useImageStore } from "@/stores/image.js";
import { onMounted, ref } from "vue";

const imageStore = useImageStore();
const imageURL = ref("");

onMounted(async () => {
  await imageStore.loadImage("3");

  //imageURL stateを更新する
  imageURL.value = imageStore.imageURL;
});
</script>

<style>
.top_fresh {
  color: darkgray;
}
.fresh {
  font-size: 25px;
  line-height: 100%;
  text-align: center;
  margin-top: 15%;
}
.fresh_mini {
  font-size: 16px;
}
.fresh_img {
  position: relative;
  margin-top: 5%;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9のアスペクト比を保つための値 */
}
.fresh_img img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
}
.fresh_info {
  position: relative;
  margin-top: 5%;
}

.news-banner {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
}

.news-banner__content {
  color: darkgray;
  line-height: 0px;
  white-space: nowrap;
  animation: animate-banner 50s linear infinite;
  font-size: 150px;
  font-weight: 900;
}

.news-banner__content > * {
  display: inline-block;
}
@keyframes animate-banner {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
