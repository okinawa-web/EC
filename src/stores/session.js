import { defineStore } from "pinia";
import axios from "axios";

export const useSessionStore = defineStore("session", {
  state: () => {
    return {
      sessionA: "あああ",
      userData: null,
    };
  },
  actions: {
    async piniabetu() {
      const authToken = localStorage.getItem("authToken");
      axios.defaults.headers.common["x-session-id"] = authToken;
      this.sessionA = authToken;
      try {
        const response = await axios.get("http://localhost:8000/api/session");
        const responseData = JSON.parse(response.data);
        console.log(
          "サーバーから受け取ったユーザーデータ response:",
          responseData
        );
        console.log(
          "サーバーから受け取ったユーザーデータ response.data.user",
          responseData.user
        );
        this.userData = responseData;
      } catch (error) {
        console.log("エラーが発生しました:", error);
      }
      // try {
      //   const response = await axios.get("http://localhost:8000/api/session");
      //   console.log("サーバーから受け取ったユーザーデータ response:", response);
      //   console.log("サーバーから受け取ったユーザーデータ response.data.user", response.data.user);
      //   this.userData = response.data;

      // } catch (error) {
      //   console.log("エラーが発生しました:", error);
      // }
    },
  },
});
