// import axios from "axios";n
// import { ref } from "vue";

import axios from "axios";
export function logout() {
  axios.post("http://localhost:8000/api/logout")
  .then(() => {
    localStorage.setItem("authToken", null); // ログアウトが成功した場合はnullにする
    console.log("ログアウト完了");
    location.reload(); // ログアウト後にページを再読み込みする
  })
  .catch((error) => {
    console.log(error);
  });
}
