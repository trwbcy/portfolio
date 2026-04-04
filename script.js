// === DATA SOURCE ===
const projectsData = [
    { title: "Astaroth-Style Red Team Campaign", desc: "Fileless attack simulation leveraging LOLBins. Achieved 100% success rate with 0 Defender alerts on fully patched Windows 10. Translated findings into detection rules and MITRE ATT&CK mapping.", tags: ["Red Team", "LOLBins", "Evasion"], type: "red", url: "https://drive.google.com/file/d/1DhZtAo6jz6IwP4tEQVmE8hZRTYvcBGdf/view" },
    { title: "SOC Homelab Project", desc: "Replicating a full enterprise SOC stack: SIEM, NDR, XDR, SOAR, Firewall, WAF, Vulnerability Scanner. 13 integrated open-source services across 5 VMs, replicating $500K+ commercial tooling.", tags: ["Blue Team", "SOC Ecosystem", "Detection"], type: "blue", url: "https://drive.google.com/file/d/1SPe8eGGo-Ii_4Mdu3jFf49F4ConbT5kP/view?usp=sharing"},
    { title: "Incident Response: Phishing-Triggered Fileless Exec", desc: "Real-world LOLBin execution triggered by phishing in active enterprise. Endpoint isolation via XDR, evidence collection, MITRE mapping T1218.005. Contained without further escalation.", tags: ["Blue Team", "IR", "MITRE"], type: "blue", url: "https://drive.google.com/file/d/1pkwW2jBs8n0hHXDc_9rJelf-m96Uq4iQ/view?usp=sharing" },
    { title: "Incident Response: Staged Malware via LOLBin & Cloud Staging", desc: "Real-world Severity 92 incident. pcalua.exe abused as LOLBin to proxy mshta.exe, fetching HTA payload from Alibaba Cloud OSS. Stage 2: WmiPrvSe.exe spawned obfuscated fileless PowerShell via WMI. 17 XDR alerts in under 60 seconds. Endpoint isolated, Kerberos lateral movement to 2 internal Domain Controllers confirmed via QRadar AQL (75 events). Escalated to L2.", tags: ["Blue Team", "IR", "LOLBin", "Fileless", "MITRE"], type: "blue", url: "https://drive.google.com/file/d/1-UUtYfS2i41wqTTYEqRoIXMSocjrD218/view?usp=sharing" },
    { title: "EDR Detection Lab with Wazuh", desc: "Built comprehensive EDR environment detecting 15/15 MITRE ATT&CK techniques. Automated response reduced time to sub-5 minutes.", tags: ["Blue Team", "Wazuh", "Detection"], type: "blue", url: "https://nickel-bedbug-8cc.notion.site/Building-EDR-Detection-Lab-with-Wazuh-From-Detection-to-Response-27f416e03a1380b9b318fb215aeca082" },
    { title: "SandTrap: Breaking Virtual Boundaries", desc: "Offensive toolkit leveraging hardware fingerprinting and timing attacks to bypass VM sandbox environments.", tags: ["C++", "Sandbox Evasion", "Red Team"], type: "red", url: "https://nickel-bedbug-8cc.notion.site/SandTrap-Breaking-Virtual-Boundaries-2f2416e03a13802bba9aebc2cace4536k" },
    { title: "ShadowShell: ETW Evasion Framework", desc: "Comprehensive framework to evade Windows Event Tracing (ETW) logging during red team operations.", tags: ["C#", "ETW Evasion", "Windows"], type: "red", url: "https://nickel-bedbug-8cc.notion.site/ShadowShell-Advanced-ETW-Evasion-Framework-for-Red-Team-Operations-277416e03a13801b97c1ec43b2ac6c77" },
    { title: "GhostStager: Fileless Binary Loader", desc: "Advanced C# fileless binary loader with AMSI/ETW bypass and encrypted C2 communication via Sliver.", tags: ["C#", "Red Team", "Sliver C2"], type: "red", url: "https://nickel-bedbug-8cc.notion.site/GhostStager-Advanced-C-Fileless-Binary-Loader-For-Red-Team-Operation-23b416e03a138025b44ff54e56424636" },
    { title: "EnvGuard: Environment Assessment", desc: "Advanced framework implementing 12 classification techniques to distinguish production from analysis systems.", tags: ["C++", "Sandbox", "Red Team"], type: "red", url: "https://nickel-bedbug-8cc.notion.site/EnvGuard-Advanced-Environment-Assessment-Framework-For-Red-Team-Operations-274416e03a1380b58fefde598b68c47b" },
    { title: "SOC Confessions", desc: "A narrative project uncovering the unseen emotions behind blue team vigilance in a Security Operations Center.", tags: ["Blue Team", "Storytelling", "SOC"], type: "blue", url: "#" },
    { title: "Internal Pentest: Active Directory", desc: "Hands-on internal penetration testing identifying and exploiting vulnerabilities in Active Directory environments.", tags: ["Pentest", "AD", "Windows"], type: "red", url: "https://nickel-bedbug-8cc.notion.site/Internal-Pentest-Active-Directory-Exploitation-and-Lesson-Learned-17a416e03a1380449524cf6cad46accb" },
    { title: "Building SIEM Lab with Splunk", desc: "First blue team project — building a functional SIEM environment using Splunk Free Edition from scratch.", tags: ["Splunk", "SIEM", "Blue Team"], type: "blue", url: "https://nickel-bedbug-8cc.notion.site/From-Zero-to-SOC-Hero-Building-My-First-SIEM-Lab-27d416e03a1380ba9aded15f489ca23b" }
];

