<template>
  <div class="SerchBox">
    <div class="title">空室検索</div>
    <table class="table">
      <tr>
        <th class="table_th">宿泊日</th>
        <td class="table_td">
          <input type="text" name="year" /><span>年</span
          ><input type="text" /><span>月</span><input type="text" /><span
            >日</span
          >
          <span>
            <label
              ><span><input type="checkbox" /></span>日付未定</label
            >
          </span>
        </td>
      </tr>
      <tr>
        <th class="table_th">人数・泊数・部屋数</th>
        <td class="table_td">
          <span> 大人（１部屋あたり）</span>

          <select name="" id=""></select
          ><span>名</span>
          <select name="" id=""></select
          ><span>泊</span>
          <select name="" id=""></select
          ><span>部屋</span>
          <span>子供</span>
          <select name="" id=""></select
          ><span>名</span>
        </td>
      </tr>
      <td colspan="2">
        <input
          type="button"
          class="table_btn"
          value="この条件で空室状況を表示"
        />
      </td>
    </table>
  </div>
</template>

<style>
.table_btn {
  display: block;
  margin: auto;
  font-size: 108%;
  padding: 12px 18px;
  border: 1px solid #a0a0a0;
  border-radius: 3px;
}
.title {
  background-color: rgb(0, 83, 92);
  color: white;
  font-size: 20px;
  width: 90%;
  height: 40px;
  text-align: center;
  padding-top: 12px;
  letter-spacing: 0.3em;
  margin: auto;
}
.SerchBox .table {
  border: 1px solid rgb(212, 212, 212);
  width: 90%; /* 固定幅 */
  padding-left: 10px;
  margin: auto;
}
.SerchBox .table .table_th {
  width: 450px; /* 900pxの半分 */
  height: 40px;
  background-color: #e8e8e8;
}
.SerchBox .table .table_td {
  height: 40px;
  width: 450px; /* 900pxの半分 */
  white-space: nowrap;
}

.table_td {
  padding: 0 15px;
}

.table_th{
  padding: 0 15px;
}
.table_btn {
  display: block;
  margin: auto;
  font-size: 108%;
  padding: 12px 18px;
  border: 1px solid #a0a0a0;
  border-radius: 3px;
}
</style>
<!-- <style>
.SerchBox {
  margin: auto;
}

.title {
  background-color: rgb(0, 73, 73);
  color: white;
  font-size: 20px;
  width: 90%;
  height: 40px;
  text-align: center;
  padding-top: 12px;
  letter-spacing: 0.3em;
  margin: auto;
}

.table {
  border: 1px solid rgb(212, 212, 212);
  width: 900px;
  padding-left: 10px;
  margin: auto;
}

.table tr {
  width: 90%;
  margin: auto;
}
.table_th {
  width: 50%;
  height: 40px;
  background-color: #e8e8e8;
}
.table_td {
  height: 40px;
  width: 50%;
  white-space: nowrap;
}

.table_btn {
  display: block;
  margin: auto;
  font-size: 108%;
  padding: 12px 18px;
  border: 1px solid #a0a0a0;
  border-radius: 3px;
}
</style> -->
