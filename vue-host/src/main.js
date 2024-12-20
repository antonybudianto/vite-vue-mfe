import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import router from "./router";

import "./pixel.css";
import "./assets/main.css";

const app = createApp(App);

const RemoteButton = defineAsyncComponent(() => import("remote_app/Button"));

app.use(router);
app.component("RemoteButton", RemoteButton);
app.mount("#app");
