<template>
  <router-link to="/activity" class="basicButton">{{
    props.linkTitle
  }}</router-link>
</template>

<script setup>
const props = defineProps({
  linkTitle: String,
});
</script>
<style>
.basicButton {
  /* display: block; */
  color: white;
  font-size: 16px;
  background: #7d8384;
  margin: 18px 30px;
  transition: width 500ms ease;
}
basicButton:hover {
  background: #7d8384;
}
</style>
