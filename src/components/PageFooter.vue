<template>
  <footer class="page-footer professional-footer">
    <div class="footer-content">
      <div class="footer-links">
        <router-link to="/">Home</router-link>
        <router-link to="/blog">Blog</router-link>
        <!-- Add more relevant links here -->
        <!-- Example: <router-link to="/about">About Us</router-link> -->
        <!-- Example: <router-link to="/contact">Contact</router-link> -->
      </div>

      <div class="disclaimer">
        <p>
          <strong>Disclaimer:</strong> The content on this site is for informational purposes only
          and does not constitute medical advice. Always consult a healthcare professional for any
          health concerns or before making any decisions related to your health or treatment.
        </p>
      </div>

      <div class="copyright">
        <p>&copy; 2024 Levitrask Demo. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script logic needed
</script>

<style scoped>
.professional-footer {
  margin-top: 4rem; /* More space above footer */
  padding: 2.5rem 1rem;
  background-color: #343a40; /* Darker background for professional look */
  color: #adb5bd; /* Lighter text color for contrast */
  border-top: 3px solid #007bff; /* Accent top border */
  text-align: center;
}

.footer-content {
  max-width: 900px; /* Constrain width for better centering */
  margin: 0 auto;
}

.footer-links {
  margin-bottom: 1.5rem;
}

.footer-links a {
  color: #ffffff; /* White links for high contrast */
  text-decoration: none;
  margin: 0 1rem; /* More spacing between links */
  font-size: 0.95rem;
  transition: color 0.2s ease-in-out;
}

.footer-links a:hover {
  color: #007bff; /* Link hover color */
  text-decoration: none;
}

.disclaimer {
  margin-bottom: 1.5rem;
  font-size: 0.8rem; /* Smaller disclaimer text */
  line-height: 1.6;
  max-width: 700px; /* Limit disclaimer width */
  margin-left: auto;
  margin-right: auto;
}

.disclaimer strong {
  color: #dee2e6; /* Slightly brighter color for 'Disclaimer:' */
}

.copyright {
  font-size: 0.8rem;
  color: #6c757d; /* Muted color for copyright */
}
</style> 