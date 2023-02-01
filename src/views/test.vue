<template>
  <div class="freeBox">
    <ul class="box_ser">
      <h1 class="freeServise">Free Service</h1>
      <li>
        <img src="@/assets/drinkIcon.png" alt="ロゴ" class="freeIcon" />
        <p>冷蔵庫内ドリンク</p>
        <p>飲み放題サービス</p>
      </li>
      <li>
        <img src="@/assets/carIcon.png" alt="ロゴ" class="freeIcon" />
        <p>宿泊期間中</p>
        <p>駐車料金無料</p>
      </li>
      <li>
        <img src="@/assets/bbqIcon.png" alt="ロゴ" class="freeIcon" />
        <p>野外用</p>
        <p>バーベキューコンロ</p>
      </li>
    </ul>
  </div>
</template>

<style>
.freeBox {
  width: auto;
  /* height: auto; */
  margin: 0 30px;
}

.freeIcon {
  width: 70px;
  margin-bottom: 30px;
}
.box_ser {
  text-align: center;
}
.box_ser li {
  text-align: center;
  display: inline-block;
}

li {
  padding: 60px;
  width: 20%;
  border: 1px solid darkgray;
  margin-top: 50px;
}

ul {
  list-style: none;
}

p {
  font-size: 20px;
}
body {
  color: darkgray;
  font-size: 10px;
}
</style>
