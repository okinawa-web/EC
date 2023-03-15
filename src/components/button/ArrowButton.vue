<template>
  <a :href="`${props.Link}`" class="arrow">{{ props.Name }}</a>
</template>

<script setup>
const props = defineProps({
  Link: String,
  Name: String,
});
</script>

<style>
.arrow {
  display: flex;
  font-size: 20px;
  color: darkgray;
  text-decoration: none;
  transition: 1s;
  text-align: center;
  justify-content: center;
  z-index: 1;
  /* position: absolute; */
}

.arrow::before {
  content: "";
  width: 60px;
  height: 10px;
  margin-top: 8px;
  border-bottom: solid 1px;
  transition: 1s;
  position: relative;
}
.arrow:hover::before {
  visibility: hidden;
  opacity: 0;
}

.arrow::after {
  visibility: hidden;
  content: "";
  width: 60px;
  height: 10px;
  margin-top: 8px;
  border-bottom: solid 1px;
  border-right: solid 1px;
  transform: skew(60deg);
  display: block;
}

.arrow:hover:after {
  visibility: visible;
  opacity: 1;
  transition: 1s;
}
</style>
