# Register Updates (Component)

Represents the full “Register For Updates” section, inviting users to sign up  
to receive notifications, event info, and updates.

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | world-cup |
| Component Name  | register-updates |
| Description     | Section with title, subtitle, perks list, benefits list, image, and CTA |

---

## 📌 Fields

| Field              | Type                                           | Required | Description | Example |
|--------------------|------------------------------------------------|----------|-------------|---------|
| title              | string                                         | yes      | Main section title | "Register For Updates" |
| subtitle           | text                                           | no       | Short supporting text | "Get notified about schedules, surprises, and more." |
| perks              | component (repeatable) → world-cup.register-perk-item | no | Highlight perks |  |
| what_you_receive   | component (repeatable) → global.rich-point      | no | Detailed bullet list |  |
| image              | media (image)                                  | no       | Optional illustration | updates_image.png |
| cta_label          | string                                         | yes      | Button text | "REGISTER NOW" |
| cta_url            | string                                         | yes      | CTA link | "/contact#register" |

---

## 📝 Notes

- `perks` are mini-cards (icon + title + small text).  
- `what_you_receive` is the simpler bullet list under the CTA.  
- `image` is optional because mobile sometimes hides it.  
- CTA is required because this section is conversion-critical.  

---

## 🏗 Example JSON

```json
{
  "title": "Register For Updates",
  "subtitle": "Be the first to know about schedules, activities, and special surprises.",
  "perks": [
    {
      "__component": "world-cup.register-perk-item",
      "icon": 17,
      "title": "Early notifications",
      "description": "Get match schedules before public release."
    },
    {
      "__component": "world-cup.register-perk-item",
      "icon": 18,
      "title": "Exclusive updates",
      "description": "Access behind-the-scenes details and announcements."
    }
  ],
  "what_you_receive": [
    { "title": "Event schedule updates" },
    { "title": "Vendor announcements" },
    { "title": "Volunteer opportunities" }
  ],
  "image": 52,
  "cta_label": "REGISTER NOW",
  "cta_url": "/contact#register"
}
