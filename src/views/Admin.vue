<template>
  <div class="admin">
    <h1>Admin Panel</h1>

    <div v-if="user">
      <p>Welcome, {{ user.email }}!</p>
      <button @click="logout">Logout</button>

      <div class="tabs">
        <button @click="activeTab = 'homepage'">Homepage</button>
        <button @click="activeTab = 'about'">About</button>
        <button @click="activeTab = 'projects'">Projects</button>
        <button @click="activeTab = 'contact'">Contact</button>
      </div>

      <!-- Homepage Section -->
      <div v-if="activeTab === 'homepage'">
        <h2>Update Homepage Content</h2>
        <label>Who We Are Title:</label>
        <input v-model="homepage.whoWeAreTitle" type="text" />
        
        <label>Who We Are Text:</label>
        <textarea v-model="homepage.whoWeAreText"></textarea>

        <button @click="updateContent('homepage')">Save Changes</button>
      </div>

      <!-- About Page Section -->
      <div v-if="activeTab === 'about'">
        <h2>Update About Page</h2>
        <label>About Title:</label>
        <input v-model="about.aboutTitle" type="text" />

        <label>About Description:</label>
        <textarea v-model="about.aboutText"></textarea>

        <button @click="updateContent('about')">Save Changes</button>
      </div>

      <!-- Projects Page Section -->
      <div v-if="activeTab === 'projects'">
        <h2>Manage Projects</h2>
        <label>Project Images (Comma Separated URLs)</label>
        <input v-model="projects.projectImages" type="text" />

        <button @click="updateContent('projects')">Save Changes</button>
      </div>

      <!-- Contact Page Section -->
      <div v-if="activeTab === 'contact'">
        <h2>Update Contact Page</h2>
        <label>Contact Us Text:</label>
        <input v-model="contact.contactUsText" type="text" />

        <button @click="updateContent('contact')">Save Changes</button>
      </div>

    </div>

    <div v-else>
      <h2>Admin Login</h2>
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { auth, db } from "@/firebase"; // ✅ Make sure auth is correctly imported
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default {
  setup() {
    const user = ref(null);
    const email = ref("");
    const password = ref("");

    const activeTab = ref("homepage"); // Default to Homepage

    // Page data objects
    const homepage = ref({ whoWeAreTitle: "", whoWeAreText: "" });
    const about = ref({ aboutTitle: "", aboutText: "" });
    const projects = ref({ projectImages: "" });
    const contact = ref({ contactUsText: "" });

    // Check if user is logged in
    onMounted(() => {
      onAuthStateChanged(auth, (loggedUser) => {
        user.value = loggedUser;
        if (loggedUser) fetchData();
      });
    });

    // Fetch existing content
    async function fetchData() {
      const sections = ["homepage", "about", "projects", "contact"];
      for (const section of sections) {
        const docRef = doc(db, "siteContent", section);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (section === "homepage") homepage.value = data;
          if (section === "about") about.value = data;
          if (section === "projects") projects.value = data;
          if (section === "contact") contact.value = data;
        }
      }
    }

    // Login function
    async function login() {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
      } catch (error) {
        console.error("Login failed:", error);
      }
    }

    // Logout function
    async function logout() {
      await signOut(auth);
      user.value = null;
    }

    // Update content in Firestore
    async function updateContent(section) {
      const docRef = doc(db, "siteContent", section);
      const dataToUpdate = {};

      if (section === "homepage") dataToUpdate.whoWeAreTitle = homepage.value.whoWeAreTitle;
      if (section === "homepage") dataToUpdate.whoWeAreText = homepage.value.whoWeAreText;
      if (section === "about") dataToUpdate.aboutTitle = about.value.aboutTitle;
      if (section === "about") dataToUpdate.aboutText = about.value.aboutText;
      if (section === "projects") dataToUpdate.projectImages = projects.value.projectImages.split(",");
      if (section === "contact") dataToUpdate.contactUsText = contact.value.contactUsText;

      await setDoc(docRef, dataToUpdate, { merge: true });
      alert(`${section.charAt(0).toUpperCase() + section.slice(1)} content updated!`);
    }

    return {
      user,
      email,
      password,
      activeTab,
      homepage,
      about,
      projects,
      contact,
      login,
      logout,
      updateContent
    };
  }
};
</script>

<style scoped>
.admin {
  text-align: center;
  max-width: 500px;
  margin: auto;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.tabs button {
  margin: 5px;
  padding: 10px;
  cursor: pointer;
  border: none;
  background-color: #0047ff;
  color: white;
  border-radius: 5px;
}

input, textarea {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 8px;
}

button {
  padding: 10px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
}
</style>