# Who We Are Page (Single Type)

Static content for the "Who We Are" page: mission, vision, values, organization structure, board members, and partners.

Page: [WHO WE ARE](https://www.figma.com/make/43PJzj6aisQyB1aQ0fzfQo/Create-WHCFC-Website-Design)

---

## 📌 Fields

| Field                   | Type                          | Required | Description | Example |
|-------------------------|-------------------------------|----------|-------------|---------|
| hero_title              | string                        | yes      | Page header title | "About Us" |
| hero_subtitle           | string                        | no       | Short intro text | "Building a Stronger, More Inclusive Community" |
| about_title             | string                        | yes      | Section title | "About Us" |
| about_text              | richtext                      | yes      | Description of about | <p>White Haven Community Football Club (WHCFC) is a non-profit organization based in Scarborough...</p> |
| hero_background         | media (image)                 | no       | Optional header image | hero-about.jpg |
| mission_title           | string                        | yes      | Section title | "Mission" |
| mission_text            | richtext                      | yes      | Description of mission | <p>Our mission is...</p> |
| vision_title            | string                        | no       | Section title | "Vision" |
| vision_text             | richtext                      | no       | Description of vision | <p>Our vision is...</p> |
| goal_title            | string                        | no       | Section title | "Goal" |
| goal_text             | richtext                      | no       | Description of goal | <p>Our goal is...</p> |
| values_title            | string                        | no       | Section title | "Values" |
| values_cards            | component (repeatable)        | no       | Cards describing core values | See component |
| organization_title      | string                        | no       | Section title | "Organization" |
| organization_cards      | component (repeatable)        | no       | Cards describing org groups | See component |
| board_title             | string                        | no       | Section title | "Our Board" |
| board_members           | relation (team-members)       | no       | Pulls list of board members | Many-to-Many |
| partners_title          | string                        | no       | Section title | "Our Partners" |
| partners_list           | relation (partners)           | no       | Logos/grid | Many-to-Many |

---



## 📦 Components Used

### **who-we-are.value-card**
| Field       | Type   | Required | Description |
|-------------|--------|----------|-------------|
| icon        | media  | no       | Icon or emoji |
| title       | string | yes      | Value name |
| text        | text   | yes      | Value description |

---

### **who-we-are.org-card**
| Field       | Type   | Required | Description |
|-------------|--------|----------|-------------|
| title       | string | yes      | Organization category |
| description | text   | yes      | Summary |
| icon        | media  | no       | Small icon |

---

## 🏗 Example JSON structure (Strapi Output)

```json
{
  "hero_title": "About Us",
  "hero_subtitle": "Building community in Scarborough through football",
  "hero_background": 1,
  "mission_title": "Our Mission",
  "mission_text": "<p>Our mission is simple but impactful...</p>",
  "vision_title": "We envision a future where WHCFC becomes a cornerstone...",
  "goal_title": "Our Goal",
  "goal_text": "<p>Our primary goal is to create....</p>",
  "values_title": "Our Values",
  "values_cards": [
    {
      "icon": 3,
      "title": "Inclusivity",
      "text": "We welcome everyone."
    },
    {
      "icon": 4,
      "title": "Community",
      "text": "We build together."
    }
  ],
  "organization_title": "Our Structure",
  "organization_cards": [
    {
      "title": "Youth Programs",
      "description": "Engaging local youth...",
      "icon": 6
    }
  ],
  "board_title": "Board Members",
  "board_members": [12, 14, 16],
  "partners_title": "Community Partners",
  "partners_list": [20, 21, 22]
}
