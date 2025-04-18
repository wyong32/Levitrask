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
          <h1>Managing Side Effects of ED Medications</h1>
          <p class="post-meta">Published on: [Date Placeholder]</p>
        </header>
        <hr />
        <div class="post-body">
          <p>
            Erectile dysfunction (ED) medications like
            <router-link to="/drugs/viagra">sildenafil (Viagra)</router-link>,
            <router-link to="/drugs/cialis">tadalafil (Cialis)</router-link>,
            <router-link to="/">vardenafil (Levitra)</router-link>, and
            <router-link to="/drugs/stendra">avanafil (Stendra)</router-link> have transformed the
            lives of millions of men by helping restore sexual function and confidence. However,
            like all medications, these drugs can cause side effects — ranging from mild and
            temporary to more serious in rare cases.
          </p>
          <p>
            Understanding how to manage side effects can help you get the most benefit from your
            treatment while minimizing discomfort. In this blog, we'll explore common side effects
            of ED medications and how to deal with them safely and effectively.
          </p>

          <section id="common-meds">
            <h2><span class="emoji">💊</span> Common ED Medications and How They Work</h2>
            <p>
              All four major ED medications belong to a class of drugs called PDE5 inhibitors. They
              work by relaxing blood vessels and increasing blood flow to the penis during sexual
              arousal. Though highly effective, they can affect other parts of the body too —
              leading to some side effects.
            </p>
            <p><strong>Most Common PDE5 Inhibitors:</strong></p>
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
          </section>

          <section id="common-effects-management">
            <h2><span class="emoji">⚠️</span> Common Side Effects and Management Tips</h2>
            <h3>1. Headache</h3>
            <p>Headaches are among the most reported side effects due to blood vessel dilation.</p>
            <p><strong>What to do:</strong></p>
            <ul>
              <li>Stay well-hydrated before and after taking the medication</li>
              <li>
                Use over-the-counter pain relievers like acetaminophen or ibuprofen (with doctor
                approval)
              </li>
              <li>
                If headaches persist, discuss switching to a lower dose or trying a different
                medication
              </li>
            </ul>
            <h3>2. Flushing (Redness of the Face and Neck)</h3>
            <p>Flushing is usually harmless and often fades quickly.</p>
            <p><strong>What to do:</strong></p>
            <ul>
              <li>
                Avoid alcohol and spicy food around the time of dosing, which can worsen flushing
              </li>
              <li>Choose a cooler, well-ventilated setting during sexual activity</li>
            </ul>
            <h3>3. Nasal Congestion</h3>
            <p>Some men experience a stuffy or runny nose after taking ED drugs.</p>
            <p><strong>What to do:</strong></p>
            <ul>
              <li>Try a saline nasal spray or antihistamine (check for drug interactions)</li>
              <li>Keep your head elevated when lying down</li>
            </ul>
            <h3>4. Indigestion or Upset Stomach</h3>
            <p>
              These medications can relax the esophageal muscles, leading to reflux or bloating.
            </p>
            <p><strong>What to do:</strong></p>
            <ul>
              <li>Avoid heavy or fatty meals before taking ED medication</li>
              <li>Use an antacid if approved by your doctor</li>
              <li>
                <router-link to="/drugs/cialis">Tadalafil</router-link> is known for a higher chance
                of indigestion — consider switching if this is a problem
              </li>
            </ul>
            <h3>5. Dizziness or Lightheadedness</h3>
            <p>This may result from lowered blood pressure, especially when standing quickly.</p>
            <p><strong>What to do:</strong></p>
            <ul>
              <li>Rise slowly from sitting or lying down</li>
              <li>Avoid alcohol and large meals around medication time</li>
              <li>Stay seated until the feeling passes</li>
            </ul>
            <h3>6. Back or Muscle Pain</h3>
            <p>
              More common with <router-link to="/drugs/cialis">tadalafil (Cialis)</router-link> due
              to its longer half-life.
            </p>
            <p><strong>What to do:</strong></p>
            <ul>
              <li>Apply a warm compress or take a gentle stretch</li>
              <li>
                Consider switching to a shorter-acting drug like
                <router-link to="/drugs/stendra">avanafil</router-link> if the pain is bothersome
              </li>
            </ul>
          </section>

          <section id="serious-effects">
            <h2><span class="emoji">⚠️</span> Rare but Serious Side Effects</h2>
            <p>
              While most users tolerate ED medications well, some may experience serious adverse
              effects. These are rare but require immediate medical attention:
            </p>
            <p><strong>🚨 Seek help if you experience:</strong></p>
            <ul>
              <li>Chest pain or irregular heartbeat</li>
              <li>Sudden loss of vision or hearing</li>
              <li>Priapism (an erection lasting more than 4 hours)</li>
              <li>Severe allergic reaction (swelling, rash, difficulty breathing)</li>
            </ul>
          </section>

          <section id="adjustments">
            <h2>
              <span class="emoji">🔄</span> Managing Side Effects Through Medication Adjustments
            </h2>
            <p>
              If you experience persistent or severe side effects, speak to your healthcare provider
              about:
            </p>
            <ul>
              <li>
                <strong>Lowering the dose:</strong> Sometimes, a lower dose is just as effective
                with fewer side effects.
              </li>
              <li>
                <strong>Switching medications:</strong> For example, some men tolerate
                <router-link to="/drugs/stendra">avanafil</router-link> better due to its faster
                clearance and more targeted action.
              </li>
              <li>
                <strong>Trying alternative forms:</strong> For instance, Staxyn (a dissolvable form
                of <router-link to="/">vardenafil</router-link>) might cause fewer stomach issues.
              </li>
            </ul>
          </section>

          <section id="lifestyle-tips">
            <h2><span class="emoji">🛡️</span> Lifestyle Tips to Reduce Side Effects</h2>
            <p>You can minimize side effects by incorporating these healthy habits:</p>
            <ul>
              <li>
                Eat light before taking the medication (especially
                <router-link to="/drugs/viagra">sildenafil</router-link> and
                <router-link to="/">vardenafil</router-link>)
              </li>
              <li>Limit alcohol — it can intensify side effects and reduce effectiveness</li>
              <li>Stay hydrated</li>
              <li>Avoid grapefruit juice, which can interfere with metabolism of ED drugs</li>
              <li>
                Take the medication as directed — never mix with nitrates or recreational drugs
              </li>
            </ul>
          </section>

          <section id="talk-to-doctor">
            <h2><span class="emoji">🗣</span> Talk to Your Doctor</h2>
            <p>Never ignore persistent side effects. Your doctor can:</p>
            <ul>
              <li>Rule out other health conditions contributing to symptoms</li>
              <li>Adjust your treatment plan for better results</li>
              <li>Recommend supportive therapies (like counseling or lifestyle changes)</li>
            </ul>
          </section>

          <section id="conclusion">
            <h2><span class="emoji">✅</span> Final Thoughts</h2>
            <p>
              ED medications can be highly effective when used correctly — but managing side effects
              is key to long-term success and satisfaction. With the right approach, most men can
              continue treatment comfortably and confidently.
            </p>
            <p>
              If you're unsure about which ED medication is right for you, or if side effects are
              getting in the way of your experience, speak with a healthcare provider. There are
              many options, and with a little fine-tuning, you can find the right fit for your body
              and lifestyle.
            </p>
          </section>
        </div>
      </article>

      <!-- Right Sidebar (adapted for side effects topic) -->
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
  { id: 'common-meds', title: 'Common Medications' },
  { id: 'common-effects-management', title: 'Common Side Effects' },
  { id: 'serious-effects', title: 'Serious Side Effects' },
  { id: 'adjustments', title: 'Medication Adjustments' },
  { id: 'lifestyle-tips', title: 'Lifestyle Tips' },
  { id: 'talk-to-doctor', title: 'Talk to Your Doctor' },
  { id: 'conclusion', title: 'Conclusion' },
])

// Data for the right sidebar (DrugSidebar) - adapted for side effects topic
const blogSidebarData = ref({
  // Removed drug-specific fields
  relatedResources: [
    { to: '/blog/understanding-ed', text: 'Understanding ED Basics' },
    { to: '/blog/lifestyle-impact', text: 'Lifestyle Factors & ED' },
    { to: '/blog/talking-to-doctor-ed', text: 'Talking to Your Doctor' },
    { to: '/blog/fda-sildenafil-info', text: 'Sildenafil (Viagra) Info' },
    { to: '/blog/fda-tadalafil-info', text: 'Tadalafil (Cialis) Info' },
    { to: '/blog/fda-vardenafil-info', text: 'Vardenafil (Levitra) Info' },
    // Add Avanafil/Stendra link once its page exists
    // { to: '/blog/fda-avanafil-info', text: 'Avanafil (Stendra) Info' },
  ],
  // Removed similarDrugs & drugComparison sections
})
</script>

<style scoped>
/* Styles copied from lifestyle-impact.vue for consistency */
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