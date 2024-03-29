import { createApp } from "vue";
import { createPinia } from "pinia";
// import axios from "axios";
import App from "./App.vue";
import router from "./router/index";
import "./assets/main.css";
import "./firebase/firebase";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
