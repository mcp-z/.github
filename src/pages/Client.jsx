import { clientValueProps, clientExamples } from "@/lib/content";

export default function Client() {
  return (
    <>
      <p className="hero">
        `@mcp-z/client` lets scripts, automation suites, and embedded services talk to MCP servers to run{" "}
        <a className="link-inline" href="https://www.anthropic.com/engineering/advanced-tool-use">
          Anthropic recommended
        </a>{" "}
        tool flows and integration tests.
      </p>

      <section className="section">
        <h2>How teams rely on it</h2>
        <ul className="client-values">
          {clientValueProps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Install & API</h2>
        <pre>
          <code>npm install --save-dev @mcp-z/client</code>
        </pre>
        <ul className="client-api-list">
          <li>`createServerRegistry(config, options?)`</li>
          <li>`registry.connect(name, options?)`</li>
          <li>`registry.searchCapabilities(query, options?)`</li>
          <li>`client.callTool(...)`, `callToolRaw`, `getPrompt`, `readResource`</li>
          <li>`listTools()`, `listResources()`, `listPrompts()`</li>
          <li>Response helpers: `.json()`, `.text()`, `.raw()`</li>
          <li>Dialect options for `servers` vs `start`, plus DCR authenticators/token stores</li>
        </ul>
      </section>

      <section className="section">
        <h2>Example</h2>
        {clientExamples.map((example) => (
          <article key={example.title} className="client-example">
            <h3>{example.title}</h3>
            <pre>
              <code>{example.snippet}</code>
            </pre>
          </article>
        ))}
      </section>

      <section className="section">
        <h2>How it fits together</h2>
        <p>
          Start with the CLI to inspect servers, then reuse the client inside scripts or services for automated tool
          use. The CLI + client combination underpins{" "}
          <a className="link-inline" href="https://www.anthropic.com/engineering/advanced-tool-use">
            Anthropic recommended
          </a>{" "}
          workflows and integration tests.
        </p>
        <p>
          For server internals, reference the <a href="/server-libraries/">server libraries</a>, and for running
          hosted MCP services, see the <a href="/servers/">server page</a>.
        </p>
      </section>
    </>
  );
}
