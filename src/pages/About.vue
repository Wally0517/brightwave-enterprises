<template>
  <div class="about-page">
    <AboutUs />
  </div>
</template>

<script>
import AboutUs from '../components/AboutUs.vue';

export default {
  name: "About",
  components: {
    AboutUs
  }
};
</script>

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 20px;
}
</style>
