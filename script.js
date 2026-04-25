// === DATA SOURCE ===
const projectsData = [
    { title: "Astaroth-Style Red Team Campaign", desc: "Fileless attack simulation leveraging LOLBins. Achieved 100% success rate with 0 Defender alerts on fully patched Windows 10. Translated findings into detection rules and MITRE ATT&CK mapping.", tags: ["Red Team", "LOLBins", "Evasion"], type: "red", url: "https://drive.google.com/file/d/1Iw5GZ8NDQ6aOjjo5lr6uLqdenwVfTVVV/view?usp=sharing", image: "img/octopus.png" },
    { title: "SOC Homelab Project", desc: "Replicating a full enterprise SOC stack: SIEM, NDR, XDR, SOAR, Firewall, WAF, Vulnerability Scanner. 13 integrated open-source services across 5 VMs, replicating $500K+ commercial tooling.", tags: ["Blue Team", "SOC Ecosystem", "Detection"], type: "blue", url: "https://drive.google.com/file/d/1SPe8eGGo-Ii_4Mdu3jFf49F4ConbT5kP/view?usp=sharing", image: "img/NowYouSeeMe.png" },
    { title: "Incident Response: Phishing-Triggered Fileless Exec", desc: "Real-world LOLBin execution triggered by phishing in active enterprise. Endpoint isolation via XDR, evidence collection, MITRE mapping T1218.005. Contained without further escalation.", tags: ["Blue Team", "IR", "MITRE"], type: "blue", url: "https://drive.google.com/file/d/1pkwW2jBs8n0hHXDc_9rJelf-m96Uq4iQ/view?usp=sharing", image: "img/PhisHunt.png" },
    { title: "Incident Response: Staged Malware via LOLBin & Cloud Staging", desc: "Real-world Severity 92 incident. pcalua.exe abused as LOLBin to proxy mshta.exe, fetching HTA payload from Alibaba Cloud OSS. Stage 2: WmiPrvSe.exe spawned obfuscated fileless PowerShell via WMI. 17 XDR alerts in under 60 seconds. Endpoint isolated, Kerberos lateral movement to 2 internal Domain Controllers confirmed via QRadar AQL (75 events). Escalated to L2.", tags: ["Blue Team", "IR", "LOLBin", "Fileless", "MITRE"], type: "blue", url: "https://drive.google.com/file/d/1-UUtYfS2i41wqTTYEqRoIXMSocjrD218/view?usp=sharing", image: "img/Uncut.png" },
    { title: "YNTKTS: Binary Intelligence Lookup", desc: "Analyst-first binary browser built for SOC/XDR incident work. When an unknown binary fires an alert, stop context-switching across 5 tabs — one search returns: Quick Take, Attack Chain, Abuse Potential, Red Team Usage, Legitimate Use, MITRE ATT&CK mapping, and a ticket closure report template. Typo-resistant.", tags: ["Blue Team", "SOC", "XDR", "MITRE", "Tooling"], type: "blue", url: "https://trwbcy.github.io/yntkts", image: "img/Binary Intelligent.png" },
    { title: "EDR Detection Lab with Wazuh", desc: "Built comprehensive EDR environment detecting 15/15 MITRE ATT&CK techniques. Automated response reduced time to sub-5 minutes.", tags: ["Blue Team", "Wazuh", "Detection"], type: "blue", url: "https://nickel-bedbug-8cc.notion.site/Building-EDR-Detection-Lab-with-Wazuh-From-Detection-to-Response-27f416e03a1380b9b318fb215aeca082", image: "img/deviasi.jpg" },
    { title: "SandTrap: Breaking Virtual Boundaries", desc: "Offensive toolkit leveraging hardware fingerprinting and timing attacks to bypass VM sandbox environments.", tags: ["C++", "Sandbox Evasion", "Red Team"], type: "red", url: "https://nickel-bedbug-8cc.notion.site/SandTrap-Breaking-Virtual-Boundaries-2f2416e03a13802bba9aebc2cace4536k", image: "img/galz.png" },
    { title: "ShadowShell: ETW Evasion Framework", desc: "Comprehensive framework to evade Windows Event Tracing (ETW) logging during red team operations.", tags: ["C#", "ETW Evasion", "Windows"], type: "red", url: "https://nickel-bedbug-8cc.notion.site/ShadowShell-Advanced-ETW-Evasion-Framework-for-Red-Team-Operations-277416e03a13801b97c1ec43b2ac6c77", image: "img/cctv.png" },
    { title: "GhostStager: Fileless Binary Loader", desc: "Advanced C# fileless binary loader with AMSI/ETW bypass and encrypted C2 communication via Sliver.", tags: ["C#", "Red Team", "Sliver C2"], type: "red", url: "https://nickel-bedbug-8cc.notion.site/GhostStager-Advanced-C-Fileless-Binary-Loader-For-Red-Team-Operation-23b416e03a138025b44ff54e56424636", image: "img/ghoststager.jpg" },
    { title: "EnvGuard: Environment Assessment", desc: "Advanced framework implementing 12 classification techniques to distinguish production from analysis systems.", tags: ["C++", "Sandbox", "Red Team"], type: "red", url: "https://nickel-bedbug-8cc.notion.site/EnvGuard-Advanced-Environment-Assessment-Framework-For-Red-Team-Operations-274416e03a1380b58fefde598b68c47b", image: "img/vba.png" },
    { title: "SOC Confessions", desc: "A narrative project uncovering the unseen emotions behind blue team vigilance in a Security Operations Center.", tags: ["Blue Team", "Storytelling", "SOC"], type: "blue", url: "#", image: "img/eye.png", wip: true },
    { title: "Internal Pentest: Active Directory", desc: "Hands-on internal penetration testing identifying and exploiting vulnerabilities in Active Directory environments.", tags: ["Pentest", "AD", "Windows"], type: "red", url: "https://nickel-bedbug-8cc.notion.site/Internal-Pentest-Active-Directory-Exploitation-and-Lesson-Learned-17a416e03a1380449524cf6cad46accb", image: "img/AD.webp" },
    { title: "Building SIEM Lab with Splunk", desc: "First blue team project — building a functional SIEM environment using Splunk Free Edition from scratch.", tags: ["Splunk", "SIEM", "Blue Team"], type: "blue", url: "https://nickel-bedbug-8cc.notion.site/From-Zero-to-SOC-Hero-Building-My-First-SIEM-Lab-27d416e03a1380ba9aded15f489ca23b", image: "img/image (2).png" }
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

// ── LEARNING ACTIVITY DATA ───────────────────────────────────────────
// Edit learning-data.json to add new entries — no JS changes needed.
let learningData = [];

let _projST = null;
let isAppLoaded = false; // FLAG PENTING: Jangan set GSAP sebelum loading kelar!

// ── INIT ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initLenis();
    initCursor();
    initMobileMenu();
    initTyping();
    initManifestoBg();

    // Render HTML aja, animasinya ditunda sampai loading kelar
    renderProjects('all');

    renderCerts();
    fetch('learning-data.json')
        .then(r => r.json())
        .then(data => { learningData = data; initLearning(); })
        .catch(() => initLearning());
    initFilterTabs();
    initSpotlight();
    initGlitch();
    initCountUp();
    setPurpleFavicon();
});

