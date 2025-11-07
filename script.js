// === PORTFOLIO DATA ===
const portfolioData = {
  red: {
    hero: {
      about:
        "I approach offensive security with curiosity and patience — building and testing tools, running experiments in my own lab, and learning from every result. I focus on uncovering vulnerabilities through methodical exploration, then turning those insights into practical improvements.",
      subtitle:
        "I don't aim to break for the sake of breaking, I aim to understand so we can build stronger.",
      typedStrings: [
        "Cyber Security Enthusiast",
        "CTF Player",
        "Innovative Problem Solver",
        "Lifelong Learner",
        "Clear Communicator",
        "Pragmatic Pentester",
        "SecOps Knight",
        "TRWBCY"
      ],
    },
    ctf: {
      title: "OFFENSIVE CTF WRITE-UPS",
      description:
        "Browse my collection of offensive security CTF writeups focused on exploitation and penetration testing.",
      machines: [
        { title: "CTF Machine Tartarus", image: "img/tartarus.png", desc: "Enumerate biography to creating dummy apk android to gain root access", url: "https://nickel-bedbug-8cc.notion.site/Tartarus-c50bfdc57e7d4cce8489d5fe989e4dc2" },
        { title: "CTF Machine Exodus", image: "img/exodus.png", desc: "Practicing NFS Enumeration, Exploiting Webmin, Privesc through SUID Binary", url: "https://nickel-bedbug-8cc.notion.site/Exodus-100416e03a138073ba4cd8a5f721751f" },
        { title: "CTF Machine Laboum", image: "img/laboum.png", desc: "CTF based on Drama-Film, OSINT at first Reverse Engineering at last", url: "https://nickel-bedbug-8cc.notion.site/Laboum-129416e03a1380bdbad4d3f15fb34af3" },
        { title: "CTF Machine Autobot", image: "img/autobot.png", desc: "From creating encryption to SQL Injection Database", url: "https://nickel-bedbug-8cc.notion.site/Autobot-111416e03a13800ebe53de57e0e45947" },
        { title: "CTF Machine Developed", image: "img/developed.png", desc: "Enumeration info.php leading to gain root access by cracking /etc/shadow hash", url: "https://nickel-bedbug-8cc.notion.site/Developed-479c658cb5154c8b856254c1be04df53" },
        { title: "CTF Machine NebulaMQ", image: "img/nebula.png", desc: "Exploiting Apache ActiveMQ, Leaking sensitive file pwned root access", url: "https://nickel-bedbug-8cc.notion.site/NebulaMQ-912a195578dc4b498834b4e5129a9e06" },
        { title: "CTF Machine CornFlix", image: "img/cornflix.png", desc: "SSRF-ing Parameter to open redirect URL, Leading to NTLM Spoofing", url: "https://nickel-bedbug-8cc.notion.site/CornFlix-724ee0c531aa4a96b68907276667abfb" },
        { title: "CTF Machine Ares", image: "img/aries.webp", desc: "Exploited Mantis Bug Tracker to gain root on a Linux Machine", url: "https://nickel-bedbug-8cc.notion.site/Ares-121416e03a1380cd9977d8edbbbc4387" },
        { title: "CTF Machine Toolbox", image: "img/toolbox.png", desc: "Bruteforcing Directory leading to git history and gaining access to root", url: "https://nickel-bedbug-8cc.notion.site/Toolbox-b68ce23a0ea74620bb35b3568b8381bd" },
        { title: "CTF Machine Multishop", image: "img/multishopo.png", desc: "Injecting malicious command to gain access root", url: "https://nickel-bedbug-8cc.notion.site/Multishop-6c1a05a6222c4b30a09fb39e692f78b4" },
        { title: "CTF Machine Ballpoint", image: "img/ballpoint.webp", desc: "Exploiting LeptonCMS to compromise full privilege windows access", url: "https://nickel-bedbug-8cc.notion.site/Ballpoint-dcd2095e6cb14cedb53676fd482ebf11" },
        { title: "CTF Machine Syringe", image: "img/syringe.webp", desc: "Injecting CMD mini shell in PHPMyAdmin to gain remote access", url: "https://nickel-bedbug-8cc.notion.site/Syringe-6fa9bd8970cc4867a85f850f41c055ef" },
        { title: "CTF Machine Bro", image: "img/bro.webp", desc: "Abusing SSTI Payload to gain access in Linux system", url: "https://nickel-bedbug-8cc.notion.site/Bro-657a1bca712048a681c9cca960c0a6b4" },
        { title: "CTF Machine Telolet", image: "img/telolet.png", desc: "Enumerating TorrentPier lead into leaking sensitive information", url: "https://nickel-bedbug-8cc.notion.site/Telolet-5368deb4f4744eefa8a502ab7816faf7" },
        { title: "CTF Machine Artemis", image: "img/artemis.webp", desc: "Enumerating Web to gain root access to Linux machine", url: "https://nickel-bedbug-8cc.notion.site/Artemis-c2b66778e56f4a2facb6db3e763e0f77" },
        { title: "CTF Machine FOS", image: "img/FOS.png", desc: "Bruteforcing weak credentials leading to command injection", url: "https://nickel-bedbug-8cc.notion.site/FOS-112416e03a1380a083aef2624f4f9a5d" },
        { title: "CTF Machine Guesser", image: "img/guesser.png", desc: "Exploiting RiteCMS to gain full privilege access to Linux machine", url: "https://nickel-bedbug-8cc.notion.site/Guesser-7f9d10c565034756ba7209478a746dc6" },
        { title: "CTF Machine Doom", image: "img/doom.png", desc: "Enumerating Web to gain full privilege access to Linux Machine", url: "https://nickel-bedbug-8cc.notion.site/Doom-ff9747879d4f4b19a68ddc0fabb29dbc" },
        { title: "CTF Machine Galz", image: "img/galz.png", desc: "Enumerating Web, Docker Breakout to gain full privilege access", url: "https://nickel-bedbug-8cc.notion.site/Galz-10a416e03a1380ecb522e65b4573dcd8" },
        { title: "CTF Machine Terra", image: "img/terra.png", desc: "Creating database for remote access Adminer", url: "https://nickel-bedbug-8cc.notion.site/Terra-106416e03a13809790dac7e3c050c6bf" },
        { title: "CTF Machine Traverse Mode", image: "img/traverse.png", desc: "Enumarating Web, Parameter injection to gain full access Linux Machine", url: "https://nickel-bedbug-8cc.notion.site/TraverseMode-99e7bf565d304c68a43f84ecefdb9f75" },
        { title: "CTF Machine Navigate", image: "img/navigate.png", desc: "Exploiting NavigateCMS to gain root access in Linux Machine", url: "https://nickel-bedbug-8cc.notion.site/Navigate-f5678769d93c49589e207a84a72f6815" },
        { title: "CTF Machine Atulieer", image: "img/atulieer.png", desc: "Modifying JasonWebTokens to gain root access in Linux Machine", url: "https://nickel-bedbug-8cc.notion.site/Atulieer-fdd3d8ac7a4f4ba4847550b8fdd46409" },
        { title: "CTF Machine Zeus", image: "img/zeus.png", desc: "Enumerating SMB to gain access to Windows Machine", url: "https://nickel-bedbug-8cc.notion.site/Zeus-aa5bb955bf1e4271ab303cc428c49fad" },
        { title: "CTF Machine Ariadne", image: "img/ariadne.png", desc: "Enumeration FTP to gain initial access & root to Linux Machine", url: "https://nickel-bedbug-8cc.notion.site/Ariadne-100416e03a1380969762d25c3cd1c9e5" }
    ],
    },
    projects: {
      title: "OFFENSIVE SECURITY PROJECTS",
      description:
        "Red team tools and frameworks I've developed for penetration testing and security research.",
      items: [
        {
            title: "ShadowShell: Advanced ETW Evasion Framework ",
            image: "img/cctv.png",
            desc: "ShadowShell is a comprehensive framework designed to evade the Windows Event Tracing (ETW) logging system during red team operations.",
            tech: ["Powershell/C#", "ETW Evasion", "Windows", "Red Team", "Windows Internals"],
            url: "https://nickel-bedbug-8cc.notion.site/ShadowShell-Advanced-ETW-Evasion-Framework-for-Red-Team-Operations-277416e03a13801b97c1ec43b2ac6c77"
        },
        {
            title: "EnvGuard: Advanced Environment Assessment Framework",
            image: "img/octopus.png",
            desc: "Advanced environment assessment framework for red team operations. Implements 12 classification techniques to distinguish production environments from analysis systems.",
            tech: ["C++", "Environment Assessment", "12 Advanced Techniques", "Sandbox", "Red Team", "Windows API"],
            url: "https://nickel-bedbug-8cc.notion.site/EnvGuard-Advanced-Environment-Assessment-Framework-For-Red-Team-Operations-274416e03a1380b58fefde598b68c47b"
        },
        {
            title: "GhostStager: Advanced C# Fileless Binary Loader",
            image: "img/ghoststager.jpg",
            desc: "Advanced C# fileless binary loader with AMSI/ETW bypass, reflective PE loading, and encrypted C2 communication for red team operations.",
            tech: ["C#", "AMSI Bypass", "ETW Evasion", "Reflective Loading", "Red Team", "Sliver C2"],
            url: "https://nickel-bedbug-8cc.notion.site/GhostStager-Advanced-C-Fileless-Binary-Loader-For-Red-Team-Operation-23b416e03a138025b44ff54e56424636"
        },
                {
            title: "Astaroth-Style Red Team Campaign",
            image: "img/astaroth.png",
            desc: "Fileless attack simulation leveraging LOLBins such as mshta.exe, inspired by the Astaroth malware campaign.",
            tech: ["LOLBins", "Red Team", "Fileless Attack", "Defender Evasion"],
            url: "https://nickel-bedbug-8cc.notion.site/Astaroth-Style-Red-Team-Campaign-23a416e03a138092a3afec2952c813ad"
        },
        {
            title: "Red Teaming 101: VBA Exploitation with Microsoft Word",
            image: "img/vba.png",
            desc: "Demonstration of VBA macro exploitation in Microsoft Word to obtain a reverse shell for red teaming simulation.",
            tech: ["VBA", "Microsoft Word", "Reverse Shell", "Exploitation"],
            url: "https://nickel-bedbug-8cc.notion.site/Red-Teaming-101-My-First-Dive-into-VBA-Exploitation-with-Microsoft-Word-1b9416e03a138087944af10d31b6830c"
        },
        {
            title: "Internal Pentest: Active Directory Exploitation",
            image: "img/AD.webp",
            desc: "Hands-on internal penetration testing focused on identifying and exploiting vulnerabilities in Active Directory environments.",
            tech: ["Active Directory", "Windows Server", "Kerberoasting", "Privilege Escalation"],
            url: "https://nickel-bedbug-8cc.notion.site/Internal-Pentest-Active-Directory-Exploitation-and-Lesson-Learned-17a416e03a1380449524cf6cad46accb"
        },
        {
            title: "From Blue to Blackpearl: Guided Exploitation Through 5 Machines",
            image: "img/blue.webp",
            desc: "Step-by-step exploitation journey across five machines, combining vulnerability analysis, exploitation, and mitigation strategies.",
            tech: ["CTF", "Windows", "Linux", "Privilege Escalation"],
            url: "https://nickel-bedbug-8cc.notion.site/From-Blue-to-Blackpearl-A-Guided-Exploitation-Through-5-Machines-17f416e03a1380558fb0dbf4285266f2"
        }
      ],
    },
  },
  blue: {
    hero: {
      about:
        "I approach defensive security with a proactive mindset — building detection systems, analyzing threat patterns, and strengthening organizational security posture. I focus on understanding attacker methodologies to build more effective defensive strategies.",
      subtitle:
        "Defense isn't just about blocking attacks, it's about understanding them to prevent future ones.",
      typedStrings: [
        "Blue Team Analyst",
        "SOC Engineer",
        "Threat Hunter",
        "Security Architect",
        "Incident Responder",
        "Defense Specialist",
        "TRWBCY",
      ],
    },
    ctf: {
      title: "DEFENSIVE CTF CHALLENGES",
      description:
        "Browse my collection of blue team CTF challenges focused on detection, analysis, and incident response.",
      machines: [
        {
          title: "CTF Machine Deviasi",
          image:
            "img/deviasi.jpg",
          desc: "Deep log analysis to identify malicious suspicous patterns and IOCs",
          url: "https://nickel-bedbug-8cc.notion.site/Deviasi-Hacktrace-Ranges-2a0416e03a1380babf06e961fa506f1a",
        },
        {
          title: "CTF Machine Undercover",
          image:
            "img/undercover.png",
          desc: "Binary Investigation to track advanced persistent threat activities",
          url: "https://nickel-bedbug-8cc.notion.site/Undercover-Hacktrace-Ranges-2a1416e03a1380028d39e07d1298f543",
        },
        {
          title: "CTF Machine BluuShell",
          image:
            "img/BluuShell.jpg",
          desc: "Forensic breakdown of a malicious Word (DOCX) and artifact extraction to revealing C2 indicators.",
          url: "https://nickel-bedbug-8cc.notion.site/BluuShell-Hacktrace-Ranges-2a4416e03a13809e98c5f10d33af37e0",
        }
      ],
    },
    projects: {
      title: "DEFENSIVE SECURITY PROJECTS",
      description:
        "Blue team tools and systems I've built for threat detection, monitoring, and incident response.",
      items: [
                {
          title: "SOC Confessions",
          image:
            "img/SOC_Confessions.png",
          desc: "A surreal portrayal of life inside the Security Operations Center, 'SOC Confessions' uncovers the unseen emotions behind blue team vigilance.",
          tech: ["Blue Team", "Threat Monitoring", "Incident Response", "SOC Workflow", "Storytelling", "Cyber Narrative"],
          url: "#",
        },
        {
          title: "Building EDR Detection Lab with Wazuh: From Detection to Response",
          image:"img/EDR.png",
          desc: "blue teaming project focused on building an EDR environment using the open-source Wazuh",
          tech: ["Wazuh", "Sysmon", "Windows Event Manager", "Simulation Attack", "MITRE ATT&CK", "SOC Analyst"],
          url: "https://nickel-bedbug-8cc.notion.site/Building-EDR-Detection-Lab-with-Wazuh-From-Detection-to-Response-27f416e03a1380b9b318fb215aeca082",
        },
        {
          title: "From Zero to SOC Hero: Building My First SIEM Lab",
          image: "img/SIEM.jpg",
          desc: "The first blue teaming project focused on building a functional SIEM environment using Splunk Free Edition.",
          tech: ["Splunk", "Ubuntu Server", "Windows 10", "Sysmon", "Dashboard Monitoring", "SPL"],
          url: "https://nickel-bedbug-8cc.notion.site/From-Zero-to-SOC-Hero-Building-My-First-SIEM-Lab-27d416e03a1380ba9aded15f489ca23b"
        }
      ],
    },
  },
  certifications: [
    {
      year: "2025",
      title: "AWS Certified Cloud Practitioner",
      desc: "Belajar konsep cloud dari nol sambil mendalami security best practice AWS.",
      status: "(In Progress)",
    },
    {
      year: "2025",
      title: "Certified API Security Practitioner",
      desc: "Memahami OWASP API Security Top 10 secara mendalam dan menguasai API pentesting tools.",
      verifyUrl:
        "https://drive.google.com/file/d/1CRK94BK63ABk-ajIGjfTTr02uAQHlVX0/view",
    },
    {
      year: "2025",
      title: "Red Team Internship Certification",
      desc: "Menjalani simulasi serangan penuh sambil menulis laporan teknis yang bisa dimengerti non-teknis.",
      verifyUrl:
        "https://drive.google.com/file/d/1niU5gbyWGn9RKDlraltHsQJB2qQcSuJt/view",
    },
    {
      year: "2024",
      title: "Practical Ethical Hacking",
      desc: "Menggabungkan pengetahuan CTF dengan skenario nyata, dari recon sampai exploit dan report.",
      verifyUrl:
        "https://drive.google.com/file/d/1RlF6sWO6n0KrmY_BC-iOStDghOD3elSQ/view",
    },
    {
      year: "2024",
      title: "Practical Web Application and Testing",
      desc: "Menguasai berbagai teknik web pentest, termasuk bypass auth dan exploit logic flaw.",
      verifyUrl:
        "https://drive.google.com/file/d/1jd3WiqBs_8ZlITE3XoE-h6NCZ5X1Ywks/view",
    },
    {
      year: "2024",
      title: "Practical Web Hacking",
      desc: "Latihan intensif eksploitasi web seperti SQLi, XSS, CSRF, dan SSRF di lab realistis.",
      verifyUrl:
        "https://drive.google.com/file/d/1mYYeCWeE8bAZDGc9m6f2L1qKh1MA40up/view",
    },
    {
      year: "2023",
      title: "Advent of Cyber",
      desc: "Menyelesaikan challenge harian yang menuntut kemampuan multi-domain: OSINT, crypto, exploitation.",
      verifyUrl:
        "https://drive.google.com/file/d/1kWtmymgK864zAoBswX9tGLuLlGp1yGU6/view",
    },
    {
      year: "2023",
      title: "IT Support Google",
      desc: "Menyesuaikan mindset dari troubleshooting umum menjadi pendekatan terstruktur berbasis ITIL dan best practices.",
      verifyUrl:
        "https://drive.google.com/file/d/1RB5ehE_-DovC1sgoII2FhV55qoF9Zdgr/view",
    },
  ],
};

