<template>
  <div class="activity">
    <p class="activity_title_english">{{ props.activityTitleEnglish }}</p>
    <div class="back_color">
      <p class="activity_title">{{ props.activityTitle }}</p><br>
      <p class="explanation">
        {{ props.explanation }}
      </p>
      <!-- <ArrowButton
        :Link="`${props.link}`"
        :Name="`${props.linkName}`"
        class="arrow"
      /> -->
      <div class="image">
        <img :src="`src/assets/${props.image01}`" alt="01" />
        <img :src="`src/assets/${props.image02}`" alt="02" />
      </div>
    </div>
  </div>
</template>

<script setup>
// import ArrowButton from "@/components/button/ArrowButton.vue";

const props = defineProps({
  activityTitleEnglish: String,
  activityTitle: String,
  explanation: String,
//   link: String,
//   linkName: String,
  image01: String,
  image02: String,
});
</script>

<style>
.activity {
  color: darkgray;
  text-align: center;
}
.activity_title_english {
  font-size: 15px;
}
.activity_title {
  font-size: 25px;
}
.explanation {
  font-size: 16px;
  width: 60%;
}
.image {
  display: flex;
  /* width: 70%; */
}
.back_color {
  background-color: aliceblue;
}
</style>
