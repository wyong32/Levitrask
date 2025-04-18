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
          <!-- Keep Original H1 -->
          <h1>FDA Drug Information: Sildenafil</h1>
          <p class="post-meta">Published on: [Date Placeholder]</p>
        </header>
        <hr />
        <div class="post-body">
          <p>
            Sildenafil, widely recognized under the brand name
            <router-link to="/drugs/viagra">Viagra</router-link>, is a prescription medication
            approved by the U.S. Food and Drug Administration (FDA) for the treatment of erectile
            dysfunction (ED) in men and pulmonary arterial hypertension (PAH) under the brand name
            Revatio. It was the first oral medication of its kind and has become one of the most
            well-known and widely used treatments for ED around the world.
          </p>
          <p>
            This blog explores key FDA-approved information about sildenafil, including how it
            works, dosing guidelines, side effects, safety considerations, and how it compares to
            similar medications.
          </p>

          <section id="introduction-uses">
            <h2><span class="emoji">🔍</span> What Is Sildenafil & Approved Uses?</h2>
            <p>
              Sildenafil citrate is a drug that belongs to a class of medications known as
              phosphodiesterase type 5 (PDE5) inhibitors. It works by increasing blood flow to
              specific areas of the body by relaxing blood vessels.
            </p>
            <p><strong>FDA-Approved Uses:</strong></p>
            <ul>
              <li>
                <strong><router-link to="/drugs/viagra">Viagra</router-link>:</strong> For the
                treatment of erectile dysfunction (ED) in adult men.
              </li>
              <li>
                <strong>Revatio:</strong> For the treatment of pulmonary arterial hypertension (PAH)
                to improve exercise ability in men and women.
              </li>
            </ul>
            <p>
              While both versions contain the same active ingredient, they are prescribed and dosed
              differently based on the condition being treated.
            </p>
          </section>

          <section id="how-it-works-dosage">
            <h2><span class="emoji">⚙️</span> How It Works, Dosage & Administration</h2>
            <h3>How Sildenafil Works</h3>
            <p>
              Sildenafil helps treat erectile dysfunction by blocking the PDE5 enzyme, which breaks
              down cyclic guanosine monophosphate (cGMP) — a substance that helps relax smooth
              muscle tissue. Higher levels of cGMP allow increased blood flow to the penis, which is
              essential for achieving and maintaining an erection in response to sexual stimulation.
            </p>
            <p>
              In PAH, sildenafil works similarly by relaxing the blood vessels in the lungs,
              allowing blood to flow more easily and reducing the workload on the heart.
            </p>
            <h3>Onset and Duration</h3>
            <p>For ED treatment:</p>
            <ul>
              <li>Onset of action: 30 to 60 minutes</li>
              <li>Duration: Effects may last up to 4–6 hours</li>
            </ul>
            <p>
              Sexual stimulation is still required for sildenafil to work; the drug does not cause
              spontaneous erections.
            </p>
            <h3>Dosing and Administration</h3>
            <p><strong>For Erectile Dysfunction (Viagra):</strong></p>
            <ul>
              <li>
                Standard starting dose: 50 mg, taken as needed, approximately 1 hour before sexual
                activity
              </li>
              <li>Dose range: 25 mg to 100 mg depending on effectiveness and tolerance</li>
              <li>Frequency: Do not exceed 1 dose in 24 hours</li>
            </ul>
            <p>
              Sildenafil can be taken with or without food, but high-fat meals may slow down
              absorption and reduce its effectiveness.
            </p>
            <p><strong>For Pulmonary Arterial Hypertension (Revatio):</strong></p>
            <ul>
              <li>Recommended dose: 20 mg three times a day, taken 4–6 hours apart</li>
              <li>Form: Available as tablets, oral suspension, and injection</li>
            </ul>
          </section>

          <section id="warnings-side-effects">
            <h2><span class="emoji">⚠️</span> Warnings, Interactions & Side Effects</h2>
            <h3>FDA Warnings and Precautions</h3>
            <p>
              Before starting sildenafil, the FDA recommends evaluating certain risk factors. Do not
              take sildenafil if you:
            </p>
            <ul>
              <li>
                Are taking nitrates (e.g., nitroglycerin) for chest pain — this combination can
                cause a dangerous drop in blood pressure
              </li>
              <li>Have been advised to avoid sexual activity due to heart disease</li>
              <li>Are taking riociguat (Adempas), a drug for pulmonary hypertension</li>
            </ul>
            <p>Use with caution if you have:</p>
            <ul>
              <li>Cardiovascular conditions (e.g., recent heart attack or stroke)</li>
              <li>Retinal disorders such as retinitis pigmentosa</li>
              <li>Kidney or liver impairment</li>
              <li>Bleeding disorders</li>
              <li>Stomach ulcers</li>
            </ul>
            <h3>Drug Interactions</h3>
            <p>Sildenafil interacts with several medications, including:</p>
            <ul>
              <li>Nitrates</li>
              <li>Alpha-blockers</li>
              <li>CYP3A4 inhibitors (e.g., ketoconazole, erythromycin)</li>
              <li>HIV protease inhibitors</li>
              <li>Other PDE5 inhibitors</li>
            </ul>
            <p>
              Tell your healthcare provider about all medications and supplements you are taking
              before starting sildenafil.
            </p>
            <h3>Common Side Effects</h3>
            <p>
              According to the FDA, the most commonly reported side effects of sildenafil for ED
              include:
            </p>
            <ul>
              <li>Headache</li>
              <li>Flushing</li>
              <li>Upset stomach</li>
              <li>Nasal congestion</li>
              <li>Back or muscle pain</li>
              <li>Dizziness</li>
              <li>Vision changes (blue-tinted vision or sensitivity to light)</li>
            </ul>
            <p>
              Most side effects are mild and temporary. Seek immediate medical attention if you
              experience:
            </p>
            <ul>
              <li>Sudden vision or hearing loss</li>
              <li>Chest pain or irregular heartbeat</li>
              <li>Shortness of breath</li>
              <li>Erection lasting more than 4 hours (priapism)</li>
            </ul>
          </section>

          <section id="comparison-conclusion">
            <h2><span class="emoji">🧬</span> Comparison, Storage & Conclusion</h2>
            <h3>Comparing Sildenafil with Other ED Medications</h3>
            <div class="comparison-table-container">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>
                      <router-link to="/drugs/viagra">Sildenafil (Viagra)</router-link>
                    </th>
                    <th>
                      <router-link to="/drugs/cialis">Tadalafil (Cialis)</router-link>
                    </th>
                    <th>
                      <router-link to="/">Vardenafil (Levitra)</router-link>
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
                    <td>30–45 minutes</td>
                    <td>30–60 minutes</td>
                    <td>15–30 minutes</td>
                  </tr>
                  <tr>
                    <td>Duration</td>
                    <td>4–6 hours</td>
                    <td>Up to 36 hours</td>
                    <td>4–6 hours</td>
                    <td>Up to 6 hours</td>
                  </tr>
                  <tr>
                    <td>Food Interaction</td>
                    <td>May delay effect</td>
                    <td>Minimal</td>
                    <td>May delay effect</td>
                    <td>Minimal</td>
                  </tr>
                  <tr>
                    <td>Approved for PAH</td>
                    <td>Yes (as Revatio)</td>
                    <td>No</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Sildenafil remains a popular choice due to its proven track record, availability in
              generic form, and affordability, but newer alternatives offer advantages in terms of
              duration or speed of action.
            </p>
            <h3>Storage and Handling</h3>
            <ul>
              <li>Store at room temperature (68°F–77°F / 20°C–25°C)</li>
              <li>Protect from moisture, heat, and direct light</li>
              <li>Keep out of reach of children and pets</li>
            </ul>
            <h3>Conclusion</h3>
            <p>
              Sildenafil is a powerful and widely trusted medication for treating erectile
              dysfunction and pulmonary arterial hypertension. Since its FDA approval in 1998, it
              has helped millions of people improve their quality of life and regain confidence.
            </p>
            <p>
              While highly effective, sildenafil is not suitable for everyone. It's essential to
              speak with a healthcare provider to determine whether it's safe and appropriate for
              you—especially if you have underlying health conditions or are taking other
              medications.
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

