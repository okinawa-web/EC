<template>
  <label class="video_play_stop">
    <input type="checkbox" />
    <span></span>
  </label>
</template>

<style>
.video_play_stop {
  display: inline-block;
  position: relative;
  width: 1em;
  height: 1em;
  border: 0.05em solid currentColor;
  border-radius: 50%;
  color: darkgray;
  font-size: 60px;
}

.video_play_stop > input {
  display: none;
}

.video_play_stop > input:not(:checked) + span::before {
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translateY(-50%);
  width: 0px;
  height: 0px;
  border: 0.3em solid transparent;
  border-left: 0.5em solid currentColor;
  box-sizing: border-box;
  content: "";
}

.video_play_stop > input:checked + span::before,
.video_play_stop > input:checked + span::after {
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 0.1em;
  height: 0.5em;
  box-sizing: border-box;
  background-color: currentColor;
  content: "";
}
.video_play_stop > input:checked + span::before {
  left: 40%;
}
.video_play_stop > input:checked + span::after {
  left: 60%;
}
</style>
