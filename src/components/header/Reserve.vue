<template>
  <p class="reserve">
    <router-link to="/reserve/reserve" target="_blank">ご予約 </router-link>
  </p>
</template>

<style>
.reserve {
  color: white;
  font-size: 20px;
  font-weight: bold;
  background: #7d8384;
  width: 6%;
  padding: 12px 20px;
  transition: width 500ms ease;
  float: left;
  text-align: center;
}
.reserve:hover {
  background: #ef7306;
}
</style>
