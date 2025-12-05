# Survey Block (Component)

Represents the entire “Community Needs Assessment Survey” section, including title, text, image, highlights, and CTA button.

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | world-cup |
| Component Name  | survey-block |
| Description     | Large section promoting the community survey |

---

## 📌 Fields

| Field                 | Type                 | Required | Description | Example |
|-----------------------|----------------------|----------|-------------|---------|
| eyebrow_label         | string               | no       | Small label above title | "COMMUNITY SURVEY" |
| title                 | string               | yes      | Main section heading | "Help Shape Our Community Events" |
| description           | text                 | yes      | Supporting text | "Take 3 minutes to tell us what matters..." |
| image                 | media (image)        | no       | Illustration or image | survey_illustration.png |
| highlight_items       | component (repeatable) → survey-highlight-item | no | Bullet items for key benefits |  |
| cta_label             | string               | no       | Button label | "TAKE SURVEY" |
| cta_url               | string               | no       | Link to external or internal survey | "https://forms.gle/abc" |

---

## 📝 Notes

- `highlight_items` is optional; if empty, frontend hides the list.  
- Ideal image ratio in the design is roughly 1:1 or 4:3 depending on layout.  
- CTA is optional but highly recommended.

---

## 🏗 Example JSON

```json
{
  "eyebrow_label": "COMMUNITY SURVEY",
  "title": "Help Shape Our Community Events",
  "description": "Take 3 minutes to tell us what matters to you. Your feedback helps improve our programs and events.",
  "image": 32,
  "highlight_items": [51, 52],
  "cta_label": "TAKE SURVEY",
  "cta_url": "https://forms.gle/xyz"
}
