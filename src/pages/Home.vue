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
    <section class="about-us" :style="aboutUsStyle">
      <h2>Who We Are</h2>
      <p>BrightWave Enterprises is committed to providing modern student housing and apartment leasing solutions.</p>
      <router-link to="/about" class="btn">Read More</router-link>
    </section>

    <!-- Our Projects Section -->
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
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import aboutUsImage from "@/assets/who-we-are.jpg";

export default {
  name: "HomePage",
  data() {
    return {
      projectImages: [project1, project2],
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
        backgroundImage: `url(${this.projectImages[this.currentProjectIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
        height: '400px'
      };
    },
    aboutUsStyle() {
      return {
        backgroundImage: `url(${aboutUsImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '50px 20px'
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

.about-us, .our-projects, .testimonials, .contact-us {
  padding: 40px 20px;
  background: #f4f4f4;
  margin: 20px 0;
}

.project-slideshow {
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
}

.testimonial-slider {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
}

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
