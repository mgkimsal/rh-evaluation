import Vue from "vue";
import Router from "vue-router";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "app",
      component: UserList
    },
    {
      path: "/user/:id",
      name: "user",
      component: UserDetail
    }
  ]
});
