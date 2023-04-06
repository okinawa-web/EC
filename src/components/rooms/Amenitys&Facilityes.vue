<template>
  <div class="afALL">
    <!-- <img src="@/assets/sup1.jpg" alt="SUP" class="button" /> -->
    <!--画像の読み込みが完了するまで非表示-->
    <img :src="imageURL" alt="image" class="rooms_amenimage" :key="imageURL" />

    <div class="button">
      <div class="basic">
        <router-link to="facility" class="basic_btn">
          <p class="afTitle">Amenities & Fasilities</p>
          <p class="afDescription">アメニティ＆設備</p>
          <p class="afDescription">
            各部屋の本格的なキッチンやお部屋、洗面・バスルームには当館でのご滞在が快適となる多彩なアメニティ・設備をご用意しております。
          </p>
          ➡︎
          <br />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useImageStore } from "@/stores/image.js";

const imageStore = useImageStore();
const imageURL = ref("");
const imageLoaded = ref(false);

onMounted(async () => {
  try {
    await imageStore.loadImage("14"); //imageId指定
    imageURL.value = imageStore.imageURL;
    imageLoaded.value = true; //画像の読み込みが完了するとtrueになる
  } catch (error) {
    console.error(error);
  }
});
</script>
<style>
.afALL {
  display: flex;
  margin: 5% 2%;
}

.button {
  /* display: flex; */
  width: 100%;
  height: 600px;
  align-items: center;
  z-index: 0;
  /* margin-top: 4%; */
}

.basic {
  display: block;
  line-height: 48px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: #fff;
  font-size: 20px;
  width: 900px;
  margin: 0 auto;
}

.basic_btn {
  display: block;
  width: 50%;
  height: 465px;
  color: darkgray;
  z-index: 10;
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative; /* 追加 */
}
/* 
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
} */

/* .basic_btn:hover {
  color: #fff;
  background-color: darkgray;
}

.basic_btn:hover:before {
  width: 100%;
} */
.basic:hover .basic_btn {
  color: #fff;
  background-color: darkgray;
}

.basic:hover .basic_btn:before {
  width: 100%;
}

.rooms_amenimage {
  width: 45%;
  height: 45%;
  /* filter: blur(5px); */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
}

/* @media (max-width: 768px) {
  .rooms_amenimage {
    width: 30%;
    height: 30%;
  }
  .basic {
    display: block;
    line-height: 28px;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 10px;
    width: 350px;
  }

  .basic_btn {
    width: 50%;
    height: 465px;
    margin: 0;
  }
} */
@media (max-width: 768px) {
  .basic {
    font-size: 15px;
    width: 90%;
    margin: 0 auto;
    line-height: 22px;
  }
  .basic_btn {
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
  .button {
    width: 100%;
    height: 300px;
    margin-top: 5%;
  }
  .rooms_amenimage {
    width: 50%;
    /* height: 20%; */
  }
  .afDescription{
    font-size: 12px;
    margin: 0;
  }
}
</style>
