# Sverresborglekene - Arkitektur og Prosjektstruktur

## Oversikt
Dette prosjektet er en modernisering av Sverresborglekene sin nettside, med fokus på:
- Enkel innholdshåndtering via CMS
- Rask ytelse og god SEO
- Vedlikeholdbar kodebase
- Moderne utvikleropplevelse

## Mål for prosjektet
Migrering fra Statisk side til CMS

### Eksisterende Struktur (Statisk Versjon)
sverresborglekene/ # Original statisk versjon
├── assets/ # Statiske ressurser
│ └── images/ # Bilder brukt i bildekarussellen på forsiden
├── index.html # Hovedside
├── styles.css # Global styling
├── carousel.js # Bildekarusell-funksjonalitet
├── script.js # Generell JavaScript
├── site.webmanifest # PWA-konfigurasjon
└── .gitignore # Git-ignorerte filer


### Migrasjonsprosess
Vi er i ferd med å modernisere nettsiden ved å gå fra en helt statisk struktur til en mer vedlikeholdbar løsning med CMS. Hovedmålene er:

1. **Forbedret Innholdshåndtering**
   - Fra: Manuell HTML-redigering
   - Til: Brukervennlig CMS-grensesnitt
   - Fordel: Enklere oppdateringer for ikke-tekniske brukere

2. **Modernisert Teknisk Plattform**
   - Fra: Vanilla HTML/CSS/JS
   - Til: Astro + Decap CMS
   - Fordel: Bedre ytelse, enklere vedlikehold

3. **Forbedret Utvikleropplevelse**
   - Fra: Direkte filredigering
   - Til: Moderne utviklingsverktøy og workflow
   - Fordel: Raskere utvikling, færre feil

### Migrasjonsplan

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