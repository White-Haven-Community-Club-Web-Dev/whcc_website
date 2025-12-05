# What We Do Page (Single Type)

Static content for the "What We Do" overview page.  
This page describes WHCFC's core programs, services, and community involvement.

Page: [WHAT WE DO](https://www.figma.com/make/43PJzj6aisQyB1aQ0fzfQo/Create-WHCFC-Website-Design)
---

## 📌 Fields

| Field                       | Type                          | Required | Description | Example |
|-----------------------------|-------------------------------|----------|-------------|---------|
| hero_title                  | string                        | yes      | Page header | "What We Do" |
| hero_subtitle               | string                        | no       | Short description | "Programs, events, and initiatives serving our community" |
| hero_background             | media (image)                 | no       | Background image | hero-what-we-do.jpg |
| intro_title                 | string                        | yes      | Section title | "Our Programs" |
| intro_text                  | richtext                      | yes      | Main description | HTML |
| program_cards               | component (repeatable)        | no       | Icons + description cards | See component |
| upcoming_events_title       | string                        | no       | Title | "Upcoming Events" |
| upcoming_events_list        | relation (events)             | no       | Filtered on frontend for upcoming | Many-to-Many |
| past_events_title           | string                        | no       | Title | "Past Events" |
| past_events_list            | relation (events)             | no       | List of past events | Many-to-Many |
| world_cup_cta_title         | string                        | no       | Highlight block title | "FIFA World Cup 2026" |
| world_cup_cta_text          | text                          | no       | Small description | "Join our viewing party..." |
| world_cup_cta_button        | string                        | no       | Button label | "Learn More" |
| world_cup_cta_link          | string (URL)                  | no       | Link to World Cup page | "/world-cup-2026" |

---

## 📦 Components Used

### **what-we-do.program-card**
| Field       | Type   | Required | Description |
|-------------|--------|----------|-------------|
| icon        | media  | no       | Program icon |
| title       | string | yes      | Program name |
| text        | text   | yes      | Summary |
| link        | string | no       | Future detail page |

---

## 🏗 Example JSON structure (Strapi Output)

```json
{
  "hero_title": "What We Do",
  "hero_subtitle": "Programs, events, and initiatives serving our community",
  "hero_background": 3,
  "intro_title": "Our Programs",
  "intro_text": "<p>We offer a variety of initiatives...</p>",
  "program_cards": [
    {
      "icon": 5,
      "title": "Youth Programs",
      "text": "Training and mentorship for ages 6–18",
      "link": null
    },
    {
      "icon": 6,
      "title": "Community Events",
      "text": "Bringing families together through football",
      "link": null
    }
  ],
  "upcoming_events_title": "Upcoming Events",
  "upcoming_events_list": [10, 14],
  "past_events_title": "Past Events",
  "past_events_list": [3, 6, 7],
  "world_cup_cta_title": "FIFA World Cup 2026 Viewing Party",
  "world_cup_cta_text": "Join hundreds of fans...",
  "world_cup_cta_button": "Learn More",
  "world_cup_cta_link": "/world-cup-2026"
}
