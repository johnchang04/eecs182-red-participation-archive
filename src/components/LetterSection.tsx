import { ParticipationSite } from "@/lib/loadParticipation";
import { SectionHeader } from "./SectionHeader";
import { TeamCard } from "./TeamCard";

export function LetterSection({
  letter,
  sites,
}: {
  letter: string;
  sites: ParticipationSite[];
}) {
  return (
    <section className="space-y-4">
      <SectionHeader
        title={`Special Participation ${letter}`}
        count={sites.length}
      />

      <div className="grid gap-3">
        {sites.map((site) => (
          <TeamCard
            key={site.post_url}
            letter={letter}
            title={site.title}
            website={site.website}
          />
        ))}
      </div>
    </section>
  );
}
