// schemas/announcement.ts
export default {
  name: "announcement",
  title: "Announcement",
  type: "document",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "date", type: "date", title: "Date" },
    { name: "content", type: "text", title: "Content" },
  ],
};
