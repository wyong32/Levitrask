<template>
  <div class="viagra-comparison-page">
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
          <h1>Levitra VS Viagra: A Comprehensive Comparison of ED Medications</h1>
          <p>
            When addressing erectile dysfunction (ED), Levitra VS Viagra remains a pivotal
            discussion. Both medications belong to the PDE5 inhibitor class but exhibit distinct
            characteristics.
          </p>
        </header>

        <!-- 比较内容区域 -->
        <section id="overview" class="tab-content">
          <h2>Overview & Introduction</h2>
          <p>
            When addressing erectile dysfunction (ED), the comparison between Levitra VS Viagra is
            crucial. Both are PDE5 inhibitors but differ in efficacy, onset, duration, and side
            effects.
          </p>
        </section>
        <section id="mechanism" class="tab-content">
          <h2>Mechanism of Action</h2>
          <p>
            Levitra (Vardenafil) and Viagra (Sildenafil) both inhibit the PDE5 enzyme, enhancing
            nitric oxide's effects to improve penile blood flow during sexual stimulation.
          </p>
          <p>
            Subtle differences exist: Levitra's structure allows better absorption with food, while
            Viagra's efficacy may decrease with high-fat meals. Levitra often has a faster onset
            (25–60 minutes) compared to Viagra (30–60 minutes).
          </p>
        </section>
        <section id="efficacy-duration" class="tab-content">
          <h2>Efficacy and Duration</h2>
          <p>Levitra VS Viagra trials show varied patient responses:</p>
          <ul>
            <li>
              <strong>Duration:</strong> Both last 4–6 hours. Viagra's effects may peak earlier
              (around 1 hour). Levitra's sustained action can be beneficial.
            </li>
            <li>
              <strong>Hardness:</strong> Viagra is sometimes associated with higher rigidity in
              studies.
            </li>
            <li><strong>Diabetic Patients:</strong> Levitra often excels in diabetic patients.</li>
            <li>
              <strong>Alcohol Tolerance:</strong> Levitra maintains efficacy with moderate alcohol,
              unlike Viagra.
            </li>
          </ul>
        </section>
        <section id="side-effects" class="tab-content">
          <h2>Side Effects and Safety</h2>
          <p>
            Levitra VS Viagra share common side effects (headaches, flushing), but differences
            include:
          </p>
          <ul>
            <li>
              <strong>Viagra:</strong> Higher risk of visual disturbances (e.g., blue-tinted
              vision).
            </li>
            <li><strong>Levitra:</strong> More reports of muscle pain and back discomfort.</li>
          </ul>
          <p>
            <strong>Contraindications:</strong> Both interact dangerously with nitrates. Viagra's
            cardiovascular warnings might be slightly more pronounced in some guidelines.
          </p>
        </section>
        <section id="suitability" class="tab-content">
          <h2>Patient Suitability</h2>
          <p>Levitra VS Viagra caters to different needs:</p>
          <ul>
            <li>
              <strong>Levitra:</strong> Preferred for potentially faster onset, compatibility with
              meals, and often for diabetics.
            </li>
            <li>
              <strong>Viagra:</strong> Favored for severe ED cases potentially requiring higher
              doses (50–100 mg).
            </li>
          </ul>
        </section>
        <section id="market-cost" class="tab-content">
          <h2>Market Trends and Accessibility (Cost)</h2>
          <p>Levitra VS Viagra face shifting dynamics:</p>
          <ul>
            <li>
              <strong>Cost:</strong> Generics for both are available and affordable. Sildenafil
              (generic Viagra) often costs less than $5 per pill. Vardenafil (generic Levitra) is
              similarly priced.
            </li>
            <li>
              <strong>Market Share:</strong> Viagra historically led, but generics and newer Levitra
              formulations (like Staxyn) have impacted the market.
            </li>
          </ul>
        </section>
        <section id="clinical-preference" class="tab-content">
          <h2>Clinical Preferences & Conclusion</h2>
          <p>Physicians weigh Levitra VS Viagra based on:</p>
          <ul>
            <li>
              <strong>Lifestyle:</strong> Levitra for flexibility/spontaneity; Viagra for planned
              intimacy.
            </li>
            <li><strong>Comorbidities:</strong> Levitra's noted efficacy in diabetics.</li>
          </ul>
          <p>
            <strong>Conclusion:</strong> The Levitra VS Viagra debate highlights the need for
            personalized ED treatment. While Viagra has a long legacy, Levitra offers flexibility.
            With affordable generics, both remain vital options. Always consult a healthcare
            provider.
          </p>
        </section>
      </article>

      <!-- 右侧边栏 -->
      <DrugSidebar :sidebarData="viagraComparisonSidebarData" />
    </main>
    <PageFooter />
  </div>
</template>

<script setup>
import PageHeader from '../../components/PageHeader.vue'
import PageFooter from '../../components/PageFooter.vue'
import { ref } from 'vue'
import SideNav from '../../components/SideNav.vue'
import DrugSidebar from '../../components/DrugSidebar.vue'

// 定义比较页面的导航项数据 (Updated Titles & IDs)
const comparisonSections = ref([
  { id: 'overview', title: 'Overview & Intro' },
  { id: 'mechanism', title: 'Mechanism of Action' },
  { id: 'efficacy-duration', title: 'Efficacy & Duration' }, // Combined
  { id: 'side-effects', title: 'Side Effects & Safety' }, // Combined
  { id: 'suitability', title: 'Patient Suitability' },
  { id: 'market-cost', title: 'Market & Cost' }, // Combined
  { id: 'clinical-preference', title: 'Clinical Preference & Conclusion' }, // Combined
])

// 定义比较页面的右侧边栏内容数据 (占位符)
const viagraComparisonSidebarData = ref({
  drugStatus: {
    availability: { text: 'Both Prescription', statusClass: '' },
    approvalHistory: 'Viagra (1998), Levitra (2003)', // Updated approval year
  },
  quickSummary: {
    formsStrengths: 'Levitra: Tabs (5-20mg), ODT. Viagra: Tabs (25-100mg)',
    reminders: [
      'Viagra pioneered ED treatment.',
      'Compare side effect profiles (vision vs. muscle pain).',
      'Generic Sildenafil often cheapest.',
    ],
  },
  // drugImage: { src: '/images/comparison.jpg', alt: 'Comparison image' },
  relatedResources: [
    { text: 'Factors to Consider When Comparing ED Drugs', to: '/blog/comparing-factors' },
    { text: 'Understanding Side Effect Profiles', to: '/blog/side-effect-profiles' },
    { text: 'Lifestyle Impacts on ED Treatment Success', to: '/blog/lifestyle-impact' },
    { text: 'When to Talk to Your Doctor About Switching Meds', to: '/blog/switching-meds' },
  ],
})
</script>

<style scoped>
/* Styles copied from StendraComparison.vue for consistency */
.content-area {
  display: flex;
  padding: 2rem;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.main-content {
  flex: 4;
}

.sidebar {
  flex: 1.5;
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  height: fit-content;
}

.tab-content {
  scroll-margin-top: 100px;
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

ul {
  list-style: disc;
  margin-left: 20px;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}
li {
  margin-bottom: 0.5rem;
}
</style>