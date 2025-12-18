import fs from "fs";
import path from "path";

export type ParticipationSite = {
  title: string;
  letter: "A" | "B" | "C" | "D" | "E";
  team: "Red";
  website: string;
  post_url: string;
  authors: string[];
  created_at: string;
};

export function loadParticipation(): ParticipationSite[] {
  const filePath = path.join(
    process.cwd(),
    "data",
    "participation_sites.json"
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}
