<template>
  <div class="moverooms">
    <!-- <div class="roomWrapper">
          <div v-for="room in rooms" :key="room.id" class="room"></div>
        </div> -->
    <div class="room101">
      <router-link :to="{ name: 'Room', query: { id: 101 } }">
        <p class="img">
          <img src="@/assets/room1.jpg" alt="101" />
        </p>
        <div class="wrap_txt">
          <p class="title">
            <em>Room 101</em>
          </p>
          <div class="table">
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
        <p class="img">
          <img src="@/assets/room2.png" alt="102" />
        </p>
        <div class="wrap_txt">
          <p class="title">
            <em>Room 102</em>
          </p>
          <div class="table">
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
        <p class="img">
          <img src="@/assets/room4.jpg" alt="103" />
        </p>
        <div class="wrap_txt">
          <p class="title">
            <em>Room 103</em>
          </p>
          <div class="table">
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

<style>
.moverooms {
  width: 100%;
  /* max-width: 1920px; */
  display: flex;
  justify-content: space-between;
  /* margin-top: 4.6875%; */
  /* overflow: hidden; */
}
li {
  list-style-type: none;
}
img {
  position: relative;
}
.wrap_txt {
  /* position: absolute;
  top: 70%;
  transform: translate(85%, 480%);  */
  background-color: rgba(252, 247, 247, 0.9);
  color: darkgray;
  text-align: center;
}
</style>
