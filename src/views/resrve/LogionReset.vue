<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const authToken = localStorage.getItem("authToken");
  console.log(authToken);
});
</script>

<template>
  <h1>authToken</h1>
</template>
