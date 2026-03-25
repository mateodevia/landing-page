---
name: update-ai-content
description: Regenerates llms.txt and verifies all AI/SEO readability files are in sync with the latest English locale content. Run this whenever you update copy in public/locales/en/common.json.
allowed-tools: Read, Write, Edit, Bash, Glob, Grep
---

Your job is to keep the AI readability and SEO files of this Next.js portfolio site (mateodevia.com) perfectly in sync with the latest content in `public/locales/en/common.json`.

## Steps to follow

### 1. Read the source of truth
Read `public/locales/en/common.json` in full. This is the authoritative English copy for the site.

### 2. Rebuild `public/llms.txt`
Rewrite `public/llms.txt` from scratch using ALL meaningful text from the locale file. Do not summarise — include every role's full description, long description, responsibilities (as a bullet list), and achievements (as a bullet list). Structure it exactly like this:

```
# Mateo Devia Vega — Personal Portfolio

> This file exists to help AI agents and LLM-based scrapers get a complete, structured picture of who Mateo Devia is. It mirrors the full content of the site.

---

## About

<aboutMeText value>

---

## Professional Experience

### <role title> — <company> (<dates if known>)

**Description:** <*Description value>

**Long description:** <*LongDescription value>

**Responsibilities:**
<bullet list from *Responsibilities value, one bullet per line>

**Achievements:**
<bullet list from *Achievements value, one bullet per line>

--- (repeat for every role)

## Education

<cumLaudeTitle> — <cumLaudeLongDescription>
<highSchoolGraduation> — <highSchoolDescription>

---

## Technical Skills

(derive from the roles and known stack: TypeScript, Node.js, AWS, Microservices, Serverless, LangChain, MCP, Terraform, GitHub Actions, CI/CD, Clean Architecture, SAGA Pattern, Event-Driven Architecture, Figma, Docker, Git)

---

## Contact & Profiles

- Website: https://mateodevia.com
- LinkedIn: https://www.linkedin.com/in/mateo-devia/
- GitHub: https://github.com/mateodevia

---

## Languages

- Spanish (native)
- English (fluent)
```

### 3. Verify SEO meta keys in both locale files
- Check that `public/locales/en/common.json` has both `metaTitle` and `metaDescription` keys.
- Check that `public/locales/es/common.json` has both `metaTitle` and `metaDescription` keys.
- If either is missing, add them. The English metaDescription must be ≤160 chars (Google truncates at 160). The Spanish one should be its translation.
- **Important:** `metaTitle` and `metaDescription` are NOT resolved via `t()` on the client. They are read directly from the locale JSON file in `getStaticProps` (via `fs.readFileSync`) and passed as props to the page component. This is intentional — it avoids i18n client-side hydration issues and guarantees the values are always baked into the SSG'd HTML. Do not change this pattern.

### 4. Verify static SEO files exist and are correct
- `public/robots.txt` must exist and reference `https://mateodevia.com/sitemap.xml`.
- `public/sitemap.xml` must exist and contain both `/en` and `/es` URLs with `xhtml:link` hreflang annotations.
- If either is missing or broken, recreate it.

### 5. Run the eval script
Run `node scripts/eval-ai-readability.js` and report the results. Fix any failures before finishing.

### 6. Report
Print a short summary of what was changed (or "all up to date" if nothing changed).
