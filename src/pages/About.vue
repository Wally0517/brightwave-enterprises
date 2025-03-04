<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Elevating Student Housing & Real Estate Solutions</h1>
        <p>BrightWave Enterprises - Innovation, Comfort, and Excellence.</p>
      </div>
    </section>

    <!-- About Content Component -->
    <AboutUs />
  </div>
</template>

<script>
import AboutUs from "../components/AboutUs.vue";

export default {
  components: { AboutUs },
};
</script>

<style scoped>
/* Hero Section Styling */
.hero {
  width: 100%;
  height: 60vh; /* Adjust height as needed */
  background-image: url("../assets/hero-about.jpg"); /* Placeholder image */
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 20px;
}

.hero-content h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

.hero-content p {
  font-size: 1.2rem;
  margin-top: 10px;
}
</style>
