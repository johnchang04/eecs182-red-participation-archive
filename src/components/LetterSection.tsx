import { ParticipationSite } from "@/lib/loadParticipation";
import { TeamLink } from "./TeamLink";

export function LetterSection({
  letter,
  sites,
}: {
  letter: string;
  sites: ParticipationSite[];
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">
        Special Participation {letter}
      </h2>

      {sites.length === 0 ? (
        <p className="text-gray-500">No teams submitted.</p>
      ) : (
        <ul className="space-y-2">
          {sites.map((site) => (
            <TeamLink key={site.post_url} site={site} />
          ))}
        </ul>
      )}
    </section>
  );
}
