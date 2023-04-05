<template>
  <div class="link">
    <router-link to="/"><span class="mgr-10">HOME</span></router-link>
    <router-link to="/aboutRikyu"
      ><span class="mgr-10">HAMAJIMAについて</span></router-link
    >
    <router-link to="/rooms"><span class="mgr-10">お部屋</span></router-link>
    <router-link to="/activity"
      ><span class="mgr-10">アクティビティ</span></router-link
    >
    <router-link to="/acsess"><span class="mgr-10">アクセス</span></router-link>
  </div>
</template>

<style>
.link {
  display: block;
  align-items: center;
  /* flex-wrap: wrap; */
  width: 60%;
  font-size: 25px;
  margin-right: 0;
  margin-left: 5%;
  margin-top: 3%;
}
/* リンク間の空間 */
.mgr-10 {
  margin: 10px;
}

@media screen and (max-width: 768px) {
  .link {
    display: block;
    margin-top: 20px;
    font-size: 10px;
    width: 100%;
    margin-right: 0;
    margin-left: 0%;
  }
}
</style>
