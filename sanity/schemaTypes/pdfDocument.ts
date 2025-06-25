// schemas/pdfDocument.ts
export default {
  name: "pdfDocument",
  title: "PDF Document",
  type: "document",
  fields: [
    { name: "title", type: "string", title: "Title" },
    {
      name: "file",
      type: "file",
      title: "PDF File",
      options: {
        accept: ".pdf",
      },
    },
  ],
};
