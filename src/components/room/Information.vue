<template>
  <div class="information">
    <p class="info">Information</p>
    <p class="mini">ご利用案内</p>

    <div class="info/details">
      <div class="table">
        <table>
          <tbody>
            <tr>
              <th>ご利用時間</th>
              <td>チェックイン 15:00 / チェックアウト 11:00</td>
            </tr>
            <tr>
              <th>フロント営業時間</th>
              <td>9:00~17:00</td>
            </tr>
            <tr>
              <th>お食事</th>
              <td>朝食・夕食はついておりません。</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="attention">
        <p>※未就学児のお子様は無料です。（添い寝対応となります）</p>
        <p>※ペット同伴でのご宿泊はお断りしております。</p>
        <p>
          ※お客様のプライベートを重視し、原則、滞在中の清掃には入りません。（３連泊～応相談可）但し、タオル類の追加・交換は可能です。
        </p>
        <p>※プールご利用の際は、水着着用となります。</p>
      </div>
      <BasicButton :link="site" :linkName="siteName" class="link_btn" />
    </div>
  </div>
</template>

<script setup>
import BasicButton from "@/components/button/BasicButton.vue";
import { ref } from "vue";

//ボタン
const site = ref("facility");
const siteName = ref("Amenities&Facilities");
</script>

<style>
.information {
  color: darkgray;
}
.info {
  font-size: 30px;
}
/* table,
td,
th {
  border-bottom: 1px solid darkgray;
  width: 50%;
  line-height: 300%;
  text-align: left;
} */
table {
  border-collapse: collapse;
}
.attention {
  line-height: 5%;
}
</style>
