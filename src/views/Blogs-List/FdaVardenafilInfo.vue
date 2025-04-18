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
          <h1>FDA Drug Information: Vardenafil</h1>
          <p class="post-meta">Published on: [Date Placeholder]</p>
        </header>
        <hr />
        <div class="post-body">
          <p>
            Vardenafil is a prescription medication approved by the U.S. Food and Drug
            Administration (FDA) for the treatment of erectile dysfunction (ED) in adult men. It is
            available under brand names like <router-link to="/">Levitra</router-link> and Staxyn.
            As part of the phosphodiesterase type 5 (PDE5) inhibitor class, vardenafil improves
            blood flow to help men achieve and maintain an erection during sexual activity.
          </p>
          <p>
            This guide outlines essential FDA-approved information about vardenafil, including how
            it works, dosing guidelines, safety considerations, and how it compares to other ED
            medications.
          </p>

          <section id="introduction-uses">
            <h2><span class="emoji">🔍</span> What Is Vardenafil & Approved Uses?</h2>
            <p>
              Vardenafil hydrochloride is a selective PDE5 inhibitor designed to increase blood flow
              to the penis by relaxing smooth muscles and blood vessels. It is indicated for:
            </p>
            <ul>
              <li>Erectile Dysfunction (ED) in adult men</li>
            </ul>
            <p>
              Vardenafil is not intended for use by women or children, and it does not protect
              against sexually transmitted infections (STIs).
            </p>
          </section>

          <section id="how-it-works-dosage">
            <h2><span class="emoji">⚙️</span> How It Works, Dosage & Usage</h2>
            <h3>How Vardenafil Works</h3>
            <p>
              Erections are the result of increased blood flow to the penis. During sexual
              stimulation, nitric oxide is released, stimulating the production of cyclic guanosine
              monophosphate (cGMP). Vardenafil blocks the PDE5 enzyme that breaks down cGMP,
              allowing it to accumulate and promote stronger, longer-lasting erections.
            </p>
            <p>
              <strong>Important:</strong> Sexual stimulation is still required for the medication to
              work effectively.
            </p>
            <h3>FDA-Approved Usage & Dosage</h3>
            <p>Vardenafil is available in two forms:</p>
            <ul>
              <li>Traditional oral tablets (<router-link to="/">Levitra</router-link>)</li>
              <li>
                Orally disintegrating tablets (Staxyn) – dissolves on the tongue without water
              </li>
            </ul>
            <p><strong>Recommended Dosage (Levitra):</strong></p>
            <ul>
              <li>Starting dose: 10 mg, taken about 60 minutes before sexual activity</li>
              <li>
                Adjustment range: 5 mg to 20 mg, depending on individual response and side effects
              </li>
              <li>Max frequency: Once per day</li>
            </ul>
            <p><strong>Staxyn (ODT) Specifics:</strong></p>
            <ul>
              <li>Available only as 10 mg</li>
              <li>Should not be taken with other vardenafil products</li>
              <li>Should not be swallowed whole — allow to dissolve completely on the tongue</li>
            </ul>
            <h3>Onset and Duration</h3>
            <ul>
              <li>Onset of action: ~30 to 60 minutes</li>
              <li>Duration: Effects may last up to 4–5 hours</li>
            </ul>
            <p>
              <strong>Food interactions:</strong> High-fat meals may delay the drug's onset, so it
              is best taken on an empty stomach or with a light meal
            </p>
          </section>

          <section id="warnings-side-effects">
            <h2><span class="emoji">⚠️</span> Warnings, Interactions & Side Effects</h2>
            <h3>FDA Warnings and Precautions</h3>
            <p>
              The FDA advises several precautions for vardenafil use. You should not take vardenafil
              if you:
            </p>
            <ul>
              <li>Use nitrates (for chest pain or heart problems)</li>
              <li>Take riociguat (Adempas), used to treat PAH</li>
              <li>Have had recent heart attack, stroke, or serious arrhythmias</li>
              <li>Have severe liver or kidney impairment</li>
              <li>Have a history of retinitis pigmentosa or other inherited eye diseases</li>
            </ul>
            <p>
              Always talk to your doctor before using vardenafil, especially if you have
              cardiovascular conditions.
            </p>
            <h3>Drug Interactions</h3>
            <p>
              Vardenafil can interact with a variety of drugs. Some important interactions include:
            </p>
            <ul>
              <li>Nitrates – can cause a dangerous drop in blood pressure</li>
              <li>Alpha-blockers – may cause symptomatic hypotension</li>
              <li>
                CYP3A4 inhibitors – (e.g., ketoconazole, erythromycin, ritonavir) can raise
                vardenafil levels in the blood
              </li>
              <li>Other PDE5 inhibitors – should not be combined</li>
            </ul>
            <p>Always disclose all medications and supplements to your healthcare provider.</p>
            <h3>Common and Serious Side Effects</h3>
            <p><strong>Common Side Effects:</strong></p>
            <ul>
              <li>Headache</li>
              <li>Flushing</li>
              <li>Stuffy or runny nose</li>
              <li>Upset stomach</li>
              <li>Dizziness</li>
              <li>Back pain</li>
            </ul>
            <p><strong>Rare but Serious Side Effects:</strong></p>
            <ul>
              <li>Sudden vision or hearing loss</li>
              <li>Priapism (erection lasting more than 4 hours)</li>
              <li>Chest pain</li>
              <li>Swelling in the hands, ankles, or feet</li>
              <li>Shortness of breath</li>
            </ul>
            <p>If any of these occur, seek medical help immediately.</p>
          </section>

          <section id="comparison-conclusion">
            <h2><span class="emoji">🧬</span> Comparison, Storage & Conclusion</h2>
            <h3>How Vardenafil Compares to Other ED Medications</h3>
            <div class="comparison-table-container">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>
                      <router-link to="/">Vardenafil (Levitra)</router-link>
                    </th>
                    <th>
                      <router-link to="/drugs/viagra">Sildenafil (Viagra)</router-link>
                    </th>
                    <th>
                      <router-link to="/drugs/cialis">Tadalafil (Cialis)</router-link>
                    </th>
                    <th>
                      <router-link to="/drugs/stendra">Avanafil (Stendra)</router-link>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Onset of Action</td>
                    <td>30–60 minutes</td>
                    <td>30–60 minutes</td>
                    <td>30–45 minutes</td>
                    <td>15–30 minutes</td>
                  </tr>
                  <tr>
                    <td>Duration</td>
                    <td>Up to 5 hours</td>
                    <td>4–6 hours</td>
                    <td>Up to 36 hours</td>
                    <td>Up to 6 hours</td>
                  </tr>
                  <tr>
                    <td>Food Interactions</td>
                    <td>Yes (high-fat meals delay)</td>
                    <td>Yes (delay effect)</td>
                    <td>Minimal</td>
                    <td>Minimal</td>
                  </tr>
                  <tr>
                    <td>Orally Disintegrating Form</td>
                    <td>Yes (Staxyn)</td>
                    <td>No</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>Daily Use Option</td>
                    <td>No</td>
                    <td>No</td>
                    <td>Yes</td>
                    <td>No</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Vardenafil offers a solid middle ground — faster onset than sildenafil and a
              convenient orally disintegrating option (Staxyn) for those who have difficulty
              swallowing pills.
            </p>
            <h3>Storage and Handling</h3>
            <ul>
              <li>Store vardenafil at room temperature (59°F–86°F / 15°C–30°C)</li>
              <li>Keep the tablets in their original packaging</li>
              <li>Protect from moisture and light</li>
              <li>Keep out of reach of children and pets</li>
            </ul>
            <h3>Conclusion</h3>
            <p>
              Vardenafil is a reliable, FDA-approved treatment for erectile dysfunction with a
              strong safety and efficacy record. With options like standard tablets and ODT
              (Staxyn), it provides flexibility for different user preferences. It works well for
              many men, especially those looking for a fast-acting medication that can be taken
              discreetly and as needed.
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
  { id: 'how-it-works-dosage', title: 'How It Works & Dosage' },
  { id: 'warnings-side-effects', title: 'Warnings & Side Effects' },
  { id: 'comparison-conclusion', title: 'Comparison & Conclusion' },
])

