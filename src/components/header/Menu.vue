<template>
  <header class="ham">
    <!-- ハンバーガーメニュー部分 -->
    <div class="nav">
      <!-- 表示・非表示を切り替えるチェックボックス -->
      <input id="drawer_input" class="drawer_hidden" type="checkbox" />
      <!-- ハンバーガーアイコン -->
      <label for="drawer_input" class="drawer_open"><span></span></label>
      <!-- <label for="drawer_text" class="drawer_open">MENU</label> -->

      <!-- MENU -->
      <nav class="nav_content">
        <div class="navline"></div>
        <ul class="nav_list">
          <li class="nav_item"><router-link to="/" class="menulink">TOP</router-link></li>
          <li class="nav_item">
            <router-link to="/calender" target="_blank">ご予約</router-link>
          </li>
          <li class="nav_item">
            <router-link to="/aboutRikyu" class="menulink">HAMAJIMAについて</router-link>
          </li>
          <li class="nav_item">
            <router-link to="/rooms" class="menulink">お部屋</router-link>
          </li>
          <li class="nav_item">
            <router-link to="/facility" class="menulink">-客室設備・アメニティ</router-link>
          </li>
          <li class="nav_item">
            <router-link to="/activity" class="menulink">アクティビティ</router-link>
          </li>
          <li class="nav_item">
            <router-link to="/acsess" class="menulink">アクセス</router-link>
          </li>
          <!-- <li class="nav_item">
            <router-link to="/question">よくあるご質問</router-link>
          </li>
          <li class="nav_item">
            <router-link to="/news">新着情報</router-link>
          </li> -->
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
.ham {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0 50px; */
  margin: 0 3%;
  background: rgb(255, 255, 255);
  float: left;
}

/* ハンバーガーメニューに関するCSS */
/* チェックボックスを非表示にする */
.drawer_hidden {
  display: none;
}

/* ハンバーガーアイコンの設置スペース */
.drawer_open {
  display: flex;
  height: 90px;
  width: 10px;
  justify-content: right;
  align-items: center;
  position: relative;
  z-index: 100; /*重なり順を一番上にする */
  cursor: pointer;

}

/* ハンバーガーメニューのアイコン */
.drawer_open span,
.drawer_open span:before,
.drawer_open span:after {
  content: "";
  display: block;
  height: 3px;
  width: 30px;
  border-radius: 10px;
  background: darkgray;
  transition: 0.5s;
  position: absolute;
    display: grid;
  justify-content: end;
  
}

/* 三本線の一番上の棒の位置調整 */
.drawer_open span:before {
  bottom: 12px;
}

/* 三本線の一番下の棒の位置調整 */
.drawer_open span:after {
  top: 12px;
}

/* クリックされたら真ん中の線を透明にする */
#drawer_input:checked ~ .drawer_open span {
  background: rgba(255, 255, 255, 0);
}

/* クリックされたらアイコンが×になように上下の線を回転 */
#drawer_input:checked ~ .drawer_open span::before {
  bottom: 0;
  transform: rotate(45deg);
}

#drawer_input:checked ~ .drawer_open span::after {
  top: 0;
  transform: rotate(-45deg);
}

/* クリックされたらMENUがCLOSEになる */
/* #drawer_text:checked ~ .drawer_open::after{
          content: 'CLOSE';
      } */

/* メニューのデザイン*/
.nav_content {
  width: 40%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 100%; /* メニューを画面の外に飛ばす */
  margin-left: 60%;
  z-index: 99;
  background: #fff;
  transition: 1s;
  /* left: calc(100% - 300px); */
  display: flex;
  justify-content: space-between;
}

.navline {
  width: 10px;
  height: 100%;
  background-color: rgb(0, 170, 170);
}
.nav_list {
  width: 95%;
}
/* メニューリスト点を消す */
.menulink {
  text-decoration: none;
  color: darkgray;
  font-size: 20px;
}

.menulink:hover {
  color:rgb(0, 150, 150);
}
.nav_item {
  margin:50px;

}

.nav {
  display: grid;
  justify-content: end;
}
/* アイコンがクリックされたらメニューを表示 */
#drawer_input:checked ~ .nav_content {
  left: 0; /* メニューを画面に入れる */
}

@media (max-width: 768px) {
  /* ハンバーガーメニューのアイコン */
  .drawer_open span,
  .drawer_open span:before,
  .drawer_open span:after {
    display: block;
    height: 2px;
    width: 25px;
  }

  /* 三本線の一番上の棒の位置調整 */
  .drawer_open span:before {
    bottom: 8px;
  }

  /* 三本線の一番下の棒の位置調整 */
  .drawer_open span:after {
    top: 8px;
  }
}
</style>
