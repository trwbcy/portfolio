// === DATA SOURCE ===
const projectsData = [
    { 
        title: "CVE-2026-2770 Reproduction: Firefox SpiderMonkey UAF", 
        desc: "Successfully reproduced critical Use-After-Free vulnerability (CVSS 9.8) in WebAssembly GC. Developed custom exploitation chain achieving 100% detection rate without using the original researcher's method.", 
        tags: ["Exploit Dev", "RCE", "Reproduction"], 
        type: "red", 
        url: "https://drive.google.com/file/d/1bPNmwY9bWuNRNkc1ZIat1raaMYG7Tr9s/view?usp=sharing" 
    },
    { title: "Astaroth-Style Red Team Campaign", desc: "Fileless attack simulation leveraging LOLBins. Achieved 100% success rate with 0 Defender alerts on fully patched Windows 10.", tags: ["Red Team", "LOLBins", "Evasion"], type: "red", url: "https://drive.google.com/file/d/1DhZtAo6jz6IwP4tEQVmE8hZRTYvcBGdf/view?usp=sharing" },
    {title: "SOC Homelab Project", desc:"Replicating a full enterprise SOC stack SIEM, NDR, XDR, SOAR, Firewall, WAF, Vulnerability Scanner & Email Security. Using 100% opensource tools", tags: ["Blue Team", "Mini SOC Ecosystem", "Superb Project"], type: "blue", url: "https://drive.google.com/file/d/1roFjqEnSYcKne11lQxaABe4SydxYulCv/view?usp=sharing"},
    { title: "EDR Detection Lab with Wazuh", desc: "Built comprehensive EDR environment detecting 15/15 MITRE ATT&CK techniques. Automated response reduced time to sub-5 minutes.", tags: ["Blue Team", "Wazuh", "Detection"], type: "blue", url: "https://nickel-bedbug-8cc.notion.site/Building-EDR-Detection-Lab-with-Wazuh-From-Detection-to-Response-27f416e03a1380b9b318fb215aeca082" },
    { title: "SandTrap: Breaking Virtual Boundaries", desc: "Offensive toolkit leveraging hardware fingerprinting and timing attacks to bypass VM sandbox environments.", tags: ["C++", "Sandbox Evasion", "Red Team"], type: "red", url: "https://nickel-bedbug-8cc.notion.site/SandTrap-Breaking-Virtual-Boundaries-2f2416e03a13802bba9aebc2cace4536" },
    { title: "ShadowShell: ETW Evasion Framework", desc: "Comprehensive framework designed to evade Windows Event Tracing (ETW) logging system during red team operations.", tags: ["C#", "ETW Evasion", "Windows"], type: "red", url: "https://nickel-bedbug-8cc.notion.site/ShadowShell-Advanced-ETW-Evasion-Framework-for-Red-Team-Operations-277416e03a13801b97c1ec43b2ac6c77" },
    { title: "GhostStager: Fileless Binary Loader", desc: "Advanced C# fileless binary loader with AMSI/ETW bypass and encrypted C2 communication.", tags: ["C#", "Red Team", "Sliver C2"], type: "red", url: "https://nickel-bedbug-8cc.notion.site/GhostStager-Advanced-C-Fileless-Binary-Loader-For-Red-Team-Operation-23b416e03a138025b44ff54e56424636" },
    { title: "EnvGuard: Environment Assessment", desc: "Advanced framework implementing 12 classification techniques to distinguish production from analysis systems.", tags: ["C++", "Sandbox", "Red Team"], type: "red", url: "https://nickel-bedbug-8cc.notion.site/EnvGuard-Advanced-Environment-Assessment-Framework-For-Red-Team-Operations-274416e03a1380b58fefde598b68c47b" },
    { title: "SOC Confessions", desc: "A narrative project uncovering the unseen emotions behind blue team vigilance in a Security Operations Center.", tags: ["Blue Team", "Storytelling", "SOC"], type: "blue", url: "#" },
    { title: "Internal Pentest: Active Directory", desc: "Hands-on internal penetration testing identifying and exploiting vulnerabilities in Active Directory environments.", tags: ["Pentest", "AD", "Windows"], type: "red", url: "https://nickel-bedbug-8cc.notion.site/Internal-Pentest-Active-Directory-Exploitation-and-Lesson-Learned-17a416e03a1380449524cf6cad46accb" },
    { title: "Building SIEM Lab with Splunk", desc: "First blue team project building a functional SIEM environment using Splunk Free Edition.", tags: ["Splunk", "SIEM", "Blue Team"], type: "blue", url: "https://nickel-bedbug-8cc.notion.site/From-Zero-to-SOC-Hero-Building-My-First-SIEM-Lab-27d416e03a1380ba9aded15f489ca23b" }
];

