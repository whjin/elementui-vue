import Vue from "vue";
import App from "./App.vue";
import "element-ui/lib/theme-chalk/index.css";
import { Button, Row, Col, Container, Header, Main, Footer,Aside,Link } from "element-ui";

Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Aside);
Vue.use(Link);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
