<template>
  <div class="room_package">
    <!-- 部屋名 -->
    <div class="room_name">
      【101】オーシャンビュースウィート
      <!-- {{ 部屋名 }} -->
    </div>
    <!-- パッケージ上部 -->
    <div class="package_top">
      <!-- パッケージ上部中身 -->
      <div class="package_top_inner">
        <!-- 部屋説明テキスト -->

        <!-- 部屋の写真 -->
      </div>
    </div>
    <!-- パッケージ下部 -->
  </div>
</template>

<style>
.room_package {
  border: 1px solid orange;
  width: 90%;
  margin: auto;
}
.room_name {
  color: white;
  background-color: black;
  border-bottom: 2px solid #e9e9e9;
  padding: 12px 20px;
}

.package_top {
  padding: 15px 20px;
}

.package_top_inner {
  /* float: left; */
  display: flex;
  box-sizing: border-box;
  width: 100%;
}
</style>
