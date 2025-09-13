import { createApp } from "vue";
import VueLazyLoad from "vue3-lazyload";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueLazyLoad, {
  loading: "/images/image-placeholder.png",
  error: "/images/image-placeholder.png",
});

app.mount("#app");