const certsData = [
    { 
        name: "Certified Network Security Practitioner", 
        issuer: "The SecOps Group", 
        year: "2025", 
        status: "Merit Graduate", 
        url: "https://drive.google.com/file/d/1n3vkEEz4tGQjkw7M0-AJ-gqs6zbWM8jx/view" 
    },
    { 
        name: "Certified API Security Practitioner", 
        issuer: "APISEC University", 
        year: "2025", 
        status: "", 
        url: "https://drive.google.com/file/d/1CRK94BK63ABk-ajIGjfTTr02uAQHlVX0/view" 
    },
    { 
        name: "Red Team Internship Certification", 
        issuer: "HackSecure", 
        year: "2025", 
        status: "", 
        url: "https://drive.google.com/file/d/1niU5gbyWGn9RKDlraltHsQJB2qQcSuJt/view" 
    },
    { 
        name: "Advent of Cyber", 
        issuer: "TryHackMe", 
        year: "2023, 2025", 
        status: "", 
        url: "https://drive.google.com/file/d/14oS0UMAs2i_Tpg1qxue56YKdQgNQV7ED/view" 
    },
    { 
        name: "Practical Ethical Hacking", 
        issuer: "TCM Security", 
        year: "2024", 
        status: "", 
        url: "https://drive.google.com/file/d/1RlF6sWO6n0KrmY_BC-iOStDghOD3elSQ/view" 
    },
    { 
        name: "Practical Web App Penetration Testing", 
        issuer: "TCM Security", 
        year: "2024", 
        status: "", 
        url: "https://drive.google.com/file/d/1jd3WiqBs_8ZlITE3XoE-h6NCZ5X1Ywks/view" 
    },
    { 
        name: "Practical Web Hacking", 
        issuer: "TCM Security", 
        year: "2024", 
        status: "", 
        url: "https://drive.google.com/file/d/1mYYeCWeE8bAZDGc9m6f2L1qKh1MA40up/view" 
    },
    { 
        name: "IT Support Specialist", 
        issuer: "Google", 
        year: "2023", 
        status: "", 
        url: "https://drive.google.com/file/d/1RB5ehE_-DovC1sgoII2FhV55qoF9Zdgr/view" 
    }
];

