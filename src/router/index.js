import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Admin from "@/pages/Admin.vue"; // Import Admin Panel

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/admin", name: "Admin", component: Admin }, // Admin route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
