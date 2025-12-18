import { loadParticipation } from "@/lib/loadParticipation";
import { PageHeader } from "@/components/PageHeader";
import { LetterSection } from "@/components/LetterSection";

export default function Home() {
  const sites = loadParticipation();
  const letters = ["A", "B", "C", "D", "E"] as const;

  return (
    <main className="max-w-4xl mx-auto px-6 py-10 space-y-12">
      <PageHeader />

      {letters.map((letter) => (
        <LetterSection
          key={letter}
          letter={letter}
          sites={sites.filter((s) => s.letter === letter)}
        />
      ))}
    </main>
  );
}
