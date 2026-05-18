import DefaultTheme from "vitepress/theme";
import HomeFeatures from "./components/HomeFeatures.vue";
import HomeShowcase from "./components/HomeShowcase.vue";
import Layout from "./Layout.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("HomeFeatures", HomeFeatures);
    app.component("HomeShowcase", HomeShowcase);
  },
};
