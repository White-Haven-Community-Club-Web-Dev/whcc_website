# Contacts (Collection Type)

Stores submissions from the public "Contact Us" form.

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Type            | Collection Type |
| Plural Name     | contacts |
| Description     | Contact form submissions from the website |
| Draft & Publish | Disabled (optional, can be simple data model only) |

> Suggestion: you can disable Draft & Publish to make it a simple data model.

---

## 📌 Fields

| Field         | Type        | Required | Description | Example |
|---------------|------------|----------|-------------|---------|
| name          | string     | yes      | Full name of the person | "Nicolás Olivares" |
| email         | email      | yes      | Contact email | "nico@example.com" |
| phone         | string     | no       | Optional phone number | "+1 (416) 000-0000" |
| message       | text       | yes      | Message body | "I'd like to learn more about your programs..." |
| source_page   | string     | no       | Where the form was submitted from | "/contact" |
| consent       | boolean    | no       | If they accepted terms/newsletter (if added later) | true |
| created_at    | datetime   | auto     | Timestamp created (Strapi default) | "2024-11-28T15:30:00Z" |
| updated_at    | datetime   | auto     | Last modification timestamp | "2024-11-28T15:30:00Z" |

> Note: `created_at` and `updated_at` are automatically handled by Strapi, no need to declare them manually, but we document them for clarity.
---

## 🧩 Expected Flow (MVP)

1. User fills out the form on `/contact` with:
   - name  
   - email  
   - phone (optional)  
   - message  

2. Frontend makes `POST` to your backend (Node/Express or Strapi endpoint custom):
   - Validate data  
   - Create a record in `contacts`  
   - Send email to `info@whcfc.ca` with the content

3. The team reviews:
   - Email in inbox  
   - And if needed, at some point, the `contacts` table in Strapi admin or DB.

---

## 🏗 Example JSON structure (Strapi Output)

```json
{
  "name": "Nicolás Olivares",
  "email": "nico@example.com",
  "phone": "+1 (416) 000-0000",
  "message": "Hi, I'd like to know more about upcoming programs.",
  "source_page": "/contact",
  "consent": true,
  "created_at": "2024-11-28T15:30:00.000Z",
  "updated_at": "2024-11-28T15:30:00.000Z"
}
