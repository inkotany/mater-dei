// schemas/event.ts
export default {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "date", type: "string", title: "Event Date or Range" }, // allows "July 20 - 30, 2025"
  ],
};
