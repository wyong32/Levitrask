<template>
  <div class="blog-post-page">
    <PageHeader />

    <main class="content-area-3-column">
      <!-- Left Sidebar (now for in-page navigation) -->
      <SideNav
        :sections="blogInternalNavSections"
        content-selector=".main-content-middle > .post-body > section"
        class="sidebar-left"
      />

      <!-- Main Content Area -->
      <article class="main-content-middle">
        <header class="post-header">
          <h1>Avanafil (Stendra): Patient Guide</h1>
          <!-- Optional: Update date later -->
          <p class="post-meta">Published on: [Date Placeholder]</p>
        </header>
        <hr />
        <div class="post-body">
          <p>
            Erectile dysfunction (ED) is a common condition that affects millions of men around the
            world. Thankfully, modern medicine offers several effective treatments. One of the
            newest and most promising options is Avanafil, sold under the brand name
            <router-link to="/drugs/stendra">Stendra</router-link>. Known for its rapid onset and
            fewer side effects, Avanafil is helping many men regain confidence in their sexual
            health.
          </p>
          <p>
            This patient guide is designed to help you understand how
            <router-link to="/drugs/stendra">Stendra</router-link> works, how to take it safely, and
            what to expect before, during, and after use.
          </p>

          <section id="what-is">
            <h2><span class="emoji">🔬</span> What Is Avanafil (Stendra)?</h2>
            <p>
              Avanafil is a prescription medication used to treat erectile dysfunction (ED). It
              belongs to a class of drugs called PDE5 inhibitors, which also includes
              <router-link to="/drugs/viagra">Viagra (sildenafil)</router-link>,
              <router-link to="/">Levitra (vardenafil)</router-link>, and
              <router-link to="/drugs/cialis">Cialis (tadalafil)</router-link>.
            </p>
            <p>
              What sets Avanafil apart is its fast onset—it can start working in as little as 15
              minutes—and its lower risk of side effects, especially visual disturbances and muscle
              aches.
            </p>
          </section>

          <section id="how-it-works">
            <h2><span class="emoji">💡</span> How Does Stendra Work?</h2>
            <p>
              During sexual arousal, the body releases nitric oxide, which helps relax the muscles
              and increase blood flow to the penis. Avanafil enhances this effect by blocking an
              enzyme (PDE5) that restricts blood flow. The result? Better, longer-lasting
              erections—when you're sexually stimulated.
            </p>
            <p>
              <strong>Important:</strong>
              <router-link to="/drugs/stendra">Stendra</router-link> only works when you are
              sexually aroused. It doesn't cause an automatic erection.
            </p>
          </section>

          <section id="how-to-take">
            <h2><span class="emoji">💊</span> How to Take Avanafil</h2>
            <ul>
              <li><strong>Standard starting dose:</strong> 100 mg</li>
              <li><strong>Timing:</strong> Take 15–30 minutes before sexual activity</li>
              <li><strong>With or without food:</strong> Can be taken either way</li>
              <li><strong>Max frequency:</strong> Do not take more than once a day</li>
            </ul>
            <p>
              Your doctor may adjust your dosage to 50 mg or 200 mg based on how you respond and any
              side effects you may experience.
            </p>
          </section>

          <section id="precautions">
            <h2><span class="emoji">⚠️</span> Precautions Before Use</h2>
            <p>
              Before starting <router-link to="/drugs/stendra">Stendra</router-link>, talk to your
              healthcare provider about your medical history. Do not take Stendra if you:
            </p>
            <ul>
              <li>Take nitrates for chest pain</li>
              <li>Use certain medications for high blood pressure or prostate conditions</li>
              <li>Have had a recent heart attack or stroke</li>
              <li>Have severe liver or kidney problems</li>
              <li>Have low blood pressure or uncontrolled high blood pressure</li>
            </ul>
            <p>
              Also tell your doctor if you have any eye or hearing problems, as rare side effects
              may include sudden vision or hearing loss.
            </p>
          </section>

          <section id="side-effects">
            <h2><span class="emoji">📋</span> Common Side Effects</h2>
            <p>
              Most men tolerate <router-link to="/drugs/stendra">Stendra</router-link> well, but
              like all medications, it can cause side effects. These are usually mild and temporary:
            </p>
            <ul>
              <li>Headache</li>
              <li>Flushing</li>
              <li>Stuffy or runny nose</li>
              <li>Dizziness</li>
              <li>Back pain</li>
            </ul>
            <p><strong>Serious (but rare) side effects:</strong></p>
            <ul>
              <li>Sudden vision or hearing loss</li>
              <li>Chest pain</li>
              <li>Irregular heartbeat</li>
              <li>Priapism (an erection lasting more than 4 hours)</li>
            </ul>
            <p>
              If you experience any of these serious side effects, seek medical attention
              immediately.
            </p>
          </section>

          <section id="comparison">
            <h2><span class="emoji">🆚</span> How Stendra Compares</h2>
            <div class="comparison-table-container">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th><router-link to="/drugs/stendra">Stendra (Avanafil)</router-link></th>
                    <th><router-link to="/drugs/viagra">Viagra (Sildenafil)</router-link></th>
                    <th><router-link to="/drugs/cialis">Cialis (Tadalafil)</router-link></th>
                    <th><router-link to="/">Levitra (Vardenafil)</router-link></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Onset Time</td>
                    <td>15–30 minutes</td>
                    <td>30–60 minutes</td>
                    <td>30–45 minutes</td>
                    <td>30–60 minutes</td>
                  </tr>
                  <tr>
                    <td>Duration</td>
                    <td>Up to 6 hours</td>
                    <td>4–6 hours</td>
                    <td>Up to 36 hours</td>
                    <td>4–5 hours</td>
                  </tr>
                  <tr>
                    <td>With Food?</td>
                    <td>Yes</td>
                    <td>Best on empty stomach</td>
                    <td>Yes</td>
                    <td>Best on empty stomach</td>
                  </tr>
                  <tr>
                    <td>Visual Side Effects</td>
                    <td>Rare</td>
                    <td>Common</td>
                    <td>Rare</td>
                    <td>Less common</td>
                  </tr>
                  <tr>
                    <td>Marketed For</td>
                    <td>Fast action, fewer side effects</td>
                    <td>Classic choice</td>
                    <td>Long duration</td>
                    <td>Moderate duration, good tolerance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="avoid">
            <h2><span class="emoji">🍷</span> Things to Avoid</h2>
            <ul>
              <li><strong>Alcohol:</strong> Can increase dizziness and lower blood pressure.</li>
              <li>
                <strong>Grapefruit juice:</strong> May affect how your body metabolizes the drug.
              </li>
              <li>
                <strong>Other ED meds:</strong> Never combine
                <router-link to="/drugs/stendra">Stendra</router-link> with
                <router-link to="/drugs/viagra">Viagra</router-link>,
                <router-link to="/drugs/cialis">Cialis</router-link>, or
                <router-link to="/">Levitra</router-link> unless told by your doctor.
              </li>
            </ul>
          </section>

          <section id="conclusion">
            <h2><span class="emoji">✅</span> Final Thoughts: Is Stendra Right for You?</h2>
            <p>
              <router-link to="/drugs/stendra">Stendra</router-link> offers men a modern,
              fast-acting, and well-tolerated solution to erectile dysfunction. Whether you're new
              to ED medications or looking for an alternative to drugs like
              <router-link to="/drugs/viagra">Viagra</router-link> or
              <router-link to="/drugs/cialis">Cialis</router-link>, Avanafil might be the right
              option—especially if you value spontaneity.
            </p>
            <p>
              Before starting, always consult with a healthcare provider to ensure it's safe for
              your specific health situation.
            </p>
          </section>
        </div>
      </article>

      <!-- Right Sidebar (remains for external links) -->
      <DrugSidebar :sidebar-data="blogSidebarData" class="sidebar-right" />
    </main>

    <PageFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageHeader from '../../components/PageHeader.vue'