const certsData = [
    { name: "Certified Blue Team Practitioner", issuer: "The SecOps Group", year: "2026", status: "Merit Graduate", url: "https://drive.google.com/file/d/1-Bb-n_D1DiiYCAYBilZkvrQpXZ2LbmRT/view?usp=sharing" },
    { name: "Certified Network Security Practitioner", issuer: "The SecOps Group", year: "2025", status: "Merit Graduate", url: "https://drive.google.com/file/d/1n3vkEEz4tGQjkw7M0-AJ-gqs6zbWM8jx/view" },
    { name: "Certified API Security Practitioner", issuer: "APISEC University", year: "2025", status: "", url: "https://drive.google.com/file/d/1CRK94BK63ABk-ajIGjfTTr02uAQHlVX0/view" },
    { name: "Red Team Internship Certification", issuer: "HackSecure", year: "2025", status: "", url: "https://drive.google.com/file/d/1niU5gbyWGn9RKDlraltHsQJB2qQcSuJt/view" },
    { name: "Advent of Cyber", issuer: "TryHackMe", year: "2023, 2025", status: "", url: "https://drive.google.com/file/d/14oS0UMAs2i_Tpg1qxue56YKdQgNQV7ED/view" },
    { name: "Practical Ethical Hacking", issuer: "TCM Security", year: "2024", status: "", url: "https://drive.google.com/file/d/1RlF6sWO6n0KrmY_BC-iOStDghOD3elSQ/view" },
    { name: "Practical Web App Penetration Testing", issuer: "TCM Security", year: "2024", status: "", url: "https://drive.google.com/file/d/1jd3WiqBs_8ZlITE3XoE-h6NCZ5X1Ywks/view" },
    { name: "Practical Web Hacking", issuer: "TCM Security", year: "2024", status: "", url: "https://drive.google.com/file/d/1mYYeCWeE8bAZDGc9m6f2L1qKh1MA40up/view" },
    { name: "IT Support Specialist", issuer: "Google", year: "2023", status: "", url: "https://drive.google.com/file/d/1RB5ehE_-DovC1sgoII2FhV55qoF9Zdgr/view" }
];

