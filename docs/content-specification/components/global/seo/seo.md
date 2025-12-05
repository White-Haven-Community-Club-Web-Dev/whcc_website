# SEO (Component)

SEO configuration component used by pages and special landing content-types.

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | global |
| Component Name  | seo |
| Description     | Search Engine Optimization metadata |

---

## 📌 Fields

| Field           | Type          | Required | Description | Example |
|-----------------|---------------|----------|-------------|---------|
| metaTitle       | string        | yes      | Page title for SEO | "WHCFC – Community Football" |
| metaDescription | text          | yes      | Meta description | "Building community in Scarborough through football programs and events." |
| shareImage      | media (image) | no       | OG/Preview image | og-image.png |
| preventIndexing | boolean       | no       | Adds meta robots noindex | false |

---

## 🏗 Example JSON

```json
{
  "metaTitle": "WHCFC – What We Do",
  "metaDescription": "Discover programs, youth training and community events.",
  "shareImage": 12,
  "preventIndexing": false
}
