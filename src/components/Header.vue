<template>
  <header id="head">
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
#head {
  display: flex;
  background-color: white;
  width: 100%;
  /*固定*/
  position: fixed;
  top: 0%;
}
</style>
