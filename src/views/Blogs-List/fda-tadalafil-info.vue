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
          <h1>FDA Drug Information: Tadalafil</h1>
          <p class="post-meta">Published on: [Date Placeholder]</p>
        </header>
        <hr />
        <div class="post-body">
          <p>
            Tadalafil, widely known under the brand names
            <router-link to="/drugs/cialis">Cialis</router-link> (for erectile dysfunction and
            benign prostatic hyperplasia) and Adcirca (for pulmonary arterial hypertension), is a
            prescription medication approved by the U.S. Food and Drug Administration (FDA). As one
            of the most popular phosphodiesterase type 5 (PDE5) inhibitors, tadalafil offers
            long-lasting effects and flexible dosing, making it a preferred option for many
            patients.
          </p>
          <p>
            This guide breaks down everything you need to know about tadalafil from an FDA-approved
            perspective — including how it works, dosage recommendations, safety information, and
            comparisons with other ED medications.
          </p>

          <section id="introduction-uses">
            <h2><span class="emoji">🔍</span> What Is Tadalafil & Approved Uses?</h2>
            <p>
              Tadalafil is an oral PDE5 inhibitor used to treat several conditions by improving
              blood flow through smooth muscle relaxation. FDA-approved uses include:
            </p>
            <ul>
              <li>
                Erectile dysfunction (ED) –
                <router-link to="/drugs/cialis">Cialis</router-link>
              </li>
              <li>
                Benign prostatic hyperplasia (BPH) –
                <router-link to="/drugs/cialis">Cialis</router-link>
              </li>
              <li>Pulmonary arterial hypertension (PAH) – Adcirca</li>
              <!-- Assuming Adcirca page doesn't exist yet -->
            </ul>
            <p>
              The drug works differently depending on the condition being treated, but its core
              mechanism remains the same: enhancing blood circulation in targeted areas.
            </p>
          </section>

          <section id="how-it-works-dosage">
            <h2><span class="emoji">⚙️</span> How It Works, Duration, Dosage & Usage</h2>
            <h3>How Tadalafil Works</h3>
            <p>
              Tadalafil works by inhibiting the PDE5 enzyme, which degrades cyclic guanosine
              monophosphate (cGMP) — a chemical that causes smooth muscle relaxation and
              vasodilation. Increased cGMP levels allow blood vessels to dilate and improve blood
              flow.
            </p>
            <ul>
              <li>
                For ED, this results in improved blood flow to the penis during sexual stimulation.
              </li>
              <li>
                For BPH, it helps relax muscles in the prostate and bladder, improving urinary
                symptoms.
              </li>
              <li>
                For PAH, it reduces pressure in the pulmonary arteries, making it easier for the
                heart to pump blood through the lungs.
              </li>
            </ul>
            <h3>Duration and Onset</h3>
            <p>One of tadalafil's most well-known advantages is its long duration of action.</p>
            <ul>
              <li>Onset of action: Within 30–45 minutes</li>
              <li>Duration: Up to 36 hours</li>
            </ul>
            <p>
              Because of its long window of effectiveness, tadalafil is often called "The Weekend
              Pill," allowing for more spontaneity than other ED medications.
            </p>
            <h3>FDA-Approved Dosage & Usage</h3>
            <p><strong>For Erectile Dysfunction (Cialis):</strong></p>
            <p>There are two FDA-approved ways to take tadalafil for ED:</p>
            <ul>
              <li>
                <strong>As needed:</strong>
                <ul>
                  <li>Starting dose: 10 mg, taken at least 30 minutes before sexual activity</li>
                  <li>Dose range: 5 mg to 20 mg depending on efficacy and tolerance</li>
                  <li>Do not take more than once per day</li>
                </ul>
              </li>
              <li>
                <strong>Once-daily dosing:</strong>
                <ul>
                  <li>Dose: 2.5 mg to 5 mg daily</li>
                  <li>
                    Best for men who anticipate frequent sexual activity (twice a week or more)
                  </li>
                </ul>
              </li>
            </ul>
            <p><strong>For BPH (Cialis):</strong></p>
            <ul>
              <li>Dose: 5 mg once daily, at the same time every day</li>
            </ul>
            <p><strong>For PAH (Adcirca):</strong></p>
            <ul>
              <li>Dose: 40 mg once daily, taken as two 20 mg tablets</li>
              <li>Use only under the direction of a specialist managing PAH</li>
            </ul>
          </section>

          <section id="warnings-side-effects">
            <h2><span class="emoji">⚠️</span> Warnings, Interactions & Side Effects</h2>
            <h3>FDA Warnings and Precautions</h3>
            <p>
              The FDA advises caution when using tadalafil, especially in individuals with
              cardiovascular issues. Do not take tadalafil if you:
            </p>
            <ul>
              <li>Use nitrate drugs for chest pain (risk of dangerous blood pressure drop)</li>
              <li>Take riociguat (used to treat PAH)</li>
              <li>Are allergic to tadalafil or any of its components</li>
            </ul>
            <p>Use with caution if you have:</p>
            <ul>
              <li>Recent history of heart attack or stroke</li>
              <li>Uncontrolled high or low blood pressure</li>
              <li>Liver or kidney disease</li>
              <li>Retinitis pigmentosa or other retinal conditions</li>
            </ul>
            <p>Always consult your healthcare provider before starting tadalafil.</p>
            <h3>Drug Interactions</h3>
            <p>Tadalafil can interact with:</p>
            <ul>
              <li>Nitrates (e.g., nitroglycerin)</li>
              <li>Alpha-blockers (e.g., tamsulosin)</li>
              <li>CYP3A4 inhibitors (e.g., ketoconazole, ritonavir)</li>
              <li>Other PDE5 inhibitors</li>
              <li>Blood pressure medications</li>
            </ul>
            <p>
              Inform your doctor about all prescription, OTC, and herbal supplements you're taking.
            </p>
            <h3>Common Side Effects</h3>
            <p>According to FDA documentation, common side effects of tadalafil include:</p>
            <ul>
              <li>Headache</li>
              <li>Indigestion</li>
              <li>Back pain</li>
              <li>Muscle aches</li>
              <li>Flushing</li>
              <li>Stuffy or runny nose</li>
            </ul>
            <p>These side effects typically resolve within a few hours.</p>
            <p><strong>Rare but serious side effects:</strong></p>
            <ul>
              <li>Vision or hearing loss</li>
              <li>Chest pain</li>
              <li>Priapism (erection lasting over 4 hours — seek emergency care)</li>
              <li>Allergic reactions</li>
            </ul>
            <p>Seek medical attention if you experience serious symptoms.</p>
          </section>

          <section id="comparison-conclusion">
            <h2><span class="emoji">🧬</span> Comparison, Storage & Conclusion</h2>
            <h3>How Tadalafil Compares to Other ED Medications</h3>
            <div class="comparison-table-container">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>
                      <router-link to="/drugs/cialis">Tadalafil (Cialis)</router-link>
                    </th>
                    <th>
                      <router-link to="/drugs/viagra">Sildenafil (Viagra)</router-link>
                    </th>
                    <th>
                      <router-link to="/">Vardenafil (Levitra)</router-link>
                      <!-- Assuming Levitra page doesn't exist yet -->
                    </th>
                    <th>
                      <router-link to="/drugs/stendra">Avanafil (Stendra)</router-link>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Onset of Action</td>
                    <td>30–45 minutes</td>
                    <td>30–60 minutes</td>
                    <td>30–60 minutes</td>
                    <td>15–30 minutes</td>
                  </tr>
                  <tr>
                    <td>Duration</td>
                    <td>Up to 36 hours</td>
                    <td>4–6 hours</td>
                    <td>4–6 hours</td>
                    <td>Up to 6 hours</td>
                  </tr>
                  <tr>
                    <td>Daily Use Option</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>Food Interactions</td>
                    <td>Minimal</td>
                    <td>May delay absorption</td>
                    <td>May delay absorption</td>
                    <td>Minimal</td>
                  </tr>
                  <tr>
                    <td>Approved for BPH</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>Approved for PAH</td>
                    <td>Yes (Adcirca)</td>
                    <td>Yes (Revatio)</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Tadalafil's versatility and long duration make it a standout option, particularly for
              men who want spontaneity or suffer from both ED and BPH.
            </p>
            <h3>Storage and Handling</h3>
            <ul>
              <li>Store at room temperature (68–77°F or 20–25°C)</li>
              <li>Keep away from moisture, heat, and direct light</li>
              <li>Store in its original container and out of reach of children</li>
            </ul>
            <h3>Final Thoughts</h3>
            <p>
              Tadalafil is a trusted, FDA-approved treatment for multiple conditions, most notably
              erectile dysfunction and benign prostatic hyperplasia. Its long-lasting effects,
              flexible dosing, and minimal food interactions make it one of the most convenient and
              reliable medications in its class.
            </p>
            <p>
              Whether taken as needed or daily, tadalafil can significantly improve quality of life
              for many individuals — but it's crucial to consult with a healthcare provider to
              ensure it's the right fit for your health and lifestyle.
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

