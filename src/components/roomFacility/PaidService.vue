<template>
  <div class="paydBox">
    <ul>
      <h1 class="PaydService">Paid Service</h1>
      <li>
        <p class="paydTitle">朝食サービス</p>
        <h3 class="border"></h3>
        <p class="serviceP">数量限定でご用意しております。</p>
        <p class="serviceP">前日17時までにご注文ください。</p>
      </li>
      <li>
        <p class="paydTitle">BBQ材料手配サービス</p>
        <h3 class="border"></h3>
        <p class="serviceP">事前予約にて島内精肉店からお届けします。</p>
        <p class="serviceP">2〜3人前　5,500円</p>
      </li>
      <li>
        <p class="paydTitle">調味料セット</p>
        <h3 class="border"></h3>
        <p class="serviceP">調味料セットをご用意いたします。</p>
        <p class="serviceP">１セット 1,000円</p>
      </li>
      <li>
        <p class="paydTitle">お荷物配送受託サービス</p>
        <h3 class="border"></h3>
        <p class="serviceP">お荷物を配送業者へお渡しします。</p>
        <p class="serviceP">※各配送先・大きさにより料金は異なります。</p>
      </li>
    </ul>
  </div>
</template>

<style>
.paydBox {
  width: auto;
  margin: 0 30px;
}

li {
  padding: 60px;
  width: 40%;
  border: 1px solid darkgray;
  /* margin-top: 50px; */
  display: inline-block;
}
ul {
  list-style: none;
}

.border {
  border-bottom: 1px solid darkgray;
  width: 40px;
  /* float: left; */
  text-align: left;
}

body {
  color: darkgray;
  font-size: 15px;
}
</style>
