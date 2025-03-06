<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <img src="@/assets/hero-about.jpg" alt="BrightWave Enterprises" class="hero-image" />
      <div class="hero-overlay">
        <h1>BrightWave Enterprises</h1>
        <p>Your trusted partner in student housing & apartment leasing.</p>
        <router-link to="/about" class="btn">Learn More</router-link>
      </div>
    </section>

    <!-- Sections with Clickable Links -->
    <section class="info-sections">
      <div class="section-card" @click="$router.push('/about')">
        <h2>Who We Are</h2>
        <p>Learn more about our mission and values.</p>
      </div>
      <div class="section-card" @click="$router.push('/projects')">
        <h2>Our Projects</h2>
        <p>Explore our modern student hostels and apartments.</p>
      </div>
      <div class="section-card" @click="$router.push('/contact')">
        <h2>Contact Us</h2>
        <p>Get in touch with us for leasing inquiries.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home {
  text-align: center;
}

/* Hero Section */
.hero {
  position: relative;
  width: 100%;
  height: 400px;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
}

.hero-overlay h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.hero-overlay p {
  font-size: 1.2rem;
}

.btn {
  background-color: #0047ff;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
  margin-top: 10px;
}

/* Sections */
.info-sections {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

.section-card {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  width: 30%;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.section-card:hover {
  transform: scale(1.05);
}

.section-card h2 {
  margin-bottom: 10px;
}
</style>
