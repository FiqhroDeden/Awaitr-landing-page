import Link from "next/link";

interface ContentPageShellProps {
  breadcrumbs: { label: string; href: string }[];
  jsonLd: object[];
  children: React.ReactNode;
}

export default function ContentPageShell({
  breadcrumbs,
  jsonLd,
  children,
}: ContentPageShellProps) {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-foreground/50">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.href} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-foreground/70">{crumb.label}</span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <article className="prose-custom">{children}</article>

        <div className="mt-16 pt-8 border-t border-foreground/5">
          <Link
            href="/"
            className="text-sm text-foreground/50 hover:text-foreground transition-colors"
          >
            &larr; Back to home
          </Link>
        </div>
      </div>
    </>
  );
}
