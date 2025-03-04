<template>
  <nav class="navbar">
    <button class="menu-toggle" @click="toggleMenu">☰</button>
    <div :class="{'menu': true, 'open': isOpen}">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
/* Navbar Styles */
.navbar {
  display: flex;
  justify-content: center;
  background-color: #0047ff;
  padding: 10px;
}

/* Menu Toggle for Mobile */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.menu a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
}

@media screen and (max-width: 768px) {
  .menu-toggle {
    display: block;
    margin: 10px;
  }

  .menu {
    display: none;
    flex-direction: column;
    text-align: center;
  }

  .menu.open {
    display: flex;
  }
}
</style>
