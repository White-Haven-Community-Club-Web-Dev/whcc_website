# Hero Section (Component)

Main hero banner for the World Cup 2026 page.  
Includes large background image, title/subtitle, countdown date, and up to two call-to-action buttons.

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | world-cup |
| Component Name  | hero-section |
| Description     | Hero banner with headline, subtitle, countdown, and CTAs |

---

## 📌 Fields

| Field                  | Type                | Required | Description | Example |
|------------------------|---------------------|----------|-------------|---------|
| background_image       | media (image)       | yes      | Full-width background image | hero_wc2026.jpg |
| eyebrow_label          | string              | no       | Small label above main title | "FIFA World Cup 2026 Viewing Party" |
| title                  | string              | yes      | Main hero headline | "Watch the World Cup With Your Community" |
| subtitle               | text                | no       | Supporting text | "Free, family-friendly viewing party in Scarborough." |
| countdown_event_date   | datetime            | no       | Date used for countdown timer | "2026-06-12T19:00:00Z" |
| primary_button_label   | string              | no       | CTA button label | "Register for Updates" |
| primary_button_url     | string              | no       | CTA button URL | "#register" |
| secondary_button_label | string              | no       | Secondary CTA label | "View Schedule" |
| secondary_button_url   | string              | no       | Secondary CTA URL | "#schedule" |
| overlay_opacity        | decimal (0–1)       | no       | Dark overlay over background (0=no overlay, 1=black) | 0.45 |
| text_alignment         | enum                | no       | Horizontal text alignment | "left" |

---

## 📌 Enum: text_alignment

| Value |
|--------|
| left |
| center |
| right |

---

## 📝 Notes

- `countdown_event_date` is **optional** → frontend can hide countdown if missing.  
- If only primary button is provided, secondary is ignored gracefully.  
- `overlay_opacity` helps ensure readability over bright images.  

---

## 🏗 Example JSON (Strapi Output)

```json
{
  "background_image": 41,
  "eyebrow_label": "FIFA World Cup 2026 Viewing Party",
  "title": "Watch the World Cup With Your Community",
  "subtitle": "Free, family-friendly viewing party in Scarborough.",
  "countdown_event_date": "2026-06-12T19:00:00.000Z",
  "primary_button_label": "Register for Updates",
  "primary_button_url": "#register",
  "secondary_button_label": "View Schedule",
  "secondary_button_url": "#schedule",
  "overlay_opacity": 0.45,
  "text_alignment": "left"
}
