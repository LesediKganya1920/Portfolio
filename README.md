<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Katlego Queeneth Matlhoko — Portfolio</title>
  <meta name="description" content="Katlego Queeneth Matlhoko — Junior Developer | Business Systems | Web Dev & Data Visualisation" />
  <style>
    /* ---------- Base & layout ---------- */
    :root{
      --bg:#050505;
      --card:#0e0e0f;
      --muted:#9aa0a6;
      --accent1:#00ffff; /* cyan */
      --accent2:#ff4dff; /* pink */
      --accent3:#66ff99; /* green */
      --glass: rgba(255,255,255,0.03);
      --glass-2: rgba(255,255,255,0.02);
      --radius:16px;
      --max-width:1100px;
      --mono: "Fira Code", "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
      --sans: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    }

    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0;
      font-family:var(--sans);
      background:linear-gradient(180deg,var(--bg) 0%, #000000 100%);
      color: #e7eef8;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
      line-height:1.45;
      padding:32px 16px;
      display:flex;
      justify-content:center;
    }

    .wrap{
      width:100%;
      max-width:var(--max-width);
    }

    /* ---------- header ---------- */
    header{
      display:flex;
      gap:20px;
      align-items:center;
      background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
      padding:28px;
      border-radius:var(--radius);
      border:1px solid rgba(255,255,255,0.04);
      box-shadow: 0 8px 30px rgba(0,0,0,0.6);
    }

    .avatar{
      flex:0 0 150px;
      height:150px;
      border-radius:12px;
      background:linear-gradient(135deg,#0b0b0c, #151515);
      display:flex;
      align-items:center;
      justify-content:center;
      position:relative;
      overflow:hidden;
      border:1px solid rgba(255,255,255,0.04);
      box-shadow: 0 6px 30px rgba(0,0,0,0.7);
    }

    /* placeholder avatar text */
    .avatar .initials{
      font-family:var(--mono);
      font-size:28px;
      letter-spacing:1px;
      color:var(--accent1);
      text-shadow: 0 0 18px rgba(0,255,255,0.12);
    }

    .hero{
      flex:1;
      min-width:0;
    }

    h1{
      margin:0 0 6px 0;
      font-size:28px;
      color:var(--accent1);
      text-shadow: 0 2px 24px rgba(0,255,255,0.06);
    }
    .subtitle{
      margin:0;
      font-weight:600;
      font-size:16px;
      color: #ffd9ff;
      display:flex;
      align-items:center;
      gap:10px;
    }

    .tagline{
      margin-top:10px;
      color:var(--muted);
      font-size:14px;
    }

    .cta-row{
      margin-top:16px;
      display:flex;
      gap:12px;
      flex-wrap:wrap;
    }

    .btn{
      background:linear-gradient(90deg,var(--accent1), var(--accent2));
      color:#030303;
      padding:10px 16px;
      border-radius:12px;
      text-decoration:none;
      font-weight:700;
      font-size:14px;
      box-shadow: 0 6px 20px rgba(130,60,200,0.08);
      border:none;
    }

    .btn.secondary{
      background:transparent;
      border:1px solid rgba(255,255,255,0.06);
      color:var(--muted);
      padding:10px 14px;
    }

    /* ---------- typing effect ---------- */
    .typing{
      display:inline-block;
      margin-left:8px;
      color:var(--accent2);
      font-weight:700;
      font-family:var(--mono);
      font-size:16px;
      letter-spacing:0.5px;
    }

    /* ---------- sections ---------- */
    main{
      margin-top:24px;
      display:grid;
      grid-template-columns: 1fr 360px;
      gap:20px;
    }

    section{
      background:var(--card);
      border-radius:12px;
      padding:18px;
      border:1px solid rgba(255,255,255,0.03);
      box-shadow: 0 8px 26px rgba(0,0,0,0.6);
    }

    /* left column content */
    .about p{ color:var(--muted); margin-top:0 }
    .skills-grid{
      display:flex;
      flex-wrap:wrap;
      gap:10px;
      margin-top:12px;
    }
    .skill{
      background:var(--glass);
      padding:10px 12px;
      border-radius:10px;
      min-width:110px;
      display:flex;
      gap:10px;
      align-items:center;
      border:1px solid rgba(255,255,255,0.02);
    }
    .skill img{ width:28px; height:28px; object-fit:contain; filter:drop-shadow(0 2px 6px rgba(0,0,0,0.6)); }

    /* projects */
    .projects-grid{
      display:grid;
      grid-template-columns: repeat(auto-fit, minmax(240px,1fr));
      gap:12px;
      margin-top:12px;
    }
    .project{
      background:linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02));
      padding:12px;
      border-radius:12px;
      border:1px solid rgba(255,255,255,0.03);
    }
    .project h4{ margin:0 0 6px 0; color:#fff }
    .project p{ margin:0; color:var(--muted); font-size:13px }

    .project .tags{ margin-top:10px; display:flex; gap:8px; flex-wrap:wrap; }
    .chip{ font-size:12px; padding:6px 8px; background:rgba(255,255,255,0.03); border-radius:8px; color:var(--muted) }

    /* right column */
    .profile-card{
      display:flex;
      flex-direction:column;
      gap:12px;
      align-items:stretch;
    }
    .card-row{ display:flex; gap:12px; align-items:center; justify-content:space-between }
    .resume-preview{
      width:100%;
      height:220px;
      border-radius:10px;
      overflow:hidden;
      border:1px solid rgba(255,255,255,0.03);
      background:var(--glass-2);
      display:flex;
      align-items:center;
      justify-content:center;
      color:var(--muted);
      font-size:14px;
    }

    .contact{
      display:flex;
      flex-direction:column;
      gap:8px;
    }
    .contact a{ color:var(--accent1); text-decoration:none; font-weight:600 }

    /* social icons */
    .socials{ display:flex; gap:10px; margin-top:6px }
    .socials a{ display:inline-block; width:36px; height:36px; border-radius:8px; background:rgba(255,255,255,0.02); display:flex; align-items:center; justify-content:center; text-decoration:none }

    /* footer & stats */
    .footer{
      margin-top:22px;
      text-align:center;
      color:var(--muted);
      font-size:13px;
    }

    /* ---------- animations & reveal ---------- */
    .reveal{ opacity:0; transform:translateY(6px); transition: all 600ms cubic-bezier(.2,.9,.3,1); }
    .reveal.visible{ opacity:1; transform:none; }

    /* typing cursor style */
    .cursor{
      display:inline-block;
      width:8px;
      height:20px;
      background:var(--accent1);
      margin-left:6px;
      border-radius:2px;
      animation: blink 1s steps(2) infinite;
      vertical-align:middle;
    }
    @keyframes blink{ 0%{opacity:1}50%{opacity:0}100%{opacity:1} }

    /* responsive */
    @media (max-width:980px){
      main{ grid-template-columns:1fr; }
      .avatar{ display:none; }
      header{flex-direction:column; align-items:flex-start}
    }

    @media (max-width:520px){
      body{ padding:16px 12px }
      .btn{ padding:8px 12px; font-size:13px }
    }
  </style>
</head>
<body>
  <div class="wrap">

    <!-- Header -->
    <header>
      <div class="avatar" aria-hidden="true">
        <!-- Replace with real image: <img src="path/to/photo.jpg" alt="Katlego Matlhoko" /> -->
        <div class="initials">KQM</div>
      </div>

      <div class="hero">
        <h1>Hi 👋, I'm <span style="color:var(--accent1)">Katlego Queeneth Matlhoko</span></h1>
        <p class="subtitle">💻 <strong style="color:#ffd9ff">Junior Developer</strong> <span class="typing" id="rotator" aria-hidden="true"></span><span class="cursor" aria-hidden="true"></span></p>
        <p class="tagline reveal">Motivated Information Technology student specializing in <strong>Business Systems</strong>. Hands-on with Java, web design, and software testing. Passionate about data visualization and business-focused tech solutions.</p>

        <div class="cta-row reveal">
          <a class="btn" href="#projects">See Projects</a>
          <a class="btn secondary" href="#contact">Contact Me</a>
          <a class="btn secondary" href="resume.pdf" download aria-label="Download Resume">Download Resume</a>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main>

      <!-- Left column -->
      <section aria-labelledby="about">
        <h2 id="about">About Me</h2>
        <div class="about reveal">
          <p>
            I'm a Junior Developer & Business Systems student based in Bloemfontein, South Africa. I build web apps, create data visualizations and design user-friendly interfaces. Currently building a Java chatbot using NetBeans and writing tests with JUnit. Seeking internships and entry-level roles in software development, IT systems analysis, or data analytics.
          </p>

          <h3 style="margin-top:14px">Skills</h3>
          <div class="skills-grid reveal" aria-hidden="false">
            <!-- icons sourced from the readme generator repo; replace or add your own -->
            <div class="skill"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg" alt="Java" /><div><strong>Java</strong><div style="font-size:12px;color:var(--muted)">OOP, JUnit</div></div></div>
            <div class="skill"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" alt="Python" /><div><strong>Python</strong><div style="font-size:12px;color:var(--muted)">Scripting, Data</div></div></div>
            <div class="skill"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" alt="JavaScript" /><div><strong>JavaScript</strong><div style="font-size:12px;color:var(--muted)">DOM, ES6+</div></div></div>
            <div class="skill"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" alt="HTML5" /><div><strong>HTML5</strong></div></div>
            <div class="skill"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" alt="CSS3" /><div><strong>CSS3</strong></div></div>
            <div class="skill"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" alt="MySQL" /><div><strong>MySQL</strong></div></div>
            <div class="skill"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" alt="Figma" /><div><strong>Figma</strong></div></div>
            <div class="skill"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode-colored.svg" alt="VS Code" /><div><strong>VS Code</strong></div></div>
            <div class="skill"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/azure-colored.svg" alt="Azure" /><div><strong>Azure</strong></div></div>
          </div>

          <h3 style="margin-top:14px">Tools & Data</h3>
          <div class="skills-grid reveal">
            <div class="skill"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/powerbi-colored.svg" alt="Power BI" /><div><strong>Power BI</strong></div></div>
            <div class="skill"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" alt="Git" /><div><strong>Git</strong></div></div>
            <div class="skill"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" alt="SQL" /><div><strong>SQL</strong></div></div>
          </div>
        </div>

        <h3 style="margin-top:18px">Projects</h3>
        <div class="projects-grid reveal" id="projects">
          <article class="project" aria-labelledby="proj-chatbot">
            <h4 id="proj-chatbot">Java Chatbot (NetBeans)</h4>
            <p>Chatbot with a Swing UI, unit-tested using JUnit. Focused on conversation flows and input validation.</p>
            <div class="tags">
              <span class="chip">Java</span>
              <span class="chip">Swing</span>
              <span class="chip">JUnit</span>
            </div>
          </article>

          <article class="project" aria-labelledby="proj-website">
            <h4 id="proj-website">Modern Website Designs</h4>
            <p>Responsive websites built with HTML/CSS/JS, focusing on UX and accessibility. Includes a business site for Lesedi Amantle Events.</p>
            <div class="tags">
              <span class="chip">HTML</span>
              <span class="chip">CSS</span>
              <span class="chip">JavaScript</span>
            </div>
          </article>

          <article class="project" aria-labelledby="proj-powerbi">
            <h4 id="proj-powerbi">Power BI Sales Dashboard</h4>
            <p>Interactive sales dashboard with slicers and KPIs, created in Power BI to analyze performance trends.</p>
            <div class="tags">
              <span class="chip">Power BI</span>
              <span class="chip">DAX</span>
              <span class="chip">Excel</span>
            </div>
          </article>

          <article class="project" aria-labelledby="proj-events">
            <h4 id="proj-events">Lesedi Amantle Events Website</h4>
            <p>Business website showcasing services (jumping castles, water slides, events) with booking contact form.</p>
            <div class="tags">
              <span class="chip">Business Site</span>
              <span class="chip">UX</span>
            </div>
          </article>
        </div>
      </section>

      <!-- Right column -->
      <aside>
        <section class="profile-card reveal" aria-labelledby="profile">
          <div class="card-row">
            <div>
              <strong style="font-size:16px">Katlego Queeneth Matlhoko</strong>
              <div style="color:var(--muted); font-size:13px; margin-top:4px">Junior Developer • Business Systems Student</div>
            </div>
            <div style="text-align:right">
              <div style="color:var(--muted); font-size:12px">Bloemfontein, South Africa</div>
              <div style="font-weight:600; color:var(--accent1); margin-top:6px">lesedikganya1920@gmail.com</div>
            </div>
          </div>

          <div class="resume-preview" role="img" aria-label="Resume preview">
            <!-- Replace with <iframe src="resume.pdf"> to embed an actual file on your web host -->
            <div>
              <div style="font-weight:700; color:var(--accent2)">Resume</div>
              <div style="font-size:13px; color:var(--muted); margin-top:6px">Click "Download Resume" to get PDF</div>
            </div>
          </div>

          <div style="display:flex; gap:8px; justify-content:space-between; align-items:center">
            <a class="btn" href="resume.pdf" download>Download Resume</a>
            <div style="text-align:right; color:var(--muted); font-size:12px">Available for internships • Open to hire</div>
          </div>

          <div style="margin-top:12px;">
            <strong style="font-size:14px">Contact</strong>
            <div class="contact" style="margin-top:8px">
              <div>Email: <a href="mailto:lesedikganya1920@gmail.com">lesedikganya1920@gmail.com</a></div>
              <div>GitHub: <a href="https://github.com/LesediKganya1920" target="_blank" rel="noopener">LesediKganya1920</a></div>
              <div>LinkedIn: <a href="https://www.linkedin.com/in/katlego-matlhoko" target="_blank" rel="noopener">Katlego Matlhoko</a></div>
            </div>

            <div class="socials" style="margin-top:8px">
              <a href="https://github.com/LesediKganya1920" target="_blank" rel="noopener" aria-label="GitHub">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" width="22" height="22" alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/katlego-matlhoko" target="_blank" rel="noopener" aria-label="LinkedIn">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" width="22" height="22" alt="LinkedIn" />
              </a>
            </div>
          </div>

          <div style="margin-top:12px">
            <strong style="font-size:14px">Top Skills</strong>
            <div style="display:flex; gap:8px; margin-top:8px; flex-wrap:wrap">
              <span class="chip">Java</span><span class="chip">Web Dev</span><span class="chip">Power BI</span><span class="chip">SQL</span>
            </div>
          </div>

        </section>

        <section style="margin-top:16px" class="reveal" aria-labelledby="certs">
          <h3 id="certs">Certifications</h3>
          <ul style="color:var(--muted); padding-left:16px; margin-top:8px">
            <li>Higher Certificate in Business Management — IIE Rosebank College</li>
            <li>Diploma in Social Media Management — Alison</li>
            <li>Business Analytics with Excel — Simplilearn</li>
            <li>Power BI Beginner & Data Modeling — Alison</li>
            <li>Introduction to SQL — Alison</li>
          </ul>
        </section>

      </aside>
    </main>

    <div class="footer reveal">
      <p>⭐ “Code with purpose, design with passion, and learn without limits.”</p>
      <p style="margin-top:8px; color:var(--muted)">Built with ❤️ • Contact me for collaborations</p>
    </div>

  </div>

  <script>
    /* ----------------- typing rotator ----------------- */
    (function(){
      const words = ["Junior Developer","Business Systems Student","Creative Coder","Tech Enthusiast"];
      let i = 0;
      const el = document.getElementById('rotator');
      function show(){
        const word = words[i];
        el.textContent = word;
        i = (i+1) % words.length;
      }
      show();
      setInterval(show, 2200);
    })();

    /* ----------------- reveal on scroll ----------------- */
    (function(){
      const revealEls = document.querySelectorAll('.reveal');
      const obs = new IntersectionObserver(entries=>{
        entries.forEach(e=>{
          if(e.isIntersecting) e.target.classList.add('visible');
        });
      }, {threshold:0.12});
      revealEls.forEach(el=>obs.observe(el));
    })();

    /* ----------------- accessible contact form fallback -----------------
       If you later add a contact form that posts to a serverless endpoint,
       make sure to add proper sanitization and rate-limiting.
    --------------------------------------------------------------- */
  </script>
</body>
</html>
