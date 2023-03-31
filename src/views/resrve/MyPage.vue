<template>
  <ReserveHeader />
  <div class="login_title">会員情報｜HAMAJIMA LAND</div>
  <div class="login_wrapper">
    <div class="login_package">
      <div class="login_box">
        <h2>ご登録情報</h2>
        <div v-if="!state.editingName">
          <span>名前：{{ User.name }}</span
          ><span><button @click="state.editingName = true">変更</button></span>
        </div>
        <div v-if="state.editingName">
          <input type="text" v-model="state.newName"><button @click="updateName">確定</button>
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
  newName: '',
  editingName: false, // 追加
});

const User = ref([]);

onMounted(async () => {
  await sessionStore.piniabetu();
  User.value = sessionStore.userData.user;
  state.reserves = sessionStore.userData.user.reserves;
});

const updateName = async () => {
  try {
    const response = await axios.put(`/member/${User.value.id}`, { name: state.newName });
    console.log("responseの中身",response);

    User.value.name = state.newName;
    state.newName = '';
  } catch (error) {
    console.error(error);
  }
};



</script>

<style>
.login_wrapper {
  width: 900px;
  font-size: 100%;
  margin: 0 auto;
  border: 1px solid #a0a0a0;
  padding: 0 20px;
}

.login_title {
  background-color: rgb(0, 83, 92);
  color: white;
  font-size: 115%;
  padding: 10px 18px 8px;
  width: 900px;
  margin: auto;
  border: 3px solid rgb(0, 83, 92);
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
  background-color: rgb(0, 114, 114);
  color: white;
  margin-left: 15px;
}
</style>
