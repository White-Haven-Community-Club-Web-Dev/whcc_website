# Contact Page (Single Type)

Static content for the "Contact Us" page.  
The form submissions do NOT live here — they belong to the "contacts" collection type.

Page: [CONNECT WITH US](https://www.figma.com/make/43PJzj6aisQyB1aQ0fzfQo/Create-WHCFC-Website-Design)
---

## 📌 Fields

| Field                   | Type                | Required | Description | Example |
|-------------------------|---------------------|----------|-------------|---------|
| hero_title              | string              | yes      | Header title | "Get in Touch" |
| hero_subtitle           | string              | no       | Short intro | "We'd love to hear from you." |
| hero_background         | media (image)       | no       | Optional background image | contact-hero.jpg |
| intro_title             | string              | no       | Section title | "Contact Information" |
| intro_text              | richtext            | no       | Description | "<p>Contact our team...</p>" |
| contact_info_override   | component (single)  | no       | Override global settings for contact info | See component |
| map_embed_url           | string              | no       | Google Maps/Lite embed | "https://maps.google.com/..." |
| extra_notes_title       | string              | no       | Optional small section | "Additional Info" |
| extra_notes_text        | richtext            | no       | FAQ or disclaimers | "<p>Our team typically responds in 24–48 hours.</p>" |

---

## 📦 Components Used

### **contact.contact-info-box**
(Only used if you want to override global settings)

| Field       | Type   | Required | Description |
|-------------|--------|----------|-------------|
| email       | email  | no       | Override email |
| phone       | string | no       | Override phone |
| address     | string | no       | Physical location |
| social_links | component (repeatable) | no | Same structure as global social links |

---

## 🏗 Example JSON structure (Strapi Output)

```json
{
  "hero_title": "Contact Us",
  "hero_subtitle": "We're here to support the community.",
  "hero_background": 8,
  "intro_title": "Contact Information",
  "intro_text": "<p>Feel free to reach out using the form...</p>",
  "contact_info_override": {
    "email": "info@whcfc.ca",
    "phone": "416-000-0000",
    "address": "Scarborough, ON",
    "social_links": [
      { "platform": "instagram", "url": "https://instagram.com/whcfc" }
    ]
  },
  "map_embed_url": "https://maps.google.com/maps?q=Scarborough",
  "extra_notes_title": "Additional Information",
  "extra_notes_text": "<p>We reply within 48 hours.</p>"
}