const ctfData = [
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
    { title: "Deimos", type: "blue", desc: "PCAP Malware Analysis", url: "https://drive.google.com/file/d/1Rf2GZf1nbw56vD0lDhPCU3_aljL_AN_Z/view?usp=sharing"},
    { title: "Immortal", type: "blue", desc: "VeraCrypt Disk Forensics", url: "https://nickel-bedbug-8cc.notion.site/Immortal-Hacktrace-Ranges-2e7416e03a1380e8946adf53073f10cf" },
    { title: "Inscept", type: "blue", desc: "Agent Tesla Campaign Analysis", url: "https://nickel-bedbug-8cc.notion.site/Inscept-Hacktrace-Ranges-304416e03a1380ee89b7c72c4914e891" },
    { title: "Credsnoop", type: "blue", desc: "PCAP & Event Log Correlation", url: "https://nickel-bedbug-8cc.notion.site/Credsnoop-Hacktrace-Ranges-300416e03a1380d6ac3dde6e3a934858" },
    { title: "Loki", type: "blue", desc: ".NET Reverse Engineering", url: "https://nickel-bedbug-8cc.notion.site/Loki-Hacktrace-Ranges-2fc416e03a1380fdb604e3e4c6553b22"},
    { title: "Cilent", type: "blue", desc:"Phishing HTML Attachment & Telegram Exfil", url: "https://nickel-bedbug-8cc.notion.site/CTF-Writeup-Cilent-Hacktrace-Defensive-321416e03a13803fa136e019d0515260"},
    { title: "Keyboard Warrior", type: "blue", desc:"Malware Analysis", url: "https://drive.google.com/file/d/1iSU6nz_hO3J1Ab2YAvJLLZA9CUQqzdmR/view?usp=sharing"},
    { title: "Shortway", type: "blue", desc: "Malware Infection Analysis", url: "https://docs.google.com/document/d/1NV_NmB1Zby9emp42q3OGM4oxgGQbWb_S/edit?usp=sharing&ouid=112970802675533255155&rtpof=true&sd=true"},
    { title: "Volatify", type: "blue", desc: "Memory Forensics", url: "https://docs.google.com/document/d/1a0vIHmZ3PQi-7ZOk16lcNCtavdavIwR-/edit?usp=sharing&ouid=112970802675533255155&rtpof=true&sd=true"},
    { title: "Subvert", type: "blue", desc: ".NET Malware Analysis & MSSQL Injection", url: "https://drive.google.com/file/d/1d60zUDWBP3id0whogPcUE-_QtQ7vF1FM/view?usp=sharing"},
    { title: "Charon", type: "blue", desc: "Memory & Disk Forensics", url: "https://drive.google.com/file/d/1om6jsQ3yypLkiA9K8eSZYzWfOcJT-yqe/view?usp=sharing"},
];

let _projST = null;
let isAppLoaded = false; // FLAG PENTING: Jangan set GSAP sebelum loading kelar!

// ── INIT ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initLenis();
    initCursor();
    initMobileMenu();
    initTyping();
    initHeroNoise();
    initManifestoBg();
    
    // Render HTML aja, animasinya ditunda sampai loading kelar
    renderProjects('all'); 
    
    renderCerts();
    renderCTF(ctfData);
    initFilterTabs();
    initSpotlight();
    initGlitch();
    initCountUp();

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', searchCTF);
    }
});

// ── MOUSE SPOTLIGHT ───────────────────────────────────
function initSpotlight() {
    const el = document.getElementById('spotlight');
    if (!el) return;
    window.addEventListener('mousemove', e => {
        el.style.setProperty('--mx', e.clientX + 'px');
        el.style.setProperty('--my', e.clientY + 'px');
    });
}

// ── GLITCH on hero name ───────────────────────────────
function initGlitch() {
    const wraps = document.querySelectorAll('.glitch-wrap');
    if (!wraps.length) return;
    function triggerGlitch() {
        wraps.forEach(w => {
            w.classList.add('glitching');
            setTimeout(() => w.classList.remove('glitching'), 320);
        });
        setTimeout(triggerGlitch, 3000 + Math.random() * 6000);
    }
    setTimeout(triggerGlitch, 2000 + Math.random() * 3000);
}

// ── STAT COUNT-UP ─────────────────────────────────────
function initCountUp() {
    const els = document.querySelectorAll('.count-up');
    if (!els.length) return;
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            obs.unobserve(entry.target);
            const el     = entry.target;
            const target = +el.dataset.target;
            const prefix = el.dataset.prefix || '';
            const suffix = el.dataset.suffix || '';
            const dur    = 1200;
            const steps  = 40;
            let step     = 0;
            const timer  = setInterval(() => {
                step++;
                const val = Math.round(target * (step / steps));
                el.textContent = prefix + val + suffix;
                if (step >= steps) {
                    el.textContent = prefix + target + suffix;
                    clearInterval(timer);
                }
            }, dur / steps);
        });
    }, { threshold: 0.5 });
    els.forEach(el => obs.observe(el));
}

