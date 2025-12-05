# Events (Collection Type)

Lightweight events model for displaying upcoming and past events on the "What We Do" page.

---

## 📌 General

| Property          | Value |
|-------------------|--------|
| Type              | Collection Type |
| Plural Name       | events |
| Description       | Events for the community: upcoming or past |
| Draft & Publish   | Enabled |

---

## 📌 Fields

| Field            | Type            | Required | Description | Example |
|------------------|-----------------|----------|-------------|---------|
| title            | string          | yes      | Event name | "Community Soccer Day" |
| description      | richtext        | no       | Optional detailed text | "<p>A fun day for families...</p>" |
| short_summary    | text            | no       | Short card description | "Family-friendly soccer event" |
| image            | media (image)   | no       | Thumbnail/banner | event1.jpg |
| date             | date            | yes      | Event date | "2024-05-14" |
| start_time       | string          | no       | Optional | "14:30" |
| end_time         | string          | no       | Optional | "17:00" |
| location         | string          | no       | Where the event took place | "Scarborough Recreation Centre" |
| is_featured      | boolean         | no       | Highlight event on top of lists | true |
| event_type       | enum            | no       | "upcoming" / "past" or auto handled in frontend | "upcoming" |
| external_url     | string (URL)    | no       | If there's a page elsewhere | "https://www.whcfc.ca/events/..." |
| order            | integer         | no       | Sort manually | 1 |

---

## 📌 Enum: event_type (optional)

If you want the editor to tag them:

- `upcoming`
- `past`

Otherwise, your **frontend can auto-calculate** based on the date.

---

## 📌 Recommended MVP Filtering Logic

### Upcoming:
```js
date > today
```

### Past:
```js
date < today
```

### Featured:
```js
is_featured === true
```

## 🏗 Example JSON structure (Strapi Output)

```json
{
  "title": "Community Soccer Day",
  "description": "<p>Join us for a day of football activities...</p>",
  "short_summary": "Family-friendly soccer event",
  "image": 77,
  "date": "2024-05-14",
  "start_time": "14:30",
  "end_time": "17:00",
  "location": "Scarborough Recreation Centre",
  "is_featured": true,
  "event_type": "upcoming",
  "external_url": null,
  "order": 1
}
```
