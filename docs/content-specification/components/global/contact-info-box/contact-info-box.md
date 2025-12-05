# Contact Info Box (Component)

Contact information block used in the Contact page and optionally in other pages.  
Can override or complement the global contact settings.

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | global |
| Component Name  | contact-info-box |
| Description     | Structured block for email, phone, address, office hours and social links |

---

## 📌 Fields

| Field          | Type                        | Required | Description | Example |
|----------------|-----------------------------|----------|-------------|---------|
| email          | email                       | no       | Contact email override | "info@whcfc.ca" |
| phone          | string                      | no       | Contact phone override | "(416) 000-0000" |
| address        | text                        | no       | Physical address | "Scarborough, ON, Canada" |
| office_hours   | component (repeatable)      | no       | Office hours | hours component |
| social_links   | component (repeatable)      | no       | Social links | social-link component |

---

## 📝 Notes

- All fields are optional to allow fallback to `global-settings`.  
- If a field is empty, frontend should use global settings.  
- Social links allow complete override if needed.
- Office hours allow complete override if needed.

---

## 🏗 Example JSON

```json
{
  "email": "info@whcfc.ca",
  "phone": "(416) 000-0000",
  "address": "Scarborough, ON, Canada",
  "office_hours": [
    { "day": "Monday", "time": "9:00 AM - 5:00 PM" }
  ],
  "social_links": [
    { "platform": "instagram", "url": "https://instagram.com/whcfc" }
  ]
}
