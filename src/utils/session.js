import axios from "axios";
// import { useSessionStore } from "@/stores/session.js";

// const sessionStore = useSessionStore();

export function betu() {
  const authToken = localStorage.getItem("authToken");
  console.log("betu", authToken);
  axios.defaults.headers.common["x-session-id"] = authToken;
  console.log("トークンの中見", axios.defaults.headers.common["x-session-id"]);
  // sessionStore.sessionA = "きじま";
  //   const sessionA = sessionStore.sessionA;
  // console.log("sessionA!!!!!", sessionA);
  axios
    .get("http://localhost:8000/api/session")
    .then(function (response) {
      console.log("サーバーから受け取ったユーザーデータ:", response.data);
    })
    .catch(function (error) {
      console.log("エラーが発生しました:", error);
    });
}
