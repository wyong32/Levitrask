<template>
  <div class="stendra-comparison-page">
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
          <h1>Levitra vs Stendra: Optimized Comparison for SEO and Patient Clarity</h1>
          <p>
            The choice between Levitra vs Stendra is essential for individuals managing erectile
            dysfunction (ED). Both medications offer distinct advantages and limitations.
          </p>
        </header>

        <!-- 比较内容区域 -->
        <section id="overview" class="tab-content">
          <h2>Introduction</h2>
          <p>
            The choice between Levitra vs Stendra is essential for individuals managing erectile
            dysfunction (ED). Both medications offer distinct advantages and limitations, depending
            on patient health, lifestyle, and therapeutic goals. Let's explore key differences
            across pharmacology, efficacy, safety, cost, and clinical use.
          </p>
        </section>
        <section id="mechanism" class="tab-content">
          <h2>Pharmacokinetics: Levitra vs Stendra</h2>
          <p>Understanding pharmacokinetics is foundational in the Levitra vs Stendra debate.</p>
          <ul>
            <li>
              <strong>Levitra (Vardenafil):</strong> Typically takes 25–60 minutes to take effect
              and lasts 4–6 hours. Absorption can be slowed when taken with high-fat meals.
            </li>
            <li>
              <strong>Stendra (Avanafil):</strong> Activates more rapidly—within 15–30 minutes.
              Action also lasts up to 6 hours, and it is unaffected by food.
            </li>
          </ul>
          <p>
            When evaluating Levitra vs Stendra, patients seeking predictability may favor Levitra,
            while those who prioritize spontaneity may lean toward Stendra.
          </p>
        </section>
        <section id="onset-duration" class="tab-content">
          <h2>Onset and Duration Detail</h2>
          <p>
            Levitra's onset is 25-60 minutes with a 4-6 hour duration. Stendra boasts a faster onset
            of 15-30 minutes with a similar duration of up to 6 hours, making it ideal for
            spontaneous intimacy.
          </p>
        </section>
        <section id="efficacy" class="tab-content">
          <h2>Efficacy: Levitra vs Stendra</h2>
          <p>
            In comparing Levitra vs Stendra effectiveness, underlying conditions must be considered:
          </p>
          <ul>
            <li>
              <strong>Diabetic patients:</strong> Often report better results with Levitra, due to
              its superior impact on nitric oxide pathways.
            </li>
            <li>
              <strong>Stendra:</strong> While generally effective, has less targeted research in
              diabetic cohorts.
            </li>
          </ul>
          <p>In cardiovascular contexts:</p>
          <ul>
            <li>
              <strong>Levitra:</strong> Requires caution with uncontrolled hypertension or other
              cardiovascular issues.
            </li>
            <li>
              <strong>Stendra:</strong> Has a lower risk of hypotension due to its shorter systemic
              half-life.
            </li>
          </ul>
          <p>
            Ultimately, Levitra vs Stendra effectiveness is tied to a patient's comorbidities and
            desired response time.
          </p>
        </section>
        <section id="side-effects-comparison" class="tab-content">
          <h2>Side Effects: Levitra vs Stendra</h2>
          <p>When comparing side effects in the Levitra vs Stendra discussion:</p>
          <ul>
            <li>
              <strong>Levitra:</strong> Commonly causes headaches (15%), flushing, and occasional
              blue-tinged vision. Avoid in patients with visual disorders.
            </li>
            <li>
              <strong>Stendra:</strong> Reports slightly more headaches (18%) but fewer visual
              disturbances. Suitable for those with pre-existing eye conditions.
            </li>
          </ul>
          <p>
            <strong>Contraindication:</strong> For both Levitra vs Stendra, taking nitrates is
            contraindicated due to the risk of severe blood pressure drops.
          </p>
        </section>
        <section id="dosage" class="tab-content">
          <h2>Dosage Comparison</h2>
          <p>
            Levitra is available in 10 mg doses, adjustable between 5–20 mg. Stendra comes in 100 mg
            tablets, adjustable between 50–200 mg.
          </p>
        </section>
        <section id="cost" class="tab-content">
          <h2>Cost Comparison</h2>
          <p>
            Levitra generics are widely available, cost per pill is around $5–10. Stendra branded
            versions cost $20–30, though generics are emerging.
          </p>
          <p>
            Thus, Levitra vs Stendra represents a balance between budget and convenience, with
            Levitra offering cost-effectiveness and Stendra excelling in speed.
          </p>
        </section>
        <section id="clinical-use" class="tab-content">
          <h2>Clinical Use: Levitra vs Stendra</h2>
          <p>Clinical guidelines for Levitra vs Stendra suggest:</p>
          <p><strong>Choose Levitra if:</strong></p>
          <ul>
            <li>You require a more affordable option.</li>
            <li>You have diabetes-associated ED.</li>
            <li>You prefer a more structured intimacy plan.</li>
          </ul>
          <p><strong>Choose Stendra if:</strong></p>
          <ul>
            <li>You seek quick, spontaneous response.</li>
            <li>You have mild liver impairment or prefer fewer visual side effects.</li>
          </ul>
          <p>
            Both drugs continue to be explored in combination therapies. Stendra is being tested
            with shockwave therapy, while Levitra is often integrated into psychosexual counseling
            for psychogenic ED.
          </p>
          <p>
            <strong>Conclusion:</strong> The Levitra vs Stendra decision involves more than just
            speed—it's about lifestyle compatibility, health conditions, and budget. For
            personalized advice on Levitra vs Stendra, consult a qualified healthcare provider.
          </p>
        </section>
      </article>

      <!-- 右侧边栏 -->
      <DrugSidebar :sidebarData="stendraComparisonSidebarData" />
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

// 定义比较页面的导航项数据
const comparisonSections = ref([
  { id: 'overview', title: 'Introduction' },
  { id: 'mechanism', title: 'Pharmacokinetics' },
  { id: 'onset-duration', title: 'Onset & Duration Detail' },
  { id: 'efficacy', title: 'Efficacy Comparison' },
  { id: 'side-effects-comparison', title: 'Side Effects Comparison' },
  { id: 'dosage', title: 'Dosage Comparison' },
  { id: 'cost', title: 'Cost Comparison' },
  { id: 'clinical-use', title: 'Clinical Use' },
])

// 定义比较页面的右侧边栏内容数据 (占位符)
const stendraComparisonSidebarData = ref({
  drugStatus: {
    availability: { text: 'Both Prescription', statusClass: '' },
    approvalHistory: 'Levitra (2003), Stendra (2012)',
  },
  quickSummary: {
    formsStrengths: 'Levitra: Tabs (5-20mg), ODT. Stendra: Tabs (50-200mg)',
    reminders: [
      'Stendra may have faster onset.',
      'Compare side effect profiles (selectivity).',
      'Consider cost and generic availability.',
    ],
  },
  relatedResources: [
    { text: 'Factors to Consider When Comparing ED Drugs', to: '/blog/comparing-factors' },
    { text: 'Understanding Side Effect Profiles', to: '/blog/side-effect-profiles' },
    { text: 'Lifestyle Impacts on ED Treatment Success', to: '/blog/lifestyle-impact' },
    { text: 'When to Talk to Your Doctor About Switching Meds', to: '/blog/switching-meds' },
  ],
})
</script>

<style scoped>
/* Styles copied from CialisComparison.vue for consistency */
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