# Match Card (Component)

Represents a single World Cup match in the viewing schedule section.

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | world-cup |
| Component Name  | match-card |
| Description     | Card for a single match with teams, date, time, spots and CTA |

---

## 📌 Fields

| Field             | Type        | Required | Description | Example |
|-------------------|------------|----------|-------------|---------|
| team_1_name       | string     | yes      | Name of team 1 | "Canada" |
| team_1_flag_emoji | string     | no       | Emoji or short flag code | "🇨🇦" |
| team_2_name       | string     | yes      | Name of team 2 | "Mexico" |
| team_2_flag_emoji | string     | no       | Emoji or short code | "🇲🇽" |
| stage             | string     | no       | Tournament stage | "Group Stage" |
| match_date        | date       | yes      | Match date | "2026-06-13" |
| match_time        | string     | yes      | Local time (formatted) | "2:00 PM" |
| location_label    | string     | no       | Optional location text | "Viewing at Scarborough Centre" |
| spots_available   | integer    | no       | Remaining or total spots | 45 |
| spots_label       | string     | no       | Label text for spots | "45 spots available" |
| register_button_label | string | no       | CTA label | "REGISTER" |
| register_button_url   | string | no       | CTA link | "/contact#world-cup" |

---

## 📝 Notes

- `spots_available` can be used for dynamic logic in frontend (e.g. progress bar).  
- `spots_label` gives full editorial control (e.g. “Limited spots available”).  
- If `register_button_url` is missing, frontend can render card without CTA.  

---

## 🏗 Example JSON

```json
{
  "team_1_name": "Canada",
  "team_1_flag_emoji": "🇨🇦",
  "team_2_name": "Mexico",
  "team_2_flag_emoji": "🇲🇽",
  "stage": "Group Stage",
  "match_date": "2026-06-13",
  "match_time": "2:00 PM",
  "location_label": "Viewing at White Haven Community Centre",
  "spots_available": 45,
  "spots_label": "45 spots available",
  "register_button_label": "REGISTER",
  "register_button_url": "/contact#world-cup"
}
