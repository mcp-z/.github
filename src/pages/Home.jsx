import { homePillars, packageMatrix } from "@/lib/content";

const tagline = (
   <>
     🧩 Building an ecosystem of MCP servers that empower AI agents and their humans. As easy peasy as{" "}
     <code>mcp-z</code>.{" "}
     <a className="link-inline" href="https://github.com/mcp-z">
      Explore the org on GitHub →
     </a>
   </>
);

export default function Home() {
  return (
     <>
       <p className="hero">{tagline}</p>

       <p className="hero-subtitle">
        Servers, the CLI, client helpers, and supporting libraries live side by side so you can ship your own with confidence.
       </p>

       <div className="pillar-row">
         {homePillars.map((pillar) => (
           <div key={pillar.label} className="pillar">
             <a className="pillar__label" href={pillar.href}>
               {pillar.label}
             </a>
             <p className="pillar__hint">{pillar.hint}</p>
           </div>
         ))}
       </div>

       <section className="section">
         <div className="section-header">
           <h2>Repositories at a glance</h2>
           <p>
            Every package has a home page. Select a category to jump to the docs and repo for servers, tooling, libraries,
            or auth.
           </p>
         </div>
         <div className="matrix">
           <div className="matrix__row matrix__row--header">
             <span>Category</span>
             <span>Packages</span>
             <span>Docs</span>
           </div>
           {packageMatrix.map((row) => (
             <div key={row.category} className="matrix__row">
               <div className="matrix__cell">
                 <strong>{row.category}</strong>
               </div>
               <div className="matrix__cell">
                 <ul>
                   {row.packages.map((pkg) => (
                     <li key={pkg.name}>
                       <a href={pkg.repo}>{pkg.name}</a>
                     </li>
                   ))}
                 </ul>
               </div>
               <div className="matrix__cell">
                 <a className="section-link" href={row.docs}>
                  View page →
                 </a>
               </div>
             </div>
           ))}
         </div>
       </section>

       <section className="section">
         <div className="section-header">
           <h2>Why it matters</h2>
           <p>
            The CLI and client enable{" "}
             <a className="link-inline" href="https://www.anthropic.com/engineering/advanced-tool-use">
              Anthropic recommended
             </a>{" "}
            tool use, automated testing, and embedding MCP servers inside other services. The rest of the stack provides the runtime surface those workflows execute on.
           </p>
         </div>
         <ol className="quick-steps">
           <li>Install the CLI and configure `.mcp.json`.</li>
           <li>Use the servers page to understand the transport options.</li>
           <li>Leverage the client API to call tools/prompts/resources from scripts.</li>
           <li>Reference the server libraries + OAuth pages when building or augmenting your own services.</li>
         </ol>
       </section>
     </>
   );
}
