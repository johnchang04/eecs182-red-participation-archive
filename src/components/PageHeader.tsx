import Image from "next/image";

export function PageHeader() {
  return (
    <header className="flex items-start gap-4 pb-6 border-b">
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="EECS 182 logo"
        width={48}
        height={48}
        className="mt-1"
      />

      {/* Text */}
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight">
          EECS 182 Extra Credit Websites
        </h1>
        <p className="text-gray-600 max-w-2xl">
          A curated directory of Red Team (vibe-coding) submissions
          organized by Special Participation category.
        </p>
      </div>
    </header>
  );
}
