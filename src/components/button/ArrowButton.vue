<template>
  <button class="arrow">喜島</button>
</template>

<style>
.arrow {
  display: flex;
  font-size:20px;
}

.arrow::after {
  content: '';
  width: 60px;
  height: 10px;
  margin-top: 8px;
  border-bottom: solid 1px;
  border-right: solid 1px;
  transform: skew(60deg);
}

.arrow::after:hover {
  transform: translateX(50%);
}
</style>
