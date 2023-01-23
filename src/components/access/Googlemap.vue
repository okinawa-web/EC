<template>
  <p>空港に到着されましたら、タクシーで当ホテルまでお越しください</p>
  <img src="@/assets/map.jpg" alt="地図" class="map" />

  <img src="@/assets/access.jpg" alt="お車で" class="access" />

  <!-- <div class="airport">与那国空港</div>
    <div class="airport">波照間空港</div> -->
</template>

<style>
/* .airport{
    background-color: orange;
    font-size: 16px;
    padding: 18px 30px;
    transition: width 500ms ease;
  } */
.map {
  width: 80%;
  height: 100vh;
  background-image: url("@/assets/map.jpg");
  background-size: cover;
  background-position: center;
}
.access {
  width: 50%;
  height: 30%;
  text-align: center;
  padding-left: 10%;
}
/* .access {
    background-image: url("@/assets/access.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  } */
</style>
