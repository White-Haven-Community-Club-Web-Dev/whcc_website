# Event Highlight (Component)

Small highlight card displayed at the top of the World Cup 2026 page.  
Used to present quick benefits/features of the event.

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | world-cup |
| Component Name  | event-highlight |
| Description     | Small icon + title + description block |

---

## 📌 Fields

| Field        | Type            | Required | Description | Example |
|--------------|-----------------|----------|-------------|---------|
| icon         | media (image)   | no       | Icon image | screen.svg |
| title        | string          | yes      | Highlight title | "BIG SCREEN VIEWING" |
| description  | text            | no       | Short supporting text | "Experience the match on a large outdoor screen." |

---

## 📝 Notes

- Usually displayed in a 3–4 card grid.  
- Icons can be uploaded SVGs or PNGs.  
- Descriptions are optional — some highlights may be just title + icon.

---

## 🏗 Example JSON

```json
{
  "icon": 12,
  "title": "FREE EVENT",
  "description": "No tickets required — open to everyone."
}
