<template>
  <!-- <div class="villaTopBox"> -->
  <div class="roomAll">
    <div>
      <h1 class="villaTitle">Private Villa</h1>
      <p class="villaSubTitle">1日3組様限定のオールプライベートヴィラ</p>

      <!-- <div class="roomBox"> -->
      <div class="roomDescription">
        <div class="roomSubDescription">
          <p>オーシャンビューの開放的なお部屋</p>
          <p>３棟のヴィラはオーシャンビューのオールプライベートな空間。</p>
          <p>セミオープンスタイルの広いリビングの向こうには、</p>
          <p>自分たちだけのテラスと宮古ブルーが広がります。</p>
          <div class="button-wrapper">
            <BasicButton :linkName="linkTitle" :link="destination" />
          </div>
        </div>
      </div>
    </div>
    <div class="photo-wrapper">
      <img :src="imageURL" alt="photo1" class="photo" />
    </div>
  </div>
  <!-- </div> -->
  <!-- </div> -->
</template>

<script setup>
import BasicButton from "/src/components/button/BasicButton.vue";
import { useImageStore } from "@/stores/image.js";
import { onMounted, ref } from "vue";

const linkTitle = ref("Acsess");
const destination = ref("acsess");

const imageStore = useImageStore();
const imageURL = ref("");

onMounted(async () => {
  await imageStore.loadImage("6");

  //imageURL stateを更新する
  imageURL.value = imageStore.imageURL;
});
</script>

<style>
.roomAll {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 300px;
}

.roomDescription {
  flex: 1;
  padding-right: 20px;
}

.button-wrapper {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
}

.photo-wrapper {
  display: flex;
  justify-content: flex-end;
  flex: 1;
}

.photo {
  max-width: 85%;
  height: auto;
}

@media (max-width: 767px) {
  .roomAll {
    flex-direction: column;
    width: 100%;
  }

  .photo {
    max-width: 100%;
  }
}
</style>
