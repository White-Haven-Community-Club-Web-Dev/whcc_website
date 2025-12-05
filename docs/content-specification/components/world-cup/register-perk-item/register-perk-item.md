# Register Perk Item (Component)

Represents a small perk card inside the “Register For Updates” block.

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | world-cup |
| Component Name  | register-perk-item |
| Description     | Icon + title + text describing a perk of registering |

---

## 📌 Fields

| Field        | Type            | Required | Description | Example |
|--------------|-----------------|----------|-------------|---------|
| icon         | media (image)   | no       | Icon for the perk | bell.svg |
| title        | string          | yes      | Short perk title | "Early notifications" |
| description  | text            | no       | Supporting detail | "Get match schedules before public announcements." |

---

## 📝 Notes

- `icon` is optional: some perks can be text-only if needed.  
- `description` can be 1–2 sentences max.  
- Intended for 2–4 items per section.

---

## 🏗 Example JSON

```json
{
  "icon": 17,
  "title": "Exclusive updates",
  "description": "Receive behind-the-scenes announcements and important event news."
}
