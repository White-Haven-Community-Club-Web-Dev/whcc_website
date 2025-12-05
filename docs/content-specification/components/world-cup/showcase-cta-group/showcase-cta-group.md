# Showcase CTA Group (Component)

Represents a mid-page call-to-action inviting attendees to apply or participate  
(e.g., “Interested in showcasing or performing?”).

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | world-cup |
| Component Name  | showcase-cta-group |
| Description     | A centered section with title, description, and a CTA button |

---

## 📌 Fields

| Field        | Type       | Required | Description | Example |
|--------------|------------|----------|-------------|---------|
| title        | string     | yes      | Main heading | "Interested in showcasing or performing?" |
| text         | text       | no       | Supporting paragraph | "We welcome local performers, artists, and cultural groups..." |
| cta_label    | string     | yes      | Button text | "APPLY NOW" |
| cta_url      | string     | yes      | Button link | "https://forms.gle/xyz" |

---

## 📝 Notes

- This is a **simple component**, no images involved.  
- Copy can include 1–2 short paragraphs depending on design.  
- CTA is required to ensure the block has a clear action.  

---

## 🏗 Example JSON

```json
{
  "title": "Interested in showcasing or performing?",
  "text": "We welcome local artists, cultural groups, and performers to be part of our World Cup event.",
  "cta_label": "APPLY NOW",
  "cta_url": "https://forms.gle/showcase"
}
