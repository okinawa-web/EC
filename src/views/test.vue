<template>
  <h1>Private Villa</h1>
  <p>1日3組様限定のオールプライベートヴィラ</p>

  <div>
    <h2>Rooms</h2>
  </div>
  <div class="box">
    <div>
      <p>オーシャンビューの開放的なお部屋</p>
      <p>
        ３棟のヴィラはオーシャンビューのオールプライベートな空間。セミオープンスタイルの広いリビングの向こうには、自分たちだけのテラスと宮古ブルーが広がります。
      </p>
      <Button />
    </div>
    <div>
      <p>Private terrace & Pool</p>
      <p>
        リビングから広がる、自分たちだけの景色。
        朝から日中には見渡す限りに広がる宮古ブルーを、
        夕方には辺り一面が黄金色に包まれます。ときを忘れ、
        赴くままに優雅なひとときを。
      </p>
      <Button />
    </div>
    <div>
      <p>Ocean view bath</p>
      <p>
        大きな窓から宮古ブルーを望む開放的な空間。
        何もしないという贅沢なときを是非。
      </p>
      <Button />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import BasicButton from "/src/components/button/BasicButton.vue";

const linkTitle = ref("aaaa");
</script>

<style>
.box {
  display: flex;
  width: 380px;
  overflow-x: scroll;
}

.box div {
  width: 80%;
  margin: 30px;
  flex-shrink: 0;
}
</style>
