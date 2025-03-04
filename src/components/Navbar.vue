<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<style>
nav {
  background: #0044cc;
  padding: 1rem;
}
nav ul {
  display: flex;
  list-style: none;
  gap: 1rem;
}
nav ul li a {
  color: white;
  text-decoration: none;
}
</style>
