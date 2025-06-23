import { headlineQuery } from "./lib/queries";
import powerRanking from "./schemaTypes/powerRanking";
import standings from "./schemaTypes/standings";
import headlineType from "./schemaTypes/headlineType"; // ✅ This was missing!

export const schemaTypes = [
  powerRanking,
  headlineType,
  standings,
  // add other schemas here as needed
];
