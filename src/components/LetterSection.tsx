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
        {sites.length === 0 ? (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            No teams submitted.
          </p>
        ) : (
        sites.map((site) => (
          <TeamCard
            key={site.post_url}
            letter={letter}
            title={site.title}
            website={site.website}
            //postUrl={site.post_url}
          />
        )))}
      </div>
    </section>
  );
}