// Define navigation sections for the left sidebar (SideNav)
const blogInternalNavSections = ref([
  { id: 'introduction-uses', title: 'Intro & Uses' },
  { id: 'how-it-works-dosage', title: 'How It Works & Dosage' }, // Adjusted title slightly
  { id: 'warnings-side-effects', title: 'Warnings & Side Effects' },
  { id: 'comparison-conclusion', title: 'Comparison & Conclusion' },
])

// Data for the right sidebar (DrugSidebar) - adapted for Tadalafil
const blogSidebarData = ref({
  drugStatus: null, // Placeholder
  quickSummary: null, // Placeholder
  drugImage: null, // Placeholder
  relatedResources: [
    { to: '/blog/tadalafil-generic-faq', text: 'Tadalafil Generic FAQ' },
    { to: '/blog/managing-side-effects', text: 'Managing Side Effects' },
    { to: '/blog/lifestyle-impact', text: 'Lifestyle Factors' },
    { to: '/blog/talking-to-doctor-ed', text: 'Talking to Your Doctor' },
  ],
  similarDrugs: [
    { to: '/blog/sildenafil-generic-info', text: 'Sildenafil (Generic)' },
    { to: '/blog/vardenafil-generic-info', text: 'Vardenafil (Generic)' },
    { to: '/blog/avanafil-patient-guide', text: 'Avanafil (Stendra)' },
  ],
  drugComparison: [
    { to: '/blog/comparing-factors', text: 'All ED Drugs Compared' },
    { to: '/compare/viagra', text: 'Compare with Viagra (Sildenafil)' },
    { to: '/compare/stendra', text: 'Compare with Stendra (Avanafil)' },
    // No specific Levitra comparison page assumed
  ],
})
</script>

<style scoped>
/* Styles copied from fda-sildenafil-info.vue for consistency */
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
  top: 80px;
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
  top: 80px;
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
  scroll-margin-top: 100px;
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

.emoji {
  margin-right: 0.5em;
}

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