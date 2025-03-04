<template>
  <div class="about-page">
    <!-- ✅ Hero Section -->
    <section class="hero">
      <h1>Welcome to BrightWave Enterprises</h1>
      <p>Providing premium student housing in Nigeria for a better tomorrow.</p>
    </section>

    <!-- ✅ About Section -->
    <section class="about-content">
      <h2>Our Mission</h2>
      <p>
        At BrightWave Enterprises, our goal is to create safe, comfortable, and modern student housing.
        We prioritize security, affordability, and convenience to ensure students have the best living experience.
      </p>
    </section>

    <!-- ✅ Features Section -->
    <section class="features">
      <div class="feature">
        <img src="/assets/security-icon.png" alt="Security" />
        <h3>Top-Notch Security</h3>
        <p>24/7 surveillance and security measures to keep residents safe.</p>
      </div>
      <div class="feature">
        <img src="/assets/comfort-icon.png" alt="Comfort" />
        <h3>Ultimate Comfort</h3>
        <p>Well-furnished apartments designed for a stress-free student life.</p>
      </div>
      <div class="feature">
        <img src="/assets/modern-icon.png" alt="Modern Design" />
        <h3>Modern Living</h3>
        <p>Smart facilities and high-speed internet for modern students.</p>
      </div>
    </section>

    <!-- ✅ CTA Section -->
    <section class="cta">
      <h2>Join Our Community</h2>
      <p>Be part of the next generation of students living in premium comfort.</p>
      <button>Contact Us</button>
    </section>
  </div>
</template>

<style scoped>
/* ✅ Page Styling */
.about-page {
  text-align: center;
  color: white;
  font-family: "Arial", sans-serif;
}

/* ✅ Hero Section */
.hero {
  background: url("/assets/hero-banner.jpg") no-repeat center center/cover;
  padding: 100px 20px;
  text-align: center;
  color: white;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1.2rem;
  opacity: 0.9;
}

/* ✅ About Section */
.about-content {
  padding: 50px 20px;
  max-width: 800px;
  margin: auto;
}

.about-content h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

/* ✅ Features Section */
.features {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 40px 10px;
  flex-wrap: wrap;
}

.feature {
  width: 250px;
  text-align: center;
}

.feature img {
  width: 80px;
  margin-bottom: 10px;
}

.feature h3 {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.feature p {
  font-size: 1rem;
}

/* ✅ CTA Section */
.cta {
  background: #0047ff;
  padding: 50px 20px;
  color: white;
}

.cta button {
  background: white;
  color: #0047ff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
}

.cta button:hover {
  background: #ffffffdd;
}
</style>
