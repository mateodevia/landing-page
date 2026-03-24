#!/usr/bin/env node
/**
 * eval-ai-readability.js
 *
 * Verifies that all AI/SEO readability files are in sync with the English locale content.
 * Run with: node scripts/eval-ai-readability.js
 *
 * Exit code 0 = all checks passed
 * Exit code 1 = one or more checks failed
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const results = [];
let failed = false;

function pass(label) {
  results.push(`  ✓  ${label}`);
}

function fail(label, detail) {
  results.push(`  ✗  ${label}${detail ? `\n       → ${detail}` : ""}`);
  failed = true;
}

// ---------------------------------------------------------------------------
// Load source files
// ---------------------------------------------------------------------------

const enLocalePath = path.join(ROOT, "public/locales/en/common.json");
const esLocalePath = path.join(ROOT, "public/locales/es/common.json");
const llmsTxtPath  = path.join(ROOT, "public/llms.txt");
const robotsPath   = path.join(ROOT, "public/robots.txt");
const sitemapPath  = path.join(ROOT, "public/sitemap.xml");

let en, es, llms, robots, sitemap;

try {
  en = JSON.parse(fs.readFileSync(enLocalePath, "utf8"));
} catch (e) {
  fail("public/locales/en/common.json is readable", e.message);
  process.exit(1);
}

try {
  es = JSON.parse(fs.readFileSync(esLocalePath, "utf8"));
} catch (e) {
  fail("public/locales/es/common.json is readable", e.message);
  process.exit(1);
}

try {
  llms = fs.readFileSync(llmsTxtPath, "utf8");
} catch (e) {
  fail("public/llms.txt exists", e.message);
  llms = "";
}

try {
  robots = fs.readFileSync(robotsPath, "utf8");
} catch (e) {
  fail("public/robots.txt exists", e.message);
  robots = "";
}

try {
  sitemap = fs.readFileSync(sitemapPath, "utf8");
} catch (e) {
  fail("public/sitemap.xml exists", e.message);
  sitemap = "";
}

// ---------------------------------------------------------------------------
// 1. Locale meta keys
// ---------------------------------------------------------------------------

console.log("\n[1] Locale meta keys");

["metaTitle", "metaDescription"].forEach((key) => {
  if (en[key]) {
    pass(`EN locale has "${key}"`);
  } else {
    fail(`EN locale has "${key}"`, "key missing from public/locales/en/common.json");
  }

  if (es[key]) {
    pass(`ES locale has "${key}"`);
  } else {
    fail(`ES locale has "${key}"`, "key missing from public/locales/es/common.json");
  }
});

// metaDescription should be ≤160 chars for search snippet
if (en.metaDescription && en.metaDescription.length > 160) {
  fail(
    "EN metaDescription ≤ 160 chars",
    `currently ${en.metaDescription.length} chars — Google truncates at 160`
  );
} else if (en.metaDescription) {
  pass(`EN metaDescription length (${en.metaDescription.length} chars)`);
}

// ---------------------------------------------------------------------------
// 2. llms.txt content coverage
// ---------------------------------------------------------------------------

console.log("\n[2] llms.txt content coverage");

// Key strings that MUST appear in llms.txt (sampled from locale values)
const mustContain = [
  // About
  { label: "aboutMeText snippet", value: en.aboutMeText?.slice(0, 60) },
  // Current role
  { label: "chapterLead title", value: en.chapterLead },
  { label: "chapterLeadLongDescription snippet", value: en.chapterLeadLongDescription?.slice(0, 60) },
  { label: "chapterLeadResponsibilities snippet", value: en.chapterLeadResponsibilities?.split("\n")[0]?.replace(/^- /, "").trim() },
  { label: "chapterLeadAchievements snippet", value: en.chapterLeadAchievements?.split("\n")[0]?.replace(/^-\s*/, "").trim() },
  // Tribe lead
  { label: "tribeLead title", value: en.tribeLead },
  { label: "tribeLeadLongDescription snippet", value: en.tribeLeadLongDescription?.slice(0, 40) },
  // Squad lead
  { label: "squadLead title", value: en.squadLead },
  // Mid backend
  { label: "midBackend title", value: en.midBackend },
  // Inalambria
  { label: "inalambriaRole", value: en.inalambriaRole },
  { label: "inalambriaLongDescription snippet", value: en.inalambriaLongDescription?.slice(0, 40) },
  // Capta
  { label: "captaTitle", value: en.captaTitle },
  { label: "captaLongDescription snippet", value: en.captaLongDescription?.slice(0, 40) },
  // Sinco
  { label: "sincoFreelance", value: en.sincoFreelance },
  // Education
  { label: "cumLaudeTitle", value: en.cumLaudeTitle },
  { label: "cumLaudeLongDescription snippet", value: en.cumLaudeLongDescription?.slice(0, 40) },
  // Contact
  { label: "LinkedIn URL", value: "linkedin.com/in/mateo-devia" },
  { label: "GitHub URL", value: "github.com/mateodevia" },
  { label: "Website URL", value: "mateodevia.com" },
];

mustContain.forEach(({ label, value }) => {
  if (!value) {
    fail(`llms.txt covers "${label}"`, "source value not found in locale");
    return;
  }
  if (llms.includes(value)) {
    pass(`llms.txt covers "${label}"`);
  } else {
    fail(`llms.txt covers "${label}"`, `expected to find: "${value.slice(0, 80)}"`);
  }
});

// ---------------------------------------------------------------------------
// 3. robots.txt
// ---------------------------------------------------------------------------

console.log("\n[3] robots.txt");

if (robots.includes("User-agent: *")) {
  pass("robots.txt has User-agent: *");
} else {
  fail("robots.txt has User-agent: *");
}

if (robots.includes("Allow: /")) {
  pass("robots.txt allows all paths");
} else {
  fail("robots.txt allows all paths");
}

if (robots.includes("mateodevia.com/sitemap.xml")) {
  pass("robots.txt references sitemap");
} else {
  fail("robots.txt references sitemap", "expected Sitemap: https://mateodevia.com/sitemap.xml");
}

// ---------------------------------------------------------------------------
// 4. sitemap.xml
// ---------------------------------------------------------------------------

console.log("\n[4] sitemap.xml");

["/en", "/es"].forEach((loc) => {
  if (sitemap.includes(`mateodevia.com${loc}`)) {
    pass(`sitemap.xml contains ${loc} URL`);
  } else {
    fail(`sitemap.xml contains ${loc} URL`);
  }
});

if (sitemap.includes('hreflang="en"') || sitemap.includes("hreflang='en'")) {
  pass("sitemap.xml has hreflang en");
} else {
  fail("sitemap.xml has hreflang en");
}

if (sitemap.includes('hreflang="es"') || sitemap.includes("hreflang='es'")) {
  pass("sitemap.xml has hreflang es");
} else {
  fail("sitemap.xml has hreflang es");
}

if (sitemap.includes('hreflang="x-default"') || sitemap.includes("hreflang='x-default'")) {
  pass("sitemap.xml has hreflang x-default");
} else {
  fail("sitemap.xml has hreflang x-default");
}

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------

console.log("\n" + "─".repeat(50));
results.forEach((r) => console.log(r));
console.log("─".repeat(50));

if (failed) {
  console.log("\n  FAILED — fix the issues above and re-run.\n");
  process.exit(1);
} else {
  console.log("\n  ALL CHECKS PASSED\n");
  process.exit(0);
}
