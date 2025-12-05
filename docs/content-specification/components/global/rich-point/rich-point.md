# Rich Point (Component)

A reusable bullet point item used across multiple sections  
(World Cup, What We Do, Partner blocks, and Register Updates).

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | global |
| Component Name  | rich-point |
| Description     | A flexible bullet/point with optional description |

---

## 📌 Fields

| Field        | Type       | Required | Description | Example |
|--------------|------------|----------|-------------|---------|
| title        | string     | yes      | The bullet point or statement | "Local small businesses" |
| description  | text       | no       | Optional supporting text | "We support vendors across the community." |

---

## 📝 Notes

- Ideal for bulleted lists with simple or expanded content.  
- `description` is optional—many bullets are title-only.  
- Consistent styling across the entire site for lists.  

---

## 🏗 Example JSON (Strapi Output)

```json
{
  "title": "Local small businesses",
  "description": "Showcasing products from neighbourhood vendors."
}
