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
          <h1>Tadalafil (Generic Cialis): FAQs</h1>
          <p class="post-meta">Published on: [Date Placeholder]</p>
        </header>
        <hr />
        <div class="post-body">
          <p>
            Tadalafil, the active ingredient in
            <router-link to="/drugs/cialis">Cialis</router-link>, is one of the most commonly
            prescribed medications for erectile dysfunction (ED). It's also used to treat benign
            prostatic hyperplasia (BPH) — an enlarged prostate — and pulmonary arterial hypertension
            under the brand name Adcirca.
          </p>
          <p>
            With its long-lasting effects and flexible dosing options, tadalafil has become a go-to
            option for many men looking to restore sexual confidence. In this FAQ guide, we'll
            answer the most common questions about Tadalafil (Generic Cialis) to help you understand
            how it works, how to use it, and what to expect.
          </p>

          <section id="what-is-tadalafil">
            <h2><span class="emoji">💊</span> What Is Tadalafil?</h2>
            <p>
              Tadalafil is a prescription medication that belongs to a class of drugs called
              phosphodiesterase type 5 (PDE5) inhibitors. It increases blood flow to certain areas
              of the body by relaxing the blood vessels — especially helpful for men experiencing
              difficulty getting or keeping an erection.
            </p>
          </section>

          <section id="uses">
            <h2><span class="emoji">❓</span> What Is Tadalafil Used For?</h2>
            <p>Tadalafil is approved to treat:</p>
            <ul>
              <li>
                <strong>Erectile Dysfunction (ED):</strong> Helps achieve and maintain an erection
                during sexual activity.
              </li>
              <li>
                <strong>Benign Prostatic Hyperplasia (BPH):</strong> Relieves symptoms like frequent
                urination, difficulty starting urination, and weak stream.
              </li>
              <li>
                <strong>ED + BPH:</strong> Can be prescribed to treat both conditions at the same
                time.
              </li>
              <li>
                <strong>Pulmonary Arterial Hypertension (under the brand Adcirca):</strong> Lowers
                blood pressure in the lungs.
              </li>
              <!-- Assuming Adcirca page doesn't exist -->
            </ul>
          </section>

          <section id="duration">
            <h2><span class="emoji">⏱️</span> How Long Does Tadalafil Last?</h2>
            <p>One of the most notable features of tadalafil is its long duration of action:</p>
            <ul>
              <li>Tadalafil can remain effective for up to 36 hours.</li>
              <li>Because of this, it is often referred to as the "weekend pill."</li>
            </ul>
            <p>
              <strong>Keep in mind:</strong> Sexual stimulation is still needed for it to work — it
              does not cause an automatic erection.
            </p>
          </section>

          <section id="how-to-take">
            <h2><span class="emoji">🕒</span> When and How Should I Take It?</h2>
            <p>Tadalafil comes in two main dosing formats:</p>
            <h3>1. As-Needed Dosing</h3>
            <ul>
              <li>Usually 10 mg taken 30–60 minutes before sexual activity.</li>
              <li>
                Can be adjusted up to 20 mg or down to 5 mg depending on effectiveness and
                tolerance.
              </li>
              <li>Do not take more than once per day.</li>
            </ul>
            <h3>2. Daily Low-Dose Dosing</h3>
            <ul>
              <li>2.5 mg or 5 mg taken once daily, regardless of sexual activity.</li>
              <li>
                Best for men who want to maintain spontaneous sexual activity or also have BPH.
              </li>
            </ul>
          </section>

          <section id="food-interaction">
            <h2><span class="emoji">🍔</span> Should I Take Tadalafil With or Without Food?</h2>
            <p>
              Tadalafil can be taken with or without food. Unlike some ED medications, high-fat
              meals do not significantly affect its absorption or effectiveness.
            </p>
          </section>

          <section id="side-effects">
            <h2><span class="emoji">⚠️</span> What Are the Possible Side Effects?</h2>
            <p>
              Like any medication, tadalafil may cause side effects. Most are mild, but some require
              medical attention.
            </p>
            <p><strong>Common Side Effects:</strong></p>
            <ul>
              <li>Headache</li>
              <li>Muscle aches or back pain</li>
              <li>Flushing</li>
              <li>Indigestion</li>
              <li>Nasal congestion</li>
            </ul>
            <p>These usually subside within a few hours.</p>
            <p><strong>Serious (but rare) Side Effects:</strong></p>
            <ul>
              <li>Sudden vision or hearing loss</li>
              <li>Chest pain or irregular heartbeat</li>
              <li>Painful or prolonged erection (priapism — lasting more than 4 hours)</li>
            </ul>
            <p>If you experience serious side effects, seek medical attention immediately.</p>
          </section>

          <section id="who-should-not-take">
            <h2><span class="emoji">❌</span> Who Should NOT Take Tadalafil?</h2>
            <p>Do not take tadalafil if you:</p>
            <ul>
              <li>Take nitrates (for chest pain) or riociguat (for pulmonary hypertension)</li>
              <li>Have severe liver or kidney disease (without medical supervision)</li>
              <li>Have recently had a heart attack or stroke</li>
              <li>Have low blood pressure or uncontrolled high blood pressure</li>
            </ul>
            <p>
              Always discuss your full medical history and medications with your healthcare
              provider.
            </p>
          </section>

          <section id="switching-dosing">
            <h2>
              <span class="emoji">🔄</span> Can I Switch Between Daily and As-Needed Tadalafil?
            </h2>
            <p>
              Yes — under your doctor's supervision. Some men start with as-needed use and later
              switch to a daily dose for more consistent results, especially if they're sexually
              active more than twice a week or also managing BPH symptoms.
            </p>
          </section>

          <section id="generic-vs-brand">
            <h2>
              <span class="emoji">💊</span> Is the Generic Version as Effective as Brand-Name
              Cialis?
            </h2>
            <p>
              Yes. Generic tadalafil contains the same active ingredient, is approved by the FDA,
              and is just as effective as <router-link to="/drugs/cialis">Cialis</router-link>. The
              main difference? Lower cost.
            </p>
          </section>

          <section id="storage">
            <h2><span class="emoji">📦</span> How Should I Store Tadalafil?</h2>
            <p>
              Store the medication at room temperature, away from moisture and heat. Keep it in its
              original packaging and out of reach of children or pets.
            </p>
          </section>

          <section id="conclusion">
            <h2><span class="emoji">🧠</span> Final Thoughts</h2>
            <p>
              Tadalafil (Generic Cialis) is a powerful and versatile option for treating ED and BPH.
              Its long-lasting effects and multiple dosing options make it a preferred choice for
              many men. While side effects are generally mild, it's important to follow your
              doctor's instructions and report any unusual symptoms.
            </p>
            <p>
              If you're struggling with erectile dysfunction or experiencing urinary symptoms
              related to BPH, talk to your doctor to see if tadalafil is right for you.
            </p>
          </section>
        </div>
      </article>

      <!-- Right Sidebar (adapted for generic Tadalafil FAQ topic) -->
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
  { id: 'what-is-tadalafil', title: 'What is Tadalafil?' },
  { id: 'uses', title: 'Uses' },
  { id: 'duration', title: 'Duration' },
  { id: 'how-to-take', title: 'How to Take' },
  { id: 'food-interaction', title: 'Food Interaction' },
  { id: 'side-effects', title: 'Side Effects' },
  { id: 'who-should-not-take', title: 'Who Should Not Take?' },
  { id: 'switching-dosing', title: 'Switching Dosing' },
  { id: 'generic-vs-brand', title: 'Generic vs. Brand' },
  { id: 'storage', title: 'Storage' },
  { id: 'conclusion', title: 'Conclusion' },
])

// Data for the right sidebar (DrugSidebar) - adapted for generic Tadalafil FAQ topic
const blogSidebarData = ref({
  // Removed drug-specific fields
  relatedResources: [
    { to: '/blog/fda-tadalafil-info', text: 'FDA Tadalafil Info' },
    { to: '/blog/managing-side-effects', text: 'Managing Side Effects' },
    { to: '/blog/lifestyle-impact', text: 'Lifestyle Factors & ED' },
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
    // Removed self/Cialis comparison
  ],
})
</script>

<style scoped>
/* Styles copied from vardenafil-generic-info.vue for consistency */
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