const ctfData = [
    // === RED TEAM / OFFENSIVE ===
    { title: "Tartarus", type: "red", desc: "Android dummy APK & root access", url: "https://nickel-bedbug-8cc.notion.site/Tartarus-c50bfdc57e7d4cce8489d5fe989e4dc2" },
    { title: "Exodus", type: "red", desc: "NFS Enumeration, Webmin Exploit", url: "https://nickel-bedbug-8cc.notion.site/Exodus-100416e03a138073ba4cd8a5f721751f" },
    { title: "Laboum", type: "red", desc: "OSINT & Reverse Engineering", url: "https://nickel-bedbug-8cc.notion.site/Laboum-129416e03a1380bdbad4d3f15fb34af3" },
    { title: "Autobot", type: "red", desc: "SQL Injection Database", url: "https://nickel-bedbug-8cc.notion.site/Autobot-111416e03a13800ebe53de57e0e45947" },
    { title: "Developed", type: "red", desc: "Info.php & Shadow Cracking", url: "https://nickel-bedbug-8cc.notion.site/Developed-479c658cb5154c8b856254c1be04df53" },
    { title: "NebulaMQ", type: "red", desc: "Apache ActiveMQ Exploit", url: "https://nickel-bedbug-8cc.notion.site/NebulaMQ-912a195578dc4b498834b4e5129a9e06" },
    { title: "CornFlix", type: "red", desc: "SSRF to NTLM Spoofing", url: "https://nickel-bedbug-8cc.notion.site/CornFlix-724ee0c531aa4a96b68907276667abfb" },
    { title: "Ares", type: "red", desc: "Mantis Bug Tracker Exploit", url: "https://nickel-bedbug-8cc.notion.site/Ares-121416e03a1380cd9977d8edbbbc4387" },
    { title: "Toolbox", type: "red", desc: "Git History Exposure", url: "https://nickel-bedbug-8cc.notion.site/Toolbox-b68ce23a0ea74620bb35b3568b8381bd" },
    { title: "Multishop", type: "red", desc: "Command Injection", url: "https://nickel-bedbug-8cc.notion.site/Multishop-6c1a05a6222c4b30a09fb39e692f78b4" },
    { title: "Ballpoint", type: "red", desc: "LeptonCMS RCE", url: "https://nickel-bedbug-8cc.notion.site/Ballpoint-dcd2095e6cb14cedb53676fd482ebf11" },
    { title: "Syringe", type: "red", desc: "PHPMyAdmin Shell Injection", url: "https://nickel-bedbug-8cc.notion.site/Syringe-6fa9bd8970cc4867a85f850f41c055ef" },
    { title: "Bro", type: "red", desc: "SSTI Payload", url: "https://nickel-bedbug-8cc.notion.site/Bro-657a1bca712048a681c9cca960c0a6b4" },
    { title: "Telolet", type: "red", desc: "TorrentPier Info Leak", url: "https://nickel-bedbug-8cc.notion.site/Telolet-5368deb4f4744eefa8a502ab7816faf7" },
    { title: "Artemis", type: "red", desc: "Web Enumeration to Root", url: "https://nickel-bedbug-8cc.notion.site/Artemis-c2b66778e56f4a2facb6db3e763e0f77" },
    { title: "FOS", type: "red", desc: "Weak Creds to Command Inj", url: "https://nickel-bedbug-8cc.notion.site/FOS-112416e03a1380a083aef2624f4f9a5d" },
    { title: "Guesser", type: "red", desc: "RiteCMS Exploit", url: "https://nickel-bedbug-8cc.notion.site/Guesser-7f9d10c565034756ba7209478a746dc6" },
    { title: "Doom", type: "red", desc: "Full Privilege Access", url: "https://nickel-bedbug-8cc.notion.site/Doom-ff9747879d4f4b19a68ddc0fabb29dbc" },
    { title: "Galz", type: "red", desc: "Docker Breakout", url: "https://nickel-bedbug-8cc.notion.site/Galz-10a416e03a1380ecb522e65b4573dcd8" },
    { title: "Terra", type: "red", desc: "Adminer Remote Access", url: "https://nickel-bedbug-8cc.notion.site/Terra-106416e03a13809790dac7e3c050c6bf" },
    { title: "Traverse Mode", type: "red", desc: "Parameter Injection", url: "https://nickel-bedbug-8cc.notion.site/TraverseMode-99e7bf565d304c68a43f84ecefdb9f75" },
    { title: "Navigate", type: "red", desc: "NavigateCMS Root Access", url: "https://nickel-bedbug-8cc.notion.site/Navigate-f5678769d93c49589e207a84a72f6815" },
    { title: "Atulieer", type: "red", desc: "JWT Modification", url: "https://nickel-bedbug-8cc.notion.site/Atulieer-fdd3d8ac7a4f4ba4847550b8fdd46409" },
    { title: "Zeus", type: "red", desc: "SMB Enumeration Windows", url: "https://nickel-bedbug-8cc.notion.site/Zeus-aa5bb955bf1e4271ab303cc428c49fad" },
    { title: "Ariadne", type: "red", desc: "FTP Enumeration", url: "https://nickel-bedbug-8cc.notion.site/Ariadne-100416e03a1380969762d25c3cd1c9e5" },

    // === BLUE TEAM / DEFENSIVE ===
    { title: "Deviasi", type: "blue", desc: "Deep Log Analysis & IOCs", url: "https://nickel-bedbug-8cc.notion.site/Deviasi-Hacktrace-Ranges-2a0416e03a1380babf06e961fa506f1a" },
    { title: "Undercover", type: "blue", desc: "Binary Investigation APT", url: "https://nickel-bedbug-8cc.notion.site/Undercover-Hacktrace-Ranges-2a1416e03a1380028d39e07d1298f543" },
    { title: "BluuShell", type: "blue", desc: "Malicious DOCX Forensics", url: "https://nickel-bedbug-8cc.notion.site/BluuShell-Hacktrace-Ranges-2a4416e03a13809e98c5f10d33af37e0" },
    { title: "Vigil", type: "blue", desc: "Phishing Email Investigation", url: "https://nickel-bedbug-8cc.notion.site/Vigil-Hacktrace-Ranges-2a7416e03a1380608f90dc3d1c968d0a" },
    { title: "Actry", type: "blue", desc: "Brute-force Network Analysis", url: "https://nickel-bedbug-8cc.notion.site/Actry-Hacktrace-Ranges-2ab416e03a1380eea7e2c575be751af4" },
    { title: "PhishHunt", type: "blue", desc: "Email Header & Malware Extraction", url: "https://nickel-bedbug-8cc.notion.site/PhishHunt-Hacktrace-Ranges-2ab416e03a1380a8823dd96948d18587" },
    { title: "Unlucky", type: "blue", desc: "CVE-2017-11882 Excel Malware", url: "https://nickel-bedbug-8cc.notion.site/Unlucky-Hacktrace-Ranges-2ad416e03a13804f9869e0a43a83d82f" },
    { title: "NowYouSeeMe", type: "blue", desc: "EML Attachment Forensics", url: "https://nickel-bedbug-8cc.notion.site/NowYouSeeMe-Hacktrace-Ranges-2ae416e03a1380348bd4c349333f4992" },
    { title: "LogBreaker", type: "blue", desc: "Web Server Log Analysis", url: "https://nickel-bedbug-8cc.notion.site/LogBreaker-Hacktrace-Ranges-2af416e03a13805791b8df781eea969e" },
    { title: "PcapProbe", type: "blue", desc: "SQLi Traffic Analysis", url: "https://nickel-bedbug-8cc.notion.site/PcapProbe-Hacktrace-Ranges-2af416e03a1380099b84c435321ca93c" },
    { title: "Temptandum", type: "blue", desc: "Infostealer FTP Analysis", url: "https://nickel-bedbug-8cc.notion.site/Temptandum-Hacktrace-Ranges-2be416e03a1380ab9801efa7208c6b3c" },
    { title: "Misconf", type: "blue", desc: "Git Exposure Forensics", url: "https://nickel-bedbug-8cc.notion.site/Misconf-Hacktrace-Ranges-2cd416e03a138083a4e4deb69831f362" },
    { title: "Remembrance", type: "blue", desc: "Windows Memory Forensics", url: "https://nickel-bedbug-8cc.notion.site/Remembrance-Hacktrace-Ranges-2cf416e03a13800da0bbe5580bc5bcb6" },
    { title: "Uncut", type: "blue", desc: "AgentTesla Identification", url: "https://nickel-bedbug-8cc.notion.site/Uncut-Hacktrace-Ranges-2cf416e03a1380f18348c766b1242559" },
    { title: "IntrudeX", type: "blue", desc: "FTP Exploitation Forensics", url: "https://nickel-bedbug-8cc.notion.site/IntrudeX-Hacktrace-Ranges-2d8416e03a13806d909de39cafc43993" },
    { title: "Argus", type: "blue", desc: "Infection Chain Investigation", url: "https://nickel-bedbug-8cc.notion.site/Argus-Hacktrace-Ranges-2d8416e03a1380659811c01a0f7e4fe8" },
    { title: "SuperWhale", type: "blue", desc: "Docker Container Abuse", url: "https://nickel-bedbug-8cc.notion.site/Superwhale-Hacktrace-Ranges-2e2416e03a13803d8e09fc008db0ce5f" },
    { title: "Deimos", type: "blue", desc: "PCAP Malware Analysis", url: "https://nickel-bedbug-8cc.notion.site/Deimos-Hacktrace-Ranges-2e7416e03a1380cc9248e5b7179215b9" },
    { title: "Immortal", type: "blue", desc: "VeraCrypt Disk Forensics", url: "https://nickel-bedbug-8cc.notion.site/Immortal-Hacktrace-Ranges-2e7416e03a1380e8946adf53073f10cf" },
    { title: "Inscept", type: "blue", desc: "Agent Tesla Campaign Analysis", url: "https://nickel-bedbug-8cc.notion.site/Inscept-Hacktrace-Ranges-304416e03a1380ee89b7c72c4914e891" },
    { title: "Credsnoop", type: "blue", desc: "PCAP & Event Log Correlation", url: "https://nickel-bedbug-8cc.notion.site/Credsnoop-Hacktrace-Ranges-300416e03a1380d6ac3dde6e3a934858" },
    {title: "Loki", type: "blue", desc: ".NET Reverse Engineering", url: "https://nickel-bedbug-8cc.notion.site/Loki-Hacktrace-Ranges-2fc416e03a1380fdb604e3e4c6553b22"}
];

