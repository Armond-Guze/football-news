import { headlineQuery } from "./lib/queries";
import powerRanking from "./schemaTypes/powerRanking";
import headlineType from "./schemaTypes/headlineType"; // ✅ This was missing!

export const schemaTypes = [
  powerRanking,
  headlineType,
  // add other schemas here as needed
];
