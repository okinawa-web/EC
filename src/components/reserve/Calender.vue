<template>
  <ReserveHeader />
  <div class="package_bottom">
    <div class="package_bottom_innner">
      <p>
        <select v-model="numberOfPeople">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option></select
        >名様でご予約の場合、
      </p>
      <p class="">大人１名さまあたりの料金（消費税込）</p>
      <p class="">（１泊１室） {{ price.toLocaleString() }}円です。</p>
    </div>
    <table class="plan_table">
      <tr>
        <th class="plan" colspan="2">プラン</th>
        <th class="day"></th>
      </tr>
      <tr>
        <!-- <td>
          <img src="@/assets/drinkIcon.png" alt="ドリンク" class="room_image" />
        </td> -->
        <td>
          【1日1組限定】Villa Rikyu スタンダードプラン｜宮古島満喫！
          ご宿泊中無料でご利用いただけるカーサービス付！
        </td>
        <td>
          <a href="/room" class="calender_button">お部屋詳細</a>
        </td>
      </tr>
    </table>

    <VacancySearch />
    <div class="attention">
      <p class="bottom_footer red">※料金は税込み価格で、一律50,000円です。</p>
      <p class="bottom_footer red">
        ※ご予約は本日から3ヶ月以内の日程のみ承っております。
      </p>
      <p class="bottom_footer">
        ※上記の表示は、空室検索の照会時点の状況ですので、予約時にお取りできない場合もございます。
      </p>
      <p class="bottom_footer">
        ※「空室の日」をクリックすると、予約の申し込みができます。
      </p>
    </div>
  </div>
</template>

<script setup>
import ReserveHeader from "@/components/reserve/ReaserveHeader.vue";
import VacancySearch from "./VacancySearch.vue";
import { computed, ref } from "vue";

const totalPrice = 50000;
const numberOfPeople = ref(1);

const price = computed(() => {
  return Math.ceil(totalPrice / numberOfPeople.value);
});
</script>

<style>
.package_bottom {
  padding: 15px 20px;
  width: 90%;
  margin: auto;
}

.room_image {
  width: 80px;
}
.plan_table {
  margin: 0 auto;
  margin-bottom: 5%;
}

.plan {
  text-align: center;
}

.day {
  width: 8%;
  text-align: center;
}

.last {
  border-right: 1px solid rgb(81, 81, 81);
}

.calender_button {
  font-size: 86%;
  margin: auto;
  background-color: #000368;
  color: white;
  border-radius: 3px;
  padding: 5px 10px;
  text-align: center;
  line-height: 1.2;
  display: block;
}

.room_state {
  text-align: center;
}
.bottom_footer {
  text-align: right;
}

.red {
  color: red;
}
</style>
