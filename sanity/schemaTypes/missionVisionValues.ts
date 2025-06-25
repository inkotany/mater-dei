export default {
  name: "missionVisionValue",
  title: "Mission, Vision or Values",
  type: "document",
  fields: [
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Mission", value: "mission" },
          { title: "Vision", value: "vision" },
          { title: "Values", value: "values" },
        ],
        layout: "radio",
      },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "text",
      description: "Paragraph for mission and vision",
      hidden: ({ parent }: { parent?: { type?: string } }) =>
        parent?.type === "values",
    },
    {
      name: "valuesList",
      title: "Values List",
      type: "array",
      of: [{ type: "string" }],
      description: "List of values for values type",
      hidden: ({ parent }: { parent?: { type?: string } }) =>
        parent?.type === "values",
    },
  ],
};
