import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import Vue Router
import "./style.css"; // Import global styles

const app = createApp(App);
app.use(router); // Use Vue Router
app.mount("#app");
