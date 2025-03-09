import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Projects from "@/pages/Projects.vue";
import Contact from "@/pages/Contact.vue";
import Admin from "@/pages/Admin.vue"; // Ensure this is correctly placed

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/admin", name: "Admin", component: Admin }, // Ensure Admin.vue exists
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
