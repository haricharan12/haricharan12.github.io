// =========================================================
// Haricharan S — Portfolio
// All event binding uses addEventListener (no inline handlers)
// so the page can run under a strict script-src CSP.
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRevealOnScroll();
  initNavBurger();
  initTerminal();
});

/* ---------------- Theme ---------------- */
function initTheme() {
  const body = document.body;
  const toggle = document.getElementById('theme-toggle');
  const icon = toggle.querySelector('i');

  const saved = safeGet('theme');
  if (saved === 'light') {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    icon.className = 'fas fa-moon';
  }

  toggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    const isLight = body.classList.contains('light-mode');
    icon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
    safeSet('theme', isLight ? 'light' : 'dark');
  });
}

function safeGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}
function safeSet(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
}

/* ---------------- Scroll reveal ---------------- */
function initRevealOnScroll() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('in-view'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 6, 5) * 60}ms`;
    observer.observe(el);
  });
}

/* ---------------- Mobile nav ---------------- */
function initNavBurger() {
  const burger = document.getElementById('nav-burger');
  const nav = document.getElementById('main-nav');

  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------------- Terminal easter egg ---------------- */
function initTerminal() {
  const overlay = document.getElementById('terminal-overlay');
  const openBtns = [document.getElementById('terminal-toggle'), document.getElementById('footer-terminal-btn')];
  const closeBtn = document.getElementById('terminal-close');
  const input = document.getElementById('terminal-input');
  const outputArea = document.getElementById('terminal-output-area');

  const openTerminal = () => {
    overlay.hidden = false;
    input.value = '';
    setTimeout(() => input.focus(), 30);
  };
  const closeTerminal = () => { overlay.hidden = true; };

  openBtns.forEach(btn => btn && btn.addEventListener('click', openTerminal));
  closeBtn.addEventListener('click', closeTerminal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeTerminal(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.hidden) closeTerminal();
    if (e.key === '`' && overlay.hidden && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      openTerminal();
    }
  });

  const commands = buildCommandData();
  let history = [];
  let historyIndex = -1;

  function runCommand(raw) {
    const cmd = raw.trim();
    const key = cmd.toLowerCase();

    const echo = document.createElement('div');
    echo.className = 'command-output';

    const echoLine = document.createElement('div');
    echoLine.className = 'command-echo';
    const promptSpan = document.createElement('span');
    promptSpan.className = 'prompt';
    promptSpan.textContent = 'haricharan@portfolio:~$';
    echoLine.appendChild(promptSpan);
    echoLine.appendChild(document.createTextNode(' ' + cmd));
    echo.appendChild(echoLine);

    if (key === 'clear') {
      outputArea.replaceChildren();
      return;
    }

    const out = document.createElement('div');
    out.className = 'output';

    if (key === '') {
      return;
    } else if (commands[key]) {
      out.innerHTML = commands[key]; // static, hand-authored content only — no user input reflected
    } else {
      const p1 = document.createElement('p');
      p1.className = 'error';
      p1.textContent = `bash: ${cmd}: command not found`;
      const p2 = document.createElement('p');
      p2.style.color = 'var(--text-muted)';
      p2.style.marginTop = '8px';
      p2.textContent = "Type 'help' to see available commands.";
      out.appendChild(p1);
      out.appendChild(p2);
    }

    echo.appendChild(out);
    outputArea.appendChild(echo);
    const body = document.getElementById('terminal-body');
    body.scrollTop = body.scrollHeight;
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = input.value;
      if (val.trim()) { history.push(val); historyIndex = -1; }
      runCommand(val);
      input.value = '';
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const partial = input.value.toLowerCase();
      const matches = Object.keys(commands).filter(c => c.startsWith(partial));
      if (matches.length === 1) input.value = matches[0];
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        historyIndex++;
        input.value = history[history.length - 1 - historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        input.value = history[history.length - 1 - historyIndex];
      } else {
        historyIndex = -1;
        input.value = '';
      }
    }
  });
}

function buildCommandData() {
  return {
    help: `
      <p class="section-title-t">Available Commands</p>
      <p><span class="highlight">about</span> — quick bio</p>
      <p><span class="highlight">experience</span> — where I've worked</p>
      <p><span class="highlight">projects</span> — things I've built</p>
      <p><span class="highlight">skills</span> — toolbox</p>
      <p><span class="highlight">contact</span> — how to reach me</p>
      <p><span class="highlight">whoami</span>, <span class="highlight">sudo</span>, <span class="highlight">matrix</span> — easter eggs</p>
      <p><span class="highlight">clear</span> — clear this terminal</p>
    `,
    about: `
      <p class="success">Haricharan S — Senior Data Scientist, AI &amp; LLM Security</p>
      <p>CMU MS in Information Security. Ex-red teamer at Ernst &amp; Young, ex-AI Security intern at Optum.
      Currently building red/blue-team AI defenses at Fractal Analytics.</p>
    `,
    experience: `
      <p class="success">Experience</p>
      <p>Sr. Data Scientist @ Fractal Analytics (Feb 2026–Present)</p>
      <p>AI Security Intern @ Optum (Jun–Aug 2025)</p>
      <p>Senior Cybersecurity Consultant @ Ernst &amp; Young (Jul 2022–Jul 2024)</p>
    `,
    projects: `
      <p class="success">Selected Projects</p>
      <p>PyDiffer, SmartGuard, NetSpector, SFSView, CVE-2024-42049 PoC, Cloud Security Infra</p>
      <p style="color: var(--text-muted); margin-top:8px;">See the full write-ups in the main page's Projects section.</p>
    `,
    skills: `
      <p class="success">Toolbox</p>
      <p><span class="skill-tag">Adversarial ML</span><span class="skill-tag">LLM Security</span><span class="skill-tag">Red Teaming</span><span class="skill-tag">Python</span><span class="skill-tag">Burp Suite</span><span class="skill-tag">Terraform</span></p>
    `,
    contact: `
      <p class="success">Contact</p>
      <p>Email: sharicharan1729@gmail.com</p>
      <p>LinkedIn: linkedin.com/in/haricharans</p>
      <p>GitHub: github.com/haricharan12</p>
    `,
    whoami: `<p class="success">haricharan — Red Teamer turned AI Security Data Scientist</p>`,
    pwd: `<p>/home/haricharan/portfolio</p>`,
    ls: `<p>about.txt  experience.log  projects/  skills.sh  contact.vcf</p>`,
    sudo: `<p class="error">Nice try! But you're not getting root access here.</p>`,
    hack: `<p class="warning">Hacking in progress... just kidding, I only hack ethically.</p>`,
    matrix: `<p class="success" style="color:#3ddc84;">Wake up, Neo...</p>`,
    coffee: `<p>Brewing coffee — a security researcher's best friend.</p>`,
    nmap: `<p class="warning">Starting Nmap scan... just viewing my portfolio though.</p>`
  };
}
