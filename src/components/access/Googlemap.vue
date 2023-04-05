<template>
  <div class="map-container">
    <p>空港に到着されましたら、タクシーで当ホテルまでお越しください🚖</p>
    <div id="map"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import L from "leaflet";
import L from "leaflet/dist/leaflet.js";
import "leaflet/dist/leaflet.css";

const map = ref(null);

const markerIcon = L.icon({
  iconUrl: "/img/leaflet/marker-icon.png",
  iconRetinaUrl: "/img/leaflet/marker-icon-2x.png",
  shadowUrl: "/img/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

onMounted(() => {
  map.value = L.map("map", { zoomControl: true }).setView(
    [26.212401, 127.680932],
    9
  ); // 中心点を指定
  // L.control.zoom().addTo(map.value);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map.value);

  // 離島の位置とポップアップをセット
  L.marker([26.0, 128.0], { icon: markerIcon })
    .addTo(map.value)
    .bindPopup("HAMAJIMA", { offset: [0, 0] }); // ポップアップ位置を上に20pxずらす

  // L.marker([26.210725, 127.680361], { icon: markerIcon })
  //   .addTo(map.value)
  //   .bindPopup("渡嘉敷島");
  // L.marker([24.34613, 123.982456], { icon: markerIcon })
  //   .addTo(map.value)
  //   .bindPopup("宮古島");
  // L.marker([24.454712, 122.991198], { icon: markerIcon })
  //   .addTo(map.value)
  //   .bindPopup("石垣島");
  // L.marker([24.344665, 124.153997], { icon: markerIcon })
  //   .addTo(map.value)
  //   .bindPopup("与那国島");
});
</script>

<style>
.map-container {
  height: 400px;
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: darkgray;
  font-size: 23px;
  text-align: center;
  margin: auto;
  /* margin-top: 20%; */
}

#map {
  height: 400px;
  width: 100%;
  z-index: 0;
}

@media (max-width: 768px) {
  .map-container {
    font-size: 17px;
  }
  #map {
    height: 250px;
    width: 100%;
    z-index: 0;
  }
}
</style>
