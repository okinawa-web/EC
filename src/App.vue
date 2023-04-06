<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/test">テスト</RouterLink>
      </nav>
    </div>
  </header> -->
  <RouterView />
</template>

<style>
/* 地図を表示するdiv要素に対するスタイル */
#map {
  height: 100vh;
  width: 100%;
}

/* Leafletのマーカー画像が正常に表示されるようにするためのスタイル */
.leaflet-marker-icon,
.leaflet-marker-shadow {
  position: absolute;
  width: 25px;
  height: 41px;
}

.leaflet-marker-icon {
  background-image: url("../img/leaflet/marker-icon.png");
}

.leaflet-marker-icon2x {
  background-image: url("../img/leaflet/marker-icon-2x.png");
  background-size: 25px 41px;
}

.leaflet-marker-shadow {
  background-image: url("../img/leaflet/marker-shadow.png");
  background-size: 41px 41px;
}
</style>
