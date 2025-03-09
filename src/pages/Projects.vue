<template>
  <div class="projects">
    <h1>Our Projects</h1>
    <div v-if="projectImages.length">
      <div v-for="(image, index) in projectImages" :key="index">
        <img :src="image" alt="Project Image" />
      </div>
    </div>
    <p v-else>No projects available.</p>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export default {
  setup() {
    const projectImages = ref([]);

    async function fetchProjects() {
      try {
        const docRef = doc(db, "siteContent", "projects");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          projectImages.value = docSnap.data().projectImages || [];
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }

    onMounted(fetchProjects);

    return { projectImages };
  }
};
</script>

<style scoped>
.projects {
  text-align: center;
}

img {
  max-width: 100%;
  height: auto;
  margin: 10px;
  border-radius: 8px;
}
</style>
