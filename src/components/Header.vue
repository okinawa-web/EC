<template>
  <div class="header">
    <div class="decoline"></div>
    <header class="head">
      <div class="container">
        <HeaderLogo />
        <HeaderLink />
        <HeaderReserve />
        <HeaderMenu class="menu"/>
      </div>
    </header>
  </div>
</template>

<script setup>
import HeaderLogo from "@/components/header/Logo.vue";
import HeaderLink from "@/components/header/Link.vue";
import HeaderReserve from "@/components/header/Reserve.vue";
import HeaderMenu from "@/components/header/Menu.vue";
</script>
<style>
.header {
  width: 100%;
}

.decoline {
  height: 20px;
  width: 100%;
  background-color:rgb(0, 150, 150);
  z-index: 2;
  position: fixed;
  top: 0;
}
.head {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgb(255, 255, 255);
  height: 17%;
  z-index: 1;
margin-top: 10px;
}

.container {
  display: flex;
  background-color: rgb(255, 255, 255);
  width: 80%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  justify-content: flex-end; /* 右寄せにする */
  align-items: center; /* 垂直方向に中央に配置する */
  z-index: 1;
}


@media (max-width: 768px) {
  #head {
    height: 13%;
  }
}
</style>
