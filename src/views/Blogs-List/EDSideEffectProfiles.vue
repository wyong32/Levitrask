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
          <h1>Side Effect Profiles of Common ED Medications</h1>
          <p class="post-meta">Published on: [Date Placeholder]</p>
        </header>
        <hr />
        <div class="post-body">
          <p>
            Erectile dysfunction (ED) medications have helped millions of men regain confidence and
            restore sexual function. But like any medication, they come with potential side effects.
            While most side effects are mild and temporary, understanding what to expect can help
            you make informed decisions—and choose the medication that fits you best.
          </p>
          <p>
            In this post, we'll explore the side effect profiles of four leading ED drugs:
            <router-link to="/drugs/viagra">Viagra (sildenafil)</router-link>,
            <router-link to="/drugs/cialis">Cialis (tadalafil)</router-link>,
            <router-link to="/">Levitra (vardenafil)</router-link>, and
            <router-link to="/drugs/stendra">Stendra (avanafil)</router-link>.
          </p>

          <section id="medications-overview">
            <h2><span class="emoji">💊</span> The Medications at a Glance</h2>
            <p>
              Before diving into side effects, here's a quick refresher on these four common ED
              medications—all part of the PDE5 inhibitor class:
            </p>
            <ul>
              <li>
                <router-link to="/drugs/viagra">Viagra (sildenafil)</router-link> – the most
                well-known ED drug, often the first choice
              </li>
              <li>
                <router-link to="/drugs/cialis">Cialis (tadalafil)</router-link> – known for its
                long duration (up to 36 hours)
              </li>
              <li>
                <router-link to="/">Levitra (vardenafil)</router-link> – chemically similar to
                Viagra but with slightly fewer side effects
              </li>
              <li>
                <router-link to="/drugs/stendra">Stendra (avanafil)</router-link> – the newest ED
                drug, known for rapid action and better tolerability
              </li>
            </ul>
          </section>

          <section id="common-side-effects">
            <h2><span class="emoji">⚠️</span> Common Side Effects: What to Expect</h2>
            <p>
              Most side effects from ED medications are mild to moderate and tend to resolve on
              their own. Here's a breakdown of what's commonly reported:
            </p>
            <div class="comparison-table-container">
              <table>
                <thead>
                  <tr>
                    <th>Side Effect</th>
                    <th><router-link to="/drugs/viagra">Viagra</router-link></th>
                    <th><router-link to="/drugs/cialis">Cialis</router-link></th>
                    <th><router-link to="/">Levitra</router-link></th>
                    <th><router-link to="/drugs/stendra">Stendra</router-link></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Headache</td>
                    <td>✅ Very common</td>
                    <td>✅ Common</td>
                    <td>✅ Common</td>
                    <td>✅ Common</td>
                  </tr>
                  <tr>
                    <td>Flushing (redness)</td>
                    <td>✅ Common</td>
                    <td>✅ Common</td>
                    <td>✅ Common</td>
                    <td>✅ Less common</td>
                  </tr>
                  <tr>
                    <td>Nasal congestion</td>
                    <td>✅ Common</td>
                    <td>✅ Less common</td>
                    <td>✅ Common</td>
                    <td>✅ Common</td>
                  </tr>
                  <tr>
                    <td>Indigestion</td>
                    <td>✅ Common</td>
                    <td>✅ Common</td>
                    <td>✅ Common</td>
                    <td>✅ Less common</td>
                  </tr>
                  <tr>
                    <td>Muscle/back pain</td>
                    <td>❌ Rare</td>
                    <td>✅ Common</td>
                    <td>❌ Rare</td>
                    <td>❌ Rare</td>
                  </tr>
                  <tr>
                    <td>Dizziness</td>
                    <td>✅ Common</td>
                    <td>✅ Less common</td>
                    <td>✅ Common</td>
                    <td>✅ Less common</td>
                  </tr>
                  <tr>
                    <td>Vision changes</td>
                    <td>✅ More likely</td>
                    <td>❌ Rare</td>
                    <td>✅ Possible</td>
                    <td>❌ Very rare</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <em
                >Note: The intensity and frequency of side effects can vary depending on dosage,
                overall health, and other medications you may be taking.</em
              >
            </p>
          </section>

          <section id="vision-changes">
            <h2>
              <span class="emoji">👁️</span> Vision Changes: Unique to Sildenafil and Vardenafil
            </h2>
            <p>
              One of the more well-known side effects of
              <router-link to="/drugs/viagra">Viagra</router-link> and
              <router-link to="/">Levitra</router-link> is visual disturbance, including:
            </p>
            <ul>
              <li>Blurred vision</li>
              <li>Increased light sensitivity</li>
              <li>A bluish tint to vision (known as cyanopsia)</li>
            </ul>
            <p>
              These effects are temporary but can be disturbing to some users.
              <router-link to="/drugs/cialis">Cialis</router-link> and
              <router-link to="/drugs/stendra">Stendra</router-link> are less likely to cause these
              visual changes, making them a better option for men sensitive to eye-related side
              effects.
            </p>
          </section>

          <section id="muscle-pain">
            <h2><span class="emoji">💪</span> Muscle and Back Pain: Common with Cialis</h2>
            <p>
              <router-link to="/drugs/cialis">Cialis (tadalafil)</router-link> is known to cause
              back pain and muscle aches more frequently than other ED medications. This is believed
              to be related to how the drug affects smooth muscle tissue beyond just the penis.
            </p>
            <p>
              These aches usually appear 12–24 hours after taking the medication and resolve within
              48 hours.
            </p>
          </section>

          <section id="cardio-risks">
            <h2><span class="emoji">🫀</span> Cardiovascular Risks: A Shared Caution</h2>
            <p>
              All PDE5 inhibitors can cause a drop in blood pressure, especially when combined with:
            </p>
            <ul>
              <li>Nitrates (used for chest pain)</li>
              <li>Alpha-blockers (used for high blood pressure or prostate issues)</li>
            </ul>
            <p>
              This can lead to dizziness, fainting, or even heart complications in rare cases. If
              you have heart disease, always speak to your doctor before starting any ED medication.
            </p>
          </section>

          <section id="priapism">
            <h2><span class="emoji">💥</span> Priapism: A Rare but Serious Side Effect</h2>
            <p>
              Priapism is a prolonged erection lasting more than 4 hours. It is rare but considered
              a medical emergency, as it can cause permanent damage if left untreated.
            </p>
            <p>
              All ED medications carry this risk, though it's more likely with higher doses or when
              combined with other medications or recreational drugs.
            </p>
          </section>

          <section id="tolerability">
            <h2><span class="emoji">✅</span> Tolerability Rankings (General Overview)</h2>
            <p>
              Here's a simplified ranking based on user reports and clinical studies regarding how
              well these drugs are tolerated:
            </p>
            <ul>
              <li>
                <router-link to="/drugs/stendra">Stendra</router-link> – Fewest side effects, best
                tolerated overall
              </li>
              <li>
                <router-link to="/drugs/cialis">Cialis</router-link> – Very well tolerated,
                long-lasting with minimal daily side effects
              </li>
              <li>
                <router-link to="/">Levitra</router-link> – Good balance of effectiveness and
                tolerability
              </li>
              <li>
                <router-link to="/drugs/viagra">Viagra</router-link> – Effective, but with a higher
                chance of vision-related side effects
              </li>
            </ul>
          </section>

          <section id="psychological-effects">
            <h2><span class="emoji">🧠</span> Psychological Side Effects</h2>
            <p>
              While rare, some men report anxiety, irritability, or mood swings related to ED
              medication use—usually stemming from performance pressure or side effects like
              headache and dizziness. If you notice emotional changes, speak to your doctor.
            </p>
          </section>

          <section id="managing-tips">
            <h2><span class="emoji">🗒️</span> Final Tips for Managing Side Effects</h2>
            <ul>
              <li>Start with the lowest effective dose to minimize side effects.</li>
              <li>
                Avoid alcohol when taking ED medications—it can amplify side effects like dizziness
                and flushing.
              </li>
              <li>
                Take with water and consider food intake—especially for
                <router-link to="/drugs/viagra">Viagra</router-link> and
                <router-link to="/">Levitra</router-link>.
              </li>
              <li>Communicate openly with your doctor about any side effects you experience.</li>
            </ul>
          </section>

          <section id="talk-to-doctor">
            <h2><span class="emoji">👨‍⚕️</span> Talk to Your Doctor</h2>
            <p>
              Choosing the right ED medication involves more than just picking the one that "works."
              It's also about how it feels in your body, how it fits your lifestyle, and how your
              health profile aligns with the drug's safety.
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
  { id: 'medications-overview', title: 'Medications Overview' },
  { id: 'common-side-effects', title: 'Common Side Effects' },
  { id: 'vision-changes', title: 'Vision Changes' },
  { id: 'muscle-pain', title: 'Muscle/Back Pain' },
  { id: 'cardio-risks', title: 'Cardiovascular Risks' },
  { id: 'priapism', title: 'Priapism (Rare)' },
  { id: 'tolerability', title: 'Tolerability Ranking' },
  { id: 'psychological-effects', title: 'Psychological Effects' },
  { id: 'managing-tips', title: 'Managing Tips' },
  { id: 'talk-to-doctor', title: 'Talk to Your Doctor' },
])

// Data for the right sidebar (DrugSidebar)
const blogSidebarData = ref({
  drugStatus: null,
  quickSummary: null,
  drugImage: null,
  relatedResources: [
    { to: '/blog/managing-side-effects', text: 'How to Manage Side Effects' },
    { to: '/blog/talking-to-doctor-ed', text: 'Talking to Your Doctor About ED' },
    { to: '/blog/comparing-factors', text: 'Comparing ED Drug Factors' },
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
/* Styles including table styles */
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
  margin-bottom: 2.5rem;
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