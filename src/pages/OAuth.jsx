import { oauthHighlights } from "@/lib/content";

export default function OAuth() {
  return (
     <>
       <p className="hero">
         The OAuth stack keeps Gmail and Outlook connections secure with multi-account tools, PKCE, DCR, and device
         code flows.
         </p>

         {oauthHighlights.map((pkg) => (
           <section key={pkg.name} className="section">
             <h2>{pkg.name}</h2>
             <p>{pkg.summary}</p>
             <pre>
               <code>{pkg.install}</code>
             </pre>
             <ul className="client-api-list">
               {pkg.notes.map((note) => (
                 <li key={note}>{note}</li>
               ))}
             </ul>
           </section>
         ))}

         <section className="section">
           <h2>How OAuth fits</h2>
           <p>
          Use the OAuth packages alongside the servers page for Gmail/Outlook and the CLI/client tooling for tool
          execution. DCR connectors enable self-hosted HTTP servers to expose bearer flows, while loopback/device code helpers
          simplify local dev.
           </p>
         </section>
       </>
    );
}
