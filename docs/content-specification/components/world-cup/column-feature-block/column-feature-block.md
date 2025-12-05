# Column Feature Block (Component)

Represents a single column in the “Food & Entertainment” section.  
Each column includes an image, a title, a short description, and a list of bullet points.

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | world-cup |
| Component Name  | column-feature-block |
| Description     | A feature column with image, title, text, and bullet points |

---

## 📌 Fields

| Field          | Type                           | Required | Description | Example |
|----------------|----------------------------------|----------|-------------|---------|
| image          | media (image)                   | yes      | Top image for the column | "food_vendors.jpg" |
| title          | string                          | yes      | Column title | "Food Vendors" |
| description    | text                            | no       | Supporting text | "Taste a variety of cuisines from local businesses." |
| bullet_points  | component (repeatable) → global.rich-point | no | Bullet list of features |  |

---

## 📝 Notes

- `image` is required because the design always includes one.  
- `bullet_points` uses the shared component `global.rich-point` for consistency across the website.  
- Designed to work inside `two-column-feature` with 2 items max.  

---

## 🏗 Example JSON (Strapi Output)

```json
{
  "image": 41,
  "title": "Food Vendors",
  "description": "Taste delicious food from local businesses.",
  "bullet_points": [
    { "title": "Local small businesses" },
    { "title": "Affordable options" },
    { "title": "Vegan-friendly choices" }
  ]
}
