# Hours (Component)

Represents a single opening/availability time slot, usually part of a list of hours.

---

## 📌 General

| Property        | Value |
|-----------------|--------|
| Category        | global |
| Component Name  | hours |
| Description     | Opening or activity hours entry (day + time range) |

---

## 📌 Fields

| Field        | Type     | Required | Description | Example |
|--------------|----------|----------|-------------|---------|
| label        | string   | yes      | Day or label for the time slot | "Monday – Friday" |
| time_range   | string   | yes      | Human-readable time range | "6:00 PM – 9:00 PM" |
| note         | string   | no       | Optional additional info | "Youth programs only" |

---

## 📝 Uso típico

Este componente suele ir como **lista repeatable** en algún otro componente o content-type, por ejemplo:

- `contact-page` → `opening_hours` (repeatable `hours`)  
- `location-block` en Who We Are → horarios de actividades regulares  

---

## 🏗 Example JSON

```json
{
  "label": "Monday – Friday",
  "time_range": "6:00 PM – 9:00 PM",
  "note": "Youth training sessions"
}
