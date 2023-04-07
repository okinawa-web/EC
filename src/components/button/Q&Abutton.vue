<template>
  <div class="accordion">
    <div class="option">
      <input type="checkbox" id="toggle1" class="toggle" />
      <label class="qa_title" for="toggle1">
        <p class="question">レンタカーはありますか?</p>
      </label>
      <div class="content">
        <p class="answer">ありません。</p>
      </div>
    </div>

    <div class="option">
      <input type="checkbox" id="toggle2" class="toggle" />
      <label class="qa_title" for="toggle2">
        <p class="question">タイトル2</p>
      </label>
      <div class="content">
        <p class="answer">答え２</p>
      </div>
    </div>

    <div class="option">
      <input type="checkbox" id="toggle3" class="toggle" />
      <label class="title" for="toggle3">
        <p class="question">タイトル3</p></label
      >
      <div class="content">
        <p class="answer">答え３</p>
      </div>
    </div>
  </div>
</template>

<style>
.accordion {
  margin: 3em auto;
  max-width: 60vw;
  font-size: 20px;
  color: darkgray;
}
.toggle {
  display: none;
}
.option {
  position: relative;
  margin-bottom: 1em;
  /* font-size: 100%; */
}
.qa_title,
.content {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: all 0.3s;
}
.qa_title {
  /* border: solid 1px #ccc; */
  border-bottom: solid 1px darkgray;
  padding: 1em;
  display: block;
  /* font-weight: bold; */
}
.qa_title::after,
.qa_title::before {
  content: "";
  position: absolute;
  right: 1.25em;
  top: 3em;
  width: 2px;
  height: 1em;
  background-color: darkgray;
  transition: all 0.3s;
}
.qa_title::after {
  transform: rotate(90deg);
}
.content {
  max-height: 0;
  overflow: hidden;
}
.content p {
  /* margin: 0; */
  padding: 0.5em 1em 1em;
  font-size: 1em;
  line-height: 1.5;
}
.question::before {
  content: "Q.";
  color: aqua;
  font-size: 160%;
  margin-right: 2%;
}
.answer {
  display: block;
  font-size: 160%;
}
.answer::before {
  content: "A.";
  color: orange;
  font-size: 160%;
  margin-right: 2%;

  /* margin-right: 36px; */
}
.toggle:checked + .qa_title + .content {
  max-height: 500px;
  transition: all 1.5s;
}
.toggle:checked + .qa_title::before {
  transform: rotate(90deg) !important;
}
</style>
