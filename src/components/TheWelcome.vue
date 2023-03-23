<script setup>
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();
</script>

<template>
  <header>
    <h3>Piniaチェック</h3>
    <p>count: {{ counter.count }}</p>
    <p>doubleCount:{{ counter.doubleCount }}</p>
    <button @click="counter.increment">UP</button>
  </header>
</template>
