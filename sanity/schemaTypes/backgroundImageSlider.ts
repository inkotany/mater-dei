const backgroundImageSlider = {
  name: "backgroundImageSlider",
  title: "Background Image Slider",
  type: "document",
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
  ],
};

export default backgroundImageSlider;
