import Link from "next/link";
import { notFound } from "next/navigation";
import { publishedDeliverables } from "@/lib/content";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from(new Set(publishedDeliverables.map((item) => item.slug))).map((slug) => ({ slug }));
}

export default async function LatestDeliverablePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const target = publishedDeliverables.find((item) => item.slug === slug);
  if (!target) notFound();

  return (
    <main>
      <SiteHeader />
      <section className="page-hero shell">
        <p className="kicker">Latest version</p>
        <h1>{target.title}</h1>
        <p>{target.changeSummary}</p>
        <Link className="button button-primary" href={`/deliverables/${target.slug}/v/${target.version}`}>
          Open {target.version}
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
