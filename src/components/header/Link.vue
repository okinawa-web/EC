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
  float: left;
  padding-top: 2.5%;
  /* margin-top: 0%;
  margin-bottom: 50%; */
  /* display: flex; */
  /* position: absolute;
  bottom: 0%; */
}

.mgr-10 {
  margin: 10px;
}
</style>
