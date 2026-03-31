import { serverLibraryHighlights } from "@/lib/content";

export default function ServerLibraries() {
  return (
    <>
      <p className="hero">
        These libraries power MCP server infrastructure so you can wire transports, middleware, file servers, and
        normalized data together.
      </p>

      <div className="server-libraries">
        {serverLibraryHighlights.map((pkg) => (
          <article key={pkg.name} className="library-detail-card">
            <div>
              <h3>
                <a href={pkg.docs}>{pkg.name}</a>
              </h3>
              <p>{pkg.summary}</p>
            </div>
            <p className="library-install">{pkg.install}</p>
            <ul>
              {pkg.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  );
}
