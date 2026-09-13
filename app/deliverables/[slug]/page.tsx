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
  const latest = publishedDeliverables.filter((item) => item.slug === slug).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))[0];
  if (!latest) notFound();
  return (
    <main>
      <SiteHeader />
      <section className="page-hero shell">
        <p className="kicker">Latest version</p>
        <h1>{latest.title}</h1>
        <p>{latest.changeSummary}</p>
        <Link className="button button-primary" href={`/deliverables/${latest.slug}/v/${latest.version}`}>Open {latest.version}</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
