<template>
  <div class="about">
    <div class="about-text">
      <div class="title">
        <h1 class="about-title">{{ props.aboutTitle }}</h1>
        <span class="hyphen">
          <p>{{ props.subTitle }}</p></span
        >
      </div>
      <div class="clear_box">
        <p>{{ props.messages }}</p>
        <br />
        <p class="coments">{{ props.comments }}</p>
      </div>
    </div>
    <div class="img-frame">
      <div class="img-01">
        <img :src="`src/assets/${props.img01}`" alt="01" />
      </div>
      <div class="img-02">
        <img :src="`src/assets/${props.img02}`" alt="02" />
      </div>
      <div class="img-03">
        <img :src="`src/assets/${props.img03}`" alt="03" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  aboutTitle: String,
  subTitle: String,
  messages: String,
  comments: String,
  img01: String,
  img02: String,
  img03: String,
});
</script>

<style>
.about {
  color: darkgray;
  display: flex;
}
/* .title{
    line-height: 150%
} */
.about-text {
  background-color: rgb(249, 246, 242);
  width: 50%;
  height: 60%;
  padding: 50px;
  margin: 4%;
  position: absolute;
}
.clear_box {
  width: 80%;
}
.about-title {
  margin: -120px 10px 0;
  padding: 20px;
}
h1 {
  font-size: 450%;
  width: 90%;
  margin: 50px auto auto auto;
}
/* p {
  font-size: 150%;
  width: 90%;
  margin: auto;
} */
.coments {
  font-size: 100%;
  width: 90%;
  margin: auto;
}
.hyphen {
  display: flex;
  align-items: center; /*垂直中心 */
  justify-content: center; /* 水平中心 */
}
.hyphen:before {
  border-top: 1px solid;
  content: "";
  width: 3em;
}
.img-frame {
  /* position: relative; */
  position: absolute;
  left: 50%;
  top: 25%;
  width: 50%;
  height: 300px;
  overflow: hidden;
  margin: auto;
}
.img-01,
.img-02,
.img-03 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}
.img-01 {
  background-image: url("`src/assets/${props.img01}`");
  animation: slide-animation-01 24s infinite;
}
.img-02 {
  background-image: url("`src/assets/${props.img02}`");
  animation: slide-animation-02 24s infinite;
}
.img-03 {
  background-image: url("`src/assets/${props.img03}`");
  animation: slide-animation-03 24s infinite;
}
@keyframes slide-animation-01 {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  30% {
    opacity: 1;
  }
  40% {
    opacity: 0;
    transform: scale(1.15);
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes slide-animation-02 {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
    transform: scale(1.1);
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  70% {
    opacity: 0;
    transform: scale(1);
  }
  100% {
    opacity: 0;
  }
}
@keyframes slide-animation-03 {
  0% {
    opacity: 0;
  }
  60% {
    opacity: 0;
    transform: scale(1);
  }
  70% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1.1);
  }
}
</style>
