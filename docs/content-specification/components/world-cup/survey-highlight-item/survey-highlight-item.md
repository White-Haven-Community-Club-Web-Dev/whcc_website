# Survey Highlight Item (Component)

Represents a single bullet highlight within the "Community Needs Assessment Survey" block.

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | world-cup |
| Component Name  | survey-highlight-item |
| Description     | A small icon + text bullet used in the survey block |

---

## 📌 Fields

| Field       | Type            | Required | Description | Example |
|-------------|-----------------|----------|-------------|---------|
| icon        | media (image)   | no       | Optional small icon | check.svg |
| title       | string          | yes      | Short highlight title | "Quick to complete" |
| text        | text            | no       | Supporting detail | "Only takes around 3 minutes." |

---

## 📝 Notes

- Frequently used in a flex/grid layout beside the survey image.  
- If `text` is empty → frontend shows only the title.  
- Icons are optional since some bullets in your design are text-only.

---

## 🏗 Example JSON

```json
{
  "icon": 12,
  "title": "Supports Community Planning",
  "text": "Your feedback helps improve future events and programs."
}
