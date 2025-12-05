# Two Column Feature (Component)

A layout component that displays two side-by-side feature blocks  
(usually “Food Vendors” + “Entertainment & Activities”).

Each column is rendered using the `column-feature-block` component.

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | world-cup |
| Component Name  | two-column-feature |
| Description     | Section wrapper for two feature columns with images, titles, and bullet lists |

---

## 📌 Fields

| Field        | Type                                           | Required | Description | Example |
|--------------|------------------------------------------------|----------|-------------|---------|
| title        | string                                         | yes      | Section heading | "Food & Entertainment" |
| subtitle     | text                                           | no       | Optional short intro | "Enjoy delicious food and fun activities for all ages." |
| columns      | component (repeatable, max = 2) → world-cup.column-feature-block | yes | The two feature columns |  |

---

## 📝 Notes

- **Max repeatable = 2** to enforce the structured design.  
- Each column contains: image + title + description + bullets.  
- If only 1 column exists, frontend should center it.  
- This is a “wrapper” component; most of the content is inside `column-feature-block`.

---

## 🏗 Example JSON

```json
{
  "title": "Food & Entertainment",
  "subtitle": "Enjoy delicious food and fun activities for all ages.",
  "columns": [
    {
      "__component": "world-cup.column-feature-block",
      "image": 41,
      "title": "Food Vendors",
      "description": "Taste a variety of cuisines from local businesses.",
      "bullet_points": [
        { "title": "Local small businesses" },
        { "title": "Affordable prices" },
        { "title": "Vegetarian options" }
      ]
    },
    {
      "__component": "world-cup.column-feature-block",
      "image": 42,
      "title": "Entertainment & Activities",
      "description": "Fun experiences for families and children.",
      "bullet_points": [
        { "title": "Face painting" },
        { "title": "Music & performances" },
        { "title": "Games & activities" }
      ]
    }
  ]
}
