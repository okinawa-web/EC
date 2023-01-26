<template>
  <div class="roomAll">
    <div class="roomBox">
      <div class="roomDescription">
        <div class="roomSubDescription">
          <p>オーシャンビューの開放的なお部屋</p>
          <p>
            ３棟のヴィラはオーシャンビューのオールプライベートな空間。セミオープンスタイルの広いリビングの向こうには、自分たちだけのテラスと宮古ブルーが広がります。
          </p>
          <Button :linkName="linkTitle" :link="destination" />
        </div>
      </div>
      <div class="photo">
        <img src="src/assets/umigame.jpg" alt="pic" class="photo5" />
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
// import Button from "/src/components/button/BasicButton.vue";

// const linkTitle = ref("Service");
// const destination = ref("accses");
</script>

<style>
.roomAll {
  width: auto;
  height: 500px;
  /* background-color: pink; */
}
.roomBox {
  font-size: 12px;
  margin: 10%;
}

.roomSubDescription {
  float: left;
  width: 350px;
  font-size: 20px;
  margin-top: 300px;
}

.photo {
  float: left;
  position: relative;
}

.photo5 {
  right: -300px;
  bottom: 100px;
  width: 120%;
  height: 150%;
  margin-left: 50%;
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
