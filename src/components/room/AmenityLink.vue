<template>
  <div class="Amenity_link">
    <router-link to="/facility">
      <img src="@/assets/toilet.jpg" alt="amenity" class="amenity_img" />
      <div class="textbox">
        <div class="wid">
          <div class="title">
            <p class="text_title">Amenitys & Facilities</p>
            <p class="text_japanies">アメニティ＆設備</p>
          </div>
          <p class="text_info">
            各ヴィラの本格キッチンや広々としたお部屋、洗面・バスルームにはヴィラでのご滞在が快適となる多彩なアメニティ・設備をご用意しております。
          </p>
          <!-- <ArrowButton :Name="details" /> -->
          <!-- <router-link to="/facility">→ 詳細へ</router-link> -->
          <p>→ 詳細へ</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
// import ArrowButton from "@/components/button/ArrowButton.vue"
// import { ref } from "vue";

// const details = ref("詳細へ")
</script>

<style>
.Amenity_link {
  display: flex;
  width: 100%;
}
.amenity_img {
  width: 50%;
}
.textbox {
  float: right;
  color: darkgray;
  width: 50%;
  font-size: 20px;
}
/* .textbox:hover {
    color: darkgray;
  } */
.wid {
  text-align: center;
  margin: 15%;
}
.text_title {
  font-size: 40px;
  margin: 0%;
}
.text_japanies {
  margin-top: 0;
  margin-bottom: 10%;
}
.text_info {
  line-height: 50px;
}
</style>