// Data for the right sidebar (DrugSidebar) - kept generic for now
const blogSidebarData = ref({
  drugStatus: null,
  quickSummary: null,
  drugImage: null,
  relatedResources: [
    { to: '/blog/sildenafil-generic-info', text: 'Sildenafil Generic Info' },
    { to: '/blog/managing-side-effects', text: 'Managing Side Effects' },
    { to: '/blog/lifestyle-impact', text: 'Lifestyle Factors' },
    { to: '/blog/talking-to-doctor-ed', text: 'Talking to Your Doctor' },
  ],
  similarDrugs: [
    // Consider making this context-aware later if needed
    { to: '/blog/vardenafil-generic-info', text: 'Vardenafil (Generic)' },
    { to: '/blog/tadalafil-generic-faq', text: 'Tadalafil (Generic)' },
    { to: '/blog/avanafil-patient-guide', text: 'Avanafil (Stendra)' },
  ],
  drugComparison: [
    { to: '/blog/comparing-factors', text: 'All ED Drugs Compared' },
    { to: '/compare/cialis', text: 'Compare with Cialis (Tadalafil)' },
    { to: '/compare/stendra', text: 'Compare with Stendra (Avanafil)' },
  ],
})
</script>

<style scoped>
/* Styles copied from VardenafilGenericInfo.vue */
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