// === MAIN APPLICATION CLASS ===
class EnhancedPortfolio {
  constructor() {
    this.currentPage = "home";
    this.currentTheme = "red";
    this.isTransitioning = false;
    this.typedInstance = null;
    this.matrixInterval = null;
    this.init();
  }

  init() {
    this.initThemeToggle();
    this.initBackgroundEffects();
    this.initNavigation();
    this.initTypedJS();
    this.initScrollArrows();
    this.initContentLoaders();
    this.hideLoading();
    // console.log('🚀 Enhanced Portfolio initialized successfully!');
  }

  // === THEME SYSTEM ===
  initThemeToggle() {
    const themeToggle = document.getElementById("themeToggle");
    const themeLabel = document.getElementById("themeLabel");

    if (!themeToggle) return;

    themeToggle.addEventListener("change", () => {
      this.currentTheme = themeToggle.checked ? "blue" : "red";
      
      // Panggil method transisi slide baru
      this.transitionTheme(); 
    });
  }

  // === THEME TRANSITION LOGIC (BARU) ===
  transitionTheme() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;

    // 1. Tambahkan class transisi flicker/fade-out cepat
    document.body.classList.add("theme-transitioning"); 
    
    // Hapus sisa class slide lama (jika ada) untuk memastikan bersih
    document.body.classList.remove("theme-slide-out", "theme-slide-in");

