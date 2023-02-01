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
        <ul class="nav_list">
          <li class="nav_item"><router-link to="/">TOP</router-link></li>
          <li class="nav_item">
            <router-link to="/reserve/reserve">ご予約</router-link>
          </li>
          <li class="nav_item">
            <router-link to="/aboutRikyu">HAMAJIMAについて</router-link>
          </li>
          <li class="nav_item">
            <router-link to="/rooms">お部屋</router-link>
          </li>
          <li class="nav_item">
            <router-link to="/guestRoom">-101</router-link>
          </li>
          <li class="nav_item">
            <router-link to="/guestRoom">-102</router-link>
          </li>
          <li class="nav_item">
            <router-link to="/guestRoom">-103</router-link>
          </li>
          <li class="nav_item">
            <router-link to="/facility">-客室設備・アメニティ</router-link>
          </li>
          <li class="nav_item">
            <router-link to="/activity">アクティビティ</router-link>
          </li>
          <li class="nav_item">
            <router-link to="/acsess">アクセス</router-link>
          </li>
          <li class="nav_item">
            <router-link to="/question">よくあるご質問</router-link>
          </li>
          <li class="nav_item">
            <router-link to="/news">新着情報</router-link>
          </li>
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
  padding: 0 20px;
  background: #fff;
  float: left;
}

.logo {
  font-size: 24px;
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
  width: 30px;
  justify-content: center;
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
  background: #333;
  transition: 0.5s;
  position: absolute;
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
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 100%; /* メニューを画面の外に飛ばす */
  z-index: 99;
  background: #fff;
  transition: 1s;
}

/* メニューリスト点を消す */
.nav_list {
  list-style: none;
}

/* アイコンがクリックされたらメニューを表示 */
#drawer_input:checked ~ .nav_content {
  left: 0; /* メニューを画面に入れる */
}
</style>
