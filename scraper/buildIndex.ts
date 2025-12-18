import fs from "fs";
import { fetchThreads, fetchThreadDetail } from "./fetchEd";

/**
 * Detect Special Participation letter from title text.
 */
function detectLetter(text: string): "A" | "B" | "C" | "D" | "E" | null {
  const t = text.toLowerCase();

  // Canonical form
  if (t.includes("special participation a")) return "A";
  if (t.includes("special participation b")) return "B";
  if (t.includes("special participation c")) return "C";
  if (t.includes("special participation d")) return "D";
  if (t.includes("special participation e")) return "E";

  // Fallbacks for sloppy titles
  if (t.includes(" a team")) return "A";
  if (t.includes(" b team")) return "B";
  if (t.includes(" c team")) return "C";
  if (t.includes(" d team")) return "D";
  if (t.includes(" e team")) return "E";

  return null;
}

/**
 * Detect team color.
 */
function detectTeam(text: string): "Red" | "Blue" | "Unknown" {
  const t = text.toLowerCase();
  if (t.includes("red team") || t.includes("vibe coding")) return "Red";
  if (t.includes("blue team")) return "Blue";
  return "Unknown";
}

/**
 * Extract first external (non-Ed) URL.
 */
function extractWebsite(text: string): string | null {
  const urls = text.match(/https?:\/\/[^\s"'<> )]+/g);
  if (!urls) return null;

  return (
    urls.find(
      (u) => !u.includes("edstem.org") && !u.includes("piazza")
    ) ?? null
  );
}

/**
 * Robust EC website title match.
 */
function isExtraCreditWebsiteTitle(title: string): boolean {
  return /extra\s*credit\s*website/i.test(title);
}

export async function buildIndex() {
  const threads = await fetchThreads();
  const sites: any[] = [];

  for (const t of threads) {
    const titleRaw = t.title ?? "";
    const titleLower = titleRaw.toLowerCase();

    if (!isExtraCreditWebsiteTitle(titleRaw)) continue;

    const letter = detectLetter(titleLower);
    if (!letter) continue;

    // Fetch full thread detail
    const detail = (await fetchThreadDetail(t.id)) as any;

    // 🔑 WEBSITE LIVES HERE
    const threadText =
      detail?.thread?.document?.text ??
      detail?.thread?.document?.html ??
      detail?.thread?.content ??
      "";

    const website = extractWebsite(threadText);
    if (!website) continue;

    const combinedText = `${titleRaw}\n${threadText}`;

    sites.push({
      title: t.title,
      letter,
      team: detectTeam(combinedText),
      website,
      post_url: `https://edstem.org/us/courses/${process.env.ED_COURSE_ID}/discussion/${t.id}`,
      authors: [t.user?.name ?? "Unknown"],
      created_at: t.created_at,
    });
  }

  fs.writeFileSync(
    "data/participation_sites.json",
    JSON.stringify(sites, null, 2)
  );

  console.log(`Saved ${sites.length} participation websites.`);
}
