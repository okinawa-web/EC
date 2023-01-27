<template>
  <div class="afALL">
    <img src="@/assets/sup1.jpg" alt="SUP" class="button" />
    <div class="button">
      <div class="basic">
        <router-link to="/fasility" class="basic_btn">
          <p class="afTitle">Amenities & Fasilities</p>
          <p class="afDescription">アメニティ＆設備</p>
          <p class="afDescription">
            各部屋の本格的なキッチンやお部屋、洗面・バスルームには当館でのご滞在が快適となる多彩なアメニティ・設備をご用意しております。
          </p>
          ➡︎
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// const props = defineProps({
//   link: String,
//   linkName: String,
// });
</script>

<style>
.afTitle {
  font-size: 40px;
}

.afDescription {
  font-size: 25px;
}

.button {
  text-align: center;
  float: left;
  width: 900px;
  height: 600px;
}
.basic {
  display: block;
  position: relative;
  /* width: 1000px;
  height: 350px; */
  line-height: 48px;
  display: flex;
  text-align: center;
  background: #fff;
  font-size: 20px;
}

.basic_btn {
  display: block;
  width: 90%;
  height: 465px;
  color: darkgray;
  z-index: 10;
  display: table-cell;
  margin: 15% 0 0 5%;
  text-align: center;
}

.basic_btn:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 0;
  display: block;
  background: rgb(230, 230, 230);
  z-index: -1;
  transition: 0.5s;
}

.basic_btn:hover {
  color: #fff;
}

.basic_btn:hover:before {
  width: 100%;
}

/* .basic_btn {
  display: block;
  font-size: 16px;
  padding: 18px 30px;
  transition: width 500ms ease;
  width: 6%;
  height: 15px;
  color: darkgray;
  background-color: aquamarine;
} */
/* .basic_btn:hover {
  background: darkgray;
  color: white;
} */
</style>