function initGSAP() {
    if (typeof gsap === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    initParallaxTypography(); 
    initScrollReveal();       
    initManifestoScroll();
    initShuffleHover();    
    initSmoothScroll();
    
    // Sekarang aman untuk menghitung ukuran & bikin pin
    isAppLoaded = true; 
    setupProjectsScroll();

    setTimeout(() => ScrollTrigger.refresh(), 100);
}

// ── 1. LENIS — Smooth Scroll ─────────────
function initLenis() {
    if (typeof Lenis === 'undefined') return;
    const lenis = new Lenis({
        duration: 1.2, 
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        smoothWheel: true,
        wheelMultiplier: 1.0, 
        touchMultiplier: 2.0,
    });

    lenis.on('scroll', () => { if (window.ScrollTrigger) ScrollTrigger.update(); });
    if (typeof gsap !== 'undefined') {
        gsap.ticker.add(time => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
    }
    window._lenis = lenis;
}

// ── 2. LOADER ────────────────────────────────────────
function initLoader() {
    const loader  = document.getElementById('loader');
    const bar     = document.getElementById('loaderBar');
    const pct     = document.getElementById('loaderPct');
    const sub     = document.getElementById('loaderSub');
    const label   = document.getElementById('loaderLabel');
    if (!loader) return;

    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&';
    const stages = [
        { at:  0, lbl: 'INITIALIZING',         sub: 'BOOTING SECURITY MODULES'  },
        { at: 20, lbl: 'LOADING ARSENAL',       sub: 'IMPORTING OFFENSIVE TOOLS'  },
        { at: 45, lbl: 'CONFIGURING SIEM',      sub: 'TUNING AQL CORRELATION RULES' },
        { at: 65, lbl: 'THREAT HUNTING',        sub: 'SCANNING FOR ANOMALIES'     },
        { at: 82, lbl: 'COMPILING WRITEUPS',    sub: '50+ DOCUMENTED FINDINGS'    },
        { at: 95, lbl: 'HANDSHAKE',             sub: 'ESTABLISHING CONNECTION'    },
        { at:100, lbl: 'ACCESS GRANTED',        sub: 'WELCOME, OPERATOR'          },
    ];

    function shuffle(el, target, duration = 600) {
        const frames = Math.round(duration / 30);
        let frame = 0;
        const timer = setInterval(() => {
            frame++;
            const progress = frame / frames;
            const resolved = Math.floor(progress * target.length);
            el.textContent =
                target.slice(0, resolved) +
                Array.from({ length: target.length - resolved }, () =>
                    CHARS[Math.floor(Math.random() * CHARS.length)]
                ).join('');
            if (frame >= frames) {
                el.textContent = target;
                clearInterval(timer);
            }
        }, 30);
    }

    let cur = 0, si = 0;
    document.body.style.overflow = 'hidden';

    const tick = setInterval(() => {
        const speed = cur < 40 ? 1.5 : cur < 75 ? 0.65 : 1.9;
        cur = Math.min(100, cur + speed * (Math.random() * .8 + .5));
        bar.style.width = cur + '%';
        pct.textContent = Math.floor(cur) + '%';

        for (let i = stages.length - 1; i >= 0; i--) {
            if (cur >= stages[i].at && si <= i) {
                si = i;
                shuffle(label, stages[i].lbl, 400);
                sub.textContent = stages[i].sub;
                break;
            }
        }

        if (cur >= 100) {
            clearInterval(tick);
            setTimeout(() => {
                loader.classList.add('out');
                document.body.style.overflow = '';
                setTimeout(initGSAP, 100);
            }, 500);
        }
    }, 30);
}

// ── 3. CURSOR ───────────────────────
function initCursor() {
    const dot  = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;

    let rx = 0, ry = 0, mx = -100, my = -100; 
    let isHovering = false;

    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        dot.style.transform = `translate3d(${mx - 2.5}px, ${my - 2.5}px, 0)`;
    });

    document.addEventListener('mouseover', e => {
        const t = e.target.closest('a, button, .wave-target, .proj-item, .cert-item, .ctf-item');
        if (t && !isHovering) {
            isHovering = true;
            ring.style.width  = '56px';
            ring.style.height = '56px';
            ring.style.borderColor = 'var(--purple)';
        }
    });
    
    document.addEventListener('mouseout', e => {
        const t = e.target.closest('a, button, .wave-target, .proj-item, .cert-item, .ctf-item');
        if (t && isHovering) {
            isHovering = false;
            ring.style.width  = '30px';
            ring.style.height = '30px';
            ring.style.borderColor = 'rgba(157,0,255,.45)';
        }
    });

    (function loop() {
        rx += (mx - rx) * 0.15; 
        ry += (my - ry) * 0.15;
        ring.style.transform = `translate3d(${rx - 15}px, ${ry - 15}px, 0)`;
        requestAnimationFrame(loop);
    })();
}

