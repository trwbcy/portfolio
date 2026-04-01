// === WRITEUP DATA ===
const writeups = [
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
    { title: "FOS", type: "red", desc: "Weak Creds to Command Injection", url: "https://nickel-bedbug-8cc.notion.site/FOS-112416e03a1380a083aef2624f4f9a5d" },
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
    { title: "Deimos", type: "blue", desc: "PCAP Malware Analysis", url: "https://drive.google.com/file/d/1Rf2GZf1nbw56vD0lDhPCU3_aljL_AN_Z/view?usp=sharing" },
    { title: "Immortal", type: "blue", desc: "VeraCrypt Disk Forensics", url: "https://nickel-bedbug-8cc.notion.site/Immortal-Hacktrace-Ranges-2e7416e03a1380e8946adf53073f10cf" },
    { title: "Inscept", type: "blue", desc: "Agent Tesla Campaign Analysis", url: "https://nickel-bedbug-8cc.notion.site/Inscept-Hacktrace-Ranges-304416e03a1380ee89b7c72c4914e891" },
    { title: "Credsnoop", type: "blue", desc: "PCAP & Event Log Correlation", url: "https://nickel-bedbug-8cc.notion.site/Credsnoop-Hacktrace-Ranges-300416e03a1380d6ac3dde6e3a934858" },
    { title: "Loki", type: "blue", desc: ".NET Reverse Engineering", url: "https://nickel-bedbug-8cc.notion.site/Loki-Hacktrace-Ranges-2fc416e03a1380fdb604e3e4c6553b22" },
    { title: "Cilent", type: "blue", desc: "Phishing HTML Attachment & Telegram Exfil", url: "https://nickel-bedbug-8cc.notion.site/CTF-Writeup-Cilent-Hacktrace-Defensive-321416e03a13803fa136e019d0515260" },
    { title: "Keyboard Warrior", type: "blue", desc: "Malware Analysis", url: "https://drive.google.com/file/d/1iSU6nz_hO3J1Ab2YAvJLLZA9CUQqzdmR/view?usp=sharing" },
    { title: "Shortway", type: "blue", desc: "Malware Infection Analysis", url: "https://docs.google.com/document/d/1NV_NmB1Zby9emp42q3OGM4oxgGQbWb_S/edit?usp=sharing&ouid=112970802675533255155&rtpof=true&sd=true" },
    { title: "Volatify", type: "blue", desc: "Memory Forensics", url: "https://docs.google.com/document/d/1a0vIHmZ3PQi-7ZOk16lcNCtavdavIwR-/edit?usp=sharing&ouid=112970802675533255155&rtpof=true&sd=true" },
    { title: "Subvert", type: "blue", desc: ".NET Malware Analysis & MSSQL Injection", url: "https://drive.google.com/file/d/1d60zUDWBP3id0whogPcUE-_QtQ7vF1FM/view?usp=sharing" },
    { title: "Charon", type: "blue", desc: "Memory & Disk Forensics", url: "https://drive.google.com/file/d/1om6jsQ3yypLkiA9K8eSZYzWfOcJT-yqe/view?usp=sharing" },
];

// === STATE ===
let currentFilter = 'all';
let searchTerm = '';

// === RENDER ===
function render() {
    const grid = document.getElementById('writeupGrid');
    const countEl = document.getElementById('resultCount');

    let filtered = writeups;
    if (currentFilter !== 'all') {
        filtered = filtered.filter(w => w.type === currentFilter);
    }
    if (searchTerm) {
        filtered = filtered.filter(w =>
            w.title.toLowerCase().includes(searchTerm) ||
            w.desc.toLowerCase().includes(searchTerm)
        );
    }

    const offCount = filtered.filter(w => w.type === 'red').length;
    const defCount = filtered.filter(w => w.type === 'blue').length;

    countEl.textContent = `${filtered.length} WRITEUP${filtered.length !== 1 ? 'S' : ''} FOUND — ${offCount} OFFENSIVE · ${defCount} DEFENSIVE`;

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">∅</div>
                <div class="empty-text">NO MATCHES FOUND.<br>TRY A DIFFERENT QUERY.</div>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map((w, i) => `
        <a href="${w.url}" target="_blank" rel="noopener" class="writeup-card ${w.type}" style="animation: cardIn .4s ease ${i * 30}ms both;">
            <span class="writeup-type ${w.type}">${w.type === 'red' ? 'ROOTED' : 'ANALYZED'}</span>
            <div class="writeup-title">${w.title}</div>
            <div class="writeup-desc">${w.desc}</div>
            <span class="writeup-arrow">→</span>
        </a>
    `).join('');
}

function setFilter(f) {
    currentFilter = f;
    document.querySelectorAll('.ftab').forEach(b => {
        b.classList.toggle('active', b.dataset.filter === f);
    });
    render();
}

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
    // Filter tabs
    document.querySelectorAll('.ftab').forEach(btn => {
        btn.addEventListener('click', () => setFilter(btn.dataset.filter));
    });

    // Search
    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        render();
    });

    // Keyboard shortcut Ctrl+K / Cmd+K
    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            document.getElementById('searchInput').focus();
        }
    });

    // Mobile menu
    const toggle = document.getElementById('navToggle');
    const drawer = document.getElementById('mobileDrawer');
    if (toggle && drawer) {
        toggle.addEventListener('click', () => drawer.classList.toggle('open'));
        drawer.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => drawer.classList.remove('open'));
        });
    }

    // Custom cursor
    initCursor();

    // Initial render
    render();
});

// === CUSTOM CURSOR ===
function initCursor() {
    if (window.matchMedia('(max-width:900px)').matches) return;
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;
    let mx = -100, my = -100, rx = -100, ry = -100;

    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

    (function loop() {
        rx += (mx - rx) * .15;
        ry += (my - ry) * .15;
        dot.style.transform = `translate3d(${mx - 2.5}px, ${my - 2.5}px, 0)`;
        ring.style.transform = `translate3d(${rx - 15}px, ${ry - 15}px, 0)`;
        requestAnimationFrame(loop);
    })();

    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
            ring.style.width = '44px';
            ring.style.height = '44px';
            ring.style.borderColor = 'rgba(157,0,255,.7)';
        });
        el.addEventListener('mouseleave', () => {
            ring.style.width = '30px';
            ring.style.height = '30px';
            ring.style.borderColor = 'rgba(157,0,255,.45)';
        });
    });
}
