<template>
  <h1>TITLE</h1>
  <p>SUB TITLE</p>
  <div class="link">
    <a href="#">LINK</a>
    <span class="hyphen">-</span>
    <span> SUB TITLE</span>
  </div>
  <div>
    <img src="@/assets/umi.jpg" alt="海" />
  </div>
</template>

<style>
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
