<template>
  <div class="cialis-comparison-page">
    <PageHeader />
    <main class="content-area">
      <!-- 比较页面侧边导航 -->
      <SideNav
        :sections="comparisonSections"
        content-selector=".comparison-main-content > .tab-content"
      />

      <!-- 主要比较内容 -->
      <article class="comparison-main-content main-content">
        <header class="drug-header">
          <h1>Levitra VS Cialis: A Detailed Analysis of Two Leading ED Medications</h1>
          <p>
            A comprehensive breakdown of the differences and strengths between
            <router-link to="/">Levitra</router-link>
            (<router-link to="/blog/vardenafil-generic-info">Vardenafil</router-link>) and
            <router-link to="/drugs/cialis">Cialis</router-link>
            (<router-link to="/blog/tadalafil-generic-faq">Tadalafil</router-link>) for treating
            <router-link to="/blog/understanding-ed">erectile dysfunction (ED)</router-link>.
          </p>
        </header>

        <!-- 比较内容区域 -->
        <section id="overview" class="tab-content">
          <h2>Overview</h2>
          <p>
            The comparison between <router-link to="/">Levitra</router-link> (<router-link
              to="/blog/vardenafil-generic-info"
              >Vardenafil</router-link
            >) and
            <router-link to="/drugs/cialis">Cialis</router-link>
            (<router-link to="/blog/tadalafil-generic-faq">Tadalafil</router-link>) revolves around
            their pharmacological profiles, clinical efficacy, and real-world applicability for
            treating
            <router-link to="/blog/understanding-ed">erectile dysfunction (ED)</router-link>.
          </p>
          <p>
            Both medications work by inhibiting the PDE5 enzyme, but differ significantly in onset
            time, duration of action, and specific patient suitability.
          </p>
        </section>
        <section id="mechanism" class="tab-content">
          <h2>Mechanism of Action and Pharmacokinetics</h2>
          <p>
            Both <router-link to="/">Levitra</router-link> and
            <router-link to="/drugs/cialis">Cialis</router-link> inhibit the PDE5 enzyme to enhance
            blood flow to the penis during sexual stimulation. However, their pharmacokinetic
            properties differ significantly:
          </p>
          <ul>
            <li>
              <strong>Levitra:</strong> Begins working within 25–60 minutes and lasts 4–6 hours.
              Suitable for planned intimacy. Absorption minimally affected by food.
            </li>
            <li>
              <strong>Cialis:</strong> Slower onset (30 minutes–2 hours) but offers a prolonged
              duration of up to 36 hours (the "weekend pill"). Supports spontaneous activity.
            </li>
          </ul>
        </section>
        <section id="onset-duration" class="tab-content">
          <h2>Onset and Duration</h2>
          <p>
            <router-link to="/">Levitra</router-link> offers a quicker onset (25-60 minutes) with a
            shorter duration (4-6 hours), ideal for planned encounters.
            <router-link to="/drugs/cialis">Cialis</router-link> has a longer onset time (30 minutes
            to 2 hours) but provides a significantly extended window of effectiveness (up to 36
            hours), allowing for more spontaneity.
          </p>
        </section>
        <section id="efficacy" class="tab-content">
          <h2>Efficacy in Specific Populations</h2>
          <p>
            <strong>Diabetic Patients:</strong> <router-link to="/">Levitra</router-link> often
            demonstrates superior efficacy in men with diabetes due to its targeted action on nitric
            oxide sensitivity.
          </p>
          <p>
            <strong>BPH Patients:</strong> <router-link to="/drugs/cialis">Cialis</router-link> is
            preferred for patients with benign prostatic hyperplasia (BPH), as it alleviates urinary
            symptoms alongside ED.
          </p>
          <p>
            <strong>Alcohol and Food Tolerance:</strong>
            <router-link to="/">Levitra</router-link> maintains efficacy with moderate alcohol
            consumption. <router-link to="/drugs/cialis">Cialis</router-link> is less affected by
            high-fat meals compared to other PDE5 inhibitors.
          </p>
        </section>
        <section id="side-effects-comparison" class="tab-content">
          <h2>Side Effects Comparison</h2>
          <p>
            Both medications share common PDE5 inhibitor side effects like headaches and flushing.
          </p>
          <ul>
            <li>
              <strong>Levitra:</strong> Associated with a higher risk of muscle pain and visual
              disturbances (e.g., blue-tinted vision).
            </li>
            <li>
              <strong>Cialis:</strong> More frequently causes indigestion but has fewer reports of
              vision-related issues.
            </li>
          </ul>
          <p>
            <strong>Contraindications:</strong> Both drugs are strictly contraindicated with
            nitrates (e.g., nitroglycerin) due to risks of severe hypotension. Learn more about
            <router-link to="/blog/managing-side-effects">managing side effects</router-link>.
          </p>
        </section>
        <section id="dosage" class="tab-content">
          <h2>Dosage and Administration</h2>
          <p>
            Dosage and administration differ based on the drug and patient needs. Levitra is
            typically taken as needed before sexual activity. Cialis offers both as-needed and
            low-dose daily options.
          </p>
          <!-- Specific dosage details would require more info or linking -->
        </section>
        <section id="cost" class="tab-content">
          <h2>Market Positioning and Accessibility (Cost)</h2>
          <p>
            <strong>Levitra's Market Challenges:</strong> Faced declining market share due to
            generic competition (<router-link to="/blog/vardenafil-generic-info"
              >Vardenafil</router-link
            >) and limited innovation. Generic prices can be very low (e.g., $0.5–$1 per dose in
            some markets).
          </p>
          <p>
            <strong>Cialis's Strategic Edge:</strong> Emphasized longevity, capturing a large market
            share. Even generic
            <router-link to="/blog/tadalafil-generic-faq">Tadalafil</router-link> remains pricier
            ($1.5–$3 per dose) due to sustained demand for its 36-hour window. Explore options for
            <router-link to="/blog/saving-on-ed-meds">saving on medication costs</router-link>.
          </p>
        </section>
        <section id="interactions" class="tab-content">
          <h2>Clinical Preferences and Future Trends (Interactions & Use)</h2>
          <p>
            <strong>Physician Recommendations:</strong> <router-link to="/">Levitra</router-link> is
            often favored for quick results and compatibility with mild liver impairment.
            <router-link to="/drugs/cialis">Cialis</router-link> is ideal for patients prioritizing
            flexibility or managing BPH-related urinary issues.
          </p>
          <p>
            <strong>Innovations & Interactions:</strong> Cialis is increasingly used in combination
            therapies (e.g., with Dapoxetine) and telemedicine. Both have significant interactions,
            most notably with nitrates. Always consult a healthcare provider.
          </p>
          <p>
            <strong>Conclusion:</strong> The choice between
            <router-link to="/">Levitra</router-link> and
            <router-link to="/drugs/cialis">Cialis</router-link> hinges on balancing immediacy,
            duration, and patient-specific needs. Always
            <router-link to="/blog/talking-to-doctor-ed">consult a healthcare provider</router-link>
            to determine the optimal choice.
          </p>
        </section>
      </article>

      <!-- 右侧边栏 -->
      <DrugSidebar :sidebarData="cialisComparisonSidebarData" />
    </main>
    <PageFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageHeader from '../../components/PageHeader.vue'
