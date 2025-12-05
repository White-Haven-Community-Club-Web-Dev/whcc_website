# Value Card (Component)

Represents a single core value of the organization, usually displayed in a grid on the "Who We Are" page.

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | who-we-are |
| Component Name  | value-card |
| Description     | Card for mission/values section (icon + title + text) |

---

## 📌 Fields

| Field       | Type            | Required | Description | Example |
|-------------|-----------------|----------|-------------|---------|
| icon        | media (image)   | no       | Icon representing the value | heart.svg |
| title       | string          | yes      | Name of the value | "Community" |
| text        | text            | yes      | Short explanation | "We bring neighbours together through football." |

---

## 🏗 Example JSON

```json
{
  "icon": 10,
  "title": "Inclusivity",
  "text": "We welcome everyone regardless of background or ability."
}