// Data for the right sidebar (DrugSidebar) - adapted for Vardenafil
const blogSidebarData = ref({
  drugStatus: null, // Placeholder
  quickSummary: null, // Placeholder
  drugImage: null, // Placeholder
  relatedResources: [
    { to: '/blog/vardenafil-generic-info', text: 'Vardenafil Generic Info' },
    { to: '/blog/managing-side-effects', text: 'Managing Side Effects' },
    { to: '/blog/lifestyle-impact', text: 'Lifestyle Factors' },
    { to: '/blog/talking-to-doctor-ed', text: 'Talking to Your Doctor' },
  ],
  similarDrugs: [
    { to: '/blog/sildenafil-generic-info', text: 'Sildenafil (Generic)' },
    { to: '/blog/tadalafil-generic-faq', text: 'Tadalafil (Generic)' },
    { to: '/blog/avanafil-patient-guide', text: 'Avanafil (Stendra)' },
  ],
  drugComparison: [
    { to: '/blog/comparing-factors', text: 'All ED Drugs Compared' },
    { to: '/compare/viagra', text: 'Compare with Viagra (Sildenafil)' },
    { to: '/compare/cialis', text: 'Compare with Cialis (Tadalafil)' },
    { to: '/compare/stendra', text: 'Compare with Stendra (Avanafil)' },
    // Removed self/Levitra comparison link as Levitra page is not specific drug page
  ],
})
</script>
  
  <style scoped>
/* Styles copied from fda-tadalafil-info.vue for consistency */
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