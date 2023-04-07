<template>
  <div class="button_flame">
    <router-link to="/reserve/reserve" class="back_button"
      >前の画面に戻る</router-link
    >
  </div>
</template>

<style>
.button_flame {
  padding: 0.5em 1em;
  margin: 2em 0;
  color: darkgray;
  background: darkgray;
  border-bottom: solid 6px orange;
  border-radius: 5px;
  width: 10%;
}
.back_button {
  margin: 0;
  padding: 0;
}
.back_button::before {
  content: "> ";
}
</style>
