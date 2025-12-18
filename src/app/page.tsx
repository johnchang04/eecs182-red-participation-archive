import { loadParticipation } from "@/lib/loadParticipation";
import { LetterSection } from "@/components/LetterSection";

const LETTERS = ["A", "B", "C", "D", "E"] as const;

export default function Home() {
  const sites = loadParticipation();

  const byLetter = Object.fromEntries(
    LETTERS.map((letter) => [
      letter,
      sites.filter((s) => s.letter === letter),
    ])
  );

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">
          EECS 182 Extra Credit Websites
        </h1>
        <p className="text-gray-600">
          Red team (vibe-coding control) submissions, organized by
          Special Participation category.
        </p>
      </header>

      {LETTERS.map((letter) => (
        <LetterSection
          key={letter}
          letter={letter}
          sites={byLetter[letter]}
        />
      ))}
    </main>
  );
}