// === LOGIC ===

document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
    renderCTF(ctfData);
    renderCerts();
    initTyping();
    initMobileMenu();
    initBackground();
});

// Theme Toggle
function toggleTheme() {
    const html = document.documentElement;
    if (html.getAttribute('data-theme') === 'dark') {
        html.setAttribute('data-theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
    }
}

// Background Animation (Purple Network)
function initBackground() {
    const canvas = document.getElementById('networkCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    const setCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            const style = getComputedStyle(document.documentElement);
            const color = style.getPropertyValue('--text-muted').trim() || '#666';
            ctx.fillStyle = color;
            ctx.fill();
        }
    }

    for (let i = 0; i < 60; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p1, i) => {
            particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    const style = getComputedStyle(document.documentElement);
                    const color = style.getPropertyValue('--border').trim() || '#222';
                    ctx.strokeStyle = color;
                    ctx.stroke();
                }
            });
        });
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

// Mobile Menu
function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const drawer = document.getElementById('mobileDrawer');
    toggle.addEventListener('click', () => {
        drawer.classList.toggle('active');
    });
    drawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => drawer.classList.remove('active'));
    });
}

// Typing Effect
function initTyping() {
    const roles = [
  "Pragmatic Red Team Operator",
  "Earned Through Repetition",
  "Security Analyst @ MPM",
  "Relentless CTF Player",
  "Purple on Purpose",
  "innovative SOC Engineer",
  "Slow Burn Builder",
  "Chasing Depth",
  "Still Becoming",
];
    let i = 0, j = 0, currentRole = "", isDeleting = false;
    const el = document.getElementById('typed-role');

    function type() {
        if (i < roles.length) {
            if (!isDeleting && j <= roles[i].length) {
                currentRole = roles[i].substring(0, j++);
                el.textContent = currentRole;
            } else if (isDeleting && j >= 0) {
                currentRole = roles[i].substring(0, j--);
                el.textContent = currentRole;
            }

            if (!isDeleting && j === roles[i].length + 1) {
                isDeleting = true;
                setTimeout(type, 1000); return;
            } else if (isDeleting && j === 0) {
                isDeleting = false;
                i = (i + 1) % roles.length;
            }
        }
        setTimeout(type, isDeleting ? 50 : 100);
    }
    type();
}

