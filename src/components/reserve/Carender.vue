<template>
  <div class="package_bottom">
    <div class="package_bottom_innner">
      <p class="">大人１名さまあたりの料金（消費税込）</p>
      <p class="">
        （１泊１室<select
        ></select
        >）
      </p>
    </div>
    <table>
      <tr>
        <th class="plan" colspan="2">プラン</th>
        <th>プラン<br />詳細</th>
        <th class="day">
          2/6
          <br />
          (月)
        </th>
        <th class="day">
          2/6
          <br />
          (月)
        </th>
        <th class="day">
          2/6
          <br />
          (月)
        </th>
        <th class="day">
          2/6
          <br />
          (月)
        </th>
        <th class="day">
          2/6
          <br />
          (月)
        </th>
        <th class="day">
          2/6
          <br />
          (月)
        </th>
        <th class="day last">
          2/6
          <br />
          (月)
        </th>
      </tr>
      <tr>
        <td>
          <img src="@/assets/drinkIcon.png" alt="ドリンク" class="room_image" />
        </td>
        <td>
          【1日3組限定】Villa Rikyu スタンダードプラン｜宮古島満喫！
          ご宿泊中無料でご利用いただけるカーサービス付！
        </td>
        <td>
          <a href="#" class="calender_button"
            >カレンダー<br />
            表示</a
          >
        </td>
        <td class="room_state">空室待ち</td>
        <td class="room_state">空室待ち</td>
        <td class="room_state">空室待ち</td>
        <td class="room_state">空室待ち</td>
        <td class="room_state">空室待ち</td>
        <td class="room_state">空室待ち</td>
        <td class="room_state last">空室待ち</td>
      </tr>
    </table>
    <p class="bottom_footer">空有：空室あり　満：満室　-：設定なし</p>
    <p class="bottom_footer red">料金は税込み価格です。</p>
    <p class="bottom_footer">
      ※上記の表示は、空室検索の照会時点の状況ですので、予約時にお取りできない場合もございます。
    </p>
    <p class="bottom_footer">
      ※「空室待ち」をクリックすると、空室待ちの申し込みができます。
    </p>
  </div>
</template>

<style>
.package_bottom {
  padding: 15px 20px;
}

.room_image {
  width: 80px;
}

.plan {
  width: 25%;
  text-align: center;
}

.day {
  width: 8%;
  text-align: center;
}

td,
th {
  border-bottom: 1px solid pink;
  border-left: 1px solid pink;
  font-size: 86%;
}

th {
  border-top: 1px solid pink;
}

.last {
  border-right: 1px solid pink;
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
