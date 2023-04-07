<template>
  <div class="information">
    <p class="info">Information</p>
    <p class="mini">ご利用案内</p>

    <div class="info/details">
      <div class="table">
        <table class="ta">
          <tbody>
            <tr>
              <th class="h">ご利用時間</th>
              <td class="d">チェックイン 15:00 / チェックアウト 11:00</td>
            </tr>
            <tr>
              <th class="h">フロント営業時間</th>
              <td class="d">9:00~17:00</td>
            </tr>
            <tr>
              <th class="h">お食事</th>
              <td class="d">朝食・夕食はついておりません。</td>
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
      <!-- <BasicButton :link="site" :linkName="siteName" class="link_btn" /> -->
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
  margin: 5% 10%;
}
.info {
  font-size: 45px;
}
.mini {
  font-size: 25px;
}
ta,
d,
h {
  border-bottom: 1px solid darkgray;
  width: 50%;
  line-height: 300%;
  text-align: left;
}
/* table {
  border-collapse: collapse;
} */
.attention {
  line-height: 5%;
}

@media (max-width: 768px) {
  .info {
    font-size: 25px;
  }
  .mini {
    font-size: 15px;
  }
  .attention {
    margin-top: 8%;
    line-height: 100%;
  }
}
</style>
