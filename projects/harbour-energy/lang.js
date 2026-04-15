/* ============================================================
   Harbour Energy Indonesia — Language Switcher (ID ↔ EN)
   ============================================================ */

const translations = {
    // Sidebar (shared)
    "sidebar.portfolio": { id: "Portfolio", en: "Portfolio" },
    "sidebar.konteks": { id: "Konteks Bisnis", en: "Business Context" },
    "sidebar.pertanyaan": { id: "Pertanyaan Bisnis", en: "Business Questions" },
    "sidebar.temuan": { id: "Temuan & Rekomendasi", en: "Findings & Recommendations" },
    "sidebar.visualisasi": { id: "Visualisasi", en: "Visualization" },
    "sidebar.reports": { id: "Reports", en: "Reports" },
    "sidebar.data": { id: "Report Data", en: "Data Report" },

    // Index
    "idx.hero.title": { id: "Harbour Energy Indonesia", en: "Harbour Energy Indonesia" },
    "idx.hero.sub": { id: "Operation Support Intern — Supporting Operational Performance Analysis 2025", en: "Operation Support Intern — Supporting Operational Performance Analysis 2025" },
    "idx.tag.oil": { id: "Oil & Gas", en: "Oil & Gas" },
    "idx.tag.ops": { id: "Operation Support", en: "Operation Support" },
    "idx.tag.excel": { id: "Excel", en: "Excel" },
    "idx.tag.analytics": { id: "Data Analytics", en: "Data Analytics" },
    "idx.sec.portfolio": { id: "PORTFOLIO", en: "PORTFOLIO" },
    "idx.sec.reports": { id: "REPORTS", en: "REPORTS" },
    "idx.card1.title": { id: "Konteks Bisnis", en: "Business Context" },
    "idx.card1.desc": { id: "Profil Harbour Energy, operasi Indonesia, dan tantangan bisnis", en: "Harbour Energy profile, Indonesia operations, and business challenges" },
    "idx.card2.title": { id: "Pertanyaan Bisnis", en: "Business Questions" },
    "idx.card2.desc": { id: "Pertanyaan strategis dan framework analisis", en: "Strategic questions and analysis framework" },
    "idx.card3.title": { id: "Temuan & Rekomendasi", en: "Findings & Recommendations" },
    "idx.card3.desc": { id: "Key findings, executive summary, dan rekomendasi actionable", en: "Key findings, executive summary, and actionable recommendations" },
    "idx.card4.title": { id: "Visualisasi", en: "Visualization" },
    "idx.card4.desc": { id: "Chart dan grafik dari data operasional", en: "Charts and graphs from operational data" },
    "idx.card5.title": { id: "Report Data", en: "Data Report" },
    "idx.card5.desc": { id: "Detail teknis: cleaning log, angka lengkap, ranking", en: "Technical details: cleaning log, full numbers, rankings" },

    // Page 01 — Konteks Bisnis
    "p01.topbar": { id: "Konteks Bisnis", en: "Business Context" },
    "p01.badge": { id: "Portfolio · 01", en: "Portfolio · 01" },
    "p01.hero.title": { id: "Memahami Harbour Energy", en: "Understanding Harbour Energy" },
    "p01.hero.sub": { id: "Sebelum menyentuh data, pahami dulu bisnisnya", en: "Before touching data, understand the business first" },
    "p01.sec.profil": { id: "Profil Perusahaan", en: "Company Profile" },
    "p01.profil.intro": { id: "Harbour Energy plc adalah salah satu perusahaan oil & gas independen terbesar di dunia, listed di London Stock Exchange (FTSE 250). Didirikan tahun 2014, perusahaan ini tumbuh melalui serangkaian akuisisi strategis.", en: "Harbour Energy plc is one of the world's largest independent oil & gas companies, listed on the London Stock Exchange (FTSE 250). Founded in 2014, the company grew through a series of strategic acquisitions." },
    "p01.kpi.produksi": { id: "Produksi Global", en: "Global Production" },
    "p01.kpi.produksi.sub": { id: "boepd (2025, record)", en: "boepd (2025, record)" },
    "p01.kpi.revenue": { id: "Revenue", en: "Revenue" },
    "p01.kpi.revenue.sub": { id: "miliar (2025)", en: "billion (2025)" },
    "p01.kpi.negara": { id: "Negara Operasi", en: "Operating Countries" },
    "p01.kpi.karyawan": { id: "Karyawan", en: "Employees" },
    "p01.kpi.reserves": { id: "2P + 2C Resources", en: "2P + 2C Resources" },
    "p01.sec.indonesia": { id: "Operasi di Indonesia", en: "Indonesia Operations" },
    "p01.indonesia.intro": { id: "Di Indonesia, Harbour Energy mengoperasikan aset offshore di Natuna Sea dan Andaman Sea. Aset utama yang producing adalah Natuna Sea Block A.", en: "In Indonesia, Harbour Energy operates offshore assets in the Natuna Sea and Andaman Sea. The main producing asset is Natuna Sea Block A." },
    "p01.tbl.aset": { id: "Aset", en: "Asset" },
    "p01.tbl.wi": { id: "Working Interest", en: "Working Interest" },
    "p01.tbl.status": { id: "Status", en: "Status" },
    "p01.tbl.detail": { id: "Detail", en: "Detail" },
    "p01.blocka.detail": { id: "Produksi ~4,000 boepd (net). Fields: Anoa, Gajah Baru, Naga, Pelikan, Bison, Iguana", en: "Production ~4,000 boepd (net). Fields: Anoa, Gajah Baru, Naga, Pelikan, Bison, Iguana" },
    "p01.tuna.detail": { id: "Development stage. Fields: Kuda Laut, Singa Laut. PoD approved 2023", en: "Development stage. Fields: Kuda Laut, Singa Laut. PoD approved 2023" },
    "p01.andaman.detail": { id: "Eksplorasi. Discovery: Timpan, Layaran-1 (potensi >6 TCF)", en: "Exploration. Discovery: Timpan, Layaran-1 (potential >6 TCF)" },
    "p01.sec.tantangan": { id: "Tantangan Bisnis", en: "Business Challenges" },
    "p01.tantangan.1": { id: "Multiple assets dengan working interest berbeda — perlu tracking produksi yang akurat", en: "Multiple assets with different working interests — need accurate production tracking" },
    "p01.tantangan.2": { id: "Unit OpEx harus dijaga di bawah $15/boe untuk tetap kompetitif", en: "Unit OpEx must be kept below $15/boe to remain competitive" },
    "p01.tantangan.3": { id: "Safety compliance — TRIR harus dijaga rendah di lingkungan offshore yang berisiko tinggi", en: "Safety compliance — TRIR must be kept low in high-risk offshore environment" },
    "p01.tantangan.4": { id: "Block A & Tuna sedang dalam proses divestasi — monitoring sampai handover", en: "Block A & Tuna are being divested — monitoring until handover" },
    "p01.callout.sumber": { id: "📌 Sumber Data", en: "📌 Data Sources" },
    "p01.callout.sumber.text": { id: "Semua data keuangan bersumber dari laporan resmi Harbour Energy plc (LSE filings). Data operasional di-generate secara sintetis berdasarkan anchor ke data publik.", en: "All financial data sourced from official Harbour Energy plc reports (LSE filings). Operational data synthetically generated based on public data anchors." },

    // Page 02 — Pertanyaan Bisnis
    "p02.topbar": { id: "Pertanyaan Bisnis", en: "Business Questions" },
    "p02.badge": { id: "Portfolio · 02", en: "Portfolio · 02" },
    "p02.hero.title": { id: "Pertanyaan yang Harus Dijawab", en: "Questions to Answer" },
    "p02.hero.sub": { id: "Sebelum analisis, tentukan dulu apa yang ingin diketahui", en: "Before analysis, determine what needs to be known" },
    "p02.q1.who": { id: "COO — Pak Nigel", en: "COO — Mr. Nigel" },
    "p02.q1.text": { id: "Bagaimana performa produksi per aset dan per well sepanjang 2025? Apakah ada well yang underperform?", en: "How is production performance per asset and per well throughout 2025? Are there underperforming wells?" },
    "p02.q2.who": { id: "VP HSE", en: "VP HSE" },
    "p02.q2.text": { id: "Berapa TRIR kita tahun ini? Department dan platform mana yang paling berisiko?", en: "What is our TRIR this year? Which departments and platforms are most at risk?" },
    "p02.q3.who": { id: "CFO — Alexander Krane", en: "CFO — Alexander Krane" },
    "p02.q3.text": { id: "Apakah biaya operasional sesuai budget? Berapa unit OpEx per aset dan bagaimana dibanding benchmark?", en: "Are operational costs within budget? What is unit OpEx per asset and how does it compare to benchmark?" },
    "p02.q4.who": { id: "COO — Pak Nigel", en: "COO — Mr. Nigel" },
    "p02.q4.text": { id: "Apa rekomendasi untuk meningkatkan efisiensi operasional? Berapa projected savings-nya?", en: "What are the recommendations to improve operational efficiency? What are the projected savings?" },
    "p02.sec.framework": { id: "Framework Analisis", en: "Analysis Framework" },
    "p02.framework.intro": { id: "Analisis dibagi menjadi 4 area yang saling terhubung:", en: "Analysis is divided into 4 interconnected areas:" },

    // Page 03 — Temuan & Rekomendasi
    "p03.topbar": { id: "Temuan & Rekomendasi", en: "Findings & Recommendations" },
    "p03.badge": { id: "Portfolio · 03", en: "Portfolio · 03" },
    "p03.hero.title": { id: "Key Findings & Rekomendasi", en: "Key Findings & Recommendations" },
    "p03.hero.sub": { id: "Hasil analisis operasional 2025 untuk manajemen", en: "2025 operational analysis results for management" },
    "p03.sec.findings": { id: "Temuan Utama", en: "Key Findings" },
    "p03.sec.rekom": { id: "Rekomendasi", en: "Recommendations" },
    "p03.sec.exec": { id: "Executive Summary", en: "Executive Summary" },

    // Page 04 — Visualisasi
    "p04.topbar": { id: "Visualisasi", en: "Visualization" },
    "p04.badge": { id: "Portfolio · 04", en: "Portfolio · 04" },
    "p04.hero.title": { id: "Visualisasi Data Operasional", en: "Operational Data Visualization" },
    "p04.hero.sub": { id: "Chart dan grafik yang mendukung findings", en: "Charts and graphs supporting the findings" },

    // Page 05 — Report Data
    "p05.topbar": { id: "Report Data", en: "Data Report" },
    "p05.badge": { id: "Report · 05", en: "Report · 05" },
    "p05.hero.title": { id: "Detail Data & Cleaning Log", en: "Data Details & Cleaning Log" },
    "p05.hero.sub": { id: "Appendix teknis untuk verifikasi angka", en: "Technical appendix for number verification" },
};

let currentLang = "id";

function toggleLang() {
    currentLang = currentLang === "id" ? "en" : "id";
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[key] && translations[key][currentLang]) {
            el.innerHTML = translations[key][currentLang];
        }
    });
    document.querySelectorAll(".lang-toggle").forEach(btn => {
        btn.textContent = currentLang === "id" ? "EN" : "ID";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lang-toggle").forEach(btn => {
        btn.addEventListener("click", toggleLang);
    });
});
