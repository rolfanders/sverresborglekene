# Sverresborglekene 2025

[![Astro Badge](https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=fff&style=flat)](https://astro.build)
[![Decap CMS Badge](https://img.shields.io/badge/DecapCMS-2B414D?logo=decapcms&logoColor=fff&style=flat)](https://decapcms.org)
[![Vercel Badge](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=fff&style=flat)](https://vercel.com)

## 📋 Innholdsfortegnelse
- [Hurtigstart](#-hurtigstart)
- [Prosjektoversikt](#-prosjektoversikt)
- [Status og Migrasjonsplan](#-status-og-migrasjonsplan)
- [Teknologivalg](#-teknologivalg)
- [Prosjektstruktur](#-prosjektstruktur)
- [Utvikling](#-utvikling)
- [Deployment](#-deployment)
- [Beste Praksis](#-beste-praksis)
- [Ressurser](#-ressurser)

## 🚀 Hurtigstart
```bash
git clone https://github.com/grenaderkorpset/sverresborglekene.git
cd sverresborglekene/astro-version
npm install
npm run dev
```

## 📖 Prosjektoversikt
Dette prosjektet er en modernisering av Sverresborglekene sin nettside, med fokus på:
- Enkel innholdshåndtering via CMS
- Rask ytelse og god SEO
- Vedlikeholdbar kodebase
- Moderne utvikleropplevelse

### Migrasjonsprosess
Vi går fra en statisk struktur til en CMS-basert løsning med følgende mål:

1. **Forbedret Innholdshåndtering**
   - Fra: Manuell HTML-redigering
   - Til: Brukervennlig CMS-grensesnitt
   - Fordel: Enklere oppdateringer for ikke-tekniske brukere

2. **Modernisert Teknisk Plattform**
   - Fra: Vanilla HTML/CSS/JS
   - Til: Astro + Decap CMS
   - Fordel: Bedre ytelse, enklere vedlikehold

## 📊 Status og Migrasjonsplan

### Nåværende Status
✅ Fase 1.1: Initial Setup
- [x] Opprettet mappestruktur
- [x] Flyttet statisk versjon til egen mappe
- [x] Initialisert Astro-prosjekt

🔄 Fase 1.2: Pågående
- [x] Sette opp Astro-komponenter
- [ ] Konfigurere Decap CMS
- [ ] Migrere innhold

### Migrasjonsplan
1. **Fase 1: Setup og Struktur** [Pågår]
2. **Fase 2: Innholdsmigrering**
3. **Fase 3: Funksjonalitet**
4. **Fase 4: Styling og Design**
5. **Fase 5: Testing og Lansering**

[Detaljert migrasjonsplan](#detaljert-migrasjonsplan)

## 🛠 Teknologivalg

### Kjernekomponenter
- **Astro**: Static Site Generator (SSG)
  - Gir utmerket ytelse
  - God utvikleropplevelse
  - Innebygd Markdown-støtte
  - "Zero JS by default"

- **Decap CMS**: Innholdshåndtering
  - Git-basert (ingen database nødvendig)
  - Bruker Markdown/MDX for innhold
  - Enkel redigering for ikke-tekniske brukere

- **Vercel**: Hosting og Deployment
  - Automatisk bygging og deployment
  - Globalt CDN
  - Innebygd analytics og ytelsesovervåking

## 📁 Prosjektstruktur
```
sverresborglekene/
├── static-version/     # Original statisk versjon
└── astro-version/      # Ny CMS versjon
    ├── src/
    │   ├── components/ # UI-komponenter
    │   ├── content/    # CMS-innhold
    │   ├── layouts/    # Sideoppsett
    │   └── pages/      # Ruting
    └── public/         # Statiske filer
```

## 💻 Utvikling

### Kommandoer
| Kommando              | Handling                                          |
| :------------------- | :------------------------------------------------ |
| `npm install`        | Installer avhengigheter                           |
| `npm run dev`        | Start utviklingsserver på `localhost:4321`        |
| `npm run build`      | Bygg produksjonsversjon til `./dist/`            |
| `npm run preview`    | Forhåndsvis bygget lokalt                        |

### Git Workflow
- Feature branches for nye funksjoner
- Pull requests for kodegjennomgang
- Automatiserte tester før merge
- Semantic versioning

## 🚀 Deployment
- Vercel er satt opp for automatisk deployment
- Preview deployments for pull requests
- Miljøvariabler håndtering
- Edge-nettverk distribusjon

## ✨ Beste Praksis

### Komponenter
- Bruk Astro-komponenter for statisk innhold
- React/Vue kun når interaktivitet er nødvendig
- Dokumenter komponenter med JSDoc
- Implementer prop-validering

### Ytelse
- Optimaliser bilder med Astro's innebygde bildehåndtering
- Lazy-loading av bilder og tunge komponenter
- Minimer JavaScript-bruk
- Implementer caching-strategier

### SEO
- Metadata per side
- Strukturerte data (Schema.org)
- Sitemap.xml generering
- robots.txt konfigurasjon

## 📚 Ressurser
- [Astro Dokumentasjon](https://docs.astro.build)
- [Decap CMS Dokumentasjon](https://decapcms.org/docs)
- [Vercel Dokumentasjon](https://vercel.com/docs)

---

### Detaljert Migrasjonsplan
<details>
<summary>Klikk for å vise full migrasjonsplan</summary>

1. **Fase 1: Setup og Struktur** [Pågår]
   - Oppsett av Astro-prosjekt
   - Definere ny mappestruktur
   - Etablere CMS-konfigurasjon

2. **Fase 2: Innholdsmigrering**
   - Konvertere HTML til Markdown/MDX
   - Flytte over media og assets
   - Sette opp innholdsmodeller i CMS

3. **Fase 3: Funksjonalitet**
   - Reimplementere karusell som Astro-komponent
   - Optimalisere bilder og assets
   - Sette opp SEO og metadata

4. **Fase 4: Styling og Design**
   - Overføre CSS til komponentbasert styling
   - Implementere responsivt design
   - Sikre konsistent brukeropplevelse

5. **Fase 5: Testing og Lansering**
   - Grundig testing av CMS-workflow
   - Ytelsesoptimalisering
   - Gradvis overgang til ny versjon

</details>

### Parallell Utvikling
Vi beholder begge versjonene tilgjengelige under utviklingen:
sverresborglekene/
├── sverresborglekene/ # Original statisk versjon
└── sverresborglekene-astro/ # Ny CMS-basert versjon

Dette muliggjør:
- Sikker testing av ny funksjonalitet
- Enkel rollback hvis nødvendig
- Kontinuerlig tilgjengelighet av nettsiden

### Versjonshistorikk
- **v1.0** - Original statisk versjon
- **v2.0** [Under utvikling] - CMS-basert versjon med Astro


## Teknologivalg

### Kjernekomponenter
- **Astro**: Static Site Generator (SSG)
  - Gir utmerket ytelse
  - God utvikleropplevelse
  - Innebygd Markdown-støtte
  - "Zero JS by default"

- **Decap CMS**: Innholdshåndtering
  - Git-basert (ingen database nødvendig)
  - Bruker Markdown/MDX for innhold
  - Enkel redigering for ikke-tekniske brukere

- **Vercel**: Hosting og Deployment
  - Automatisk bygging og deployment
  - Globalt CDN
  - Innebygd analytics og ytelsesovervåking

## Prosjektstruktur

sverresborglekene-astro/
├── src/
│ ├── components/ # Gjenbrukbare UI-komponenter
│ │ ├── Header.astro
│ │ ├── Footer.astro
│ │ └── Carousel.astro
│ ├── content/ # Innhold administrert via CMS
│ │ ├── pages/ # Hovedsider
│ │ └── config.ts # Content Collections konfigurasjon
│ ├── layouts/ # Sideoppsett og maler
│ │ └── Layout.astro
│ ├── pages/ # Rutingstruktur
│ │ └── index.astro
│ └── styles/ # Global CSS
│ └── global.css
├── public/ # Statiske filer
│ ├── admin/ # Decap CMS admin panel
│ │ ├── config.yml
│ │ └── index.html
│ ├── images/
│ └── fonts/
├── astro.config.mjs # Astro konfigurasjon
├── package.json
└── tsconfig.json


## Innholdshåndtering

### Content Collections
- Strukturert innhold defineres i `src/content/`
- Sterkt typet med TypeScript
- Validering av innhold ved byggetid

### Decap CMS Konfigurasjon
- Git-basert workflow
- Forhåndvisning av endringer
- Støtte for bilder og media
- Tilgangskontroll via Git-provider

## Beste Praksis

### Komponenter
- Bruk Astro-komponenter for statisk innhold
- React/Vue kun når interaktivitet er nødvendig
- Dokumenter komponenter med JSDoc
- Implementer prop-validering

### Styling
- CSS Modules for komponent-spesifikk styling
- Global CSS for felles stiler
- Følg BEM-navnekonvensjon
- Bruk CSS variabler for tema

### Ytelse
- Optimaliser bilder med Astro's innebygde bildehåndtering
- Lazy-loading av bilder og tunge komponenter
- Minimer JavaScript-bruk
- Implementer caching-strategier

### SEO
- Metadata per side
- Strukturerte data (Schema.org)
- Sitemap.xml generering
- robots.txt konfigurasjon

## Deployment

### Vercel Konfigurasjon
- Automatisk deployment ved push til main
- Preview deployments for pull requests
- Miljøvariabler håndtering
- Edge-nettverk distribusjon

### Bygge-prosess
1. Innholdvalidering
2. TypeScript-kompilering
3. Statisk side-generering
4. Asset-optimalisering

## Vedlikehold

### Oppdateringer
- Regelmessig oppdatering av avhengigheter
- Følg med på Astro's utgivelser
- Test grundig ved større oppdateringer

### Monitorering
- Vercel Analytics for ytelse
- Feilrapportering
- SEO-metrikker

## Utvikling

### Lokalt Miljø
bash
Installer avhengigheter
npm install
Start utviklingsserver
npm run dev
Bygg for produksjon
npm run build

### Git Workflow
- Feature branches for nye funksjoner
- Pull requests for kodegjennomgang
- Automatiserte tester før merge
- Semantic versioning

## Ressurser
- [Astro Dokumentasjon](https://docs.astro.build)
- [Decap CMS Dokumentasjon](https://decapcms.org/docs)
- [Vercel Dokumentasjon](https://vercel.com/docs)