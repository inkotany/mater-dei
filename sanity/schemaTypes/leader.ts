const leader = {
  name: "leader",
  title: "Leader",
  type: "document",
  fields: [
    { name: "name", type: "string", title: "Name" },
    { name: "position", type: "string", title: "Position" },
    { name: "role", type: "string", title: "Role" },
    { name: "phone", type: "string", title: "Phone" },
    { name: "email", type: "string", title: "Email" },
    {
      name: "photo",
      type: "image",
      title: "Photo",
      options: { hotspot: true },
    },
    { name: "bio", type: "text", title: "Bio" },
  ],
};

export default leader;
