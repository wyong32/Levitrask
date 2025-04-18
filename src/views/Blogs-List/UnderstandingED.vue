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
          <h1>Understanding Erectile Dysfunction (ED)</h1>
          <p class="post-meta">Published on: [Date Placeholder]</p>
        </header>
        <hr />
        <div class="post-body">
          <p>
            Erectile Dysfunction (ED) is a topic that many men are hesitant to talk about, yet it's
            one of the most common sexual health concerns worldwide. Whether it's an occasional
            issue or a persistent problem, ED can affect not only physical intimacy but also
            emotional well-being, relationships, and self-confidence.
          </p>
          <p>
            In this guide, we'll break down what ED really is, what causes it, and how it can be
            treated — with a focus on clarity, compassion, and confidence.
          </p>

          <section id="what-is-ed">
            <h2><span class="emoji">💡</span> What Is Erectile Dysfunction?</h2>
            <p>
              Erectile dysfunction is defined as the inability to get or maintain an erection firm
              enough for sexual intercourse. It's important to note that occasional difficulty is
              normal. ED becomes a concern when it occurs frequently or consistently.
            </p>
            <p>ED can present in different ways:</p>
            <ul>
              <li>Difficulty getting an erection</li>
              <li>Trouble maintaining an erection during sex</li>
              <li>Reduced interest in sex (often linked to physical or psychological causes)</li>
            </ul>
          </section>

          <section id="how-common">
            <h2><span class="emoji">📊</span> How Common Is ED?</h2>
            <p>ED is very common, especially as men age. According to estimates:</p>
            <ul>
              <li>About 30 million men in the U.S. experience ED.</li>
              <li>Around 40% of men report some form of ED by age 40.</li>
              <li>That number increases to 70% by age 70.</li>
            </ul>
            <p>
              But ED isn't just about aging — it can affect men of all ages, particularly when other
              health or emotional factors are involved.
            </p>
          </section>

          <section id="causes">
            <h2><span class="emoji">🔍</span> Causes of Erectile Dysfunction</h2>
            <p>ED is usually caused by one or more of the following:</p>
            <p><strong>🧠 Psychological Causes:</strong></p>
            <ul>
              <li>Stress or anxiety</li>
              <li>Depression</li>
              <li>Relationship problems</li>
              <li>Performance anxiety</li>
            </ul>
            <p><strong>❤️ Physical Causes:</strong></p>
            <ul>
              <li>Cardiovascular disease</li>
              <li>High blood pressure</li>
              <li>Diabetes</li>
              <li>High cholesterol</li>
              <li>Obesity</li>
              <li>Hormonal imbalances (e.g., low testosterone)</li>
              <li>Nerve damage</li>
              <li>Peyronie's disease (penile curvature)</li>
            </ul>
            <p><strong>💊 Medication or Substance-Related:</strong></p>
            <ul>
              <li>Certain antidepressants</li>
              <li>Blood pressure medications</li>
              <li>Alcohol and drug use</li>
              <li>Smoking</li>
            </ul>
          </section>

          <section id="diagnosis">
            <h2><span class="emoji">🩺</span> Diagnosing ED</h2>
            <p>When you see a doctor about ED, they'll start with:</p>
            <ul>
              <li>Medical history and symptoms</li>
              <li>Physical exam (including blood pressure and genital exam)</li>
              <li>Blood tests to check testosterone, blood sugar, and cholesterol</li>
              <li>Psychological assessment if mental health might be a factor</li>
            </ul>
            <p>The goal is to find the underlying cause, so treatment can be personalized.</p>
          </section>

          <section id="treatment-options">
            <h2><span class="emoji">💊</span> Treatment Options for ED</h2>
            <p>
              ED is treatable — often very successfully. Treatment depends on the cause, but common
              options include:
            </p>
            <h3>1. Oral Medications (PDE5 inhibitors)</h3>
            <ul>
              <li>
                <router-link to="/drugs/viagra">Sildenafil (Viagra)</router-link>
              </li>
              <li>
                <router-link to="/drugs/cialis">Tadalafil (Cialis)</router-link>
              </li>
              <li>
                <router-link to="/">Vardenafil (Levitra, Staxyn)</router-link>
              </li>
              <li>
                <router-link to="/drugs/stendra">Avanafil (Stendra)</router-link>
              </li>
            </ul>
            <p>
              These drugs increase blood flow to the penis during arousal. They're typically taken
              15–60 minutes before sex, depending on the type.
            </p>
            <h3>2. Lifestyle Changes</h3>
            <ul>
              <li>Regular exercise</li>
              <li>Healthy diet</li>
              <li>Quitting smoking</li>
              <li>Limiting alcohol</li>
              <li>Stress management</li>
            </ul>
            <h3>3. Therapy or Counseling</h3>
            <p>
              Helpful for men experiencing anxiety, depression, or relationship issues that impact
              performance.
            </p>
            <h3>4. Other Treatments</h3>
            <ul>
              <li>Vacuum erection devices</li>
              <li>Penile injections</li>
              <li>Hormone therapy (if testosterone is low)</li>
              <li>Surgery (in rare or severe cases)</li>
            </ul>
          </section>

          <section id="emotional-impact">
            <h2><span class="emoji">🧠</span> The Emotional Impact of ED</h2>
            <p>ED can take a toll on mental health — leading to:</p>
            <ul>
              <li>Low self-esteem</li>
              <li>Frustration or embarrassment</li>
              <li>Relationship tension</li>
              <li>Anxiety or depression</li>
            </ul>
            <p>
              Talking openly with a partner, seeking professional help, and knowing you're not alone
              can make a significant difference.
            </p>
          </section>

          <section id="when-to-talk">
            <h2><span class="emoji">🗣️</span> When to Talk to Your Doctor</h2>
            <p>
              If you're experiencing persistent or recurring ED, it's time to speak to a healthcare
              provider. ED can be a sign of underlying health issues, including heart disease,
              diabetes, or hormonal imbalance.
            </p>
            <p>
              Early diagnosis often means better outcomes — for both your sexual health and your
              overall well-being.
            </p>
          </section>

          <section id="conclusion">
            <h2><span class="emoji">✅</span> Final Thoughts</h2>
            <p>
              Erectile dysfunction is more common than most men think — and far more treatable than
              many realize. Understanding the causes, treatment options, and emotional effects of ED
              is the first step toward reclaiming your health, confidence, and intimacy.
            </p>
            <p>
              You don't have to face it alone. With the right information, support, and care, you
              can overcome ED and return to a fulfilling and healthy sex life.
            </p>
          </section>
        </div>
      </article>

      <!-- Right Sidebar (adapted for Understanding ED topic) -->
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
  { id: 'what-is-ed', title: 'What Is ED?' },
  { id: 'how-common', title: 'How Common Is It?' },
  { id: 'causes', title: 'Causes' },
  { id: 'diagnosis', title: 'Diagnosis' },
  { id: 'treatment-options', title: 'Treatment Options' },
  { id: 'emotional-impact', title: 'Emotional Impact' },
  { id: 'when-to-talk', title: 'When to Talk to Doctor' },
  { id: 'conclusion', title: 'Conclusion' },
])

// Data for the right sidebar (DrugSidebar) - adapted for Understanding ED topic
const blogSidebarData = ref({
  // Removed drug-specific fields
  relatedResources: [
    { to: '/blog/lifestyle-impact', text: 'Lifestyle Factors & ED' },
    { to: '/blog/managing-side-effects', text: 'Managing Side Effects' },
    { to: '/blog/talking-to-doctor-ed', text: 'Talking to Your Doctor' },
    { to: '/blog/switching-ed-meds', text: 'Switching ED Medications' },
    // Add links to specific drug info if desired
  ],
  // Removed similarDrugs & drugComparison sections
})
</script>

<style scoped>
/* Styles copied from talking-to-doctor-ed.vue for consistency */
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
  .post-body h3 {
    font-size: 1.1rem;
  }
}
</style> 