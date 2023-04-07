<template>
  <!-- 部屋の写真 -->
  <div class="room_photos">
    <div>
      <img src="@/assets/umigame.jpg" alt="海亀" class="photo" />
    </div>
    <div class="photo_text">おすすめです</div>
    <div class="photos4">
      <div class="photo4">
        <!-- １枚目 -->
        <p>
          <img src="@/assets/umigame.jpg" alt="海がめ" class="otherPhoto" />
        </p>
        <!-- ２枚目 -->
        <p>
          <img src="@/assets/umigame.jpg" alt="海がめ" class="otherPhoto" />
        </p>
        <!-- ３枚目 -->
        <p>
          <img src="@/assets/umigame.jpg" alt="海がめ" class="otherPhoto" />
        </p>
        <!-- ４枚目 -->
        <p>
          <img src="@/assets/umigame.jpg" alt="海がめ" class="otherPhoto" />
        </p>
      </div>
      <div class="photo4">
        <!-- １枚目 -->
        <p>
          <img src="@/assets/umigame.jpg" alt="海がめ" class="otherPhoto" />
        </p>
        <!-- ２枚目 -->
        <p>
          <img src="@/assets/umigame.jpg" alt="海がめ" class="otherPhoto" />
        </p>
        <!-- ３枚目 -->
        <p>
          <img src="@/assets/umigame.jpg" alt="海がめ" class="otherPhoto" />
        </p>
        <!-- ４枚目 -->
        <p>
          <img src="@/assets/umigame.jpg" alt="海がめ" class="otherPhoto" />
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.room_photos {
  width: 45%;
  box-sizing: border-box;
  /* width: 200px; */
  background: #fff;
  border: 1px solid #c90505;
  padding: 0 5px 5px;
  text-align: center;
}
.photo {
  width: 350px;
}

.photo_text {
  text-align: left;
  margin: 15px;
}
.otherPhoto {
  width: 80px;
  display: flex;
  margin: 6px;
}

.photos4 {
  width: 500px;
  display: block;
}
.photo4 {
  display: flex;
  /* width: 100%; */
  /* margin: auto; */
}
</style>
