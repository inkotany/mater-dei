const galleryImage = {
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "alt",
      title: "Alt Text",
      type: "string",
      description: "Describe the image for accessibility and SEO.",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Events", value: "events" },
          { title: "Academics", value: "academics" },
          { title: "Sports", value: "sports" },
          { title: "Milestones", value: "milestones" },
        ],
        layout: "radio",
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
};

export default galleryImage;
