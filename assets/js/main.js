/* ----- NAVIGATION BAR FUNCTION ----- */
    function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");

      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
      const navHeader =document.getElementById("header");

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

      } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

      }
    }


/* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed(".typedText",{
      strings : ["enterprise mobile apps","Spring Boot backends","AI-enabled workflows"],
      loop : true,
      typeSpeed : 100, 
      backSpeed : 80,
      backDelay : 2000
   })

/* ----- DYNAMIC CV DOWNLOAD ----- */
   const cvDownloadLinks = document.querySelectorAll('.cv-download-link')

   function escapeHtml(value) {
      return String(value)
         .replace(/&/g, '&amp;')
         .replace(/</g, '&lt;')
         .replace(/>/g, '&gt;')
         .replace(/"/g, '&quot;')
         .replace(/'/g, '&#39;')
   }

   function renderList(items) {
      return items.map(item => `<li>${escapeHtml(item)}</li>`).join('')
   }

   function renderSkillGroup(title, items) {
      return `
         <section class="cv-block">
            <h2>${escapeHtml(title)}</h2>
            <div class="cv-chip-list">
               ${items.map(item => `<span>${escapeHtml(item)}</span>`).join('')}
            </div>
         </section>
      `
   }

   function renderExperience(items) {
      return items.map(item => `
         <article class="cv-entry">
            <div class="cv-entry-head">
               <h3>${escapeHtml(item.role)}</h3>
               <span>${escapeHtml(item.period)}</span>
            </div>
            <p class="cv-entry-company">${escapeHtml(item.company)}</p>
            <ul>${renderList(item.highlights)}</ul>
         </article>
      `).join('')
   }

   function renderProjects(items) {
      return items.map(item => `
         <article class="cv-entry">
            <div class="cv-entry-head">
               <h3>${escapeHtml(item.name)}</h3>
               <span>${escapeHtml(item.stack)}</span>
            </div>
            <p>${escapeHtml(item.summary)}</p>
         </article>
      `).join('')
   }

   function renderContactLink(label, value, href) {
      return `<a href="${escapeHtml(href)}">${escapeHtml(label)}: ${escapeHtml(value)}</a>`
   }

   function createCvHtml(data) {
      return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(data.personal.name)} - CV</title>
  <style>
    :root {
      --ink: #1f2937;
      --muted: #5b6473;
      --accent: #1e9fab;
      --line: #dbe2ea;
      --surface: #ffffff;
      --chip: #eef8fa;
      --page: #f5f7fb;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      background: var(--page);
      color: var(--ink);
      line-height: 1.6;
    }
    .cv-page {
      width: min(960px, calc(100% - 32px));
      margin: 24px auto;
      background: var(--surface);
      border-radius: 24px;
      padding: 40px;
      box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
    }
    .cv-header {
      padding-bottom: 24px;
      border-bottom: 2px solid var(--line);
    }
    .cv-header h1 {
      margin: 0 0 8px;
      font-size: 38px;
    }
    .cv-header p {
      margin: 0;
    }
    .cv-title {
      font-size: 20px;
      color: var(--accent);
      font-weight: 700;
      margin-bottom: 10px;
    }
    .cv-contact {
      display: flex;
      flex-wrap: wrap;
      gap: 10px 18px;
      margin-top: 16px;
      color: var(--muted);
      font-size: 14px;
    }
    .cv-contact a {
      color: var(--accent);
      text-decoration: none;
      font-weight: 700;
    }
    .cv-contact a:hover {
      text-decoration: underline;
    }
    .cv-contact span {
      color: var(--muted);
    }
    .cv-block {
      margin-top: 28px;
    }
    .cv-block h2 {
      margin: 0 0 14px;
      font-size: 20px;
      color: var(--accent);
    }
    .cv-entry {
      padding: 18px 0;
      border-top: 1px solid var(--line);
    }
    .cv-entry:first-child {
      border-top: none;
      padding-top: 0;
    }
    .cv-entry-head {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 16px;
      flex-wrap: wrap;
    }
    .cv-entry-head h3 {
      margin: 0;
      font-size: 18px;
    }
    .cv-entry-head span {
      color: var(--muted);
      font-size: 14px;
      font-weight: 700;
    }
    .cv-entry-company {
      margin: 4px 0 10px;
      color: var(--muted);
      font-weight: 700;
    }
    .cv-entry p {
      margin: 0;
    }
    .cv-entry ul {
      margin: 10px 0 0 18px;
      padding: 0;
    }
    .cv-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 22px;
    }
    .cv-chip-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .cv-chip-list span {
      padding: 8px 12px;
      border-radius: 999px;
      background: var(--chip);
      color: var(--accent);
      font-size: 14px;
      font-weight: 700;
    }
    .cv-simple-list {
      margin: 0;
      padding-left: 18px;
    }
    .cv-footer {
      margin-top: 30px;
      padding-top: 18px;
      border-top: 2px solid var(--line);
      color: var(--muted);
      font-size: 14px;
    }
    @media print {
      body {
        background: #fff;
      }
      .cv-page {
        width: 100%;
        margin: 0;
        padding: 24px;
        box-shadow: none;
        border-radius: 0;
      }
    }
    @media (max-width: 720px) {
      .cv-page {
        padding: 24px;
      }
      .cv-grid {
        grid-template-columns: 1fr;
      }
      .cv-header h1 {
        font-size: 30px;
      }
    }
  </style>
</head>
<body>
  <main class="cv-page">
    <header class="cv-header">
      <h1>${escapeHtml(data.personal.name)}</h1>
      <div class="cv-title">${escapeHtml(data.personal.title)}</div>
      <p>${escapeHtml(data.personal.summary)}</p>
      <div class="cv-contact">
        <span>${escapeHtml(data.personal.location)}</span>
        ${renderContactLink('Email', data.personal.email, `mailto:${data.personal.email}`)}
        ${renderContactLink('Saudi', data.personal.phoneSaudi, `tel:${data.personal.phoneSaudi.replace(/\s+/g, '')}`)}
        ${renderContactLink('India', data.personal.phoneIndia, `tel:${data.personal.phoneIndia.replace(/\s+/g, '')}`)}
        ${renderContactLink('LinkedIn', data.personal.linkedin, data.personal.linkedin)}
        ${renderContactLink('GitHub', data.personal.github, data.personal.github)}
        ${renderContactLink('Portfolio', data.personal.portfolio, data.personal.portfolio)}
      </div>
    </header>

    <section class="cv-block">
      <h2>Experience</h2>
      ${renderExperience(data.experience)}
    </section>

    <section class="cv-block">
      <h2>Projects</h2>
      ${renderProjects(data.projects)}
    </section>

    <section class="cv-block">
      <h2>Skills</h2>
      <div class="cv-grid">
        ${renderSkillGroup('Core Technologies', data.skills.core)}
        ${renderSkillGroup('Backend & Architecture', data.skills.backend)}
        ${renderSkillGroup('DevOps & Security', data.skills.devops)}
        ${renderSkillGroup('Tools & Platforms', data.skills.tools)}
      </div>
    </section>

    <section class="cv-block">
      <div class="cv-grid">
        <section>
          <h2>Education</h2>
          <ul class="cv-simple-list">${renderList(data.education)}</ul>
        </section>
        <section>
          <h2>Certifications</h2>
          <ul class="cv-simple-list">${renderList(data.certifications)}</ul>
        </section>
      </div>
    </section>

    <section class="cv-block">
      <h2>Languages</h2>
      <ul class="cv-simple-list">${renderList(data.languages)}</ul>
    </section>

    <footer class="cv-footer">
      Generated dynamically from portfolio data on ${new Date().toLocaleDateString('en-GB')}.
    </footer>
  </main>
</body>
</html>`
   }

   function downloadGeneratedCv() {
      const data = window.portfolioData
      if (!data) {
         return false
      }

      const html = createCvHtml(data)
      const blob = new Blob([html], { type: 'text/html;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')

      link.href = url
      link.download = 'Mohd_Aqil_CV.html'
      document.body.appendChild(link)
      link.click()
      link.remove()

      window.setTimeout(function() {
         URL.revokeObjectURL(url)
      }, 1000)

      return true
   }

   cvDownloadLinks.forEach(link => {
      link.addEventListener('click', function(event) {
         const didDownload = downloadGeneratedCv()

         if (didDownload) {
            event.preventDefault()
         }
      })
   })

/* ----- IMAGE PREVIEW ----- */
   const previewImages = document.querySelectorAll('.previewable-image')
   const imageModal = document.getElementById('imageModal')
   const imageModalContent = document.getElementById('imageModalContent')
   const imageModalClose = document.getElementById('imageModalClose')
   const imageModalBackdrop = document.getElementById('imageModalBackdrop')

   function openImageModal(src, alt) {
      imageModalContent.src = src
      imageModalContent.alt = alt || 'Expanded image preview'
      imageModal.classList.add('active')
      imageModal.setAttribute('aria-hidden', 'false')
      document.body.classList.add('preview-open')
   }

   function closeImageModal() {
      imageModal.classList.remove('active')
      imageModal.setAttribute('aria-hidden', 'true')
      document.body.classList.remove('preview-open')
   }

   previewImages.forEach(image => {
      image.addEventListener('click', function(event) {
         event.preventDefault()
         event.stopPropagation()
         openImageModal(this.src, this.alt)
      })
   })

   imageModalClose.addEventListener('click', closeImageModal)

   imageModalBackdrop.addEventListener('click', function(event) {
      if (event.target === imageModalBackdrop) {
         closeImageModal()
      }
   })

   document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && imageModal.classList.contains('active')) {
         closeImageModal()
      }
   })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
   })

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-details',{delay: 250})
  sr.reveal('.featured-text-btn',{delay: 300})
  sr.reveal('.social_icons',{delay: 350})
  

  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})
  sr.reveal('.experience-card',{interval: 200})
  sr.reveal('.detail-card',{interval: 200})
  sr.reveal('.credential-card',{interval: 200})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  


/* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

      }  else {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

      }
    })
  }

  window.addEventListener('scroll', scrollActive)
