<template>
    <div class="contact">
      <h1>Contact Us</h1>
      <p>{{ contactUsText }}</p>
  
      <form @submit.prevent="sendMessage">
        <label>Name:</label>
        <input v-model="name" type="text" required />
  
        <label>Email:</label>
        <input v-model="email" type="email" required />
  
        <label>Message:</label>
        <textarea v-model="message" required></textarea>
  
        <button type="submit">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { db } from "@/firebase";
  import { doc, getDoc } from "firebase/firestore";
  
  export default {
    setup() {
      const contactUsText = ref("Get in touch with us!");
      const name = ref("");
      const email = ref("");
      const message = ref("");
  
      async function fetchContactData() {
        try {
          const docRef = doc(db, "siteContent", "contact");
          const docSnap = await getDoc(docRef);
  
          if (docSnap.exists()) {
            contactUsText.value = docSnap.data().contactUsText || "Get in touch with us!";
          }
        } catch (error) {
          console.error("Error fetching contact data:", error);
        }
      }
  
      function sendMessage() {
        alert(`Message sent! Name: ${name.value}, Email: ${email.value}, Message: ${message.value}`);
      }
  
      onMounted(fetchContactData);
  
      return { contactUsText, name, email, message, sendMessage };
    }
  };
  </script>
  
  <style scoped>
  .contact {
    text-align: center;
    max-width: 600px;
    margin: auto;
  }
  
  input, textarea {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 8px;
  }
  
  button {
    padding: 10px;
    background-color: #0047ff;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
