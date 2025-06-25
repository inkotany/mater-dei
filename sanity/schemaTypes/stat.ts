const stat = {
  name: "stat",
  title: "Stat",
  type: "document",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "value",
      title: "Value",
      type: "number",
      validation: (Rule: {
        required: () => {
          (): any;
          new (): any;
          min: { (arg0: number): any; new (): any };
        };
      }) => Rule.required().min(0),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
  ],
};

export default stat;
