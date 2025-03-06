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
      <!-- Who We Are -->
      <div class="section-card who-we-are" @click="$router.push('/about')">
        <h2>Who We Are</h2>
        <p>Learn more about our mission and values.</p>
      </div>

      <!-- Our Projects (Slideshow) -->
      <div class="section-card our-projects">
        <div class="project-slider">
          <img v-for="(image, index) in projectImages" :key="index" :src="image" alt="Project Image" class="project-image" />
        </div>
        <h2>Our Projects</h2>
        <p>Explore our modern student hostels and apartments.</p>
      </div>

      <!-- Contact Us -->
      <div class="section-card contact-us">
        <img src="@/assets/customer-service.png" alt="Customer Service" class="contact-icon" />
        <h2>Contact Us</h2>
        <p>Get in touch with us for leasing inquiries.</p>
        <router-link to="/contact" class="contact-link">Contact Us</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      projectImages: [
        require("@/assets/project1.jpg"),
        require("@/assets/project2.jpg"),
      ],
    };
  },
  mounted() {
    this.startSlideshow();
  },
  methods: {
    startSlideshow() {
      let currentIndex = 0;
      setInterval(() => {
        document.querySelector(".project-slider").style.backgroundImage = `url(${this.projectImages[currentIndex]})`;
        currentIndex = (currentIndex + 1) % this.projectImages.length;
      }, 3000); // Change every 3 seconds
    },
  },
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

/* Section Cards */
.section-card {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  width: 30%;
  cursor: pointer;
  transition: transform 0.3s ease;
  text-align: center;
}

.section-card:hover {
  transform: scale(1.05);
}

/* Who We Are */
.who-we-are {
  background: url('/assets/who-we-are.jpg') no-repeat center center/cover;
  color: white;
  font-weight: bold;
}

/* Our Projects - Slideshow */
.our-projects {
  position: relative;
  color: white;
  font-weight: bold;
}

.project-slider {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  transition: background-image 1s ease-in-out;
}

/* Contact Us */
.contact-us {
  background: none; /* Removed background */
}

.contact-icon {
  width: 80px;
  margin-bottom: 10px;
}

.contact-link {
  display: block;
  margin-top: 10px;
  text-decoration: none;
  font-weight: bold;
  color: #0047ff;
}
</style>