import PageFooter from '../../components/PageFooter.vue'
import SideNav from '../../components/SideNav.vue'
import DrugSidebar from '../../components/DrugSidebar.vue'

// Define navigation sections for the left sidebar (SideNav) - Adapted to content
const blogInternalNavSections = ref([
  { id: 'what-is', title: 'What Is Stendra?' },
  { id: 'how-it-works', title: 'How It Works' },
  { id: 'how-to-take', title: 'How to Take' },
  { id: 'precautions', title: 'Precautions' },
  { id: 'side-effects', title: 'Side Effects' },
  { id: 'comparison', title: 'Comparison' },
  { id: 'avoid', title: 'Things to Avoid' },
  { id: 'conclusion', title: 'Is It Right For You?' },
])

// Data for the right sidebar (DrugSidebar) - Kept generic but could be refined
const blogSidebarData = ref({
  drugStatus: null,
  quickSummary: null,
  drugImage: null, // Could add a Stendra image path here
  relatedResources: [
    { to: '/blog/fda-avanafil-info', text: 'FDA Info: Avanafil' },
    { to: '/blog/managing-side-effects', text: 'Managing Side Effects' },
    { to: '/blog/talking-to-doctor-ed', text: 'Talk to Your Doctor' },
  ],
  similarDrugs: [
    { to: '/blog/vardenafil-generic-info', text: 'Vardenafil (Generic)' },
    { to: '/blog/sildenafil-generic-info', text: 'Sildenafil (Generic)' },
    { to: '/blog/tadalafil-generic-faq', text: 'Tadalafil (Generic)' },
  ],
  drugComparison: [
    { to: '/blog/comparing-factors', text: 'All ED Drugs Compared' },
    { to: '/compare/viagra', text: 'Stendra vs Viagra' }, // Changed text for context
    { to: '/compare/cialis', text: 'Stendra vs Cialis' },
    // { to: '/compare/levitra', text: 'Stendra vs Levitra' }, // No specific Levitra comparison page found
  ],
})
</script>

