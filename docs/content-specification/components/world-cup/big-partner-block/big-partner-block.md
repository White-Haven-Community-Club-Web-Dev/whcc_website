# Big Partner Block (Component)

Represents the full partnership highlight block for the World Cup 2026 page,  
used for large sponsors or collaborators like “Business Improvement Group (BIG)”.

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | world-cup |
| Component Name  | big-partner-block |
| Description     | Large partner spotlight section with logo, title, description, bullets, CTA, and footer text |

---

## 📌 Fields

| Field               | Type                           | Required | Description | Example |
|---------------------|----------------------------------|----------|-------------|---------|
| eyebrow_label       | string                          | no       | Label above everything | "PRESENTED BY" |
| partner_logo        | media (image)                   | no       | Logo of partner | big_logo.png |
| title               | string                          | yes      | Block headline | "Business Improvement Group" |
| description         | richtext                        | yes      | One or more paragraphs | "The BIG program supports local communities..." |
| highlight_points    | component (repeatable) → global.rich-point | no | Bullet points describing benefits or features |  |
| cta_label           | string                          | no       | CTA button text | "LEARN MORE" |
| cta_url             | string                          | no       | Link target | "https://big.ca" |
| footer_text         | text                            | no       | Small text under CTA | "BIG is committed to community-driven development." |

---

## 📝 Notes

- `description` uses **richtext** because this section contains multi-paragraph copy.  
- Bullets reuse the site-wide `global.rich-point` component.  
- `partner_logo` can be omitted, in which case frontend will shrink header.  
- `footer_text` is typically a single line tagline.  

---

## 🏗 Example JSON

```json
{
  "eyebrow_label": "PRESENTED BY",
  "partner_logo": 72,
  "title": "Business Improvement Group (BIG)",
  "description": "<p>The Business Improvement Group works with local residents and organizations...</p>",
  "highlight_points": [
    { "title": "Supports local business development" },
    { "title": "Strengthens community partnerships" },
    { "title": "Promotes inclusive growth" }
  ],
  "cta_label": "LEARN MORE",
  "cta_url": "https://big.ca",
  "footer_text": "BIG is committed to community-driven development."
}
