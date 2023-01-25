<template>
  <PageTop :pagetitle="page" :image="pic" :subTitle="sub" />
  <div class="text">
    <p class="sst">
      観光地も絶景も! SAIKO☆なロケーション <br />
      ~HAMAJIMA~
    </p>
    <br />
    <p class="txt">
      朝はカーテンを開けると目の前に広がる海とプール。<br />
      昼はアメリカンビレッジでお買い物。<br />
      夜はサンセットを見ながらゆっくりと。
      <br />
      ここでしか味わえない時間を大切な方とお過ごしください。
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PageTop from "@/components/PageTop.vue";

//ページタイトル
const page = ref("Location");

//画像
const pic = ref("loca.png");

//サブタイトル
const sub = ref("ロケーション");
</script>

<style>
.text {
  margin-top: 30px;
  font-size: 115%;
  color: darkgray;
  letter-spacing: 0.1em;
  line-height: 2.2;
}
.sst {
  font-size: 150%;
  line-height: 150%;
}
.txt {
  font-size: 100%;
  /* width: 90%;
    margin: auto; */
}
</style>
