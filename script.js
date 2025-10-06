// Theme Management
function toggleTheme() {
    const body = document.body;
    const toggle = document.querySelector('.theme-toggle i');

    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    if (body.classList.contains('light-mode')) {
        toggle.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    } else {
        toggle.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const toggle = document.querySelector('.theme-toggle i');

    if (savedTheme === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        toggle.className = 'fas fa-moon';
    } else {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        toggle.className = 'fas fa-sun';
    }
});

// Command Data
const commands = {
    help: {
        description: 'Display available commands',
        output: `
<div class="section-title"><i class="fas fa-terminal"></i> Available Commands</div>
<div class="help-table">
    <div class="help-row">
        <span class="help-command">about</span>
        <span class="help-description">Learn more about me</span>
    </div>
    <div class="help-row">
        <span class="help-command">skills</span>
        <span class="help-description">View my technical skills</span>
    </div>
    <div class="help-row">
        <span class="help-command">experience</span>
        <span class="help-description">View my professional experience</span>
    </div>
    <div class="help-row">
        <span class="help-command">research</span>
        <span class="help-description">View my research & academic projects</span>
    </div>
    <div class="help-row">
        <span class="help-command">education</span>
        <span class="help-description">View my educational background</span>
    </div>
    <div class="help-row">
        <span class="help-command">achievements</span>
        <span class="help-description">View my certifications and achievements</span>
    </div>
    <div class="help-row">
        <span class="help-command">contact</span>
        <span class="help-description">Get in touch with me</span>
    </div>
    <div class="help-row">
        <span class="help-command">clear</span>
        <span class="help-description">Clear the terminal</span>
    </div>
    <div class="help-row">
        <span class="help-command">resume</span>
        <span class="help-description">View resume links</span>
    </div>
</div>
        `
    },

    about: {
        description: 'About Haricharan',
        output: `
<div class="section-title"><i class="fas fa-user"></i> About Me</div>
<div class="section-content">
    <p>Hi! I'm <strong>Haricharan S</strong>, a cybersecurity professional specializing in <strong>Application Security, Red Teaming, AI Security, and Security Research</strong>.</p>
    <br>
    <p>Currently pursuing my <strong>Master of Science in Information Technology - Information Security</strong> at <strong>Carnegie Mellon University</strong>, I bring experience from <strong>Optum (UnitedHealth Group)</strong> as an AI Security Intern and <strong>Ernst & Young</strong> as a Senior Cybersecurity Consultant and Red Teamer.</p>
    <br>
    <p>🎯 <strong>Specializations:</strong></p>
    <ul style="margin-left: 20px; margin-top: 8px;">
        <li>Application Security (SAST/DAST, Secure Code Review, Threat Modeling)</li>
        <li>Red Team Assessments & Offensive Security</li>
        <li>AI Security & MCP Security Framework Development</li>
        <li>Vulnerability Research & Exploit Development</li>
        <li>Third-Party Risk Assessment & Vendor Security</li>
        <li>Host-Based Forensics & Malware Analysis</li>
        <li>Mobile & IoT Security</li>
    </ul>
    <br>
    <p>🏆 <strong>Certified Red Team Professional (CRTP)</strong> | <strong>Azure Security Engineer (AZ-500)</strong> | <strong>CCNA</strong> | <strong>IoT Security Specialist</strong></p>
    <p>🎮 CTF Competitor at <strong>Plaid Parliament of Pwning (PPP)</strong> - CMU's elite CTF team</p>
    <br>
    <p>📍 <strong>Based in Mountain View, CA</strong></p>
    <br>
    <p>I'm passionate about securing AI systems, finding vulnerabilities in applications, and building security tools. My research includes developing forensic toolkits, AI-powered phishing detection, and exploit development for CVEs.</p>
</div>
        `
    },

    skills: {
        description: 'Technical Skills',
        output: `
<div class="section-title"><i class="fas fa-code"></i> Technical Skills</div>
<div class="skills-grid">
    <div class="skill-category">
        <h4><i class="fas fa-terminal"></i> Platforms</h4>
        <div>
            <span class="skill-tag">Kali Linux</span>
            <span class="skill-tag">GNU/Linux</span>
            <span class="skill-tag">Windows</span>
            <span class="skill-tag">Docker</span>
            <span class="skill-tag">Azure</span>
            <span class="skill-tag">AWS</span>
        </div>
    </div>

    <div class="skill-category">
        <h4><i class="fas fa-shield-alt"></i> Application Security</h4>
        <div>
            <span class="skill-tag">Secure SDLC</span>
            <span class="skill-tag">Threat Modeling</span>
            <span class="skill-tag">Secure Code Review</span>
            <span class="skill-tag">SAST/DAST</span>
            <span class="skill-tag">Semgrep</span>
            <span class="skill-tag">SonarQube</span>
            <span class="skill-tag">CodeQL</span>
        </div>
    </div>

    <div class="skill-category">
        <h4><i class="fas fa-code"></i> Languages</h4>
        <div>
            <span class="skill-tag">Python</span>
            <span class="skill-tag">C</span>
            <span class="skill-tag">C#</span>
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">Go</span>
            <span class="skill-tag">Java</span>
            <span class="skill-tag">Bash</span>
        </div>
    </div>

    <div class="skill-category">
        <h4><i class="fas fa-tools"></i> Security Tools</h4>
        <div>
            <span class="skill-tag">Burp Suite</span>
            <span class="skill-tag">Nmap</span>
            <span class="skill-tag">Nessus</span>
            <span class="skill-tag">Wireshark</span>
            <span class="skill-tag">PowerShell</span>
            <span class="skill-tag">Git</span>
        </div>
    </div>

    <div class="skill-category">
        <h4><i class="fas fa-book"></i> Frameworks</h4>
        <div>
            <span class="skill-tag">NIST</span>
            <span class="skill-tag">AI RMF</span>
            <span class="skill-tag">ISO 27001</span>
            <span class="skill-tag">MITRE ATT&CK</span>
            <span class="skill-tag">CVSS v3.1</span>
        </div>
    </div>

    <div class="skill-category">
        <h4><i class="fas fa-wrench"></i> DevOps & IaC</h4>
        <div>
            <span class="skill-tag">Terraform</span>
            <span class="skill-tag">Ansible</span>
            <span class="skill-tag">CI/CD</span>
            <span class="skill-tag">Git</span>
        </div>
    </div>
</div>
        `
    },

    experience: {
        description: 'Professional Experience',
        output: `
<div class="section-title"><i class="fas fa-briefcase"></i> Professional Experience</div>

<div class="experience-item">
    <div class="item-header">
        <div>
            <div class="item-title">AI Security Intern</div>
            <div class="item-company">Optum (UnitedHealth Group) - Remote, USA</div>
        </div>
        <div class="item-date">June 2025 - August 2025</div>
    </div>
    <div class="item-description">
        <ul>
            <li>Performed <strong>vendor risk evaluations</strong> on third-party integrations within MCP workflows, aligning with enterprise third-party risk policies</li>
            <li>Integrated <strong>automated security checks into CI/CD pipelines</strong>, simulating continuous monitoring for external vendors covering <strong>90+ attack scenarios</strong></li>
            <li>Partnered with <strong>AI Governance and Cloud Security teams</strong> to embed third-party controls and automate risk reporting for AI Security controls</li>
            <li>Authored an <strong>enterprise-ready MCP Security Checklist</strong> (server, client/host, LLM adaptation & invocation, multi-MCP) linking each risk to concrete test and remediation, ready for CI/staging gates</li>
            <li>Aligned tool usage with internal security policies and threat models working closely with cross-functional security teams</li>
        </ul>
    </div>
</div>

<div class="experience-item">
    <div class="item-header">
        <div>
            <div class="item-title">Senior Cybersecurity Consultant</div>
            <div class="item-company">Ernst & Young - Bangalore, India</div>
        </div>
        <div class="item-date">July 2022 - July 2024</div>
    </div>
    <div class="item-description">
        <ul>
            <li>Performed <strong>vulnerability and third-party risk assessments</strong> across <strong>70+ applications and 10+ servers</strong>, applying CVSS v3.1 scoring to evaluate severity and business impact</li>
            <li>Supported <strong>supplier lifecycle management</strong> by reviewing vendor onboarding security posture and providing remediation guidance</li>
            <li>Contributed to client risk management programs by mapping vendor exposures to frameworks using <strong>NIST and ISO 27001</strong></li>
            <li>Used <strong>MITRE ATT&CK framework</strong> to analyze exploitation paths during Red Teaming, strengthening threat detection and prevention strategies</li>
            <li>Delivered dashboards and reports to stakeholders, translating <strong>technical vulnerabilities into actionable business risk insights</strong></li>
        </ul>
    </div>
</div>
        `
    },

    research: {
        description: 'Research & Academic Projects',
        output: `
<div class="section-title"><i class="fas fa-flask"></i> Academic Research & Projects</div>

<div class="project-item">
    <div class="item-header">
        <div class="item-title">🤖 SmartGuard - AI-Powered Phishing Detection Tool</div>
    </div>
    <div class="item-description">
        <ul>
            <li>Built in <strong>Python</strong>, leveraging machine learning models for automated email analysis</li>
            <li>Automated phishing detection pipeline with <strong>real-time threat classification</strong></li>
            <li>Focused on AI security and adversarial machine learning techniques</li>
        </ul>
    </div>
</div>

<div class="project-item">
    <div class="item-header">
        <div class="item-title">🔍 SFSView - SquashFS Forensic Toolkit</div>
    </div>
    <div class="item-description">
        <ul>
            <li>Developed a <strong>pure-Python forensic toolkit</strong> for SquashFS analysis</li>
            <li>Enables reliable parsing of superblocks, inodes, and metadata even from <strong>corrupted images</strong></li>
            <li>Designed modular CLI architecture supporting extensible commands for file system inspection and metadata recovery</li>
            <li>Critical for incident response and digital forensics investigations</li>
        </ul>
    </div>
</div>

<div class="project-item">
    <div class="item-header">
        <div class="item-title">🛡️ NetSpector - Network Traffic Analysis & Anomaly Detection</div>
    </div>
    <div class="item-description">
        <ul>
            <li>Created in <strong>C and Python</strong> for advanced network traffic analysis</li>
            <li>Real-time anomaly detection using machine learning algorithms</li>
            <li>Identifies suspicious patterns indicating potential security threats</li>
        </ul>
    </div>
</div>

<div class="project-item">
    <div class="item-header">
        <div class="item-title">🔓 CVE-2024-42049 TightVNC Exploit Development</div>
    </div>
    <div class="item-description">
        <ul>
            <li>Created exploit for <strong>CVE-2024-42049</strong> in TightVNC Server</li>
            <li>Enables remote access through <strong>named pipe vulnerabilities</strong> and password decryption</li>
            <li>Demonstrated Windows privilege escalation and post-exploitation techniques</li>
        </ul>
    </div>
</div>

<div class="project-item">
    <div class="item-header">
        <div class="item-title">🔐 Apple App Store Privacy Label Usability Research</div>
    </div>
    <div class="item-description">
        <ul>
            <li>Conducted <strong>user interviews and qualitative analysis</strong> on Apple's App Store privacy definitions</li>
            <li>Uncovered key usability gaps in privacy label design</li>
            <li>Delivered <strong>actionable recommendations to Apple</strong> through concrete examples and user-centric terminology</li>
        </ul>
    </div>
</div>

<div class="project-item">
    <div class="item-header">
        <div class="item-title">☁️ Automated Cloud Security Infrastructure (Terraform + Python)</div>
    </div>
    <div class="item-description">
        <ul>
            <li>Devised <strong>Terraform and Python-based automated setup</strong> for cloud-hosted security assessment environments</li>
            <li>Includes infrastructure provisioning, access control, and automated tool deployment</li>
            <li>Implemented for spear phishing assessments with enterprise-grade security controls</li>
        </ul>
    </div>
</div>

<div class="project-item">
    <div class="item-header">
        <div class="item-title">🚩 CTF Competitions - Plaid Parliament of Pwning</div>
    </div>
    <div class="item-description">
        <ul>
            <li>Competed in <strong>CTF tournaments</strong> as part of CMU's elite CTF team</li>
            <li>Specialized in web security, cryptography, and forensics challenges</li>
        </ul>
    </div>
</div>
        `
    },

    projects: {
        description: 'Research & Academic Projects (alias)',
        output: `
<div class="section-content">
    <p class="info-text">Use the command <span class="highlight">research</span> to view my academic research and projects.</p>
</div>
        `
    },

    education: {
        description: 'Educational Background',
        output: `
<div class="section-title"><i class="fas fa-graduation-cap"></i> Education</div>

<div class="education-item">
    <div class="item-header">
        <div>
            <div class="item-title">Master of Science in Information Technology</div>
            <div class="item-company">Carnegie Mellon University, Mountain View, CA</div>
        </div>
        <div class="item-date">Aug 2024 - Dec 2025</div>
    </div>
    <div class="item-description">
        <p><strong>Specialization:</strong> Information Security</p>
        <p><strong>Relevant Coursework:</strong></p>
        <ul>
            <li><strong>Adversarial Machine Learning</strong> - AI Security & ML model attacks</li>
            <li><strong>Mobile and IoT Security</strong> - Embedded systems & wireless security</li>
            <li><strong>Host-Based Forensics</strong> - Digital forensics & incident response</li>
            <li><strong>Computer Networks</strong> - Network protocols & security</li>
            <li><strong>Usable Privacy and Security</strong> - Human factors in security</li>
            <li><strong>Hacking and Offensive Security</strong> - Penetration testing & exploit dev</li>
            <li><strong>AI Governance</strong> - AI ethics & regulatory compliance</li>
            <li><strong>Cyber Risk Modeling</strong> - Quantitative risk assessment</li>
        </ul>
        <br>
        <p>🏆 <strong>Scholarship Recipient</strong> for the MSIT-IS program at INI</p>
        <p>🎮 Active member of <strong>Plaid Parliament of Pwning (PPP)</strong> - CMU's CTF team</p>
    </div>
</div>

<div class="education-item">
    <div class="item-header">
        <div>
            <div class="item-title">Bachelor of Technology in Electronics and Communication</div>
            <div class="item-company">Vellore Institute of Technology, Vellore, India</div>
        </div>
        <div class="item-date">July 2018 - May 2022</div>
    </div>
    <div class="item-description">
        <p><strong>Relevant Coursework:</strong></p>
        <ul>
            <li>Signal Processing</li>
            <li>Communication Systems</li>
            <li>Machine Learning and Algorithms</li>
            <li>Cryptography and Network Security</li>
        </ul>
    </div>
</div>
        `
    },

    achievements: {
        description: 'Certifications and Achievements',
        output: `
<div class="section-title"><i class="fas fa-trophy"></i> Achievements & Certifications</div>
<div class="achievement-list">
    <div class="achievement-badge">
        <i class="fas fa-certificate"></i>
        <div>
            <strong>Certified Red Team Professional (CRTP)</strong><br>
            <span style="color: var(--text-muted); font-size: 0.9rem;">Altered Security - Active Directory Penetration Testing & Red Teaming</span>
        </div>
    </div>

    <div class="achievement-badge">
        <i class="fas fa-cloud"></i>
        <div>
            <strong>Microsoft Azure Security Engineer Associate (AZ-500)</strong><br>
            <span style="color: var(--text-muted); font-size: 0.9rem;">Microsoft Certified - Cloud Security Expert</span>
        </div>
    </div>

    <div class="achievement-badge">
        <i class="fas fa-cloud"></i>
        <div>
            <strong>Microsoft Azure Fundamentals (AZ-900)</strong><br>
            <span style="color: var(--text-muted); font-size: 0.9rem;">Microsoft Certified - Cloud Computing Fundamentals</span>
        </div>
    </div>

    <div class="achievement-badge">
        <i class="fas fa-network-wired"></i>
        <div>
            <strong>Cisco Certified Network Associate (CCNA)</strong><br>
            <span style="color: var(--text-muted); font-size: 0.9rem;">Cisco - Network Security & Infrastructure</span>
        </div>
    </div>

    <div class="achievement-badge">
        <i class="fas fa-microchip"></i>
        <div>
            <strong>IoT Security Domain Specialist</strong><br>
            <span style="color: var(--text-muted); font-size: 0.9rem;">Specialized certification in Internet of Things Security</span>
        </div>
    </div>

    <div class="achievement-badge">
        <i class="fas fa-flag"></i>
        <div>
            <strong>CTF Competitor - Plaid Parliament of Pwning (PPP)</strong><br>
            <span style="color: var(--text-muted); font-size: 0.9rem;">Carnegie Mellon University's Elite CTF Team</span>
        </div>
    </div>

    <div class="achievement-badge">
        <i class="fas fa-award"></i>
        <div>
            <strong>Scholarship Recipient</strong><br>
            <span style="color: var(--text-muted); font-size: 0.9rem;">MSIT-IS Program at INI, Carnegie Mellon University</span>
        </div>
    </div>
</div>
        `
    },

    contact: {
        description: 'Contact Information',
        output: `
<div class="section-title"><i class="fas fa-envelope"></i> Get In Touch</div>
<div class="section-content">
    <p>Feel free to reach out to me through any of the following channels:</p>
    <br>
    <div class="contact-links">
        <a href="mailto:sharicharan1729@gmail.com" class="contact-link" target="_blank">
            <i class="fas fa-envelope"></i>
            <span>sharicharan1729@gmail.com</span>
        </a>

        <a href="https://linkedin.com/in/haricharans" class="contact-link" target="_blank">
            <i class="fab fa-linkedin"></i>
            <span>linkedin.com/in/haricharans</span>
        </a>

        <a href="https://github.com/haricharan12" class="contact-link" target="_blank">
            <i class="fab fa-github"></i>
            <span>github.com/haricharan12</span>
        </a>
    </div>
    <br>
    <p style="color: var(--text-muted); margin-top: 20px;">
        📍 Currently based in <strong>Mountain View, CA</strong><br>
        💼 Open to <strong>Security Engineer, Red Teamer, Security Researcher, and Application Security Engineer</strong> positions<br>
        🔬 Passionate about AI Security, Red Teaming, Vulnerability Research, and Application Security<br>
        🌐 Available for security consulting and research collaboration
    </p>
</div>
        `
    },

    clear: {
        description: 'Clear terminal',
        action: 'clear'
    },

    resume: {
        description: 'View resume links',
        output: `
<div class="section-content">
    <p class="success">📄 Resume & Professional Profiles</p>
    <br>
    <p>View my detailed professional profile and connect with me:</p>
    <br>
    <div class="contact-links">
        <a href="https://linkedin.com/in/haricharans" class="contact-link" target="_blank">
            <i class="fab fa-linkedin"></i>
            <span>LinkedIn Profile</span>
        </a>
        <a href="https://github.com/haricharan12" class="contact-link" target="_blank">
            <i class="fab fa-github"></i>
            <span>GitHub Profile</span>
        </a>
    </div>
    <br>
    <p style="color: var(--text-muted);">💡 Tip: Email me at <strong>sharicharan1729@gmail.com</strong> to request my latest resume.</p>
</div>
        `
    }
};

