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

    <!-- About Us Section -->
    <section class="about-us">
      <h2>Who We Are</h2>
      <p>BrightWave Enterprises is committed to providing modern student housing and apartment leasing solutions.</p>
      <router-link to="/about" class="btn">Read More</router-link>
    </section>

    <!-- Our Services Section -->
    <section class="services">
      <h2>Our Services</h2>
      <div class="services-container">
        <div class="service-card">
          <img src="@/assets/service1.png" alt="Student Housing" />
          <h3>Student Housing</h3>
          <p>Safe and modern student hostels for comfortable living.</p>
        </div>
        <div class="service-card">
          <img src="@/assets/service2.png" alt="Apartment Leasing" />
          <h3>Apartment Leasing</h3>
          <p>Flexible leasing solutions to match your needs.</p>
        </div>
      </div>
    </section>

    <!-- Our Projects with Slideshow -->
    <section class="our-projects">
      <h2>Our Projects</h2>
      <div class="project-slideshow" :style="projectStyle"></div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <h2>What Our Clients Say</h2>
      <div class="testimonial-slider">
        <p>{{ testimonials[currentTestimonialIndex] }}</p>
      </div>
    </section>

    <!-- Contact Us Section -->
    <section class="contact-us">
      <h2>Contact Us</h2>
      <p>Get in touch with us for leasing inquiries.</p>
      <div class="contact-options">
        <img src="@/assets/customer-service.png" alt="Customer Service" class="contact-icon" />
        <router-link to="/contact" class="btn">Reach Out</router-link>
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
        new URL('@/assets/project1.jpg', import.meta.url).href,
        new URL('@/assets/project2.jpg', import.meta.url).href
      ],
      currentProjectIndex: 0,
      testimonials: [
        "BrightWave Enterprises made finding student housing so easy! Highly recommend.",
        "The leasing process was smooth, and the apartments are well maintained!",
        "Professional and reliable service from BrightWave!"
      ],
      currentTestimonialIndex: 0
    };
  },
  computed: {
    projectStyle() {
      return {
        backgroundImage: `url(${this.projectImages[this.currentProjectIndex]})`
      };
    }
  },
  mounted() {
    this.startSlideshow();
    this.startTestimonials();
  },
  methods: {
    startSlideshow() {
      setInterval(() => {
        this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projectImages.length;
      }, 5000);
    },
    startTestimonials() {
      setInterval(() => {
        this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
      }, 4000);
    }
  }
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

.btn {
  background-color: #0047ff;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
  margin-top: 10px;
}

/* About, Services, Projects, Testimonials, Contact Sections */
.about-us, .services, .our-projects, .testimonials, .contact-us {
  padding: 40px 20px;
  background: #f4f4f4;
  margin: 20px 0;
}

/* Services */
.services-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.service-card {
  width: 30%;
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Slideshow */
.project-slideshow {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  transition: background-image 0.5s ease-in-out;
}

/* Testimonials */
.testimonial-slider {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
}

/* Contact */
.contact-options {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-icon {
  width: 100px;
  height: auto;
  margin-bottom: 10px;
}
</style>