// Render Projects
function renderProjects(filter) {
    const grid = document.getElementById('projectsGrid');
    let data = projectsData;
    if (filter !== 'all') data = projectsData.filter(p => p.type === filter);

    grid.innerHTML = data.map(p => `
        <a href="${p.url}" target="_blank" class="pro-card ${p.type}">
            <div>
                <span class="pro-type">${p.type === 'red' ? '// OFFENSIVE' : '// DEFENSIVE'}</span>
                <h3 class="pro-title">${p.title}</h3>
                <p class="pro-desc">${p.desc}</p>
            </div>
            <div class="pro-tags">
                ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
        </a>
    `).join('');
}

function filterProjects(type) {
    document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderProjects(type);
}

// Render Certs
function renderCerts() {
    const grid = document.getElementById('certsGrid');
    grid.innerHTML = certsData.map(c => `
        <a href="${c.url}" target="_blank" class="cert-card">
            <div class="cert-icon">⏻</div>
            <div class="cert-info">
                <h3>${c.name} ${c.status ? `<span style="color:var(--purple-primary);font-size:0.8rem;">(${c.status})</span>` : ''}</h3>
                <p>${c.issuer} • ${c.year}</p>
            </div>
        </a>
    `).join('');
}

// Render CTF
function renderCTF(data) {
    const grid = document.getElementById('ctfGrid');
    grid.innerHTML = data.map(c => `
        <a href="${c.url}" target="_blank" class="ctf-card ${c.type}">
            <div class="ctf-info">
                <h3>${c.title}</h3>
                <p>${c.desc}</p>
            </div>
            <div class="ctf-badge ${c.type}">
                ${c.type === 'red' ? 'ROOTED' : 'ANALYZED'}
            </div>
        </a>
    `).join('');
}

function searchCTF() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const filtered = ctfData.filter(c => c.title.toLowerCase().includes(term) || c.desc.toLowerCase().includes(term));
    renderCTF(filtered);
}