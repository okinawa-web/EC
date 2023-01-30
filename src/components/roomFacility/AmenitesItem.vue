<template>
  <!-- <img
    :src="`@/assets/${props.image}`"
    alt="アメニティ"
    class="AmenitiesPhoto"
  /> -->
  <!-- <p class="AmenitiesTitle">{{ props.amenitieName }}</p> -->
  <img src="@/assets/toilet.jpg" alt="トイレ" class="AmenitiesPhoto" />
  <p class="AmenitiesTitle"></p>
</template>

<script setup>
// const props = defineProps({
//   image: String,Ï
//   amenitieName: String,
// });

// export default {
//   components: {
//     Item,
//   },
// };
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
