# Showcase Category (Component)

Represents one of the major showcase categories on the World Cup 2026 page  
(e.g., Local Businesses, Local Residents, Local Organizations).

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | world-cup |
| Component Name  | showcase-category |
| Description     | Large section with icon, title, description, bullet list, and CTA |

---

## 📌 Fields

| Field          | Type                           | Required | Description | Example |
|----------------|----------------------------------|----------|-------------|---------|
| icon           | media (image)                   | no       | Illustration for the category | business.svg |
| title          | string                          | yes      | Main category title | "Local Businesses" |
| description    | text                            | yes      | Overview paragraph | "Showcase your products and services..." |
| bullet_points  | component (repeatable) → global.rich-point | no | List of bullets |  |
| cta_label      | string                          | no       | CTA button text | "APPLY NOW" |
| cta_url        | string                          | no       | CTA button link | "https://forms.gle/xyz" |

---

## 📝 Notes

- Uses `global.rich-point` so bullets stay consistent across site.  
- If no CTA is provided, frontend hides the button.  
- Designed to work in a 3-column layout.

---

## 🏗 Example JSON (Strapi output)

```json
{
  "icon": 21,
  "title": "Local Businesses",
  "description": "Showcase your products and services to thousands of attendees at our community event.",
  "bullet_points": [
    {
      "title": "Indoor and outdoor booth options"
    },
    {
      "title": "Promote your business to new customers"
    },
    {
      "title": "Limited spots available"
    }
  ],
  "cta_label": "APPLY NOW",
  "cta_url": "https://forms.gle/apply"
}