// ── 4. PARALLAX & BREAKOUT TYPOGRAPHY ──────────────────────────────────
function initParallaxTypography() {
    const line1 = document.querySelector('.line-1'); 
    const line2 = document.querySelector('.line-2'); 

    if (line1) {
        gsap.to(line1, {
            x: -150, y: -100, 
            scale: 1.15, opacity: 0,
            ease: 'none',
            scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 }
        });
    }
    if (line2) {
        gsap.to(line2, {
            x: 150, y: 100,   
            scale: 1.15, opacity: 0,
            ease: 'none',
            scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 }
        });
    }

    document.querySelectorAll('.big-heading').forEach(el => {
        gsap.fromTo(el,
            { yPercent: 6 },
            { yPercent: -6, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 1.2 } }
        );
    });
}

// ── 5. SCROLL REVEAL ─────────────────────────
function initScrollReveal() {
    const elements = gsap.utils.toArray('.section-tag, .career-item, .stat-row, .skill-row, .proj-item, .cert-item, .ctf-item, .body-text');
    
    elements.forEach((el, i) => {
        gsap.fromTo(el, 
            { opacity: 0, y: 50, filter: 'blur(8px)' }, 
            { 
                opacity: 1, y: 0, filter: 'blur(0px)', 
                duration: 0.85, ease: 'power3.out', 
                scrollTrigger: { 
                    trigger: el, 
                    start: 'top 85%', 
                    toggleActions: 'play none none reverse' 
                } 
            }
        );
    });
}

// ── 6. MANIFESTO ─────────────────
function initManifestoScroll() {
    const section = document.querySelector('.manifesto');
    const words   = [...document.querySelectorAll('.mw')];
    if (!section || !words.length) return;

    words.forEach(w => { w.style.transition = 'none'; w.classList.remove('lit'); });
    const scrollLength = words.length * 110;

    ScrollTrigger.create({
        trigger: section,
        start:   'top top',
        end:     `+=${scrollLength}`,
        pin:     true,
        scrub:   0.6,
        onUpdate(self) {
            const litCount = Math.round(self.progress * words.length);
            words.forEach((w, i) => {
                const should = i < litCount;
                if (should === w.classList.contains('lit')) return;
                w.style.transition = should
                    ? 'opacity .35s ease, color .35s ease, text-shadow .35s ease'
                    : 'opacity .25s ease, color .25s ease, text-shadow .25s ease';
                w.classList.toggle('lit', should);
            });
        }
    });
}

// ── SHUFFLE HOVER ──────────────────────────────────────
const SCHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%';

function initShuffleHover() {
    document.querySelectorAll('.wave-target').forEach(el => {
        const original = el.innerHTML;
        let timer = null;

        el.addEventListener('mouseenter', () => {
            if (timer) return;
            let frame = 0;
            const totalFrames = 10;
            timer = setInterval(() => {
                frame++;
                const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
                let node;
                while ((node = walker.nextNode())) {
                    const orig = node.textContent;
                    node.textContent = orig.split('').map(ch =>
                        ch === ' ' || ch === '\n' ? ch
                        : frame > totalFrames * 0.7
                            ? ch
                            : SCHARS[Math.random() * SCHARS.length | 0]
                    ).join('');
                }
                if (frame >= totalFrames) {
                    clearInterval(timer);
                    timer = null;
                    el.innerHTML = original; 
                }
            }, 40);
        });

        el.addEventListener('mouseleave', () => {
            if (timer) { clearInterval(timer); timer = null; }
            el.innerHTML = original; 
        });
    });
}

