# World Cup 2026 Page (Single Type)

Landing page for the FIFA World Cup 2026 Community Viewing Party.  
This page uses a hero + a set of modular sections (via Dynamic Zone) to present schedule, community showcase, BIG partnership, food & entertainment, updates registration, and FAQ.

---

## 🔧 General Information

- **Type:** Single Type  
- **Collection Name:** world-cup-2026-page  
- **Icon:** calendar or trophy  
- **Purpose:** Public landing page for the World Cup 2026 viewing event.  
- **Strategy:** One required hero + a flexible `sections` Dynamic Zone.

---

## 🧩 Fields & Structure

| Field        | Type                                  | Required | Description |
|--------------|----------------------------------------|----------|-------------|
| slug         | string                                | no       | Optional slug override (default: `/world-cup-2026`) |
| hero         | component: world-cup.hero-section     | yes      | Main hero banner with date/countdown and main CTAs |
| sections     | dynamiczone                            | yes      | Modular content sections for the page body |
| seo          | component: global.seo                 | no       | SEO overrides for this page |

---

## 🧱 Field Details

### 1) `slug`
- **Type:** string  
- **Required:** no  
- **Description:** Optional custom slug (e.g. `"world-cup-2026"`).  
- **Note:** Frontend may hardcode the route and ignore this if not needed.

---

### 2) `hero`
- **Type:** component → `world-cup.hero-section`  
- **Required:** yes  

Used to render the top section:

- Background image
- Eyebrow label (`FIFA World Cup 2026 Viewing Party`)
- Title / subtitle
- Date/time and countdown base date
- Primary/secondary CTAs

See component spec:

**world-cup.hero-section**

| Field                  | Type      | Required | Description |
|------------------------|-----------|----------|-------------|
| background_image       | media     | yes      | Full-width hero image |
| eyebrow_label          | string    | no       | Small label above title |
| title                  | string    | yes      | Main headline |
| subtitle               | text      | no       | Supporting text |
| countdown_event_date   | datetime  | no       | Date/time used for countdown |
| primary_button_label   | string    | no       | Primary CTA label |
| primary_button_url     | string    | no       | Primary CTA link |
| secondary_button_label | string    | no       | Secondary CTA label |
| secondary_button_url   | string    | no       | Secondary CTA link |
| overlay_opacity        | decimal   | no       | 0–1 for image darkening |
| text_alignment         | enum      | no       | `left`, `center`, `right` |

---

### 3) `sections` (Dynamic Zone)

- **Type:** dynamiczone  
- **Required:** yes  
- **Description:** Holds all main content sections for this page, in any order, as defined by the design.

#### Allowed components in `sections`:

| Component name                          | Purpose / Maps to Figma section |
|----------------------------------------|----------------------------------|
| world-cup.event-highlight              | Small highlight cards (screens, family-friendly, free, etc.) |
| world-cup.match-card                   | Match schedule cards with teams, date, time, spots, register button |
| world-cup.survey-block                 | “Community Needs Assessment Survey” block |
| world-cup.showcase-category            | Community Showcase: Local Businesses / Residents / Organizations cards |
| world-cup.big-partner-block            | Business Improvement Group (BIG) section |
| world-cup.showcase-cta-group           | “Interested in Showcasing or Performing?” CTA group |
| world-cup.two-column-feature           | Food & Entertainment two-column block |
| world-cup.register-updates             | “Register for Updates” section |
| world-cup.faq-item (wrapped in a section) | FAQ accordion items (usually wrapped by frontend into a section) |

> Nota: según tu implementación en Strapi, podrías tener un componente contenedor para FAQ section (ej: `world-cup.faq-section`) que simplemente tiene un `title` y una lista de `faq-item`.  
> Para mantenerlo simple aquí, asumimos que usarás un **componente sección de FAQ** que agrupa `faq-item`.

#### Ejemplo de cómo se vería el Dynamic Zone

Orden típico:

1. `world-cup.event-highlight` (x3 cards)  
2. `world-cup.match-card` (xN)  
3. `world-cup.survey-block`  
4. `world-cup.showcase-category` (x3 – Businesses / Residents / Organizations)  
5. `world-cup.big-partner-block`  
6. `world-cup.showcase-cta-group`  
7. `world-cup.two-column-feature` (Food & Entertainment)  
8. `world-cup.register-updates`  
9. `world-cup.faq-section` (si lo defines como componente con lista de `faq-item`)

---

