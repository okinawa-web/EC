<template>
  <div class="freeBox">
    <ul class="box_ser">
      <h1 class="freeServise">Free Service</h1>
      <li>
        <img src="@/assets/drinkIcon.png" alt="ロゴ" class="freeIcon" />
        <p class="serviseP">冷蔵庫内ドリンク</p>
        <p class="serviseP">飲み放題サービス</p>
      </li>
      <li>
        <img src="@/assets/carIcon.png" alt="ロゴ" class="freeIcon" />
        <p class="serviseP">宿泊期間中</p>
        <p class="serviseP">駐車料金無料</p>
      </li>
      <li>
        <img src="@/assets/bbqIcon.png" alt="ロゴ" class="freeIcon" />
        <p class="serviseP">野外用</p>
        <p class="serviseP">バーベキューコンロ</p>
      </li>
    </ul>
  </div>
</template>

<style>
.freeBox {
  width: 80%;
  /* height: auto; */
  margin: 0 30px;
}

.freeIcon {
  width: 70px;
  margin-bottom: 30px;
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
  text-align: center;
}

.serviceP {
  font-size: 20px;
}
body {
  color: darkgray;
}
</style>