// Command Execution
function executeCommand(cmd) {
    const outputArea = document.getElementById('output-area');
    const input = cmd.trim().toLowerCase();

    // Create command echo
    const commandEcho = document.createElement('div');
    commandEcho.className = 'command-output';
    commandEcho.innerHTML = `
        <div class="command-echo">
            <span class="prompt">haricharan@portfolio:~$</span> ${cmd}
        </div>
    `;

    // Handle command
    if (input === 'clear') {
        outputArea.innerHTML = '';
        return;
    }

    const commandOutput = document.createElement('div');
    commandOutput.className = 'output';

    if (commands[input]) {
        commandOutput.innerHTML = commands[input].output;
    } else if (input === '') {
        return;
    } else {
        commandOutput.innerHTML = `
            <p class="error">bash: ${cmd}: command not found</p>
            <p style="color: var(--text-muted); margin-top: 8px;">Type <span class="highlight">help</span> to see available commands.</p>
        `;
    }

    commandEcho.appendChild(commandOutput);
    outputArea.appendChild(commandEcho);

    // Scroll to bottom
    const terminal = document.querySelector('.terminal-body');
    terminal.scrollTop = terminal.scrollHeight;
}

// Input handling
const commandInput = document.getElementById('command-input');

commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = commandInput.value;
        executeCommand(cmd);
        commandInput.value = '';
    } else if (e.key === 'Tab') {
        e.preventDefault();
        // Simple autocomplete
        const input = commandInput.value.toLowerCase();
        const matches = Object.keys(commands).filter(cmd => cmd.startsWith(input));
        if (matches.length === 1) {
            commandInput.value = matches[0];
        }
    }
});

