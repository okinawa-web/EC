<template>
  <!-- <img :src="`src/assets/${props.image}`" alt="アメニティ" /> -->
  <img
    :src="`@/assets/${ptops.image}`"
    alt="アメニティ"
    class="AmenitiesPhoto"
  />
  <p class="AmenitiesTitle">{{ props.amenitieName }}</p>
</template>

<script setup>
const props = defineProps({
  image: String,
  amenitieName: String,
});
</script>
<style>
.AmenitiesPhoto {
  width: 350px;
  height: 250px;
}

.AmenitiesTitle {
  width: 400px;
  font-size: 20px;
}
</style>
