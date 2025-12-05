# Program Info Block (Component)

Rich information block for program overview sections.

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | what-we-do |
| Component Name  | program-info-block |
| Description     | Program summary with title, text, image and CTA |

---

## 📌 Fields

| Field        | Type            | Required | Description | Example |
|--------------|-----------------|----------|-------------|---------|
| title        | string          | yes      | Section title | "Youth Programs" |
| text         | richtext        | yes      | Program details | "<p>We offer...</p>" |
| image        | media (image)   | no       | Supporting image | youth.jpg |
| button       | component (global.button) | no | CTA |

---

## 🏗 Example JSON

```json
{
  "title": "Youth Football Programs",
  "text": "<p>Our youth training is designed for developing technique...</p>",
  "image": 44,
  "button": {
    "label": "Learn More",
    "url": "/programs/youth",
    "style": "primary"
  }
}