import axios from "axios";
import { ref } from "vue";

const state = {
  users: null,
  reserves: null,
};

const errorMessage = ref("");
let sessionID = "";
const reserves = ref("");
let MemberInformation = "";
export async function cancellogin() {
  try {
    const response = await axios.get("http://localhost:8000/api/session");
    const responseData = JSON.parse(response.data);
    console.log("サーバーから受け取ったユーザーデータ:", responseData.user.email);
    MemberInformation = response.data;
    console.log("仕方なし", MemberInformation);
    console.log("レスポンスデータ", responseData);

    const loginResponse = await axios.post("http://localhost:8000/api/login", {
      username: responseData.user.email,
      password: responseData.user.password,
    });

    axios.defaults.withCredentials = true; // クッキーを送信する
    axios.defaults.headers.common["Authorization"] = loginResponse.data.session_id;
    console.log("response.dataの中身", loginResponse.data);
    reserves.value = loginResponse.data.reserves;
    state.reserves = loginResponse.data.reserves;
    sessionID = loginResponse.data.session_id;
    console.log("session_id:", sessionID);
    console.log("再ログイン完了");
    localStorage.setItem("authToken", sessionID);
    window.location.reload();
  } catch (error) {
    console.log("エラーが発生しました:", error);
    errorMessage.value = "ユーザー名またはパスワードが違います";
  }
}
