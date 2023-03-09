import { createApp } from "vue";
import { createPinia } from "pinia";
// import axios from "axios";

import App from "./App.vue";
import router from "./router/index";

import "./assets/main.css";
import "./firebase/firebase";

// axios.defaults.baseURL = "http://localhost:8001";
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
// axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.timeout = 5000;

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
