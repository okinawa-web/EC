<template>
  <div class="text">
    <h1>Service</h1>
    <p>サービス</p>
    <p>当ホテルへお越しの際には浜島空港到着後、</p>
    <p>送迎バスにてお越しください。</p>
    <p>ご宿泊期間中、</p>
    <p>各部屋1台のカートをご利用いただけます。</p>
    <Button />
  </div>

  <img src="/src/assets/umigame.jpg" alt="うみの画像" />
</template>

<script setup>
import Button from "@/components/button/BasicButton.vue";
</script>

<style>
.text {
  width: 90%;
  margin: 150px auto auto auto;
  text-align: center;
  color: white;
  position: absolute;
}

img {
  height: 700px;
}
</style>
Í
