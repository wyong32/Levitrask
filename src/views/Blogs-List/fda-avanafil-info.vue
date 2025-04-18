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
          <h1>FDA Drug Information: Avanafil</h1>
          <p class="post-meta">Published on: [Date Placeholder]</p>
        </header>
        <hr />
        <div class="post-body">
          <p>
            Avanafil, marketed under the brand name
            <router-link to="/drugs/stendra">Stendra</router-link>, is a prescription medication
            approved by the U.S. Food and Drug Administration (FDA) for the treatment of erectile
            dysfunction (ED) in men. As one of the newest PDE5 inhibitors, avanafil offers a
            fast-acting and convenient option for individuals seeking effective treatment for ED.
          </p>
          <p>
            This guide offers a comprehensive look at the FDA-approved uses, safety profile, and
            benefits of avanafil to help patients and healthcare professionals make informed
            decisions.
          </p>

          <section id="what-is">
            <h2><span class="emoji">🔍</span> What Is Avanafil?</h2>
            <p>
              Avanafil is an oral medication that improves erectile function by enhancing blood flow
              to the penis during sexual stimulation. It belongs to a class of drugs known as
              phosphodiesterase type 5 (PDE5) inhibitors, the same group that includes
              <router-link to="/drugs/viagra">sildenafil (Viagra)</router-link>,
              <router-link to="/drugs/cialis">tadalafil (Cialis)</router-link>, and
              <router-link to="/">vardenafil (Levitra)</router-link>.
            </p>
            <p>
              Avanafil was approved by the FDA in April 2012, making it one of the most recent
              advancements in ED treatment.
            </p>
          </section>

          <section id="approved-indications">
            <h2><span class="emoji">✅</span> FDA-Approved Indications</h2>
            <p>The FDA has approved avanafil for:</p>
            <ul>
              <li>Treatment of erectile dysfunction (ED) in adult males</li>
            </ul>
            <p>
              It is not indicated for women or children and should only be used under the
              supervision of a healthcare provider.
            </p>
          </section>

          <section id="how-it-works">
            <h2><span class="emoji">⚙️</span> How Avanafil Works</h2>
            <p>
              Avanafil works by inhibiting the enzyme PDE5, which normally reduces blood flow in the
              penis. By blocking PDE5, avanafil allows for increased levels of cyclic guanosine
              monophosphate (cGMP), leading to relaxed blood vessels and improved blood circulation
              in erectile tissue.
            </p>
            <p>
              Unlike some other ED medications, avanafil is more selective in targeting PDE5, which
              may reduce the risk of side effects in other areas of the body.
            </p>
          </section>

          <section id="onset-duration">
            <h2><span class="emoji">⏱</span> Onset and Duration</h2>
            <p>
              One of the standout features of avanafil is its rapid onset of action. It is among the
              fastest-acting ED medications available today:
            </p>
            <ul>
              <li><strong>Onset of action:</strong> As soon as 15 minutes</li>
              <li><strong>Duration:</strong> Effects can last up to 6 hours</li>
            </ul>
            <p>
              This makes avanafil a suitable choice for men who prefer spontaneity in their sexual
              activity.
            </p>
          </section>

          <section id="dosing">
            <h2><span class="emoji">💊</span> Dosing Guidelines</h2>
            <p>
              Avanafil is available in tablet form and should be taken orally as directed by a
              physician.
            </p>
            <p>FDA-approved dosing includes:</p>
            <ul>
              <li>
                <strong>Initial dose:</strong> 100 mg, taken approximately 15–30 minutes before
                sexual activity
              </li>
              <li>
                <strong>Dosage range:</strong> 50 mg to 200 mg, based on individual response and
                tolerance
              </li>
              <li><strong>Frequency:</strong> Do not take more than once per day</li>
            </ul>
            <p>
              Avanafil can be taken with or without food, but a high-fat meal may slightly delay its
              effectiveness.
            </p>
          </section>

          <section id="safety-warnings">
            <h2><span class="emoji">⚠️</span> Safety and Warnings</h2>
            <p>
              The FDA emphasizes caution in patients with certain health conditions. Avanafil should
              not be used in the following situations:
            </p>
            <ul>
              <li>
                Concurrent nitrate use (such as nitroglycerin) due to risk of severe hypotension
              </li>
              <li>Known allergy to avanafil</li>
              <li>Severe cardiovascular conditions, such as recent heart attack or stroke</li>
              <li>Uncontrolled high or low blood pressure</li>
              <li>Use with caution in individuals with liver or kidney impairment</li>
            </ul>
            <p>
              If you have been advised to avoid sexual activity for health reasons, consult your
              doctor before using avanafil.
            </p>
          </section>

          <section id="side-effects">
            <h2><span class="emoji">🧾</span> Common Side Effects</h2>
            <p>
              Like all medications, avanafil may cause side effects. According to the FDA, the most
              commonly reported include:
            </p>
            <ul>
              <li>Headache</li>
              <li>Flushing</li>
              <li>Nasal congestion</li>
              <li>Back pain</li>
              <li>Dizziness</li>
            </ul>
            <p>
              These are usually mild to moderate and temporary. Serious side effects are rare but
              may include:
            </p>
            <ul>
              <li>Sudden vision or hearing loss</li>
              <li>Priapism (erection lasting longer than 4 hours)</li>
              <li>Severe hypotension in combination with certain drugs</li>
            </ul>
            <p>Seek medical help immediately if you experience any of these serious reactions.</p>
          </section>

          <section id="drug-interactions">
            <h2><span class="emoji">🔄</span> Drug Interactions</h2>
            <p>Avanafil should not be taken with:</p>
            <ul>
              <li>Nitrates (used for chest pain)</li>
              <li>Certain antifungals (e.g., ketoconazole)</li>
              <li>HIV protease inhibitors</li>
              <li>Other ED medications</li>
            </ul>
            <p>
              Always provide your healthcare provider with a full list of medications and
              supplements you're taking before starting avanafil.
            </p>
          </section>

          <section id="storage">
            <h2><span class="emoji">📦</span> Storage Instructions</h2>
            <ul>
              <li>
                Store avanafil tablets at room temperature between 68°F to 77°F (20°C to 25°C)
              </li>
              <li>Keep in the original container, tightly closed</li>
              <li>Protect from moisture and heat</li>
              <li>Keep out of reach of children and pets</li>
            </ul>
          </section>

          <section id="unique-benefits">
            <h2><span class="emoji">🧬</span> Unique Benefits of Avanafil</h2>
            <p>Compared to other ED medications, avanafil offers several advantages:</p>
            <div class="comparison-table-container">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Avanafil (<router-link to="/drugs/stendra">Stendra</router-link>)</th>
                    <th>Sildenafil (<router-link to="/drugs/viagra">Viagra</router-link>)</th>
                    <th>Tadalafil (<router-link to="/drugs/cialis">Cialis</router-link>)</th>
                    <th>Vardenafil (<router-link to="/">Levitra</router-link>)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Onset of Action</td>
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
                    <td>4–6 hours</td>
                  </tr>
                  <tr>
                    <td>Food Interactions</td>
                    <td>Minimal</td>
                    <td>Possible delay</td>
                    <td>Minimal</td>
                    <td>Possible delay</td>
                  </tr>
                  <tr>
                    <td>Visual Side Effects</td>
                    <td>Rare</td>
                    <td>More common</td>
                    <td>Rare</td>
                    <td>Occasional</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="final-thoughts">
            <h2><span class="emoji">🧠</span> Final Thoughts</h2>
            <p>
              Avanafil is a modern, fast-acting, and well-tolerated ED medication backed by FDA
              approval. It may be an excellent option for men seeking a reliable solution with fewer
              side effects and quicker results.
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
  { id: 'what-is', title: 'What Is Avanafil?' },
  { id: 'approved-indications', title: 'Approved Uses' },
  { id: 'how-it-works', title: 'How It Works' },
  { id: 'onset-duration', title: 'Onset & Duration' },
  { id: 'dosing', title: 'Dosing Guidelines' },
  { id: 'safety-warnings', title: 'Safety & Warnings' },
  { id: 'side-effects', title: 'Side Effects' },
  { id: 'drug-interactions', title: 'Drug Interactions' },
  { id: 'storage', title: 'Storage' },
  { id: 'unique-benefits', title: 'Unique Benefits' },
  { id: 'final-thoughts', title: 'Final Thoughts' },
])

// Data for the right sidebar (DrugSidebar)
const blogSidebarData = ref({
  drugStatus: null,
  quickSummary: null,
  drugImage: null, // Could add Stendra image path
  relatedResources: [
    { to: '/blog/avanafil-patient-guide', text: 'Avanafil Patient Guide' },
    { to: '/blog/managing-side-effects', text: 'Managing Side Effects' },
    { to: '/blog/talking-to-doctor-ed', text: 'Talking to Your Doctor About ED' },
  ],
  similarDrugs: [
    // Links to individual drug info pages
    { to: '/blog/vardenafil-generic-info', text: 'Vardenafil Guide' },
    { to: '/blog/sildenafil-generic-info', text: 'Sildenafil Guide' },
    { to: '/blog/tadalafil-generic-faq', text: 'Tadalafil Guide' },
  ],
  drugComparison: [
    // Links to the comparison pages centered on other drugs
    { to: '/blog/comparing-factors', text: 'All ED Drugs Compared' },
    { to: '/compare/viagra', text: 'Stendra vs. Viagra' },
    { to: '/compare/cialis', text: 'Stendra vs. Cialis' },
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