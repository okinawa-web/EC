<template>
  <div class="button_style">
    <router-link
      :to="`/${props.link}`"
      class="basic_btn_style"
      style="text-decoration: none"
    >
      ➡︎ {{ props.linkName }}
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  link: String,
  linkName: String,
});
</script>

<style>
.button_style {
  display: inline-block;
  /* margin: 10px; */
  margin-left: 5%; /*追加*/
  padding: 10px 20px;
  background: linear-gradient(to right, darkgray 50%, rgb(0, 114, 114) 50%);
  background-size: 200% 100%;
  color: #fff;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-out;
  width: 300px;
}

.button_style:hover {
  background-position: -100% 0;
  color: #fff;
}

.basic_btn_style {
  color: #fff;
  text-decoration: none;
}
</style>
