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
          <h1>Lifestyle Factors Impacting Erectile Dysfunction</h1>
          <p class="post-meta">Published on: [Date Placeholder]</p>
        </header>
        <hr />
        <div class="post-body">
          <p>
            Erectile dysfunction (ED) is often perceived as a purely medical issue, but in reality,
            lifestyle choices can play a major role in both its development and its management.
            While medications like
            <router-link to="/drugs/viagra">sildenafil (Viagra)</router-link>,
            <router-link to="/drugs/cialis">tadalafil (Cialis)</router-link>, and
            <router-link to="/">vardenafil (Levitra)</router-link> offer effective treatment
            options, addressing underlying lifestyle factors can significantly improve outcomes —
            and sometimes even eliminate the need for medication altogether.
          </p>
          <p>
            In this blog, we'll explore the most common lifestyle factors that contribute to ED and
            provide practical tips for improving sexual health naturally.
          </p>

          <section id="mental-health">
            <h2><span class="emoji">🧠</span> 1. Mental Health and Stress</h2>
            <p>
              Your brain plays a critical role in triggering the physical processes that lead to an
              erection. Stress, anxiety, and depression can all interfere with this, resulting in
              performance issues or loss of sexual desire.
            </p>
            <p><strong>What you can do:</strong></p>
            <ul>
              <li>Consider therapy or counseling if you're dealing with emotional challenges</li>
              <li>Practice stress reduction techniques like mindfulness, meditation, or yoga</li>
              <li>Maintain open communication with your partner</li>
            </ul>
          </section>

          <section id="smoking">
            <h2><span class="emoji">🚬</span> 2. Smoking and Tobacco Use</h2>
            <p>
              Smoking damages blood vessels, reducing blood flow throughout the body — including to
              the penis. It's one of the most well-established lifestyle causes of ED.
            </p>
            <p><strong>What you can do:</strong></p>
            <ul>
              <li>
                Quit smoking with the help of nicotine replacement therapy or support programs
              </li>
              <li>Avoid secondhand smoke, which may also have vascular effects</li>
              <li>
                Replace smoking with healthier habits like walking or deep-breathing exercises
              </li>
            </ul>
          </section>

          <section id="alcohol">
            <h2><span class="emoji">🍺</span> 3. Excessive Alcohol Consumption</h2>
            <p>
              While a drink or two may help lower inhibitions, excessive or chronic alcohol use can
              impair nerve function, disrupt hormone levels, and damage blood vessels — all key
              players in healthy erectile function.
            </p>
            <p><strong>What you can do:</strong></p>
            <ul>
              <li>Limit alcohol intake to no more than 2 drinks per day (and ideally fewer)</li>
              <li>
                Take regular breaks from alcohol to assess its effect on your mood, sleep, and sex
                life
              </li>
            </ul>
          </section>

          <section id="diet">
            <h2><span class="emoji">🍔</span> 4. Poor Diet</h2>
            <p>
              A diet high in processed foods, saturated fats, and refined sugars contributes to
              obesity, diabetes, and high blood pressure — all of which are risk factors for ED.
              Poor nutrition also impacts testosterone production and energy levels.
            </p>
            <p><strong>What you can do:</strong></p>
            <ul>
              <li>
                Focus on heart-healthy foods: leafy greens, whole grains, lean proteins, nuts, and
                berries
              </li>
              <li>
                Consider the Mediterranean diet, which is linked to improved cardiovascular and
                sexual health
              </li>
              <li>Stay hydrated and limit sugary drinks</li>
            </ul>
          </section>

          <section id="sleep">
            <h2><span class="emoji">💤</span> 5. Lack of Sleep</h2>
            <p>
              Sleep plays a key role in hormone regulation — including testosterone, which supports
              libido and erectile function. Chronic sleep deprivation can lead to lower sexual
              desire and impaired erections.
            </p>
            <p><strong>What you can do:</strong></p>
            <ul>
              <li>Aim for 7–9 hours of quality sleep per night</li>
              <li>Establish a consistent bedtime routine</li>
              <li>Reduce screen time and caffeine in the evening</li>
            </ul>
          </section>

          <section id="inactivity">
            <h2><span class="emoji">🏋️‍♂️</span> 6. Physical Inactivity</h2>
            <p>
              A sedentary lifestyle contributes to weight gain, poor circulation, and low energy —
              all of which negatively impact erectile function. Regular physical activity improves
              blood flow, hormone balance, and mood.
            </p>
            <p><strong>What you can do:</strong></p>
            <ul>
              <li>Aim for 30 minutes of moderate activity at least 5 days per week</li>
              <li>
                Include aerobic exercises (like walking, cycling, or swimming) and strength training
              </li>
              <li>Even small changes like taking the stairs can make a big difference</li>
            </ul>
          </section>

          <section id="obesity">
            <h2><span class="emoji">⚖️</span> 7. Obesity</h2>
            <p>
              Carrying excess weight, especially around the abdomen, increases the risk of ED by
              promoting inflammation, hormonal imbalance, and vascular damage. Obesity is also
              closely linked to conditions like type 2 diabetes, which independently contribute to
              ED.
            </p>
            <p><strong>What you can do:</strong></p>
            <ul>
              <li>
                Focus on sustainable weight loss through balanced nutrition and regular exercise
              </li>
              <li>
                Set realistic goals — even a 5–10% weight reduction can significantly improve
                symptoms
              </li>
              <li>Consult a dietitian or weight management specialist if needed</li>
            </ul>
          </section>

          <section id="medication-use">
            <h2><span class="emoji">💉</span> 8. Medication and Substance Use</h2>
            <p>
              Some prescription medications, recreational drugs, and even over-the-counter
              substances can interfere with sexual function. These include antidepressants, blood
              pressure drugs, antihistamines, and illicit drugs.
            </p>
            <p><strong>What you can do:</strong></p>
            <ul>
              <li>
                Talk to your doctor about potential side effects of any medication you're taking
              </li>
              <li>Never stop or adjust medication on your own</li>
              <li>Avoid recreational drugs that impair neurological or vascular function</li>
            </ul>
          </section>

          <section id="conclusion">
            <h2><span class="emoji">🔍</span> Final Thoughts: A Holistic Approach</h2>
            <p>
              Erectile dysfunction isn't just about the physical — it's deeply connected to your
              lifestyle, habits, and emotional well-being. While ED medications can offer short-term
              relief, addressing the root causes through lifestyle improvements provides long-term
              benefits not only for your sexual health but also your overall quality of life.
            </p>
            <p>
              If you're struggling with ED, consider speaking with a healthcare provider who can
              help you develop a personalized, holistic treatment plan that combines medical
              intervention with sustainable lifestyle changes.
            </p>
          </section>
        </div>
      </article>

      <!-- Right Sidebar (adapted for lifestyle topic) -->
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
  { id: 'mental-health', title: 'Mental Health & Stress' },
  { id: 'smoking', title: 'Smoking' },
  { id: 'alcohol', title: 'Alcohol' },
  { id: 'diet', title: 'Diet' },
  { id: 'sleep', title: 'Sleep' },
  { id: 'inactivity', title: 'Inactivity' },
  { id: 'obesity', title: 'Obesity' },
  { id: 'medication-use', title: 'Medication Use' },
  { id: 'conclusion', title: 'Conclusion' },
])

// Data for the right sidebar (DrugSidebar) - adapted for lifestyle topic
const blogSidebarData = ref({
  // Removed drug-specific fields
  relatedResources: [
    { to: '/blog/understanding-ed', text: 'Understanding ED Basics' },
    { to: '/blog/managing-side-effects', text: 'Managing Treatment Side Effects' },
    { to: '/blog/talking-to-doctor-ed', text: 'Talking to Your Doctor' },
    { to: '/blog/diet-exercise-ed', text: 'Diet & Exercise Guide' }, // Placeholder
    { to: '/blog/mental-health-ed', text: 'Mental Health Strategies' }, // Placeholder
  ],
  // Removed similarDrugs & drugComparison sections as they are less relevant here
})
</script>
  
  <style scoped>
/* Styles copied from fda-vardenafil-info.vue for consistency */
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

/* No H3 needed for this page, unlike drug pages */

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

/* No comparison table needed */

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
}
</style> 