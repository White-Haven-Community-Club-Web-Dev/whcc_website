# Home Page (Single Type)

Homepage content for WHCFC.  
This page contains the hero, introduction, and quick navigation sections that highlight the club's mission and current programs.

---

## 📌 Fields

| Field                     | Type                        | Required | Description | Example |
|---------------------------|-----------------------------|----------|-------------|---------|
| hero_title                | string                      | yes      | Main headline | "Building Community Through Football" |
| hero_subtitle            | string                      | no       | Subheadline text | "Join programs, events, and initiatives in Scarborough" |
| hero_background          | media (image)               | yes      | Hero section background image | hero.jpg |
| intro_title              | string                      | yes      | Section title below hero | "Our Mission" |
| intro_text               | richtext                    | yes      | Description of mission | long text |
| featured_sections        | component (repeatable)      | no       | Small cards linking to key areas | See below |
| world_cup_cta_title      | string                      | no       | Promotional title for World Cup event | "FIFA World Cup 2026 Viewing Party" |
| world_cup_cta_subtitle   | string                      | no       | Short explanation | "Join hundreds of fans at our community celebration" |
| world_cup_cta_button     | string                      | no       | Button label | "Learn More" |
| world_cup_cta_link       | string (URL)                | no       | Link to World Cup page | "/world-cup-2026" |

---

## 📦 Components Used

### **homepage.featured-section**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| icon  | media (image or icon) | no | The visual icon |
| title | string | yes | Section title |
| text  | string | yes | Short description |
| link  | string (URL) | yes | Destination page |

---

## 🏗 Example JSON structure (Strapi Output)

```json
{
  "hero_title": "Building Community Through Football",
  "hero_subtitle": "Join programs, events, and initiatives in Scarborough",
  "hero_background": 2,
  "intro_title": "Our Mission",
  "intro_text": "<p>We use football as a tool to unite and support our community...</p>",
  "featured_sections": [
    {
      "icon": 5,
      "title": "What We Do",
      "text": "Programs and events for all ages.",
      "link": "/what-we-do"
    },
    {
      "icon": 6,
      "title": "Our Team",
      "text": "Meet the people behind WHCFC.",
      "link": "/who-we-are"
    }
  ],
  "world_cup_cta_title": "FIFA World Cup 2026 Viewing Party",
  "world_cup_cta_subtitle": "Join hundreds of fans at our community celebration",
  "world_cup_cta_button": "Learn More",
  "world_cup_cta_link": "/world-cup-2026"
}