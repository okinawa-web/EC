<template>
  <div class="NewArrivals">
    <div class="News">
      <h1>News</h1>
      <h2>新着情報</h2>
    </div>
    <div class="fullList">
      <div class="titleBox">
        <p>2023.1.18</p>
        <a href="#" class="newsTitle">ワイドーマラソン！</a>
      </div>
      <div class="titleBox">
        <p>2023.1.18</p>
        <a href="#" class="newsTitle">全国旅行支援について</a>
      </div>
      <div class="titleBox">
        <p>2023.1.18</p>
        <a href="#" class="newsTitle">もう年末だ〜！</a>
      </div>
      <div class="titleBox">
        <p>2023.1.18</p>
        <a href="#" class="newsTitle">冬の宮古島でドライブ観光！</a>
      </div>
      <div class="titleBox">
        <p>2023.1.18</p>
        <a href="#" class="newsTitle">サンセット！</a>
      </div>
    </div>
  </div>
</template>

<style>
.NewArrivals {
  display: flex;
  align-items: center;
  justify-content: center;
  color: darkgrey;
}

.fullList {
  width: 70%;
  font-size: 20px;
}

.News {
  margin-right: 10%;
}

h1 {
  font-size: 60px;
}

a {
  display: block;
  width: auto;
  border-bottom: 1px solid;
  padding-bottom: 40px;
  margin-bottom: 40px;
  text-decoration: none;
  color: darkgrey;
}
a:hover {
  color: orange;
}
</style>
