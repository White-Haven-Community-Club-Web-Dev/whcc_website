# Social Link (Component)

A reusable component for storing social media links with optional platform reference.

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | global |
| Component Name  | social-link |
| Description     | Single social media profile link and platform identifier |

---

## 📌 Fields

| Field       | Type     | Required | Description | Example |
|-------------|----------|----------|-------------|---------|
| platform    | enum     | no       | Name of platform (helps control icons) | "instagram" |
| url         | string   | yes      | Full link to profile | "https://instagram.com/whcfc" |
| username    | string   | no       | Optional public handle | "@whcfc" |

---

## 📌 Enum: platform

| Value |
|-------|
| facebook |
| instagram |
| twitter |
| tiktok |
| youtube |
| linkedin |
| other |

---

## 🏗 Example JSON

```json
{
  "platform": "instagram",
  "url": "https://instagram.com/whcfc",
  "username": "@whcfc"
}
