import { ParticipationSite } from "@/lib/loadParticipation";

export function TeamLink({ site }: { site: ParticipationSite }) {
  return (
    <li className="flex flex-col gap-1 rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900 sm:flex-row sm:items-center sm:justify-between">
      <a
        href={site.website}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-blue-700 hover:underline dark:text-blue-300"
      >
        {site.title}
      </a>

      <a
        href={site.post_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-zinc-500 hover:underline dark:text-zinc-400"
      >
        Ed
      </a>
    </li>
  );
}
