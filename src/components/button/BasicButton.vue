<template>
  <div class="button">
    <div class="basic">
      <router-link :to="`/${props.link}`" class="basic_btn">
        ➡︎ {{ props.linkName }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  link: String,
  linkName: String,
});
</script>

<style>
.basic {
  display: block;

  position: relative;
  /* margin-left: auto;
  margin-right: auto; */
  width: 250px;
  height: 48px;
  line-height: 48px;
  display: flex;
  text-align: center;
  background: #fff;
  font-size: 20px;
}

.basic_btn {
  display: block;

  width: 100%;
  height: 100%;
  color: darkgray;
  z-index: 10;
}

.basic_btn:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 0;
  display: block;
  background: darkgray;
  z-index: -1;
  transition: 0.5s;
}

.basic_btn:hover {
  color: #fff;
}

.basic_btn:hover:before {
  width: 100%;
}
</style>
