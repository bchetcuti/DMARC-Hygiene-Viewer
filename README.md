# DMARC Hygiene Viewer (Local)

A lightweight, client-side tool for parsing and visualizing DMARC aggregate reports. Built with vanilla HTML and JavaScript, this viewer renders trust badges, flags anomalies, and summarizes authentication hygiene—all without uploading data or requiring a backend.

## 🔍 Features

- **Local XML parsing** — No network calls, no backend  
- **SVG trust badges** — Visual indicators for verified, partial, and flagged senders  
- **Anomaly highlighting** — Flags spoof attempts and misaligned senders  
- **Summary banner** — Domain, policy, pass rate, and verified sender count  
- **Portable** — Drop into any folder and open in browser  
- **Redirect hygiene** — Supports vanity paths via Cloudflare Pages Functions

## 🧪 How to Use

1. Save the HTML scaffold as `dmarc-viewer.html`  
2. Open it in any modern browser  
3. Upload a DMARC aggregate report (`.xml`)  
4. View parsed results instantly  

## 🧠 Badge Logic

| Badge | Criteria | Meaning |
|-------|----------|---------|
| ✅ Verified | SPF + DKIM + DMARC pass | Sender is fully authenticated |
| ⚠️ Partial | SPF or DKIM pass | Sender is partially aligned |
| ❌ Flagged | All fail or spoof attempt | Sender may be unauthorized |

Badges are rendered inline using SVG for symbolic clarity.

## 🛡️ Privacy & Security

- All parsing is done locally in-browser  
- No data is uploaded or stored  
- Ideal for internal hygiene checks or personal ops validation  
- CSP and security headers enforced via Cloudflare Rules or Workers


## 📦 Future Extensions

- Trendline generation across multiple reports  
- Export to JSON or CSV  
- Integration with governance dashboards  

## 🧩 Why It Exists

This tool was built to support modular, emotionally honest hygiene workflows—especially for those who value clarity, autonomy, and symbolic UX. It reflects a philosophy of quiet rigor, operational maturity, and trust signaling without external dependencies.
