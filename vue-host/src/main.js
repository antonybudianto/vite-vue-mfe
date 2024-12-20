import "./assets/main.css";

import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const RemoteButton = defineAsyncComponent(() => import("remote_app/Button"));

app.use(router);
app.component("RemoteButton", RemoteButton);
app.mount("#app");
