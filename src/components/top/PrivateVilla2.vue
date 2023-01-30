<template>
  <div class="roomAll">
    <div class="roomBox">
      <div class="roomDescription"></div>
      <div class="photo">
        <img src="src/assets/umigame.jpg" alt="pic" class="photo3" />
        <img src="src/assets/umigame.jpg" alt="pic" class="photo4" />
      </div>
      <div class="roomSubDescription">
        <p>オーシャンビューの開放的なお部屋</p>
        <p>
          ３棟のヴィラはオーシャンビューのオールプライベートな空間。セミオープンスタイルの広いリビングの向こうには、自分たちだけのテラスと宮古ブルーが広がります。
        </p>
        <Button :linkName="linkTitle" :link="destination" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
// import Button from "/src/components/button/BasicButton.vue";

const linkTitle = ref("Service");
const destination = ref("accses");
</script>

<style>
.roomAll {
  width: 90%;
  margin: auto;
  height: 500px;
  /* background-color: pink; */
}
.roomBox {
  float: right;
  font-size: 12px;
  margin: 10%;
  width: 90%;
}

.roomSubDescription {
  width: 350px;
  font-size: 20px;
  margin-left: 850px;
  margin-top: 380px;
}

.photo {
  float: left;
  position: relative;
}

.photo3 {
  position: absolute;
  right: -700px;
  bottom: 300px;
  width: 80%;
  height: 60%;
}

.photo4 {
  /* position: absolute; */
  /* right: -400px; */
  /* bottom: 300px; */
  width: 100%;
  height: 80%;
  margin-top: 100px;
  /* margin-left: 40px; */
}

.villaTopBox {
  width: 90%;
  margin: auto;
}

.villaTitle {
  font-size: 80px;
}

.villaSubTitle {
  font-size: 20px;
}
</style>
