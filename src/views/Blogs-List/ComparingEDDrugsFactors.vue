<template>
  <div class="blog-post-page">
    <PageHeader />

    <main class="content-area-3-column">
      <!-- Left Sidebar (for in-page navigation) -->
      <SideNav
        :sections="blogInternalNavSections"
        content-selector=".main-content-middle > .post-body > section"
        class="sidebar-left"
      />

      <!-- Main Content Area -->
      <article class="main-content-middle">
        <header class="post-header">
          <h1>Comparing ED Drugs: Factors to Consider</h1>
          <p class="post-meta">Published on: [Date Placeholder]</p>
        </header>
        <hr />
        <div class="post-body">
          <p>
            Erectile dysfunction (ED) is more common than many men realize—and thanks to modern
            medicine, it's also highly treatable. With multiple prescription medications available,
            including <router-link to="/drugs/viagra">Viagra</router-link>,
            <router-link to="/drugs/cialis">Cialis</router-link>,
            <router-link to="/">Levitra</router-link>, and
            <router-link to="/drugs/stendra">Stendra</router-link>, men have more choices than ever
            before. But how do you know which ED drug is right for you?
          </p>
          <p>
            In this blog, we'll break down the key factors to consider when comparing ED
            medications, so you and your healthcare provider can make an informed decision that fits
            your lifestyle, health needs, and preferences.
          </p>

          <section id="onset-time">
            <h2><span class="emoji">💊</span> 1. Onset Time: How Fast Do They Work?</h2>
            <p>One of the first questions men ask is: How soon will it work?</p>
            <div class="comparison-table-container">
              <table>
                <thead>
                  <tr>
                    <th>Drug</th>
                    <th>Onset Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><router-link to="/drugs/stendra">Stendra (Avanafil)</router-link></td>
                    <td>15–30 minutes (can be as fast as 15 min)</td>
                  </tr>
                  <tr>
                    <td><router-link to="/drugs/viagra">Viagra (Sildenafil)</router-link></td>
                    <td>30–60 minutes</td>
                  </tr>
                  <tr>
                    <td><router-link to="/drugs/cialis">Cialis (Tadalafil)</router-link></td>
                    <td>30–45 minutes</td>
                  </tr>
                  <tr>
                    <td><router-link to="/">Levitra (Vardenafil)</router-link></td>
                    <td>30–60 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>Quick Tip:</strong><br />If you want something that works fast for spontaneous
              encounters, <router-link to="/drugs/stendra">Stendra</router-link> has the edge in
              speed.
            </p>
          </section>

          <section id="duration">
            <h2><span class="emoji">⏱</span> 2. Duration: How Long Do Effects Last?</h2>
            <p>
              The duration of action affects how long you can engage in sexual activity after taking
              the pill.
            </p>
            <div class="comparison-table-container">
              <table>
                <thead>
                  <tr>
                    <th>Drug</th>
                    <th>Duration of Effect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><router-link to="/drugs/stendra">Stendra</router-link></td>
                    <td>Up to 6 hours</td>
                  </tr>
                  <tr>
                    <td><router-link to="/drugs/viagra">Viagra</router-link></td>
                    <td>4–6 hours</td>
                  </tr>
                  <tr>
                    <td><router-link to="/">Levitra</router-link></td>
                    <td>4–5 hours</td>
                  </tr>
                  <tr>
                    <td><router-link to="/drugs/cialis">Cialis</router-link></td>
                    <td>Up to 36 hours (the "weekend pill")</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>Quick Tip:</strong><br />For men who prefer longer flexibility without timing
              intimacy around a pill, <router-link to="/drugs/cialis">Cialis</router-link> offers a
              long window of action.
            </p>
          </section>

          <section id="food">
            <h2><span class="emoji">🍽</span> 3. Food Interactions</h2>
            <p>Some ED medications work better when taken on an empty stomach.</p>
            <div class="comparison-table-container">
              <table>
                <thead>
                  <tr>
                    <th>Drug</th>
                    <th>With Food?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><router-link to="/drugs/stendra">Stendra</router-link></td>
                    <td>Works well with or without food</td>
                  </tr>
                  <tr>
                    <td><router-link to="/drugs/cialis">Cialis</router-link></td>
                    <td>No food restrictions</td>
                  </tr>
                  <tr>
                    <td><router-link to="/drugs/viagra">Viagra</router-link></td>
                    <td>Best taken on an empty stomach (fatty foods delay effect)</td>
                  </tr>
                  <tr>
                    <td><router-link to="/">Levitra</router-link></td>
                    <td>Food can delay absorption slightly</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>Quick Tip:</strong><br />If you want to take your medication without worrying
              about food, <router-link to="/drugs/stendra">Stendra</router-link> or
              <router-link to="/drugs/cialis">Cialis</router-link> may be the more convenient
              choices.
            </p>
          </section>

          <section id="side-effects">
            <h2><span class="emoji">⚠️</span> 4. Side Effects and Tolerability</h2>
            <p>All ED medications can cause side effects, but each has its own profile.</p>
            <div class="comparison-table-container">
              <table>
                <thead>
                  <tr>
                    <th>Drug</th>
                    <th>Common Side Effects</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><router-link to="/drugs/stendra">Stendra</router-link></td>
                    <td>Headache, flushing, nasal congestion (milder overall)</td>
                  </tr>
                  <tr>
                    <td><router-link to="/drugs/viagra">Viagra</router-link></td>
                    <td>Headache, visual changes (blue tint), flushing</td>
                  </tr>
                  <tr>
                    <td><router-link to="/drugs/cialis">Cialis</router-link></td>
                    <td>Muscle aches, back pain, headache</td>
                  </tr>
                  <tr>
                    <td><router-link to="/">Levitra</router-link></td>
                    <td>Flushing, dizziness, visual sensitivity</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>Quick Tip:</strong><br />Men sensitive to visual side effects may prefer
              <router-link to="/drugs/stendra">Stendra</router-link> or
              <router-link to="/drugs/cialis">Cialis</router-link>, which are less likely to cause
              them.
            </p>
          </section>

          <section id="cost">
            <h2><span class="emoji">💰</span> 5. Cost and Generic Availability</h2>
            <p>Affordability matters, especially for ongoing use.</p>
            <div class="comparison-table-container">
              <table>
                <thead>
                  <tr>
                    <th>Drug</th>
                    <th>Generic Available?</th>
                    <th>Cost (Generic)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><router-link to="/drugs/stendra">Stendra</router-link></td>
                    <td>❌ No (brand only)</td>
                    <td>💲💲💲</td>
                  </tr>
                  <tr>
                    <td><router-link to="/drugs/viagra">Viagra</router-link></td>
                    <td>
                      ✅ <router-link to="/blog/sildenafil-generic-info">Sildenafil</router-link>
                    </td>
                    <td>💲</td>
                  </tr>
                  <tr>
                    <td><router-link to="/drugs/cialis">Cialis</router-link></td>
                    <td>
                      ✅ <router-link to="/blog/tadalafil-generic-faq">Tadalafil</router-link>
                    </td>
                    <td>💲</td>
                  </tr>
                  <tr>
                    <td><router-link to="/">Levitra</router-link></td>
                    <td>
                      ✅ <router-link to="/blog/vardenafil-generic-info">Vardenafil</router-link>
                    </td>
                    <td>💲</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>Quick Tip:</strong><br />Generic
              <router-link to="/blog/sildenafil-generic-info">sildenafil</router-link>,
              <router-link to="/blog/tadalafil-generic-faq">tadalafil</router-link>, and
              <router-link to="/blog/vardenafil-generic-info">vardenafil</router-link> offer
              budget-friendly options, while <router-link to="/drugs/stendra">Stendra</router-link>,
              still under patent, is more expensive.
            </p>
          </section>

          <section id="health">
            <h2><span class="emoji">🩺</span> 6. Health Considerations & Drug Interactions</h2>
            <p>
              All ED drugs are PDE5 inhibitors, and they're not safe for everyone. Tell your doctor
              if you:
            </p>
            <ul>
              <li>Take nitrates (can cause dangerous blood pressure drops)</li>
              <li>Have severe heart, liver, or kidney conditions</li>
              <li>Have a history of stroke or heart attack</li>
              <li>Take alpha-blockers or medications for blood pressure</li>
            </ul>
            <p>
              Some drugs (like <router-link to="/drugs/cialis">Cialis</router-link>) are better for
              men with benign prostatic hyperplasia (BPH), as they also help relieve urinary
              symptoms.
            </p>
          </section>

          <section id="which-is-best">
            <h2><span class="emoji">🤔</span> So, Which ED Drug Is Best for You?</h2>
            <p>There's no one-size-fits-all answer. Your best choice depends on your:</p>
            <ul>
              <li>Timing needs (Do you need fast action or long duration?)</li>
              <li>Health profile</li>
              <li>Tolerance for side effects</li>
              <li>Budget</li>
              <li>Lifestyle preferences</li>
            </ul>
            <p>Here's a simplified summary:</p>
            <div class="comparison-table-container">
              <table>
                <thead>
                  <tr>
                    <th>You want...</th>
                    <th>Consider</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A fast-acting pill</td>
                    <td><router-link to="/drugs/stendra">Stendra</router-link></td>
                  </tr>
                  <tr>
                    <td>A long-lasting effect</td>
                    <td><router-link to="/drugs/cialis">Cialis</router-link></td>
                  </tr>
                  <tr>
                    <td>A tried-and-true classic</td>
                    <td><router-link to="/drugs/viagra">Viagra</router-link></td>
                  </tr>
                  <tr>
                    <td>A good generic option</td>
                    <td>
                      <router-link to="/drugs/viagra">Viagra</router-link>,
                      <router-link to="/drugs/cialis">Cialis</router-link>, or
                      <router-link to="/">Levitra</router-link>
                    </td>
                  </tr>
                  <tr>
                    <td>Fewer side effects</td>
                    <td><router-link to="/drugs/stendra">Stendra</router-link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="final-thoughts">
            <h2><span class="emoji">🗨️</span> Final Thoughts</h2>
            <p>
              Choosing an ED medication is a personal decision that should be made with your
              healthcare provider. While <router-link to="/drugs/viagra">Viagra</router-link> may be
              the most recognized name, drugs like
              <router-link to="/drugs/stendra">Stendra</router-link> and
              <router-link to="/drugs/cialis">Cialis</router-link> offer unique advantages in terms
              of convenience, speed, and comfort.
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
  { id: 'onset-time', title: 'Onset Time' },
  { id: 'duration', title: 'Duration' },
  { id: 'food', title: 'Food Interactions' },
  { id: 'side-effects', title: 'Side Effects' },
  { id: 'cost', title: 'Cost/Generics' },
  { id: 'health', title: 'Health Considerations' },
  { id: 'which-is-best', title: 'Which is Best?' },
  { id: 'final-thoughts', title: 'Final Thoughts' },
])

