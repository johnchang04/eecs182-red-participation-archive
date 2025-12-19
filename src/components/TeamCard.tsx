export function TeamCard({
  letter,
  title,
  website,
}: {
  letter: string;
  title: string;
  website: string;
}) {
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block rounded-xl border
        p-5
        bg-white border-zinc-200
        hover:border-gray-400 hover:bg-gray-50
        dark:bg-zinc-900 dark:border-zinc-700 dark:hover:border-zinc-500 dark:hover:bg-zinc-800
        transition
      "
    >
      <div className="flex items-center gap-4">
        <span className="
          inline-flex items-center justify-center
          rounded-md bg-gray-900 text-white
          dark:bg-slate-700 dark:text-white
          text-sm font-medium
          w-10 h-8
        ">
          {letter}
        </span>

        <span className="font-medium text-gray-900 dark:text-zinc-100">
          {title}
        </span>
      </div>
    </a>
  );
}
