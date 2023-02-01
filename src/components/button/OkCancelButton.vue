<template>
  <div class="button_flame">
    <router-link :to="`/${props.linkName}`" class="back_button"
      >確認/キャンセル{{ props.link }}</router-link
    >
  </div>
</template>

<script setup>
const props = defineProps({
  link: String,
  linkName: String,
});
</script>

<style>
.button_flame {
  padding: 0.5em 1em;
  margin: 2em 0;
  color: darkgray;
  background: orange;
  border-bottom: solid 6px darkgray;
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
