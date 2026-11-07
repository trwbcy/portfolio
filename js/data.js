/* ============================================================
   TRWBCY portfolio content. Edit this file, not app.js.

   CASES: newest goes FIRST in the array (top of the stack).
   Fields:
     cat    Category label. Ink color comes from INKS below.
     title  Card title (keep short, it is uppercase and one line).
     k2     Label for the second row: "MITRE" or "Stack".
     mitre  Value for that row.
     line   One-sentence summary shown in the right column.
     proof  What evidence exists (report, writeup, live tool).
     tone   Square color on the card badge.
     img    Card art, 800x450 JPG, already recolored to purple.
     href   Optional. Link to the case page or PDF. Clicking the
            active card (or its "Open case" chip) opens it.
   ============================================================ */

var PORTFOLIO = window.PORTFOLIO = {};

PORTFOLIO.cases = [
  {"cat": "Incident Response", "title": "The rented laptop", "k2": "MITRE", "mitre": "T1496", "line": "A C2 alert that was really a laptop rented to strangers. A 10:1 upload ratio proved it, and hunting found two more.", "proof": "Incident report + hunt", "tone": "#D9822B", "img": "img/cases/the-rented-laptop.jpg", "href": "assets/reports/the-rented-laptop.pdf"},
  {"cat": "Incident Response", "title": "The 16-minute lie", "k2": "MITRE", "mitre": "T1176", "line": "A DNS spyware alert traced to the exact browser process, once I proved the SIEM clock ran 16.5 minutes late.", "proof": "Incident report + story", "tone": "#D9822B", "img": "img/cases/the-16-minute-lie.jpg", "href": "assets/reports/the-16-minute-lie.pdf"},
  {"cat": "Incident Response", "title": "ClickFix wallet trap", "k2": "MITRE", "mitre": "T1204.004 · T1105 · T1620", "line": "A ClickFix lure tried to install a trojanized crypto wallet. Five pieces of evidence proved the RAT never ran.", "proof": "Incident report + story", "tone": "#D9822B", "img": "img/cases/clickfix-wallet-trap.jpg", "href": "assets/reports/clickfix-wallet-trap.pdf"},
  {"cat": "Red Team", "title": "PlugAndPwn", "k2": "MITRE", "mitre": "T1566.001 · T1204.002", "line": "A malicious VS Code extension as an initial access vector, tested in a lab.", "proof": "PoC report", "tone": "#C23B2E", "img": "img/cases/plugandpwn.jpg", "href": "https://drive.google.com/file/d/13GoXuZJ0CAOsXjriRf6D8_DDoifif_OS/view?usp=sharing"},
  {"cat": "Purple Team", "title": "Astaroth-style campaign", "k2": "MITRE", "mitre": "T1218.005 · T1027 · T1105", "line": "A fileless chain on fully patched Windows 10, then one detection rule per stage.", "proof": "Writeup + detection rules", "tone": "#5B2FC9", "img": "img/cases/astaroth-style-campaign.jpg", "href": "https://drive.google.com/file/d/1Iw5GZ8NDQ6aOjjo5lr6uLqdenwVfTVVV/view?usp=sharing"},
  {"cat": "Blue Team", "title": "SOC homelab", "k2": "Stack", "mitre": "SIEM · NDR · XDR · SOAR · WAF", "line": "13 open-source services on 5 VMs, validated from WAF block to automated firewall block.", "proof": "Architecture writeup", "tone": "#1F6FD1", "img": "img/cases/soc-homelab.jpg", "href": "https://drive.google.com/file/d/1SPe8eGGo-Ii_4Mdu3jFf49F4ConbT5kP/view?usp=sharing"},
  {"cat": "Incident Response", "title": "Phishing to mshta", "k2": "MITRE", "mitre": "T1218.005", "line": "A real phishing-triggered fileless execution, isolated before formal escalation.", "proof": "Sanitized case notes", "tone": "#D9822B", "img": "img/cases/phishing-to-mshta.jpg", "href": "https://drive.google.com/file/d/1pkwW2jBs8n0hHXDc_9rJelf-m96Uq4iQ/view?usp=sharing"},
  {"cat": "Incident Response", "title": "LOLBin + cloud staging", "k2": "MITRE", "mitre": "T1218 · T1105 · T1047", "line": "pcalua.exe proxying mshta to pull an HTA payload from cloud storage, then WMI-spawned PowerShell.", "proof": "Sanitized case notes", "tone": "#D9822B", "img": "img/cases/lolbin-cloud-staging.jpg", "href": "https://drive.google.com/file/d/1-UUtYfS2i41wqTTYEqRoIXMSocjrD218/view?usp=sharing"},
  {"cat": "Tooling", "title": "yntkts", "k2": "Stack", "mitre": "Binary lookup · MITRE mapping", "line": "One search for what a binary is, how it gets abused, and how to close the ticket.", "proof": "Live tool", "tone": "#1F6FD1", "img": "img/cases/yntkts.jpg", "href": "https://trwbcy.github.io/yntkts"},
  {"cat": "Blue Team", "title": "EDR lab with Wazuh", "k2": "Stack", "mitre": "Wazuh · Active response", "line": "Detections mapped to MITRE ATT&CK with automated response actions.", "proof": "Lab writeup", "tone": "#1F6FD1", "img": "img/cases/edr-lab-with-wazuh.jpg", "href": "https://nickel-bedbug-8cc.notion.site/Building-EDR-Detection-Lab-with-Wazuh-From-Detection-to-Response-27f416e03a1380b9b318fb215aeca082"},
  {"cat": "Red Team", "title": "SandTrap", "k2": "Stack", "mitre": "C++ · Sandbox evasion", "line": "Hardware fingerprinting and timing checks to spot and slip past VM sandboxes.", "proof": "Writeup", "tone": "#C23B2E", "img": "img/cases/sandtrap.jpg", "href": "https://nickel-bedbug-8cc.notion.site/SandTrap-Breaking-Virtual-Boundaries-2f2416e03a13802bba9aebc2cace4536k"},
  {"cat": "Red Team", "title": "ShadowShell", "k2": "Stack", "mitre": "C# · ETW evasion", "line": "A framework for staying quiet in Windows Event Tracing during red team operations.", "proof": "Writeup", "tone": "#C23B2E", "img": "img/cases/shadowshell.jpg", "href": "https://nickel-bedbug-8cc.notion.site/ShadowShell-Advanced-ETW-Evasion-Framework-for-Red-Team-Operations-277416e03a13801b97c1ec43b2ac6c77"},
  {"cat": "Red Team", "title": "GhostStager", "k2": "Stack", "mitre": "C# · AMSI/ETW bypass · Sliver", "line": "A fileless C# loader with AMSI and ETW bypass and encrypted C2 through Sliver.", "proof": "Writeup", "tone": "#C23B2E", "img": "img/cases/ghoststager.jpg", "href": "https://nickel-bedbug-8cc.notion.site/GhostStager-Advanced-C-Fileless-Binary-Loader-For-Red-Team-Operation-23b416e03a138025b44ff54e56424636"},
  {"cat": "Red Team", "title": "EnvGuard", "k2": "Stack", "mitre": "C++ · Environment checks", "line": "12 classification techniques to tell a production host from an analysis box.", "proof": "Writeup", "tone": "#C23B2E", "img": "img/cases/envguard.jpg", "href": "https://nickel-bedbug-8cc.notion.site/EnvGuard-Advanced-Environment-Assessment-Framework-For-Red-Team-Operations-274416e03a1380b58fefde598b68c47b"},
  {"cat": "Pentest", "title": "Internal pentest: AD", "k2": "Stack", "mitre": "Active Directory · Windows", "line": "Finding and exploiting weaknesses in an Active Directory environment, hands on.", "proof": "Writeup", "tone": "#C23B2E", "img": "img/cases/internal-pentest-ad.jpg", "href": "https://nickel-bedbug-8cc.notion.site/Internal-Pentest-Active-Directory-Exploitation-and-Lesson-Learned-17a416e03a1380449524cf6cad46accb"},
  {"cat": "Blue Team", "title": "Splunk SIEM lab", "k2": "Stack", "mitre": "Splunk · SIEM", "line": "My first blue team build: a working SIEM on Splunk Free, from scratch.", "proof": "Writeup", "tone": "#1F6FD1", "img": "img/cases/splunk-siem-lab.jpg", "href": "https://nickel-bedbug-8cc.notion.site/From-Zero-to-SOC-Hero-Building-My-First-SIEM-Lab-27d416e03a1380ba9aded15f489ca23b"}
];

