# Publishing on GitHub Pages

This site is intentionally static. GitHub Pages does not use the Vercel publisher portal or its database.

To add a deliverable:

1. Add the file to `public/deliverables/` if there is a file to download.
2. Add its publication record to `publishedDeliverables` in `lib/content.ts`.
3. If the record includes a file, add its GitHub Pages download URL using `siteBasePath` (as the Planning report does).
4. Commit and push the change to `main`.

The `Deploy GitHub Pages` workflow publishes the static build automatically. The public archive is available at:

https://avnishr4j.github.io/WEBSITE-Software-Eng-Project-Agent-Shield/
