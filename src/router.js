import { createRouter, createWebHistory } from "vue-router";
import App from "./views/App.vue";
import Home from "./views/Home.vue";
import Login from "./views/login.vue";
//import Dashboard from "./dashboard.vue";
import registro from "./views/registro.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/App", component: App },
  { path: "/Home", component: Home },
  { path: "/login", component: Login },
  //{ path: "/dashboard", component: Dashboard, meta: { requiresAuth: true } },
  { path: "/registro", component: registro, meta: { requiresAuth: false } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = !!localStorage.getItem("user");
  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
