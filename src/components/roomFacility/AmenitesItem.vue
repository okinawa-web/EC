<template>
  <div class="freeBox">
    <h1 class="freeServise">{{ props.amenityTitleEnglish }}</h1>
    <p>{{ props.amenityTitle }}</p>
    <div>
      <!-- <img src="@/assets/toilet.jpg" alt="トイレ" class="AmenitiesPhoto" /> -->
      <img
        :src="`src/assets/${props.amenityimage}`"
        alt="トイレ"
        class="AmenitiesPhoto"
      />
      <img
        :src="getImageURL(props.amenityimage)"
        alt="トイレ"
        class="AmenitiesPhoto"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  amenityTitleEnglish: String,
  amenityTitle: String,
  amenityimage: String,
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
