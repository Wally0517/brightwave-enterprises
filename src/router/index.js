import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Projects from "@/pages/Projects.vue";
import Contact from "@/pages/Contact.vue";
import Admin from "../views/Admin.vue";  // Relative path method

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/admin", name: "Admin", component: Admin },
  { path: "/:catchAll(.*)", redirect: "/" } // ✅ Redirect invalid routes to home
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;