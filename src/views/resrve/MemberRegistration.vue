<script setup>
import axios from "axios";
import { onMounted, ref, reactive } from "vue";
import ReserveHeader from "@/components/reserve/ReaserveHeader.vue";

const members = ref([]);

const form = reactive({
  name: "",
  address: "",
  tel: "",
  email: "",
  password: "",
  registerDate: new Date().toISOString(),
});

const addMember = () => {
  axios
    .post("/member", form)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

onMounted(() => {
  axios
    .get("/member")
    .then((res) => {
      console.log(res);
      members.value = res.data;
      console.log("ステータス:", res.status);
      console.log("ボディ：", res.data);
    })
    .catch((err) => {
      console.log("エラー：", err);
    });
});
</script>

<template>
  <ReserveHeader />
  <div class="memberBox">
    <div class="login_title">新規会員登録｜HAMAJIMA LAND</div>
    <div class="login_wrapper">
      <div class="login_package">
        <div>
          <h2>新規会員登録</h2>
          <p>
            ご登録完了後、ご入力いただいたメールアドレスに、ご登録確認メールをお送りします。
          </p>
          <p>ご登録前にメールの受信設定のご確認をお願いいたします。</p>
          <div class="login_form">
            <div class="login_form form">
              <table class="login_table">
                <div>
                  <form @submit="addMember">
                    <tr>
                      <th>名前</th>
                      <td>
                        <input
                          type="text"
                          v-model="form.name"
                          required
                          class="login_input"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>住所</th>
                      <td>
                        <input
                          type="text"
                          v-model="form.address"
                          required
                          class="login_input"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>電話番号</th>
                      <td>
                        <input
                          type="text"
                          v-model="form.tel"
                          required
                          class="login_input"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>メールアドレス</th>
                      <td>
                        <input
                          type="email"
                          v-model="form.email"
                          required
                          class="login_input"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>パスワード</th>
                      <td>
                        <input
                          type="text"
                          v-model="form.password"
                          required
                          class="login_input"
                        />
                      </td>
                    </tr>
                    <!-- <button type="submit">追加</button> -->
                    <p class="forgot_password">
                      <a href="">パスワードを忘れた場合</a>
                    </p>
                    <ul class="ul_button">
                      <li class="li_button">
                        <input
                          type="button"
                          value="前の画面に戻る"
                          class="back_button"
                        />
                      </li>
                      <li class="li_button">
                        <input
                          type="submit"
                          value="確認"
                          class="login_button"
                          formaction="/login"
                        />
                      </li>
                    </ul>
                  </form>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.memberBox {
  width: 90%;
  margin: auto;
}
</style>
