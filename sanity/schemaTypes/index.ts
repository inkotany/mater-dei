import { type SchemaTypeDefinition } from "sanity";
import leader from "./leader";
import backgroundImageSlider from "./backgroundImageSlider";
import stat from "./stat";
import galleryImage from "./galleryImage";
import announcement from "./announcement";
import pdfDocument from "./pdfDocument";
import event from "./event";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    leader,
    backgroundImageSlider,
    stat,
    galleryImage,
    announcement,
    pdfDocument,
    event,
  ],
};