// ── PURPLE FAVICON ────────────────────────────────────
function setPurpleFavicon() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
        ctx.drawImage(img, 0, 0, 64, 64);
        ctx.globalCompositeOperation = 'source-in';
        ctx.fillStyle = '#9d00ff';
        ctx.fillRect(0, 0, 64, 64);
        const link = document.querySelector("link[rel='icon']");
        if (link) link.href = canvas.toDataURL('image/png');
    };
    img.src = 'img/helmet.png';
}

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
    if (typeof window.Lenis === 'undefined') return;
    const lenis = new window.Lenis({
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
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.85, ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
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
        'Break It. Detect It. Write It Up.',
        'Red by Curiosity, Blue by Duty',
        'Threat Hunter',
        '500+ Days. Still Grinding.',
        'Built in the Lab, Proven in Prod',
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

    const _projData = (filter === 'all' ? projectsData : projectsData.filter(p => p.type === filter)).filter(p => !p.wip);

    // Inject HTML
    track.innerHTML = _projData.map(p => `
        <a href="${p.url}" target="_blank" class="proj-item ${p.type}">
            ${p.image ? `<div class="proj-artwork"><img src="${p.image}" alt="${p.title}" loading="lazy"></div>` : ''}
            <div class="proj-content">
                <span class="proj-badge">${p.type === 'red' ? '// OFFENSIVE' : '// DEFENSIVE'}</span>
                <div class="proj-title">${p.title}</div>
                <p class="proj-desc">${p.desc}</p>
                <div class="proj-tags">${p.tags.map(t => `<span class="ptag">${t}</span>`).join('')}</div>
            </div>
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

    // Bersihkan trigger lama
    if (_projST) {
        if (_projST.scrollTrigger) _projST.scrollTrigger.kill();
        _projST.kill();
        _projST = null;
    }

    gsap.set(track, { x: 0, clearProps: 'transform' });

    // Mobile: skip horizontal scroll, biarkan normal vertical flow
    if (window.innerWidth <= 900) {
        ScrollTrigger.refresh();
        return;
    }

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

// ── LEARNING ACTIVITY ──────────────────────────────────────────────────
function initLearning() {
    buildLearningStats();
    buildHeatmap();
    initHeatmapTooltip();
    renderLearningList('all');
    document.querySelectorAll('.la-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.la-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            _laShowAll = false;
            renderLearningList(tab.dataset.platform);
        });
    });
}

function buildLearningStats() {
    const total = learningData.length;
    const days  = new Set(learningData.map(a => a.date)).size;

    const dateSet = new Set(learningData.map(a => a.date));
    let streak = 0;
    const d = new Date(2026, 3, 25);
    while (true) {
        const s = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
        if (!dateSet.has(s)) break;
        streak++;
        d.setDate(d.getDate() - 1);
    }

    const el1 = document.getElementById('laTotal');
    const el2 = document.getElementById('laDays');
    const el3 = document.getElementById('laStreak');
    if (el1) el1.textContent = total;
    if (el2) el2.textContent = days;
    if (el3) el3.innerHTML = streak + '<span class="la-stat-unit"> days</span>';
}

// Heatmap data cache (built once, re-rendered on resize)
let _hmWeeks = null, _hmMonthLabels = null, _hmNumWeeks = 0;

function buildHeatmap() {
    const YEAR  = 2026;
    const today = new Date(2026, 3, 25);
    const counts = {};
    learningData.forEach(a => { counts[a.date] = (counts[a.date] || 0) + 1; });

    const jan1   = new Date(YEAR, 0, 1);
    const jan1dw = jan1.getDay();
    const start  = new Date(jan1);
    start.setDate(start.getDate() - (jan1dw === 0 ? 6 : jan1dw - 1));
    const dec31  = new Date(YEAR, 11, 31);

    const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    _hmWeeks = []; _hmMonthLabels = [];
    const cur = new Date(start);
    let prevMonth = 11;

    while (cur <= dec31) {
        const weekIdx = _hmWeeks.length;
        const days = [];
        for (let d = 0; d < 7; d++) {
            if (cur <= dec31) {
                if (cur.getMonth() !== prevMonth) {
                    _hmMonthLabels.push({ weekIdx, label: MONTHS[cur.getMonth()] });
                    prevMonth = cur.getMonth();
                }
                const y  = cur.getFullYear();
                const m  = String(cur.getMonth() + 1).padStart(2, '0');
                const dy = String(cur.getDate()).padStart(2, '0');
                const dateStr = `${y}-${m}-${dy}`;
                days.push({ date: dateStr, count: counts[dateStr] || 0, future: cur > today });
            } else {
                days.push(null);
            }
            cur.setDate(cur.getDate() + 1);
        }
        _hmWeeks.push(days);
    }
    _hmNumWeeks = _hmWeeks.length;

    renderHeatmap();

    // Re-render on window resize so cell size stays balanced at any zoom level
    if (!window._hmResize) {
        window._hmResize = _debounce(renderHeatmap, 120);
        window.addEventListener('resize', window._hmResize);
    }
}

function renderHeatmap() {
    if (!_hmWeeks) return;
    const el = document.getElementById('laHeatmap');
    if (!el) return;

    const GAP    = 3;
    const DL_W   = 22; // day-label col (17px) + gap (5px)
    const availW = (el.offsetWidth || el.parentElement.offsetWidth) - DL_W;
    const cell   = Math.max(9, Math.floor((availW - (_hmNumWeeks - 1) * GAP) / _hmNumWeeks));
    const gridW  = _hmNumWeeks * (cell + GAP) - GAP;

    el.style.setProperty('--cell', cell + 'px');

    const DLABELS = ['M','T','W','T','F','S','S'];

    const monthsHtml = _hmMonthLabels.map(ml =>
        `<span class="la-hm-month" style="left:${ml.weekIdx * (cell + GAP)}px">${ml.label}</span>`
    ).join('');

    let cellsHtml = '';
    _hmWeeks.forEach(week => {
        week.forEach(day => {
            if (!day) {
                cellsHtml += `<div class="la-cell la-c0"></div>`;
            } else if (day.future) {
                cellsHtml += `<div class="la-cell la-c-fut" data-date="${day.date}" data-count="0"></div>`;
            } else {
                const lvl = day.count === 0 ? 0 : day.count === 1 ? 1 : day.count === 2 ? 2 : 3;
                cellsHtml += `<div class="la-cell la-c${lvl}" data-date="${day.date}" data-count="${day.count}"></div>`;
            }
        });
    });

    el.innerHTML = `
        <div class="la-hm-outer">
            <div class="la-hm-inner">
                <div class="la-hm-header">
                    <div class="la-hm-day-spacer"></div>
                    <div class="la-hm-months" style="width:${gridW}px">${monthsHtml}</div>
                </div>
                <div class="la-hm-body">
                    <div class="la-hm-days">${DLABELS.map(l => `<div class="la-hm-dl">${l}</div>`).join('')}</div>
                    <div class="la-hm-grid">${cellsHtml}</div>
                </div>
            </div>
            <div class="la-legend">
                <span class="la-legend-lbl">Less</span>
                <div class="la-cell la-c0 la-legend-cell"></div>
                <div class="la-cell la-c1 la-legend-cell"></div>
                <div class="la-cell la-c2 la-legend-cell"></div>
                <div class="la-cell la-c3 la-legend-cell"></div>
                <span class="la-legend-lbl">More</span>
            </div>
        </div>`;
}

function initHeatmapTooltip() {
    const tt  = document.getElementById('laTT');
    const el  = document.getElementById('laHeatmap');
    if (!tt || !el) return;

    const MTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    el.addEventListener('mousemove', e => {
        const cell = e.target.closest('.la-cell[data-date]');
        if (!cell) { tt.style.display = 'none'; return; }

        const [yr, mo, dy] = cell.dataset.date.split('-');
        const count = parseInt(cell.dataset.count || '0');

        document.getElementById('laTTDate').textContent =
            `${dy} ${MTHS[parseInt(mo) - 1].toUpperCase()} ${yr}`;

        const valEl = document.getElementById('laTTVal');
        if (count > 0) {
            valEl.textContent = `${count} ACTIVIT${count > 1 ? 'IES' : 'Y'}`;
            valEl.className   = 'la-tt-val';
        } else {
            valEl.textContent = 'NO ACTIVITY';
            valEl.className   = 'la-tt-val la-tt-none';
        }

        tt.style.display = 'block';
        const rect = tt.getBoundingClientRect();
        let x = e.clientX + 14;
        let y = e.clientY - rect.height - 10;
        if (x + rect.width  > window.innerWidth  - 8) x = e.clientX - rect.width  - 8;
        if (y < 8)                                     y = e.clientY + 14;
        tt.style.left = x + 'px';
        tt.style.top  = y + 'px';
    });

    el.addEventListener('mouseleave', () => { tt.style.display = 'none'; });
}

function _debounce(fn, ms) {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

function renderLearningList(platform) {
    const el = document.getElementById('laList');
    if (!el) return;

    const PCLASS = { LetsDefend: 'ld', TryHackMe: 'thm', Hacktrace: 'ht' };
    const all    = platform === 'all' ? learningData : learningData.filter(a => a.platform === platform);
    const sorted = [...all].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 30);

    const itemsHtml = sorted.map(a => {
        const [, mm, dd] = a.date.split('-');
        const pClass     = PCLASS[a.platform] || '';
        const isExternal = a.url && a.url !== '#';
        const notesEl    = `<a href="${a.url || '#'}" class="la-notes"${isExternal ? ' target="_blank" rel="noopener"' : ''}>open notes ↗</a>`;
        return `<div class="la-item">
            <div class="la-date">${mm}-${dd}</div>
            <div class="la-item-body">
                <div class="la-title">${a.title}</div>
                <div class="la-item-meta">
                    <span class="la-course">${a.path}</span>
                    <span class="la-platform-badge ${pClass}">${a.platform}</span>
                    ${notesEl}
                </div>
            </div>
        </div>`;
    }).join('');

    const inner = document.createElement('div');
    inner.className = 'la-list-inner';
    inner.innerHTML = itemsHtml + itemsHtml;
    inner.style.setProperty('--la-dur', Math.max(12, sorted.length * 2.5) + 's');

    el.innerHTML = '';
    el.appendChild(inner);
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