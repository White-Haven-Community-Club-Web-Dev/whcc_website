# Team Members (Collection Type)

Collection of board members, staff, and key volunteers displayed on the "Who We Are" page.

---

## 📌 General

| Property      | Value |
|---------------|--------|
| Type          | Collection Type |
| Plural Name   | team-members |
| Description   | Board members and organizational staff |
| Draft & Publish | Enabled |

---

## 📌 Fields

| Field        | Type          | Required | Description | Example |
|--------------|---------------|----------|-------------|---------|
| name         | string        | yes      | Full name | "Sophie Lee" |
| role         | string        | yes      | Position / Title | "Project Manager" |
| photo        | media (image) | no       | Profile photo | team1.jpg |
| bio          | richtext      | no       | Short biography | "<p>Sophie has led...</p>" |
| order        | integer       | no       | Manual ordering weight | 1 |
| is_board     | boolean       | no       | Indicates if this member is part of the board | true |

---

## 📌 Notes

- **order** allows manual sorting in the frontend (e.g. president first).  
- **is_board** can be used to filter board members vs volunteers vs staff.  
- Only the **board members** will be used in the MVP.

---

## 🏗 Example JSON structure (Strapi Output)

```json
{
  "name": "Sophie Lee",
  "role": "Project Manager",
  "photo": 12,
  "bio": "<p>Sophie is responsible for coordinating...</p>",
  "order": 1,
  "is_board": true
}
