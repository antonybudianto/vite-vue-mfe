import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import router from "./router";

import "./pixel.css";
import "./assets/main.css";

const app = createApp(App);

const RemoteContactMFE = defineAsyncComponent(
  () => import("remote_app/ContactMFE")
);

app.use(router);
app.component("RemoteContactMFE", RemoteContactMFE);
app.mount("#app");
