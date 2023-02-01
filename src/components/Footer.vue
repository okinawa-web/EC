<!-- eslint-disable prettier/prettier -->
<template>
  <footer id="footer">
    <p class="side_img">
      <!-- <img src="@/assets/umigame.jpg" alt="footer" /> -->
    <div class="footer_text">
      <p class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="logo" />
        </router-link>
      </p>

      <div class="footer_info">
        <p>~HAMAJIMA~</p>
        <p>〒000-0000 <br />沖縄県浜島2207</p>
        <p>予約専用ダイヤル</p>
        <h3>Tel:0000-000-000</h3>
        <p>受付時間 10:00~18:00</p>
      </div>
      <div class="copyright">©︎2023~ ALL RIGTHS RESERVED HAMAJIMA.</div>
    </div>
    </p>
  </footer>
</template>

<style>
.footer_text {
  position: relative;
  color: darkgray;
}
.logo {
  position: absolute;
}

.footer_info {
  position: absolute;
  right: 0;
  font-size: 16px;
}

.copyright {
  text-align: center;
}
</style>