// Command history
let commandHistory = [];
let historyIndex = -1;

commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            commandInput.value = commandHistory[commandHistory.length - 1 - historyIndex];
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            commandInput.value = commandHistory[commandHistory.length - 1 - historyIndex];
        } else {
            historyIndex = -1;
            commandInput.value = '';
        }
    } else if (e.key === 'Enter') {
        if (commandInput.value.trim()) {
            commandHistory.push(commandInput.value);
            historyIndex = -1;
        }
    }
});

// Keep input focused
document.addEventListener('click', (e) => {
    if (!e.target.matches('a, button, .contact-link')) {
        commandInput.focus();
    }
});

// Easter eggs
const easterEggs = {
    'whoami': '<p class="success">haricharan - Red Teamer | Security Researcher | AppSec Engineer</p>',
    'pwd': '<p>/home/haricharan/portfolio</p>',
    'ls': '<p>about.txt  skills.sh  experience.log  research/  education.md  contact.vcf</p>',
    'sudo': '<p class="error">Nice try! But you\'re not getting root access here 😄</p>',
    'hack': '<p class="warning">Hacking in progress... Just kidding! I only hack ethically 🛡️</p>',
    'matrix': '<p class="success" style="color: #00ff00;">Wake up, Neo... The Matrix has you... 🕶️</p>',
    'coffee': '<p>☕ Brewing coffee... A security researcher\'s best friend!</p>',
    'echo': '<p>Hello, World!</p>',
    'cat /etc/passwd': '<p class="error">Permission denied. This is a portfolio, not a vulnerable server! 😅</p>',
    'nmap': '<p class="warning">Starting Nmap scan... Just viewing my portfolio though! 🔍</p>'
};

// Override executeCommand to include easter eggs
const originalExecute = executeCommand;
executeCommand = function(cmd) {
    const input = cmd.trim().toLowerCase();

    if (easterEggs[input]) {
        const outputArea = document.getElementById('output-area');
        const commandEcho = document.createElement('div');
        commandEcho.className = 'command-output';
        commandEcho.innerHTML = `
            <div class="command-echo">
                <span class="prompt">haricharan@portfolio:~$</span> ${cmd}
            </div>
            <div class="output">${easterEggs[input]}</div>
        `;
        outputArea.appendChild(commandEcho);

        const terminal = document.querySelector('.terminal-body');
        terminal.scrollTop = terminal.scrollHeight;
        return;
    }

    originalExecute(cmd);
};
