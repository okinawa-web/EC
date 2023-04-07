<template>
  <div class="paydBox">
    <ul class="payd_ul">
      <h1 class="PaydService">Paid Service</h1>
      <div class="payd_contents">
        <li class="payd_li">
          <p class="payd_p">朝食サービス</p>
          <h3 class="border"></h3>
          <p class="payd_p">数量限定でご用意しております。</p>
          <p class="payd_p">前日17時までにご注文ください。</p>
        </li>
        <li class="payd_li">
          <p class="payd_p">BBQ材料手配サービス</p>
          <h3 class="border"></h3>
          <p class="payd_p">事前予約にて島内精肉店からお届けします。</p>
          <p class="payd_p">2〜3人前 5,500円</p>
        </li>
      </div>
      <div class="payd_contents">
        <li class="payd_li">
          <p class="payd_p">調味料セット</p>
          <h3 class="border"></h3>
          <p class="payd_p">調味料セットをご用意いたします。</p>
          <p class="payd_p">１セット 1,000円</p>
        </li>
        <li class="payd_li">
          <p class="payd_p">お荷物配送受託サービス</p>
          <h3 class="border"></h3>
          <p class="payd_p">お荷物を配送業者へお渡しします。</p>
          <p class="payd_p">※各配送先・大きさにより料金は異なります。</p>
        </li>
      </div>
    </ul>
  </div>
</template>

<style>
.paydBox {
  width: auto;
  margin: 0 30px;
}

.payd_ul .payd_li {
  text-align: center;
  list-style: none;
}
.payd_ul {
  list-style: none;
  padding: 0%;
}

.payd_li {
  padding: 60px;
  width: 40%;
  border: 1px solid darkgray;
  /* margin-top: 50px; */
  display: inline-block;
}

.payd_p {
  text-align: left;
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

@media (max-width: 768px) {
  .paydBox {
    width: 100%;
    margin: 0 20px;
  }
  .payd_li {
    flex-wrap: wrap;
    width: 30%;
    padding: 25px;
    font-size: 13px;
  }
  .payd_contents {
    display: flex;
  }
}
</style>