// ── 7. NAVBAR LINKS SMOOTH SCROLL ───────────────────────────────────────
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const targetId = a.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            e.preventDefault(); 

            if (window._lenis) {
                window._lenis.scrollTo(targetElement, { offset: -80, duration: 1.2 });
            } else {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }

            const drawer = document.getElementById('mobileDrawer');
            if (drawer) drawer.classList.remove('open');
        });
    });

    document.getElementById('navSite')?.addEventListener('click', () => {
        window._lenis ? window._lenis.scrollTo(0, { duration: 1.2 })
                      : window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ── MOBILE MENU ────────────────────────────────────────────────────────
function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const drawer = document.getElementById('mobileDrawer');
    if (!toggle || !drawer) return;
    toggle.addEventListener('click', () => drawer.classList.toggle('open'));
    drawer.querySelectorAll('a').forEach(a =>
        a.addEventListener('click', () => drawer.classList.remove('open'))
    );
}

// ── TYPING ─────────────────────────────────────────────────────────────
function initTyping() {
    const roles = [
        'Purple Team Practitioner',
        'Security Analyst @ MPM',
        'Relentless CTF Player',
        'Earned Through Repetition',
        'Purple on Purpose',
        'Threat Hunter',
        'Slow Burn Builder',
        'Still Becoming',
    ];
    let i = 0, j = 0, del = false;
    const el = document.getElementById('typedRole');
    if (!el) return;
    (function type() {
        const w = roles[i];
        if (!del) { el.textContent = w.slice(0, ++j); if (j > w.length) { del = true; return setTimeout(type, 1300); } }
        else       { el.textContent = w.slice(0, --j); if (j < 0) { del = false; i = (i+1)%roles.length; } }
        setTimeout(type, del ? 40 : 80);
    })();
}

// ── HERO NOISE ─────────────────────────────────────────────────────────
function initHeroNoise() {
    const el = document.getElementById('heroNoise');
    if (!el) return;
    const chars = '!@#$%^&*()_+-=[]{}|;:.<>?/~`abcdefABCDEF0123456789';
    el.textContent = Array.from({length:1200}, () => chars[Math.random()*chars.length|0]).join('');
}

// ── FILTER TABS ────────────────────────────────────────────────────────
function initFilterTabs() {
    document.querySelectorAll('.ftab').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.ftab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.dataset.filter);
        });
    });
}

// ── RENDER PROJECTS (THE FIXED ROBUST VERSION) ──────────────────────────────────

function renderProjects(filter) {
    const track = document.getElementById('projectsGrid');
    if (!track) return;

    const _projData = filter === 'all' ? projectsData : projectsData.filter(p => p.type === filter);

    // Inject HTML
    track.innerHTML = _projData.map(p => `
        <a href="${p.url}" target="_blank" class="proj-item ${p.type}">
            <span class="proj-badge">${p.type === 'red' ? '// OFFENSIVE' : '// DEFENSIVE'}</span>
            <div class="proj-title">${p.title}</div>
            <p class="proj-desc">${p.desc}</p>
            <div class="proj-tags">${p.tags.map(t => `<span class="ptag">${t}</span>`).join('')}</div>
            <div class="proj-arrow">→</div>
        </a>
    `).join('');

    const totalEl = document.getElementById('projTotal');
    if (totalEl) totalEl.textContent = String(_projData.length).padStart(2, '0');

    // Mencegah GSAP dipanggil waktu layar masih loading!
    if (isAppLoaded) {
        setupProjectsScroll();
    }
}

