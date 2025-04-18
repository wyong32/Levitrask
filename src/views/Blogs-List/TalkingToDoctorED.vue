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
            <h1>How to Talk to Your Doctor About ED</h1>
            <p class="post-meta">Published on: [Date Placeholder]</p>
          </header>
          <hr />
          <div class="post-body">
            <p>
              Erectile dysfunction (ED) is a common condition — affecting over 30 million men in the
              U.S. alone — yet it's one of the least discussed health issues. Many men feel
              uncomfortable or embarrassed bringing it up with a doctor. But here's the truth: your
              doctor has heard it before, and they're there to help.
            </p>
            <p>
              Whether your ED is occasional or persistent, starting the conversation can lead to
              better health, improved confidence, and a stronger sense of control over your body. This
              guide will help you prepare for the conversation and know what to expect — so you can
              get the support you need.
            </p>
  
            <section id="why-speak-up">
              <h2><span class="emoji">💬</span> Why It's Important to Speak Up</h2>
              <p>
                Erectile dysfunction is often more than just a bedroom issue. It can be linked to:
              </p>
              <ul>
                <li>Heart disease</li>
                <li>Diabetes</li>
                <li>High blood pressure</li>
                <li>Hormonal imbalances</li>
                <li>Mental health concerns (like anxiety or depression)</li>
              </ul>
              <p>
                Ignoring it can delay treatment for underlying health problems, and the sooner you
                talk about it, the sooner you can find a solution — whether that means medication,
                therapy, lifestyle changes, or all of the above.
              </p>
            </section>
  
            <section id="prepare">
              <h2><span class="emoji">🧠</span> Prepare Before the Appointment</h2>
              <p>Before you go in, take a few moments to think about and write down:</p>
              <ul>
                <li><span class="emoji">🕒</span> When did the issue start?</li>
                <li><span class="emoji">📈</span> Is it occasional or consistent?</li>
                <li>
                  <span class="emoji">😌</span> Do you wake up with erections (morning erections)?
                </li>
                <li><span class="emoji">💊</span> Are you taking any medications or supplements?</li>
                <li><span class="emoji">❤️</span> Do you feel stressed, anxious, or depressed?</li>
                <li>
                  <span class="emoji">🛏️</span> Is it affecting your relationship or confidence?
                </li>
              </ul>
              <p>
                Being honest and specific helps your doctor get a full picture and rule out various
                causes.
              </p>
            </section>
  
            <section id="what-to-expect">
              <h2><span class="emoji">📅</span> What to Expect at the Appointment</h2>
              <p>Your doctor will likely ask you questions like:</p>
              <ul>
                <li>"How often are you able to get and keep an erection?"</li>
                <li>"Do you have difficulty with arousal or desire?"</li>
                <li>"Do you have any chronic conditions like diabetes or hypertension?"</li>
                <li>"Are you currently taking any medications?"</li>
                <li>"Are you experiencing stress, anxiety, or relationship challenges?"</li>
              </ul>
              <p>They may also check:</p>
              <ul>
                <li>Your blood pressure and heart health</li>
                <li>Blood tests (for testosterone levels, cholesterol, or blood sugar)</li>
                <li>Possibly a physical exam to check for structural issues</li>
              </ul>
            </section>
  
            <section id="feeling-nervous">
              <h2><span class="emoji">😬</span> Feeling Nervous? That's Normal</h2>
              <p>If you're anxious about the conversation, try saying something simple to start:</p>
              <ul>
                <li>
                  "I've been having trouble maintaining an erection, and I'd like to talk about it."
                </li>
                <li>
                  "I've noticed some changes in my sexual performance and want to see if there's
                  something going on."
                </li>
                <li>"This is a little uncomfortable for me, but I think I may have ED."</li>
              </ul>
              <p>
                Doctors are trained to handle sensitive topics without judgment. The key is just
                getting the words out — from there, they'll guide the conversation.
              </p>
            </section>
  
            <section id="treatment-options">
              <h2><span class="emoji">💊</span> Treatment Options You Can Discuss</h2>
              <p>Your doctor may talk to you about:</p>
              <ul>
                <li>
                  <strong>PDE5 inhibitors:</strong> Such as
                  <router-link to="/drugs/viagra">sildenafil (Viagra)</router-link>,
                  <router-link to="/drugs/cialis">tadalafil (Cialis)</router-link>,
                  <router-link to="/">vardenafil (Levitra)</router-link>, or
                  <router-link to="/drugs/stendra">avanafil (Stendra)</router-link>
                </li>
                <li><strong>Hormone therapy:</strong> If low testosterone is a factor</li>
                <li>
                  <strong>Lifestyle changes:</strong> Exercise, quitting smoking, reducing alcohol
                </li>
                <li>
                  <strong>Therapy or counseling:</strong> If stress or performance anxiety is part of
                  the issue
                </li>
                <li>
                  <strong>Other treatments:</strong> Like vacuum erection devices, injections, or
                  implants (in advanced cases)
                </li>
              </ul>
            </section>
  
            <section id="involving-partner">
              <h2><span class="emoji">👥</span> Bringing Your Partner Into the Conversation</h2>
              <p>
                ED affects both you and your partner. If you're comfortable, involving them in the
                conversation can:
              </p>
              <ul>
                <li>Provide emotional support</li>
                <li>Help your doctor understand relationship dynamics</li>
                <li>Encourage shared solutions and reduce pressure</li>
              </ul>
            </section>
  
            <section id="conclusion">
              <h2><span class="emoji">✅</span> Final Thoughts</h2>
              <p>
                Talking to your doctor about erectile dysfunction may feel uncomfortable at first —
                but it's one of the most empowering steps you can take. ED is extremely common, often
                treatable, and nothing to be ashamed of.
              </p>
              <p>
                By opening up, you give yourself the chance to reclaim your sexual health, strengthen
                your confidence, and take care of your body in a way that benefits your entire life.
              </p>
            </section>
          </div>
        </article>
  
        <!-- Right Sidebar (adapted for talking to doctor topic) -->
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
    { id: 'why-speak-up', title: 'Why Speak Up?' },
    { id: 'prepare', title: 'Prepare Before' },
    { id: 'what-to-expect', title: 'What to Expect' },
    { id: 'feeling-nervous', title: 'Feeling Nervous?' },
    { id: 'treatment-options', title: 'Treatment Options' },
    { id: 'involving-partner', title: 'Involving Partner' },
    { id: 'conclusion', title: 'Conclusion' },
  ])
  
  // Data for the right sidebar (DrugSidebar) - adapted for talking to doctor topic
  const blogSidebarData = ref({
    // Removed drug-specific fields
    relatedResources: [
      { to: '/blog/understanding-ed', text: 'Understanding ED Basics' },
      { to: '/blog/lifestyle-impact', text: 'Lifestyle Factors & ED' },
      { to: '/blog/managing-side-effects', text: 'Managing Side Effects' },
      { to: '/blog/switching-ed-meds', text: 'Switching ED Medications' },
      // Add placeholder mental health link if needed
    ],
    // Removed similarDrugs & drugComparison sections as less relevant
  })
  </script>
  
  <style scoped>
  /* Styles copied from switching-ed-meds.vue for consistency */
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
  
  /* No H3 needed */
  
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
  
  /* No table needed */
  
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