PORTFOLIO.inks = { 'Red Team': '#C23B2E', 'Pentest': '#C23B2E', 'Blue Team': '#1A62BE', 'Tooling': '#1A62BE', 'Purple Team': '#5B2FC9', 'Incident Response': '#A9560F' };

/* About page. Each row is a list of [text, color] pieces. color: R red, B blue, P purple, or null. */
PORTFOLIO.facts = [
  [['#5 '], ['offensive', 'R'], [' in Indonesia']],
  [['#5 '], ['defensive', 'B'], [' in Indonesia']],
  [['70', 'P'], [' machines rooted, '], ['70', 'P'], [' writeups']],
  [['My '], ['attacks', 'R'], [' become '], ['detections', 'B']],
  [['A full '], ['SOC stack', 'P'], [', built at home']],
  [['Self-taught, no shortcuts']]
];
PORTFOLIO.closing = [['Thinking like the '], ['attacker', 'R'], [', '], ['defending', 'B'], [' like it counts.']];

PORTFOLIO.tiles = [
      { platform: 'Hacktrace', title: 'DevilGod', tag: 'Windows · Hard' },
      { platform: 'Hacktrace', title: 'Fenrir', tag: 'Windows Server exploit chain' },
      { platform: 'Hacktrace', title: 'River', tag: 'Pivoting to a firewalled service' },
      { platform: 'Hacktrace', title: 'E-LEET', tag: 'Rooted' },
      { platform: 'TryHackMe', title: 'Management wants a word', tag: 'Forensics · Hard' },
      { platform: 'TCM Security', title: 'Noob Village CTF', tag: 'DEF CON 2026' },
      { platform: 'Hacktrace', title: 'HIDC 2026', tag: 'Independence Day competition' },
      { platform: '+ 63 more', title: 'Ask me', tag: 'Proof available in interview' }
    ];

