<template>
  <div class="freeBox">
    <ul class="box_ul">
      <h1 class="freeServise">Free Service</h1>
      <li class="free_li">
        <img :src="imageURL1" alt="ロゴ" class="freeIcon" />
        <p class="serviseP">冷蔵庫内ドリンク</p>
        <p class="serviseP">飲み放題サービス</p>
      </li>
      <li class="free_li">
        <img :src="imageURL2" alt="ロゴ" class="freeIcon" />
        <p class="serviseP">宿泊期間中</p>
        <p class="serviseP">駐車料金無料</p>
      </li>
      <li class="free_li">
        <img :src="imageURL3" alt="ロゴ" class="freeIcon" />
        <p class="serviseP">野外用</p>
        <p class="serviseP">バーベキューコンロ</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useImageStore } from "@/stores/image.js";
import { ref, onMounted } from "vue";

const imageURL1 = ref("");
const imageLoaded1 = ref(false);
const imageURL2 = ref("");
const imageLoaded2 = ref(false);
const imageURL3 = ref("");
const imageLoaded3 = ref(false);

const store = useImageStore();
onMounted(async () => {
  try {
    await store.loadImage(40);
    imageURL1.value = store.imageURL;
    imageLoaded1.value = true;

    await store.loadImage(41);
    imageURL2.value = store.imageURL;
    imageLoaded2.value = true;

    await store.loadImage(42);
    imageURL3.value = store.imageURL;
    imageLoaded3.value = true;
  } catch (error) {
    console.log(`画像取得失敗:${error}`);
  }
});
</script>

<style>
.freeBox {
  width: auto;
  height: auto;
  margin: 0 30px;
}

.freeIcon {
  width: 70px;
  margin-bottom: 30px;
}

.box_ul .free_li {
  text-align: center;
  list-style: none;
}
.box_ul {
  padding: 0%;
}
.free_li {
  display: inline-block;
  padding: 60px;
  width: 23.5%;
  height: 200px;
  border: 1px solid darkgray;
  margin-top: 50px;
  margin-bottom: 50px;
}

.serviceP {
  font-size: 20px;
}
body {
  color: darkgray;
}

@media (max-width: 768px) {
  .freeBox {
    width: auto;
    height: auto;
    margin: 0 30px;
  }
  .freeIcon {
    width: 40px;
    margin-bottom: 10px;
  }
  .free_li {
    padding: 30px;
    width: 23.5%;
    height: 150px;
    margin-top: 0;
  }
  .serviceP {
    font-size: 15px;
  }
}
</style>
