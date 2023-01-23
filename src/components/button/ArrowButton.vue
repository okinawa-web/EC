<template>
  <a href="#" class="arrow">喜島</a>
</template>

<style>
.arrow {
  display: flex;
  font-size: 20px;
  color: darkgray;
  text-decoration: none;
  transition: 1s;
}

.arrow::before {
  content: "";
  width: 60px;
  height: 10px;
  margin-top: 8px;
  border-bottom: solid 1px;
  transition: 1s;
  position: relative;
}
.arrow:hover::before {
  visibility: hidden;
  opacity: 0;
}

.arrow::after {
  visibility: hidden;
  content: "";
  width: 60px;
  height: 10px;
  margin-top: 8px;
  border-bottom: solid 1px;
  border-right: solid 1px;
  transform: skew(60deg);
  display: block;
}

.arrow:hover:after {
  visibility: visible;
  opacity: 1;
  transition: 1s;
}
/* 
.arrow:hover::after {
  transform: translateX(50%);
  transition-duration: 0.8s;
} */
</style>