/* About page columns. Each line is [text] or [text, url]. */
PORTFOLIO.cols = [
      { head: 'Rankings & Recognition', tone: '#4A4852', lines: [['Hacktrace #5 offensive, Indonesia'], ['Hacktrace #5 defensive, Indonesia'], ['TryHackMe #5, Indonesia'], ['70 machines rooted']] },
      { head: 'Certifications / Offense', tone: '#C23B2E', lines: [['TryHackMe PT1, hands-on (2026)', 'https://drive.google.com/file/d/1HJr5ppW_6Kvd_NF7cfRnhTKF1CiIyui9/view'], ['Red Team Internship, Hacksecure (2025)', 'https://drive.google.com/file/d/1niU5gbyWGn9RKDlraltHsQJB2qQcSuJt/view'], ['API Security Practitioner (2025)', 'https://drive.google.com/file/d/1CRK94BK63ABk-ajIGjfTTr02uAQHlVX0/view']] },
      { head: 'Certifications / Defense', tone: '#1A62BE', lines: [['Blue Team Practitioner, Merit (2026)', 'https://drive.google.com/file/d/1-Bb-n_D1DiiYCAYBilZkvrQpXZ2LbmRT/view'], ['Network Security Practitioner, Merit (2025)', 'https://drive.google.com/file/d/1n3vkEEz4tGQjkw7M0-AJ-gqs6zbWM8jx/view'], ['TryHackMe SEC1 (2026)', 'https://drive.google.com/file/d/1MfZSdU-bP97LJ1Ihr-O48aqbDfZcBdaS/view'], ['Google IT Support (2023)', 'https://drive.google.com/file/d/1RB5ehE_-DovC1sgoII2FhV55qoF9Zdgr/view']] },
      { head: 'Capabilities', tone: '#4A4852', lines: [['Threat hunting'], ['Alert triage & investigation'], ['Detection engineering'], ['Incident response'], ['Adversary emulation']] },
      { head: 'Stack', tone: '#4A4852', lines: [['IBM QRadar · Cortex XDR'], ['TheHive · Wazuh · Splunk'], ['Sliver · Burp · BloodHound']] },
      { head: 'Tools I built', tone: '#4A4852', lines: [['yntkts, binary lookup', 'https://trwbcy.github.io/yntkts'], ['PlugAndPwn, VS Code PoC'], ['DEDUCE, SOC detective game', 'https://trwbcy.github.io/deduce']] },
      { head: 'Currently', tone: '#4A4852', lines: [['Security Analyst, enterprise SOC'], ['Studying information systems'], ['Rooting boxes on Hacktrace']] }
    ];

