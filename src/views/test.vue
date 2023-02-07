<template>
  <div class="top_fresh">
    <div class="fresh">
      <p>波の音、清々しい</p>
      <p>心休めは贅沢な時間とともに</p>
    </div>
    <div class="fresh_info">
      <!-- <div class="news-banner">
        <div class="news-banner__content">
          <p>HAVE A GREAT HOLIDAY</p>
        </div>
      </div> -->
      <div class="fresh_img">
        <p class="img1">
          <img src="@/assets/umi.jpg" alt="topimg" />
        </p>
        <!-- <div class="flex"> -->
        <p class="img2">
          <img src="@/assets/yuuhi.jpg" alt="topimg" width="60%" />
        </p>
      </div>
    </div>
    <div class="text_fresh">
      <!-- <p>
        都会の騒音から離れ、ゆっくりと心から深呼吸。<br />
        中心地から程よく離れた海を望む高台に佇む<br />
        HAMAJIMA<br />
        お部屋から望む海を眺めながら、自由に、赴くままに。<br />
        大切な人と大切な時を刻む、極上のひとときをお過ごしください。
      </p> -->
      <div class="news-banner">
        <div class="news-banner__content">
          <p>HAVE A GREAT HOLIDAY</p>
        </div>
      </div>
    </div>
    <!-- <BasicButton :link="site" :linkName="siteName" /> -->
  </div>
  <!-- </div> -->
</template>
<!-- 
<script setup>
import BasicButton from "@/components/button/BasicButton.vue";
import { ref } from "vue";

//ボタン
const site = ref("activity");
const siteName = ref("Activity");
</script> -->

<style>
.top_fresh {
  color: darkgray;
}
.fresh {
  font-size: 25px;
  line-height: 100%;
  text-align: center;
}
.fresh_info {
  /* display: flex; */
}
.text_fresh {
  /* position: relative; */
}
.fresh_img {
  /* position: absolute; */
  /* width: 30%; */
  /* float: left; */
  position: relative;
}
.img1 {
  /* position: relative;
  width: 30%; */
  position: absolute;
  /* z-index: 1; */
}
.img2 {
  position: absolute;
  /* right: 5%; */
  /* margin: 10% 0% 10% 90%; */
  /* margin-left: 50%; */
  /* margin-top: 20%; */
  /* width: 60%; */
  /* bottom: 0; */
  right: 0;
  margin-top: 10%;
}

/* バナー本体 */
.news-banner {
  position: relative;
  display: block;
  height: 250px;
  width: 100%;
  /* background-color: orange; */
  overflow: hidden;
}
/* バナー内コンテンツ */
.news-banner__content {
  display: inline-block;
  color: darkgray;
  line-height: 0px;
  padding-left: 100%;
  white-space: nowrap;
  animation: animate-banner 50s linear infinite;
  font-size: 150px;
  font-weight: 900;
}
/* バナー内の要素をすべて選択 */
.news-banner__content > * {
  display: inline-block;
}
/* 横にスクロールさせるアニメーション */
@keyframes animate-banner {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
