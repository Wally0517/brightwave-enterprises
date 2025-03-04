<template>
  <div class="about-sections">
    <!-- Mission Statement -->
    <section class="section">
      <h2>🏆 Our Mission</h2>
      <p>At BrightWave Enterprises, we strive to redefine student housing and real estate with modern, secure, and affordable solutions.</p>
    </section>

    <!-- What We Offer -->
    <section class="section">
      <h2>🏠 What We Offer</h2>
      <ul>
        <li>Modern student accommodations with top-tier facilities.</li>
        <li>Affordable and comfortable living spaces.</li>
        <li>Seamless property management and rental services.</li>
      </ul>
    </section>

    <!-- Why Choose Us -->
    <section class="section">
      <h2>🌟 Why Choose Us</h2>
      <p>We combine affordability, comfort, and modernity to create an exceptional living experience for students and tenants.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
.about-sections {
  max-width: 900px;
  margin: 40px auto;
  text-align: center;
  color: white;
}

.section {
  margin-bottom: 40px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 1.2rem;
  margin-bottom: 5px;
}
</style>