    setTimeout(() => {
      // 2. Aplikasikan tema baru saat flicker/fade-out sudah terjadi
      this.applyTheme();
      this.updateContent();

      // 3. Hapus class transisi setelah konten di-update
      setTimeout(() => {
        document.body.classList.remove("theme-transitioning");
        this.isTransitioning = false;
      }, 50); // Delay sangat singkat untuk memastikan update visual
      
    }, 350); // Tunggu 350ms (durasi CSS .theme-transitioning)
  }

  applyTheme() {
    const body = document.body;
    const themeLabel = document.getElementById("themeLabel");

    if (this.currentTheme === "blue") {
      body.setAttribute("data-theme", "blue");
      if (themeLabel) themeLabel.textContent = "Blue Team";
    } else {
      body.removeAttribute("data-theme");
      if (themeLabel) themeLabel.textContent = "Red Team";
    }
    // Wajib panggil ulang Matrix Rain untuk update warna!
    this.createMatrixRain(); 
  }

  updateContent() {
    const data = portfolioData[this.currentTheme];

    // Update hero/about content
    const aboutContent = document.getElementById("aboutContent");
    if (aboutContent) {
      aboutContent.innerHTML = `
        <p>${data.hero.about}</p>
        <br />
        <p><i>${data.hero.subtitle}</i></p>
      `;
    }

    // Update typed strings (keep animation style the same)
    if (this.typedInstance) {
      this.typedInstance.destroy();
      this.initTypedJS();
    }

    // Update CTF section headers
    const ctfTitle = document.getElementById("ctfTitle");
    const ctfDescription = document.getElementById("ctfDescription");
    if (ctfTitle) ctfTitle.textContent = data.ctf.title;
    if (ctfDescription) ctfDescription.textContent = data.ctf.description;

    // Update Projects section headers
    const projectsTitle = document.getElementById("projectsTitle");
    const projectsDescription = document.getElementById("projectsDescription");
    if (projectsTitle) projectsTitle.textContent = data.projects.title;
    if (projectsDescription)
      projectsDescription.textContent = data.projects.description;

    // Update nav link label for CTF
    const ctfLink = document.getElementById("ctfLink");
    if (ctfLink) {
      ctfLink.textContent = this.currentTheme === "red" ? "Red Team CTFs" : "Blue Team CTFs";
    }

    // Reload content lists
    this.loadCTFMachines();
    this.loadProjects();
  }

  // === BACKGROUND EFFECTS ===
  initBackgroundEffects() {
    this.createMatrixRain();
  }

  createMatrixRain() {
    const canvas = document.getElementById("matrix-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setSize();

    const chars =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリィギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレェゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(26, 26, 26, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const color =
        this.currentTheme === "blue"
          ? "rgba(74, 144, 226, 0.8)"
          : "rgba(255, 85, 85, 0.8)";

      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((drop, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drop * fontSize);

        if (drop * fontSize > canvas.height || Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    if (this.matrixInterval) clearInterval(this.matrixInterval);
    this.matrixInterval = setInterval(draw, 50);

    window.addEventListener("resize", () => {
      setSize();
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    });
  }

  // === NAVIGATION ===
  initNavigation() {
    document.querySelectorAll("[data-page]").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const pageId = e.currentTarget.getAttribute("data-page");
        if (pageId) {
          this.showPage(pageId);
          // AUTO-CLOSE MOBILE MENU saat klik navigation
          this.closeMobileMenu();
        }
      });
    });

    const logoEl = document.querySelector(".logo");
    logoEl?.addEventListener("click", (e) => {
      e.preventDefault();
      this.showPage("home");
      // AUTO-CLOSE MOBILE MENU saat klik logo
      this.closeMobileMenu();
    });

    const mobileMenu = document.getElementById("mobileMenu");
    const navCenter = document.getElementById("navCenter");
    if (mobileMenu && navCenter) {
      mobileMenu.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        navCenter.classList.toggle("active");
      });
    }

    const downloadBtn = document.getElementById("downloadBtn");
    if (downloadBtn) {
      downloadBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.downloadResume();
        // AUTO-CLOSE MOBILE MENU saat klik download
        this.closeMobileMenu();
      });
    }
  }

  // TAMBAHIN method baru ini setelah initNavigation()
  closeMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const navCenter = document.getElementById("navCenter");
    
    if (mobileMenu && navCenter) {
      mobileMenu.classList.remove("active");
      navCenter.classList.remove("active");
    }
  }

  showPage(pageId) {
    if (this.isTransitioning || this.currentPage === pageId) return;

    this.isTransitioning = true;
    const currentSection = document.querySelector(".page-section.active");
    const targetSection = document.getElementById(pageId);

    if (currentSection && targetSection) {
      currentSection.classList.add("slide-out");

      setTimeout(() => {
        currentSection.classList.remove("active", "slide-out");
        targetSection.classList.add("slide-in");

        setTimeout(() => {
          targetSection.classList.remove("slide-in");
          targetSection.classList.add("active");
          this.currentPage = pageId;
          this.isTransitioning = false;
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 50);
      }, 300);
    } else {
      this.isTransitioning = false;
    }
  }

    downloadResume() {
    const link = document.createElement('a');
    link.href = './Resume - Tri Wibowo Cahyo.pdf'; // Pastikan nama file dan path ini benar
    link.download = 'Tri_Wibowo_Resume.pdf'; // Nama file saat didownload
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.showNotification("📄 Resume is downloading...");
    }

  // === TYPED.JS ===
  initTypedJS() {
    const data = portfolioData[this.currentTheme];
    if (typeof Typed !== "undefined") {
      this.typedInstance = new Typed(".typed", {
        strings: data.hero.typedStrings,
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        cursorChar: "|",
      });
    }
  }

  // === SCROLL ARROWS ===
  initScrollArrows() {
    document.querySelectorAll(".scroll-arrow").forEach((arrow) => {
      arrow.addEventListener("click", () => {
        const target = arrow.getAttribute("data-target");
        if (target) this.scrollToSection(target);
      });
    });

    const backToTop = document.getElementById("backToTop");
    backToTop?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  scrollToSection(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
      const offsetTop = target.offsetTop - 90;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  }

  // === CONTENT LOADERS ===
  initContentLoaders() {
    // 1. Amati Static Sections (About, Experience, Contact)
    this.setupRevealAnimation('.content-section'); 

    this.loadCTFMachines();
    this.loadProjects();
    this.loadCertifications();
    // this.initTimelineAnimation(); // Hapus/Komentari method lama
  }

  loadCTFMachines() {
    const grid = document.getElementById("ctfGrid");
    if (!grid) return;

    const data = portfolioData[this.currentTheme];
    grid.innerHTML = data.ctf.machines
      .map(
        (machine) => `
        <div class="card" onclick="window.open('${machine.url}', '_blank')">
          <img src="${machine.image}" alt="${machine.title}" loading="lazy" />
          <div class="card-content">
            <h3>${machine.title}</h3>
            <p><em>${machine.desc}</em></p>
          </div>
        </div>
      `
      )
      .join("");
    
    // Panggil Reveal Animation setelah semua card CTF dibuat
    this.setupRevealAnimation('.ctf-grid .card');
  }

  loadProjects() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;

    const data = portfolioData[this.currentTheme];
    grid.innerHTML = data.projects.items
      .map(
        (project) => `
        <div class="card" onclick="window.open('${project.url}', '_blank')">
          <img src="${project.image}" alt="${project.title}" loading="lazy" />
          <div class="card-content">
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
            <div class="tech-stack">
              ${project.tech
                .map((t) => `<span class="tech-tag">${t}</span>`)
                .join("")}
            </div>
          </div>
        </div>
      `
      )
      .join("");

    // Panggil Reveal Animation setelah semua card Project dibuat
    this.setupRevealAnimation('.projects-grid .card');
  }

  loadCertifications() {
    const timeline = document.getElementById("timeline");
    if (!timeline) return;

    timeline.innerHTML = portfolioData.certifications
      .map((cert, index) => {
        const side = index % 2 === 0 ? "left" : "right";
        const verifyButton = cert.verifyUrl
          ? `<a href="${cert.verifyUrl}" target="_blank" class="verify-btn">Verify</a>`
          : "";

        return `
        <div class="timeline-item ${side}">
          <div class="timeline-content">
            <span class="timeline-year">${cert.year}</span>
            <h3>${cert.title} ${cert.status || ""}</h3>
            <p><strong>Journey:</strong> ${cert.desc}</p>
            ${verifyButton}
          </div>
        </div>
      `;
      })
      .join("");

    // Panggil Reveal Animation setelah semua item timeline dibuat (threshold 0.3 agar lebih tepat)
    this.setupRevealAnimation('.timeline-item', 0.3);
  }

  // === UTILITIES ===
  
  // === SCROLL REVEAL UTILITY ===
  setupRevealAnimation(targetSelector, thresholdValue = 0.1) {
    const revealElements = document.querySelectorAll(targetSelector);
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: thresholdValue 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        observer.observe(element);
    });
  }

  hideLoading() {
    setTimeout(() => {
      const loading = document.getElementById("loading");
      if (loading) {
        loading.classList.add("hide");
        setTimeout(() => loading.remove(), 500);
      }
    }, 1500);
  }

  showNotification(message) {
    const notification = document.createElement("div");
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: var(--glass-bg);
      color: var(--text-color);
      border: 1px solid var(--border-color);
      padding: 15px 20px;
      border-radius: 8px;
      z-index: 10000;
      font-size: 14px;
      animation: slideInRight 0.3s ease;
      backdrop-filter: blur(10px);
    `;

    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  }
}

// === INITIALIZE APPLICATION ===
document.addEventListener("DOMContentLoaded", () => {
  new EnhancedPortfolio();
});