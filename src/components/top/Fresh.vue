<template>
  <div class="top_fresh">
    <div class="fresh">
      <p class="fresh2">波の音、清々しい</p>
      <p class="fresh2">心休めは贅沢な時間とともに</p>
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
        <img :src="imageURL" alt="image" class="TOP_image"/>
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
  color: #a9a9a9;
  margin-bottom: 1250px;

}
.fresh {
  font-size: 25px;
  line-height: 100%;
  text-align: center;
  margin-top: 13%;
  margin-bottom: 400px;
}
.fresh2{
  color: rgb(0, 150, 150);
  margin-bottom: 40px;
}
.fresh_mini {
  font-size: 16px;
}
.fresh_img {
  position: relative;
  margin-top: 5%;
  width: 100%;
  height: 0;
  padding-bottom: 84.375%; /* 16:9のアスペクト比を保つための値 */
}

.TOP_image{
  position: relative;
  margin-top: 5%;
  width: 100%;
  /* height: 0; */
  padding-bottom: 84.375%; /* 16:9のアスペクト比を保つための値 */
  margin-top: 900px;
  /* margin-bottom: 500px; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-38%, -75%);
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  /* height: 0; */
  padding-bottom: 600px;
}


.fresh_img {
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
  height: 80%; /* 追加 */
  width: 80%; /* 追加 */
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
  color: rgb(238, 238, 141);
  line-height: 0px;
  white-space: nowrap;
  animation: animate-banner 50s linear infinite;
  font-size: 150px;
  font-weight: 900;
  margin-top: 600px;
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
