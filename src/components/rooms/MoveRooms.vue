<template>
  <div class="moverooms">
    <div class="room101">
      <router-link :to="{ name: 'Room', query: { id: 101 } }">
        <p class="image">
          <!-- <img src="@/assets/room1.jpg" alt="101" /> -->
          <img :src="imageURL" alt="room1" :key="imageURL" />
        </p>
        <div class="wrap_txt">
          <p class="title">
            <em>Room 101</em>
          </p>
          <div class="rooms_table">
            <table>
              <tbody>
                <tr>
                  <th>定員</th>
                  <td>1~5名</td>
                </tr>
                <tr>
                  <th>広さ</th>
                  <td>86.70㎡(2LDK)</td>
                </tr>
                <tr>
                  <th>ベッドルーム</th>
                  <td>ツインベッド</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>→</p>
        </div>
      </router-link>
    </div>
    <div class="room102">
      <router-link :to="{ name: 'Room', query: { id: 102 } }">
        <p class="image">
          <img src="@/assets/room2.png" alt="102" />
        </p>
        <div class="wrap_txt">
          <p class="title">
            <em>Room 102</em>
          </p>
          <div class="rooms_table">
            <table>
              <tbody>
                <tr>
                  <th>定員</th>
                  <td>1~5名</td>
                </tr>
                <tr>
                  <th>広さ</th>
                  <td>86.70㎡(2LDK)</td>
                </tr>
                <tr>
                  <th>ベッドルーム</th>
                  <td>ツインベッド</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>→</p>
        </div>
      </router-link>
    </div>
    <div class="room103">
      <router-link :to="{ name: 'Room', query: { id: 103 } }">
        <p class="image">
          <img src="@/assets/room4.jpg" alt="103" />
        </p>
        <div class="wrap_txt">
          <p class="title">
            <em>Room 103</em>
          </p>
          <div class="rooms_table">
            <table>
              <tbody>
                <tr>
                  <th>定員</th>
                  <td>1~3名</td>
                </tr>
                <tr>
                  <th>広さ</th>
                  <td>56.70㎡(1LDK)</td>
                </tr>
                <tr>
                  <th>ベッドルーム</th>
                  <td>クイーンベッド</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>→</p>
        </div>
      </router-link>
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
    await imageStore.loadImage("15"); //imageId指定
    imageURL.value = imageStore.imageURL;
    imageLoaded.value = true; //画像の読み込みが完了するとtrueになる
  } catch (error) {
    console.error(error);
  }
});
</script>

<style>
.moverooms {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
li {
  list-style-type: none;
}
.image {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* 画像が横幅を超えた場合は改行する */
}
.image div {
  flex-basis: 40%;
  margin: 1%;
  display: flex;
  justify-content: center;
}
.image img {
  width: 100%;
  height: auto;
  margin: 1%;
}
.wrap_txt {
  background-color: rgba(252, 247, 247, 0.9);
  color: darkgray;
  text-align: center;
}
/* .rooms_table {
  text-align: center;
} */
</style>
