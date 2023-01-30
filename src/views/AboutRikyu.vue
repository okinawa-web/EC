<template>
  aboutRikyuのページ
  <Headerset />

  <Checkin />
  <!-- <Privete />
  <Meals />
  <Activity /> -->
</template>

<script>
import Headerset from "@/components/Header.vue";
import Checkin from "@/components/aboutrikyu/Checkin.vue";
// import Privete from "@/components/aboutrikyu/Rikyuprivetevilla.vue";
// import Meals from "@/components/aboutrikyu/Meals.vue";
// import Activity from "@/components/aboutrikyu/RikyuActivitys.vue";

export default {
  components: {
    Headerset,
    Checkin,
    // Privete,
    // Meals,
    // Activity,
  },
};
</script>