function setupProjectsScroll() {
    if (typeof gsap === 'undefined' || !window.ScrollTrigger) return;
    
    const track = document.getElementById('projectsGrid');
    const section = document.getElementById('projects');
    const outer = document.querySelector('.proj-track-outer');
    const fill = document.getElementById('projProgressFill');
    const current = document.getElementById('projCurrent');

    if (!section || !outer || !track) return;

    // Bersihkan trigger lama kalau user klik tab filter
    if (_projST) {
        if (_projST.scrollTrigger) _projST.scrollTrigger.kill();
        _projST.kill();
        _projST = null;
    }

    gsap.set(track, { x: 0 });

    // Kasih delay tipis biar DOM beres gambar ulang
    setTimeout(() => {
        const dist = track.scrollWidth - outer.offsetWidth;
        
        if (dist > 0) {
            _projST = gsap.to(track, {
                x: -dist,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: () => "+=" + dist,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        if (fill) fill.style.width = (self.progress * 100) + '%';
                        if (current) {
                            const cardCount = track.children.length;
                            const idx = Math.min(Math.ceil(self.progress * cardCount) || 1, cardCount);
                            current.textContent = String(idx).padStart(2, '0');
                        }
                    }
                }
            });
        }
        ScrollTrigger.refresh();
    }, 50);
}

// ── RENDER CERTS ───────────────────────────────────────────────────────
function renderCerts() {
    const grid = document.getElementById('certsGrid');
    if (!grid) return;
    grid.innerHTML = certsData.map(c => `
        <a href="${c.url}" target="_blank" class="cert-item">
            ${c.status ? `<div class="cert-status">${c.status}</div>` : ''}
            <div class="cert-name">${c.name}</div>
            <div class="cert-meta">${c.issuer} · ${c.year}</div>
        </a>
    `).join('');
}

// ── RENDER CTF ─────────────────────────────────────────────────────────
function renderCTF(data) {
    const grid = document.getElementById('ctfGrid');
    if (!grid) return;
    grid.innerHTML = data.map(c => `
        <div class="ctf-item ${c.type}">
            <div><h3>${c.title}</h3><p>${c.desc}</p></div>
            <div class="ctf-badge ${c.type}">${c.type === 'red' ? 'ROOTED' : 'ANALYZED'}</div>
        </div>
    `).join('');
}

function searchCTF() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    renderCTF(ctfData.filter(c =>
        c.title.toLowerCase().includes(term) || c.desc.toLowerCase().includes(term)
    ));
}

// ── MANIFESTO BG WORDS ────────────────────────────────
function initManifestoBg() {
    const container = document.querySelector('.manifesto-bg-text');
    if (!container) return;

    const words = [
        'THREAT','HUNT','DETECT','RESPOND','MITIGATE','ANALYZE',
        'BREACH','EXPLOIT','PATCH','MONITOR','ALERT','TRIAGE',
        'FORENSICS','PAYLOAD','ARTIFACT','PIVOT','LATERAL',
        'PRIVILEGE','ESCALATE','PERSIST','EVADE','INJECT',
        'ENUMERATE','RECON','EXFIL','C2','SIEM','SOAR','XDR',
        'EDR','NDR','SOC','RED','BLUE','PURPLE','PENTEST',
        'OSINT','OPSEC','MALWARE','RANSOMWARE','ROOTKIT',
        'ZERO-DAY','CVE','CVSS','ATT&CK','KILL CHAIN',
        'IOC','IOA','TTP','SIGMA','YARA','SURICATA',
        'BLOODHOUND','MIMIKATZ','IMPACKET','SLIVER','COBALT',
        'BYPASS','LOLBin','FILELESS','ETW','AMSI','DEFENDER',
        'QRADAR','WAZUH','SPLUNK','CORTEX','THEHIVE',
        'CORRELATION','BASELINE','ANOMALY','FALSE POSITIVE',
        'INCIDENT','CONTAINMENT','ERADICATION','RECOVERY',
        'HARDENING','POSTURE','COMPLIANCE','AUDIT','LOG',
    ];

    const count = 200;
    let html = '';
    for (let i = 0; i < count; i++) {
        const w = words[Math.floor(Math.random() * words.length)];
        const op = (0.025 + Math.random() * 0.045).toFixed(3);
        html += `<span class="mbg" style="opacity:${op}">${w}</span>`;
    }
    container.innerHTML = html;
}