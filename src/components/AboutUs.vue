<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <img src="@/assets/brightwave-logo.png" alt="BrightWave Logo" class="logo" />
        <img src="/assets/hero-about.jpg" alt="Hero Image">
        <h1>About BrightWave Enterprises</h1>
        <p>Redefining student housing with comfort, security, and innovation.</p>
      </div>
    </section>

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
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
/* ✅ Page Styling */
.about-page {
  text-align: center;
  color: white;
}

/* ✅ Hero Section */
.hero-section {
  background: url("@/assets/hero-about.jpg") no-repeat center center/cover;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}

.hero-content {
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin: 10px 0;
}

.hero-content p {
  font-size: 1.2rem;
  margin-top: 5px;
}

/* ✅ Logo Styling */
.logo {
  width: 120px;
  height: auto;
  margin-bottom: 10px;
}

/* ✅ Section Styling */
.about-sections {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
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
