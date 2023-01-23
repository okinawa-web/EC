<template>
  <footer id="footer">
    <div class="con_footer">
      <p class="box_img">
        <img
          src="@/assets/HAMAJIMAlogo.jpg"
          alt="umi"
          height="500"
          width="1300"
        />
      </p>
      <p class="side_img">
        <img
          src="@/assets/umigame.jpg"
          alt="umigame"
          height="350"
          width="600"
        />
      </p>
      <div class="footer_text">
        <p class="logo">
          <a href="#"></a>
          <img
            src="@/assets/logo.png"
            alt="logo"
            class="logo"
            height="300"
            width="300"
          />
        </p>

        <div class="footer_info">
          <p>~HAMAJIMA~</p>
          <p>〒000-0000 <br />沖縄県浜島2207</p>
          <p>予約専用ダイヤル</p>
          <h3>Tel:0000-000-000</h3>
          <p>受付時間 10:00~18:00</p>
        </div>
      </div>
      <p id="copyright">©︎2023~ ALL RIGTHS RESERVED HAMAJIMA.</p>
    </div>
  </footer>
</template>

<style>
.box_img {
  position: relative;
}

.side_img {
  position: absolute;
  bottom: -300px;
  left: 10px;
}

.logo img {
  position: absolute;
  bottom: 30px;
  left: 40%;
}

.footer_info {
  text-align: right;
}
#copyright {
  text-align: center;
}
</style>