// Data for the right sidebar (DrugSidebar) - Pointing to specific comparison pages
const blogSidebarData = ref({
  drugStatus: null,
  quickSummary: null,
  drugImage: null,
  relatedResources: [
    { to: '/blog/side-effect-profiles', text: 'Side Effect Profiles In-Depth' },
    { to: '/blog/managing-side-effects', text: 'Managing Side Effects' },
    { to: '/blog/talking-to-doctor-ed', text: 'Discussing with Your Doctor' },
  ],
  similarDrugs: [
    // Links to individual drug info pages
    { to: '/blog/vardenafil-generic-info', text: 'Vardenafil Guide' },
    { to: '/blog/sildenafil-generic-info', text: 'Sildenafil Guide' },
    { to: '/blog/tadalafil-generic-faq', text: 'Tadalafil Guide' },
    { to: '/blog/avanafil-patient-guide', text: 'Avanafil Guide' },
  ],
  drugComparison: [
    // Links to the comparison pages centered on other drugs
    { to: '/compare/viagra', text: 'Viagra vs. Others' },
    { to: '/compare/cialis', text: 'Cialis vs. Others' },
    { to: '/compare/stendra', text: 'Stendra vs. Others' },
  ],
})
</script>

<style scoped>
/* Styles including table styles from previous edit */
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

.emoji {
  margin-right: 0.5em;
}

/* Table styles */
.comparison-table-container {
  overflow-x: auto;
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