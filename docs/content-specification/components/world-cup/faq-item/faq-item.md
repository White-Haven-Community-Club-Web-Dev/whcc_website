# FAQ Item (Component)

Represents a single question + answer pair inside the “Frequently Asked Questions” section.

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | world-cup |
| Component Name  | faq-item |
| Description     | An expandable accordion item containing a question and an answer |

---

## 📌 Fields

| Field       | Type       | Required | Description | Example |
|-------------|------------|----------|-------------|---------|
| question    | string     | yes      | The FAQ question | "Is the event free?" |
| answer      | richtext   | yes      | The answer (supports paragraphs) | "<p>Yes, the event is completely free for all attendees.</p>" |

---

## 📝 Notes

- `answer` is **richtext** to allow formatting: paragraphs, links, bold, etc.  
- Frontend will render as accordion with expand/collapse.  
- Recommended length: 1–4 paragraphs.

---

## 🏗 Example JSON

```json
{
  "question": "Is the event free?",
  "answer": "<p>Yes! Our World Cup viewing party is free and open to all ages. No tickets are required.</p>"
}