<style scoped>
/* Styles copied and potentially slightly adjusted */
.blog-post-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-area-3-column {
  display: flex;
  flex-grow: 1;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  gap: 2rem;
}

.sidebar-left {
  flex: 0 0 200px;
  height: fit-content;
  position: sticky;
  top: 80px; /* Adjust based on header height */
}

.main-content-middle {
  flex: 3;
  min-width: 0;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.sidebar-right {
  flex: 1.5;
  height: fit-content;
  position: sticky;
  top: 80px; /* Adjust based on header height */
}

.post-header h1 {
  font-size: 2.2rem;
  color: #343a40;
  margin-bottom: 0.5rem;
}

.post-meta {
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 1.5rem;
}

hr {
  border: none;
  border-top: 1px solid #eee;
  margin: 1.5rem 0;
}

.post-body section {
  margin-bottom: 2.5rem; /* Slightly increased spacing */
  scroll-margin-top: 100px; /* Offset for fixed header */
}

.post-body section:last-of-type {
  margin-bottom: 0;
}

.post-body h2 {
  font-size: 1.6rem;
  color: #343a40;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #dee2e6;
}

.post-body h3 {
  font-size: 1.2rem;
  color: #495057;
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
}

.post-body p,
.post-body ul {
  line-height: 1.7;
  margin-bottom: 1rem;
  color: #495057;
}

.post-body ul {
  padding-left: 25px;
}
.post-body li {
  margin-bottom: 0.5rem;
}

/* Make emojis stand out slightly */
.emoji {
  margin-right: 0.5em;
  /* font-size: 1.1em; */ /* Optional: make emoji slightly larger */
}

/* Table styles */
.comparison-table-container {
  overflow-x: auto; /* Allow horizontal scrolling on small screens */
  margin: 1.5rem 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #dee2e6;
}

th,
td {
  border: 1px solid #dee2e6;
  padding: 0.75rem;
  text-align: left;
  font-size: 0.9rem;
  vertical-align: top;
}

thead th {
  background-color: #f8f9fa;
  font-weight: 600;
  color: #495057;
}

tbody tr:nth-child(even) {
  background-color: #f8f9fa;
}

tbody a {
  color: #007bff;
  text-decoration: none;
}
tbody a:hover {
  text-decoration: underline;
}

@media (max-width: 1200px) {
  .content-area-3-column {
    gap: 1.5rem;
    max-width: 100%;
  }
  .sidebar-left {
    flex-basis: 180px;
  }
  .main-content-middle {
    flex: 2.5;
  }
  .sidebar-right {
    flex: 1.2;
  }
}

@media (max-width: 992px) {
  .content-area-3-column {
    flex-direction: column;
  }
  .sidebar-left,
  .sidebar-right {
    flex-basis: auto;
    width: 100%;
    position: static;
    margin-bottom: 1.5rem;
  }
  .sidebar-right {
    padding: 1.5rem;
    background-color: #f8f9fa;
    border-radius: 8px;
    border: 1px solid #dee2e6;
  }
}

@media (max-width: 768px) {
  .main-content-middle {
    padding: 1.5rem;
  }
  .post-header h1 {
    font-size: 1.8rem;
  }
  .post-body h2 {
    font-size: 1.4rem;
  }
  th,
  td {
    padding: 0.5rem;
    font-size: 0.85rem;
  }
}
</style> 