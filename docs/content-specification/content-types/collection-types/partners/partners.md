# Partners (Collection Type)

Collection of partner organizations, community groups, collaborators, supporting institutions, and related entities.

Displayed on the "Who We Are" page.

---

## 📌 General

| Property          | Value |
|-------------------|--------|
| Type              | Collection Type |
| Plural Name       | partners |
| Description       | Logos and information about partner organizations |
| Draft & Publish   | Enabled |

---

## 📌 Fields

| Field          | Type            | Required | Description | Example |
|----------------|-----------------|----------|-------------|---------|
| name           | string          | yes      | Partner or organization name | "City of Toronto" |
| logo           | media (image)   | yes      | Logo image (SVG/PNG) | city_toronto.png |
| website_url    | string (URL)    | no       | Link to partner website | "https://www.toronto.ca" |
| description     | text           | no       | Short description | "Supporting community programs since 2021" |
| category        | enum           | no       | Type of partner | "community", "corporate", "government" |
| order           | integer         | no       | Sorting weight | 2 |

---

## 📌 Enum: category (Optional)

Categories help if later you want filtering:

- `community`
- `corporate`
- `government`
- `ngo`
- `educational`
- `other`

If not used, can be left blank.

---

## 🏗 Example JSON structure (Strapi Output)

```json
{
  "name": "City of Toronto",
  "logo": 45,
  "website_url": "https://www.toronto.ca",
  "description": "Supporting community initiatives in Scarborough.",
  "category": "government",
  "order": 1
}
