import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { buildIndex } from "./buildIndex";

buildIndex()
  .then(() => console.log("Participation index built"))
  .catch(console.error);
