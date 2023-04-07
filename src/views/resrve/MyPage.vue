<template>
  <ReserveHeader />
  <div class="login_title">会員情報｜HAMAJIMA LAND</div>
  <div class="login_wrapper">
    <div class="login_package">
      <div>
        <h2>ご登録情報</h2>
        <div class="reservespace">
        <!-- 名前 -->
        <div v-if="!state.editingName">
          <span class="mypageItem">名前：{{ User.name }}</span
          ><span><button @click="state.editingName = true">変更</button></span>
        </div>
        <div v-if="state.editingName">
          名前：<input type="text" v-model="state.newName" /><button
            @click="updateName"
          >
            確定
          </button>
          <button @click="state.editingName = false">キャンセル</button>
        </div>
        <!-- 住所 -->
        <div v-if="!state.editingAddress">
          <span>住所：{{ User.address }}</span
          ><span
            ><button @click="state.editingAddress = true">変更</button></span
          >
        </div>
        <div v-if="state.editingAddress">
          住所：<input type="text" v-model="state.newAddress" /><button
            @click="updateAddress"
          >
            確定
          </button>
          <button @click="state.editingAddress = false">キャンセル</button>
        </div>
        <!-- 電話番号 -->
        <div v-if="!state.editingTel">
          <span>電話番号：{{ User.tel }}</span
          ><span><button @click="state.editingTel = true">変更</button></span>
        </div>
        <div v-if="state.editingTel">
          電話番号：<input type="text" v-model="state.newTel" /><button
            @click="updateTel"
          >
            確定
          </button>
          <button @click="state.editingTel = false">キャンセル</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script setup>
import ReserveHeader from "@/components/reserve/ReaserveHeader.vue";
import { useSessionStore } from "@/stores/session.js";
import axios from "axios";
import { reactive, onMounted, ref } from "vue";

const sessionStore = useSessionStore();

const state = reactive({
  reserves: [],
  newName: "",
  newAddress: "",
  newEmail: "",
  newTell: "",
  editingName: false, // 追加
  editingAddress: false, // 追加
  editingTell: false, // 追加
});

const User = ref([]);

onMounted(async () => {
  await sessionStore.piniabetu();
  if (sessionStore.userData.user !== null) {
    User.value = sessionStore.userData.user;
    console.log("userData!!!!", sessionStore.userData.user.tel);
    state.reserves = sessionStore.userData.user.reserves;
  }
});

const updateName = async () => {
  try {
    const response = await axios.put(`/memberName/${User.value.id}`, {
      name: state.newName,
    });
    console.log("responseの中身", response);

    User.value.name = state.newName;
    state.newName = "";
    changelogin();
  } catch (error) {
    console.error(error);
  }
};
const updateAddress = async () => {
  try {
    const response = await axios.put(`/memberAddress/${User.value.id}`, {
      address: state.newAddress,
    });
    console.log("responseの中身", response);

    User.value.address = state.newAddress;
    state.newAddress = "";
    changelogin();
  } catch (error) {
    console.error(error);
  }
};
const updateTel = async () => {
  try {
    const response = await axios.put(`/memberTel/${User.value.id}`, {
      tel: state.newTel,
    });
    console.log("responseの中身", response);

    User.value.tel = state.newTel;
    state.newTel = "";
    changelogin();
  } catch (error) {
    console.error(error);
  }
};
// const updateAddress = async () => {
//   try {
//     const response = await axios.put(`/member/${Address.value.id}`, { address: state.newAddress });
//     console.log("responseの中身",response);

//     Address.value.address = state.newAddress;
//     state.newAddress = '';
//     changelogin();
//   } catch (error) {
//     console.error(error);
//   }
// };

const reserves = ref("");
let sessionID = "";

const changelogin = () => {
  axios
    .post("http://localhost:8000/api/login", {
      username: User.value.email,
      password: User.value.password,
    })
    .then((response) => {
      axios.defaults.withCredentials = true; // クッキーを送信する
      axios.defaults.headers.common["Authorization"] =
        response.data.sessioCn_id;

      console.log("response.dataの中身", response.data);
      reserves.value = response.data.user.reserves;
      state.reserves = response.data.user.reserves;
      sessionID = response.data.session_id;
      console.log("session_id:", sessionID);
      localStorage.setItem("authToken", sessionID);
      location.reload();

      // check2();
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
      } else {
        console.log(error);
      }
    });
};
</script>

<style>
.mypageItem {
  margin-top: 20px;
}
.LOGIN {
  font-size: 143%;
  font-weight: bold;
  border-top: 3px solid #dcdcdc;
  border-bottom: 3px solid #dcdcdc;
  padding: 8px 15px;
  margin-top: 30px;
}

.logon_form {
  width: 70%;
}

.form {
  margin-top: 40px;
}
.login_table {
  margin: auto;
}

.login_input {
  width: 50px;
}
.forgot_password {
  text-align: center;
}

.li_button {
  display: inline;
}

.ul_button {
  width: 90%;
  text-align: center;
}

.back_button,
.login_button {
  border: 1px solid #a0a0a0;
  background-color: white;
  padding: 15px 35px;
  line-height: 1.2;
  border-radius: 3px;
  box-shadow: 0px 2px 2px #a0a0a0;
  cursor: pointer;
}

.login_button {
  background-color: rgb(0, 150, 150);
  color: white;
  margin-left: 15px;
}
</style>
