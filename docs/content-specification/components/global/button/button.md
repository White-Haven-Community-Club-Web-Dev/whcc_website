# Button (Component)

Universal CTA button used across all pages and sections.

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | global |
| Component Name  | button |
| Description     | Reusable button with label, URL and optional styling flags |

---

## 📌 Fields

| Field        | Type     | Required | Description | Example |
|--------------|----------|----------|-------------|---------|
| label        | string   | yes      | Text displayed on the button | "Learn More" |
| url          | string   | yes      | URL the button navigates to | "/contact" |
| style        | enum     | no       | Optional style type | "primary" |
| icon_left    | media    | no       | Optional icon shown on left | arrow.svg |
| icon_right   | media    | no       | Optional icon shown on right | chevron.svg |
| is_external  | boolean  | no       | Opens link in new tab | true |

---

## 📌 Enum: style

If used, these are typical Tailwind/UI-style button variants:

| Style       | Meaning |
|-------------|----------|
| primary     | Main CTA button (solid) |
| secondary   | Secondary CTA button (outlined) |
| light       | Minimal/light button |
| dark        | Dark variant |
| link        | Text-only link button |

Use optional — you can ignore it if the frontend auto-styles buttons.

---

## 📌 Notes

- `is_external = true` automatically means `target="_blank"` in frontend.  
- Icons are optional and allow better UI patterns.  
- This component is stable and will be reused across MVP and future versions.  

---

## 🏗 Example JSON

```json
{
  "label": "Register Now",
  "url": "https://forms.office.com/...",
  "style": "primary",
  "icon_left": 23,
  "icon_right": null,
  "is_external": true
}
