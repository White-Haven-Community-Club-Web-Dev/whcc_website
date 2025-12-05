# Schedule Item (Component)

Represents a single activity or session inside a program schedule.

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | what-we-do |
| Component Name  | schedule-item |
| Description     | Session entry for future program schedules |

---

## 📌 Fields

| Field         | Type     | Required | Description | Example |
|---------------|----------|----------|-------------|---------|
| title         | string   | yes      | Session or activity name | "Youth Training" |
| day           | string   | yes      | Day or days | "Monday" |
| time_range    | string   | yes      | Time interval | "6 PM – 8 PM" |
| location      | string   | no       | Where it happens | "WHCFC Field" |

---

## 🏗 Example JSON

```json
{
  "title": "Training Session",
  "day": "Wednesday",
  "time_range": "5 PM – 7 PM",
  "location": "Scarborough Centre"
}