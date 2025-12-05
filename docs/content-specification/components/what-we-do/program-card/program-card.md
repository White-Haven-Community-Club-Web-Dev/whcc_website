# Program Card (Component)

Small feature card used to highlight programs or initiative summaries on the "What We Do" page.

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | what-we-do |
| Component Name  | program-card |
| Description     | A simple card with icon, title, text, and optional link |

---

## 📌 Fields

| Field       | Type            | Required | Description | Example |
|-------------|-----------------|----------|-------------|---------|
| icon        | media (image)   | no       | Icon or emoji image | youth.png |
| title       | string          | yes      | Program title | "Youth Programs" |
| text        | text            | yes      | Short descriptive text | "Training for ages 6–18" |
| link        | string (URL)    | no       | Optional link to detail page | "/programs/youth" |

---

## 🏗 Example JSON

```json
{
  "icon": 12,
  "title": "Community Events",
  "text": "Activities that bring families together.",
  "link": "/what-we-do#events"
}