### 4) `seo`
- **Type:** component → `global.seo`  
- **Required:** no  

Fields (típico):

| Field           | Type   | Required | Description |
|-----------------|--------|----------|-------------|
| metaTitle       | string | yes      | Page title for SEO |
| metaDescription | text   | yes      | Meta description |
| shareImage      | media  | no       | OG image for social |
| preventIndexing | bool   | no       | If true → add `noindex` |

---

## 🏗 Example JSON structure (Simplified)

```json
{
  "slug": "world-cup-2026",
  "hero": {
    "background_image": 21,
    "eyebrow_label": "FIFA World Cup 2026 Viewing Party",
    "title": "Watch the World Cup with Your Community",
    "subtitle": "Free, family-friendly viewing events in Scarborough.",
    "countdown_event_date": "2026-06-12T19:00:00.000Z",
    "primary_button_label": "Register for Updates",
    "primary_button_url": "#register",
    "secondary_button_label": "View Schedule",
    "secondary_button_url": "#schedule",
    "overlay_opacity": 0.5,
    "text_alignment": "left"
  },
  "sections": [
    {
      "__component": "world-cup.event-highlight",
      "icon": "screen",
      "title": "Big Screen Viewing",
      "description": "Watch key matches on a large screen with your community."
    },
    {
      "__component": "world-cup.match-card",
      "team_1_name": "Canada",
      "team_1_flag_emoji": "🇨🇦",
      "team_2_name": "Mexico",
      "team_2_flag_emoji": "🇲🇽",
      "stage": "Group Stage",
      "match_date": "2026-06-13",
      "match_time": "14:00",
      "spots_available": 45,
      "spots_label": "45 spots left",
      "register_button_label": "REGISTER",
      "register_button_url": "/contact"
    },
    {
      "__component": "world-cup.survey-block",
      "title": "Community Needs Assessment Survey",
      "description": "Help us design better events by sharing your input.",
      "button_label": "Take the Survey",
      "button_url": "https://forms.office.com/...",
      "note_text": "Your responses are confidential and will be used for planning only."
    },
    {
      "__component": "world-cup.showcase-category",
      "icon": "store",
      "category_name": "Local Businesses",
      "subtitle": "Highlight your products and services during the event.",
      "bullets": [
        "Food vendors",
        "Retail & services",
        "Family activities"
      ],
      "button_label": "View Business Partners",
      "button_url": "/partners"
    },
    {
      "__component": "world-cup.big-partner-block",
      "title": "Business Improvement Group (BIG)",
      "body": "<p>We are collaborating with BIG to support local businesses...</p>",
      "button_label": "Learn More About BIG",
      "button_url": "https://big-partner-url",
      "featured_title": "Featured At the Event:",
      "featured_items": [
        "Local food vendors",
        "Promotional booths",
        "Networking opportunities"
      ],
      "callout_text": "Interested in joining as a local business? Get in touch!"
    },
    {
      "__component": "world-cup.two-column-feature",
      "section_title": "Food & Entertainment",
      "section_subtitle": "Enjoy food, music, and activities for all ages.",
      "left_block": {
        "image": 31,
        "title": "Food & Drinks",
        "description": "Local vendors offering snacks and meals.",
        "bullets": [
          "Family-friendly options",
          "Local businesses",
          "Affordable prices"
        ]
      },
      "right_block": {
        "image": 32,
        "title": "Entertainment",
        "description": "Live performances, music, and more.",
        "bullets": [
          "Cultural performances",
          "Music & DJs",
          "Youth activities"
        ]
      }
    },
    {
      "__component": "world-cup.register-updates",
      "section_title": "Save Your Spot",
      "title": "Register for Updates",
      "subtitle": "Sign up to receive the event schedule, match dates, and venue updates.",
      "perks": [
        {
          "icon": "bell",
          "title": "Match Reminders",
          "description": "Get notified before key games."
        }
      ],
      "button_label": "Register Now – It’s Free!",
      "button_url": "/contact#form",
      "what_you_receive_title": "What You'll Receive:",
      "what_you_receive_items": [
        "Full viewing schedule",
        "Parking and transit information",
        "Updates about family activities"
      ]
    }
  ],
  "seo": {
    "metaTitle": "World Cup 2026 Community Viewing Party – WHCFC",
    "metaDescription": "Join our free World Cup 2026 community viewing events in Scarborough.",
    "shareImage": 40,
    "preventIndexing": false
  }
}
