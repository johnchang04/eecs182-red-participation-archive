import { ParticipationSite } from "@/lib/loadParticipation";

export function TeamLink({ site }: { site: ParticipationSite }) {
  return (
    <li className="flex items-center justify-between">
      <a
        href={site.website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        {site.title}
      </a>

      <a
        href={site.post_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-500 underline"
      >
        Ed
      </a>
    </li>
  );
}
