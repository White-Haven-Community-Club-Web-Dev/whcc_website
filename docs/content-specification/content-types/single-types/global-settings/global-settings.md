# Global Settings (Single Type)

Configuration for global, reusable site-wide settings such as contact info, social media, and footer metadata.

---

## 📌 Fields

| Field                | Type              | Required | Description | Example |
|----------------------|-------------------|----------|-------------|---------|
| site_name            | string            | yes      | Public site title | "WHCFC" |
| tagline              | string            | no       | Short mission or footer tagline | "Building community through football since 2020." |
| logo                 | media (image)     | no       | Main logo | (logo file) |
| contact_email        | email             | yes      | General contact email | "info@whcfc.com" |
| contact_phone        | string            | no       | The main organization phone | "(416) 123-4567" |
| contact_address      | string            | no       | Physical address | "Scarborough, ON, Canada" |
| social_links         | component (repeatable) | no | List of social media links | See component spec |
| footer_note          | string            | no       | Copyright or footer note | "© 2024 White Haven Community Football Club" |

---

## 📦 Components Used

### **social-links.social-link**
A reusable component for social icons and URLs.

---

## 🏗 Example JSON structure (Strapi output)

```json
{
  "site_name": "WHCFC",
  "tagline": "Building community through football since 2020.",
  "logo": 1,
  "contact_email": "info@whcfc.com",
  "contact_phone": "(416) 123-4567",
  "contact_address": "Scarborough, ON, Canada",
  "social_links": [
    { "platform": "facebook", "url": "https://facebook.com/whcfc" },
    { "platform": "instagram", "url": "https://instagram.com/whcfc" }
  ],
  "footer_note": "© 2024 White Haven Community Football Club"
}
