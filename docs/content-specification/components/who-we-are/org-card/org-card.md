# Organization Card (Component)

Describes one part of the organization's structure (e.g. "Youth Programs", "Community Engagement Team").

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | who-we-are |
| Component Name  | org-card |
| Description     | Card summarizing a department, pillar, or focus area |

---

## 📌 Fields

| Field        | Type            | Required | Description | Example |
|--------------|-----------------|----------|-------------|---------|
| icon         | media (image)   | no       | Optional icon | team.svg |
| title        | string          | yes      | Name of the org unit | "Youth Programs" |
| description  | text            | yes      | Short description | "Designing and running training and mentoring for youth." |

---

## 🏗 Example JSON

```json
{
  "icon": 11,
  "title": "Youth Programs",
  "description": "We run age-based training and mentorship for local youth."
}