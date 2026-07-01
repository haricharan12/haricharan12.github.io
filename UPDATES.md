# Portfolio Updates — June 2026 Follow-up

- Removed the terminal easter egg entirely (overlay, toggle button, footer link, and all supporting CSS/JS) —
  the page is now purely the narrative layout.
- Contact section rebuilt as three branded action buttons: Gmail (opens a compose window addressed to
  sharicharan1729@gmail.com), LinkedIn, and GitHub.
- About section redone: removed the line about currently competing on CMU's CTF team, tightened the
  narrative, and replaced the small fact-card grid with a pull-quote plus a stat grid (apps assessed,
  vulnerabilities reported, attack-surface reduction, CMU MS) for a more visual, less resume-like feel.

---

# Portfolio Updates — June 2026 Redesign

## Full layout redesign

Replaced the terminal-only interface with a modern, narrative-driven single page (hero, about, experience
timeline, project bento grid, skills, contact). The Linux terminal is preserved as an opt-in easter egg
(terminal icon in the header, or the footer link, or pressing `` ` ``) rather than the default experience —
research showed a CLI-only interface reads as a barrier to non-technical recruiters and hiring managers.

Also added, based on subagent research into AI-crawler friendliness and static-site security hardening:
- `llms.txt`, `robots.txt` (with explicit allow rules for GPTBot/ClaudeBot/PerplexityBot/Google-Extended), `sitemap.xml`
- schema.org `Person`/`ProfilePage` JSON-LD, Open Graph and Twitter Card meta tags
- A strict `Content-Security-Policy` meta tag (`script-src 'self'`), removal of all inline `onclick` handlers
  in favor of `addEventListener`, and `textContent`/DOM-node construction instead of `innerHTML` wherever the
  content isn't fixed, hand-authored HTML

## Content refresh (reconciled from 3 uploaded resumes, June 2026)

- Current role updated: **Senior Data Scientist, Fractal Analytics** (Palo Alto, CA — Feb 2026–Present),
  building red-team/blue-team AI agent networks and guardrails for enterprise AI
- Location updated to San Francisco Bay Area
- Positioning shifted from pure "Red Teamer" to **AI & LLM Security / Senior Data Scientist**, reflecting the
  career move from offensive security into securing agentic AI systems
- Experience, education, skills, certifications, and the projects list (PyDiffer, SmartGuard, NetSpector,
  SFSView, CVE-2024-42049 PoC, cloud security automation, Apple privacy research) reconciled across the three
  resumes into one consistent, current profile
- Phone number kept out of all public sections (email/LinkedIn/GitHub only), consistent with prior privacy choice

---

# Portfolio Updates - Latest Resume (2025)

## ✅ Changes Made

### Personal Information
- ✅ **Phone number removed** from all sections
- ✅ **Location updated** to Mountain View, CA
- ✅ Name updated to "Haricharan S" (shortened)

### Focus & Positioning
Repositioned for **Security Engineer / Security Researcher / Application Security Engineer** roles:
- Emphasis on Application Security (SAST/DAST, Secure Code Review, Threat Modeling)
- AI Security & MCP Security Framework Development
- Vulnerability Research & Exploit Development
- Third-Party Risk & Vendor Security

### Updated Sections

#### 1. **About Me**
- New specializations focused on AppSec and AI Security
- Added Optum (UnitedHealth Group) AI Security Intern experience
- Updated certifications: Added CCNA and IoT Security Specialist
- Changed location to Mountain View, CA
- Updated passion statement for AI security and application security

#### 2. **Skills**
- **New Category**: Application Security (SAST/DAST, Semgrep, SonarQube, CodeQL)
- **New Category**: Frameworks (NIST, AI RMF, ISO 27001, MITRE ATT&CK, CVSS v3.1)
- Added C# to programming languages
- Updated tools section

#### 3. **Experience**
- **Added**: AI Security Intern at Optum (June 2025 - August 2025)
  - Vendor risk evaluations for MCP workflows
  - CI/CD pipeline security automation (90+ attack scenarios)
  - Enterprise MCP Security Checklist development
  - AI Governance collaboration
- **Updated**: Ernst & Young position to Senior Cybersecurity Consultant
  - Focused on third-party risk and vendor security
  - Added CVSS v3.1, NIST, ISO 27001 framework usage
  - Emphasized business risk translation

#### 4. **Research & Academic Projects** (New Section)
Replaced "Projects" with "Research" to highlight academic work:
- **SmartGuard**: AI-Powered Phishing Detection Tool
- **SFSView**: SquashFS Forensic Toolkit (NEW - from latest resume)
- **NetSpector**: Network Traffic Analysis
- **CVE-2024-42049**: TightVNC Exploit Development (NEW)
- **Apple Privacy Research**: App Store Privacy Label Usability (NEW)
- **Cloud Security Infrastructure**: Terraform + Python automation
- **CTF Competitions**: PPP team participation

#### 5. **Education**
- Updated Carnegie Mellon location to Mountain View, CA
- **New Coursework** from latest resume:
  - Adversarial Machine Learning
  - Mobile and IoT Security
  - Host-Based Forensics
  - Computer Networks
  - Usable Privacy and Security
  - AI Governance
  - Cyber Risk Modeling

#### 6. **Achievements**
- Added **CCNA** certification
- Added **IoT Security Domain Specialist** certification
- Kept CRTP, AZ-500, AZ-900
- CTF competitor status
- CMU Scholarship

#### 7. **Contact**
- **Removed**: Phone number completely
- Updated location to Mountain View, CA
- Updated position focus to Security Engineer, Security Researcher, AppSec Engineer
- Emphasized AI Security and Application Security

### Navigation Updates
- Changed "Projects" button to "Research" (with flask icon)
- Kept backward compatibility: typing "projects" redirects to research

### Content Highlights for Target Roles

#### Security Engineer
- ✅ Third-party risk assessment experience (70+ apps, 10+ servers)
- ✅ CVSS v3.1 scoring and vulnerability management
- ✅ Framework knowledge (NIST, ISO 27001, MITRE ATT&CK)
- ✅ CI/CD security automation
- ✅ Cloud security (Azure, AWS)

#### Security Researcher
- ✅ CVE-2024-42049 exploit development
- ✅ Forensic toolkit development (SFSView)
- ✅ AI-powered security tools (SmartGuard)
- ✅ CTF competitions (PPP team)
- ✅ Academic research publications/presentations

#### Application Security Engineer
- ✅ Secure SDLC implementation
- ✅ SAST/DAST tools (Semgrep, SonarQube, CodeQL)
- ✅ Secure code review experience
- ✅ Threat modeling expertise
- ✅ AI security for applications (MCP security checklist)

## 🎯 Key Differentiators

1. **AI Security Experience**: Unique Optum internship with MCP security framework
2. **Vendor Risk**: Enterprise third-party risk assessment experience
3. **Research Background**: Multiple academic projects and CVE exploit development
4. **Frameworks**: Deep knowledge of NIST, AI RMF, ISO 27001, MITRE ATT&CK
5. **AppSec Tools**: Hands-on with Semgrep, SonarQube, CodeQL
6. **Elite CTF Team**: Plaid Parliament of Pwning (PPP) at CMU

## 📁 Files Updated
- ✅ index.html - Updated meta description and welcome text
- ✅ script.js - Complete content rewrite with latest resume data
- ✅ styles.css - No changes (already supports all features)
- ✅ README.md - Original instructions (still valid)

## 🚀 Ready to Deploy
The website is fully updated and ready to deploy to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting platform

---

**Last Updated**: October 5, 2025
**Based on**: Resume - Haricharan S-2.pdf