/* Lab page heatmap. FALLBACK ONLY: at runtime js/app.js fetches
   study/data/entries.json (the same file log-learn.sh writes) and rebuilds
   dayCounts, feed, split and topics from it. These values are used only
   if that fetch fails. Keys are MMDD of heatYear, values are session counts. */
PORTFOLIO.heatYear = 2026;
PORTFOLIO.dayCounts = {"0403":1,"0404":2,"0410":1,"0412":1,"0419":1,"0425":10,"0426":2,"0501":1,"0502":2,"0503":1,"0505":1,"0506":7,"0507":3,"0515":1,"0516":4,"0517":1,"0520":3,"0521":1,"0522":1,"0523":1,"0525":1,"0526":1,"0528":3,"0530":3,"0531":3,"0601":5,"0602":6,"0603":1,"0605":4,"0606":4,"0607":11,"0610":1,"0611":1,"0614":6,"0615":2,"0616":1,"0621":1,"0625":1,"0627":1,"0628":7,"0630":6,"0704":2,"0708":1,"0709":2,"0710":1,"0711":7,"0712":2,"0714":3,"0715":2,"0716":2,"0717":3,"0718":2,"0722":1,"0724":2,"0726":1,"0727":1,"0728":2,"0731":1,"0803":1,"0806":2,"0808":2,"0809":2,"0810":1,"0817":6,"0818":5,"0819":3,"0822":3,"0823":9,"0824":3,"0825":3,"0826":2,"0827":2,"0828":6,"0829":3,"0830":3,"0902":1,"0903":2,"0905":1,"0906":2,"0907":5,"0908":6,"0909":4,"0910":3,"0911":8,"0912":8,"0913":5,"0914":1,"0915":4,"0916":2,"0917":1,"0919":3,"0920":4,"0921":2,"0922":1,"0923":2,"0924":1,"0926":2,"0927":2,"0930":1,"1003":5,"1004":2,"1005":2,"1006":4,"1007":2,"1008":1,"1009":3,"1010":2,"1013":3,"1014":7,"1015":3,"1016":3,"1017":4,"1018":3,"1019":2,"1020":2,"1021":5,"1022":6,"1023":3,"1024":4,"1025":2};

PORTFOLIO.feed = [{"d":"Oct 25","p":"Work","c":"Threat Hunting","t":"Game client spawning elevated recon PowerShell","k":"def"},{"d":"Oct 24","p":"Work","c":"Threat Hunting","t":"Reverse shell BIOC triage: baselining an AI ops agent","k":"def"},{"d":"Oct 24","p":"Work","c":"Networking","t":"Proxies, shells and port forwarding","k":"def"},{"d":"Oct 23","p":"Personal Lab","c":"Reverse Engineering","t":"PHP2Shell lab: why the exploit works on 8.x but not 7.x","k":"off"},{"d":"Oct 23","p":"Personal Lab","c":"Reverse Engineering","t":"Comparing struct layouts across PHP versions","k":"off"},{"d":"Oct 22","p":"Work","c":"Threat Hunting","t":"XQL visualization: time-series process charts","k":"def"},{"d":"Oct 22","p":"Work","c":"Threat Hunting","t":"Evaluating a fake PoC repository","k":"def"},{"d":"Oct 22","p":"Universitas Terbuka","c":"Learning","t":"Operating systems: disk management and storage","k":"build"},{"d":"Oct 22","p":"Universitas Terbuka","c":"Learning","t":"Function domains, composition and set cardinality","k":"build"},{"d":"Oct 22","p":"Work","c":"Threat Hunting","t":"Game client hunting and Steam service LPE research","k":"def"}];

PORTFOLIO.split = [['Offense', 147, 'off'], ['Defense', 137, 'def'], ['Build & learn', 60, 'build']];

PORTFOLIO.topics = [['Threat Hunting', 82, 'def'], ['Web Exploitation', 26, 'off'], ['Documentation', 22, 'build'], ['Offensive Security', 21, 'off'], ['SOC Fundamentals', 21, 'def'], ['CTF', 16, 'off'], ['Privilege Escalation', 15, 'off'], ['Reconnaissance', 14, 'off'], ['Disk Forensics', 12, 'def'], ['Malware Analysis', 11, 'def'], ['Reverse Engineering', 11, 'off'], ['Active Directory', 11, 'off'], ['Web Development', 10, 'build'], ['DFIR', 6, 'def'], ['Cryptography', 5, 'off']];