import PageFooter from '../../components/PageFooter.vue'
import SideNav from '../../components/SideNav.vue'
import DrugSidebar from '../../components/DrugSidebar.vue' // 引入 DrugSidebar

// 定义比较页面的导航项数据
const comparisonSections = ref([
  { id: 'overview', title: 'Overview' },
  { id: 'mechanism', title: 'Mechanism & Pharmacokinetics' },
  { id: 'onset-duration', title: 'Onset and Duration' },
  { id: 'efficacy', title: 'Efficacy (Specific Pops)' },
  { id: 'side-effects-comparison', title: 'Side Effects Comparison' },
  { id: 'dosage', title: 'Dosage & Administration' },
  { id: 'cost', title: 'Cost & Market Position' },
  { id: 'interactions', title: 'Clinical Preferences & Use' },
])

// 定义比较页面的右侧边栏内容数据 (占位符)
const cialisComparisonSidebarData = ref({
  drugStatus: {
    // Placeholder - maybe show status for both?
    availability: { text: 'Both Prescription', statusClass: '' },
    approvalHistory: 'Levitra (2003), Cialis (2003)',
  },
  quickSummary: {
    // Placeholder - key comparison points
    formsStrengths: 'Levitra: Tablets (5-20mg), ODT. Cialis: Tablets (2.5-20mg)',
    reminders: [
      'Compare onset/duration carefully.',
      'Discuss side effect profiles with doctor.',
      'Consider daily vs. on-demand use.',
    ],
  },
  // No specific drug image for comparison page, or use a generic one
  // drugImage: { src: '/images/comparison.jpg', alt: 'Comparison image' },
  relatedResources: [
    { text: 'Factors to Consider When Comparing ED Drugs', to: '/blog/comparing-factors' },
    { text: 'Understanding Side Effect Profiles', to: '/blog/side-effect-profiles' },
    { text: 'Lifestyle Impacts on ED Treatment Success', to: '/blog/lifestyle-impact' },
    { text: 'When to Talk to Your Doctor About Switching Meds', to: '/blog/switching-meds' },
  ],
  // similarDrugs and drugComparison might not be relevant here, or could link elsewhere
})
</script>

<style scoped>
/* Layout adjustments for three columns */
.content-area {
  display: flex;
  padding: 2rem;
  gap: 2rem;
  max-width: 1400px; /* Wider max-width for three columns */
  margin: 0 auto;
}

/* Adjust flex ratios */
.main-content {
  flex: 4; /* Give main content more space */
}

/* Import sidebar styles - assuming DrugSidebar brings its own needed styles */
/* If DrugSidebar doesn't include structure styles, copy from IndexView */
.sidebar {
  flex: 1.5; /* Keep sidebar ratio or adjust as needed */
  /* Copy relevant styles from IndexView.vue's .sidebar if needed */
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  height: fit-content;
}

/* Styles for content sections (copied & adjusted from IndexView) */
.tab-content {
  scroll-margin-top: 100px; /* Adjust if header height changes */
  line-height: 1.7;
  padding-top: 1rem;
  margin-bottom: 1.5rem;
}

.tab-content h2 {
  margin-bottom: 1rem;
  margin-top: 2rem;
  color: #343a40;
  font-size: 1.6rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}
.main-content > .tab-content:first-of-type h2 {
  margin-top: 0;
}

.drug-header {
  margin-bottom: 2rem;
}
.drug-header h1 {
  margin-bottom: 0.5rem;
}
.drug-header p {
  margin-bottom: 0.3rem;
  color: #6c757d;
}

/* Placeholder for comparison table styles */
/* table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}
th, td {
  border: 1px solid #dee2e6;
  padding: 0.8rem;
  text-align: left;
}
th {
  background-color: #f1f3f5;
} */

/* Add styles for lists if needed */
ul {
  list-style: disc;
  margin-left: 20px;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}
li {
  margin-bottom: 0.5rem;
}

/* Optional: Add styles for inline links if needed */
.main-content a {
  color: #007bff; /* Match sidebar link color */
  text-decoration: none;
}

.main-content a:hover {
  text-decoration: underline;
}
</style>