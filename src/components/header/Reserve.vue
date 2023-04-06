<template>
  <p class="reserve">
    <router-link to="/calender" target="_blank" class="reserve_text">
      ご予約</router-link
    >
  </p>
</template>

<style>
.reserve {
  width: 10%;
  /* margin: auto; */
  margin-top: 30px;
  margin-bottom: 20px;
}

.reserve_text {
  /* background-color: #ef7306; */
  font-size: 300%;
  text-decoration-line: none;
  color: darkgray;
}
.reserve_text:hover {
  color: rgb(0, 150, 150);
}

@media (max-width: 768px) {
  .reserve_text {
    font-size: 100%;
  }
}
</style>
