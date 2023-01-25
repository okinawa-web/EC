<template>
  <div class="all">
    <h1 class="pagetitle">{{ props.pagetitle }}</h1>
    <p>{{ props.subTitle }}</p>
    <div class="link">
      <a href="/top">TOP</a>
      <span class="hyphen">-</span>
      <span>{{ props.subTitle }}</span>
    </div>
    <div><img :src="`src/assets/${props.image}`" alt="海" /></div>
  </div>
</template>

<script setup>
const props = defineProps({
  pagetitle: String,
  image: String,
  subTitle: String,
});
</script>

<style>
.all {
  color: darkgray;
}

h1 {
  font-size: 450%;
  width: 90%;
  margin: 50px auto auto auto;
}

p {
  font-size: 150%;
  width: 90%;
  margin: auto;
}

.link {
  font-size: 150%;
  width: 90%;
  margin: 80px auto auto auto;
  text-align: right;
}

.hyphen {
  margin: 12px;
}

img {
  display: block;
  width: 90%;
  height: 350px;
  margin: 10px auto auto auto;
  /* ↓↓↓画像によって切り取り箇所調整↓↓↓ */
  /* object-fit: none; */
  object-position: 0% 70%;
}
</style>

