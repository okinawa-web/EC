<template>
  <p>客室設備・アメニティ</p>

  <AmenitesItem />
  <Amenityies />
  <FreeService />
  <kitchenware />
  <PaidService />
</template>

<script setup>
import AmenitesItem from "../components/roomFacility/AmenitesItem.vue";
import Amenityies from "../components/roomFacility/Amenityies.vue";
import FreeService from "../components/roomFacility/FreeService.vue";
import Kitchenware from "../components/roomFacility/Kitchenware.vue";
import PaidService from "../components/roomFacility/PaidService.vue";
</script>
