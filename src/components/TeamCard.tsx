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
        hover:border-gray-400
        hover:bg-gray-50
        transition
      "
    >
      <div className="flex items-center gap-4">
        <span className="
          inline-flex items-center justify-center
          rounded-md bg-gray-900 text-white
          text-sm font-medium
          w-10 h-8
        ">
          {letter}
        </span>

        <span className="font-medium text-gray-900">
          {title}
        </span>
      </div>
    </a>
  );
}
