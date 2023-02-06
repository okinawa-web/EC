<template>
  <div class="RoomList">
    <label class="rl_title" for="roomlist">部屋一覧</label>
    <input type="checkbox" id="roomlist" />
    <p class="rs_p">
      <a href="#" class="roomname">【101】オーシャンビュースウィート</a>
      <a href="#" class="roomname">【102】オーシャンビュースウィート</a>
      <a href="#" class="roomname">【103】デラックススウィート</a>
    </p>
  </div>
</template>

<style>
.RoomList {
  border-right: 1px solid #a0a0a0;
  border-left: 1px solid #a0a0a0;
  margin-bottom: 40px;
}

.RoomList input {
  display: none;
}
.RoomList input:checked + .rs_p {
  display: block;
}

.rl_title {
  font-size: 122%;
  color: white;
  background-color: black;
  letter-spacing: 0.2em;
  text-align: center;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.3s;
  display: block;
}

.rl_title::before {
  margin-right: 0.5em;
}

.roomname {
  display: block;
  padding: 10px;
}
.rs_p {
  color: black;
  display: none;
  padding: 10px 15px;
  border-bottom: 1px solid #a0a0a0;
}
</style>
