<template>
  <header id="header">
    <HeaderLogo />
    <HeaderLink />
    <HeaderReserve />
    <HeaderMenu />
  </header>
</template>

<script>
import HeaderLogo from "@/components/header/Logo.vue";
import HeaderLink from "@/components/header/Link.vue";
import HeaderReserve from "@/components/header/Reserve.vue";
import HeaderMenu from "@/components/header/Menu.vue";

export default {
  components: {
    HeaderLogo,
    HeaderLink,
    HeaderReserve,
    HeaderMenu,
  },
};
</script>

<style>
/* .header {
    display: flex;
    align-items: center;
  } */
</style>
