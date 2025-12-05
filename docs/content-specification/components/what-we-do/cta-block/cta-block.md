# CTA Block (Component)

A simple call-to-action block containing title, text, and a button.

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | what-we-do |
| Component Name  | cta-block |
| Description     | Promotional CTA block for the end of sections |

---

## 📌 Fields

| Field        | Type                  | Required | Description | Example |
|--------------|-----------------------|----------|-------------|---------|
| title        | string                | yes      | CTA headline | "Join Us Today" |
| text         | text                  | no       | Supporting text | "Get involved with WHCFC programs." |
| button       | component (global.button) | no   | Action button |

---

## 🏗 Example JSON

```json
{
  "title": "Get Involved",
  "text": "Learn how you can participate in our programs.",
  "button": {
    "label": "Contact Us",
    "url": "/contact",
    "style": "primary"
  }
}