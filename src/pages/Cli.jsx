const quickStarts = [
   {
    title: "Stdio servers",
    description: "Declare your server executable and run `mcp-z up` to stream stdio.",
    code: `{
   "mcpServers": {
     "my-server": {
       "command": "node",
       "args": ["path/to/server.js"]
     }
   }
}`,
    },
    {
    title: "HTTP servers",
    description: "Point at a local MCP endpoint and use the CLI to inspect or start it.",
    code: `{
   "mcpServers": {
     "my-server": {
       "type": "http",
       "url": "http://localhost:3000/mcp"
     }
   }
}`,
    },
    {
    title: "HTTP + start block",
    description: "Let the CLI start HTTP servers before routing to the URL.",
    code: `{
   "mcpServers": {
     "my-server": {
       "type": "http",
       "url": "http://localhost:3000/mcp",
       "start": {
         "command": "node",
         "args": ["path/to/http-server.js"]
       }
     }
   }
}`,
    },
];

const commands = [
   {
    name: "mcp-z up",
    description: "Start configured MCP servers (stdio or HTTP) from `.mcp.json`.",
    examples: ["Local dev, HTTP start blocks."],
    },
    {
    name: "mcp-z inspect",
    description: "Inspect tools, resources, prompts, and health before writing code.",
    examples: ["Preview tool inputs, debug startup issues."],
    },
    {
    name: "mcp-z call-tool / get-prompt / read-resource",
    description: "Call or read MCP primitives without writing scripts; accepts JSON args.",
    examples: ["Test a tool, preview prompt output, fetch file-backed resources."],
    },
    {
    name: "mcp-z search",
    description: "Search tools, prompts, and resources across servers by keyword.",
    examples: ["Find `message send` in Gmail + Outlook in one shot."],
    },
    {
    name: "mcp-z manifest",
    description: "Generate or validate `server.json` manifests during development.",
    examples: ["Author manifests, run CI checks."],
    },
];

export default function Cli() {
  return (
     <>
       <p className="hero">
        `@mcp-z/cli` is the terminal entry point for launching MCP servers, querying tools, and enabling{" "}
          <a className="link-inline" href="https://www.anthropic.com/engineering/advanced-tool-use">
          Anthropic recommended
          </a>{" "}
        tool usage with the client API.
        </p>

        <section className="section">
          <h2>What CLI unlocks</h2>
          <p>
          The CLI keeps MCP servers running locally, inspects tools/prompts/resources, and lets
          developers script workflows that mirror advanced tool recommendations.
          </p>
          <ul className="cli-list">
            <li>Spin up stdio or HTTP servers with `mcp-z up`.</li>
            <li>Inspect tool outputs and health before writing automation.</li>
            <li>Call tools/prompts/resources without a script via `call-tool`, `get-prompt`, and `read-resource`.</li>
            <li>Search across servers and generate/validate manifests.</li>
          </ul>
        </section>

        <section className="section">
          <h2>Common uses</h2>
          <ul className="cli-list">
            <li>Spawn MCP servers from `.mcp.json` (stdio or HTTP).</li>
            <li>Inspect tools, resources, prompts, and health before coding.</li>
            <li>Call tools/prompts/resources directly or from scripts.</li>
            <li>Search across servers to discover capabilities.</li>
            <li>Generate and validate `server.json` manifests.</li>
          </ul>

          <h3>Install</h3>
          <pre>
            <code>npm install -g @mcp-z/cli</code>
          </pre>
        </section>

        <section className="section">
          <h2>Quick start</h2>
          <p>Define transports in `.mcp.json` and run `mcp-z up`.</p>
          <div className="cli-quickstart-grid">
            {quickStarts.map((item) => (
              <article key={item.title} className="cli-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <pre>
                  <code>{item.code}</code>
                </pre>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Commands and workflow highlights</h2>
          <div className="cli-commands">
            {commands.map((command) => (
              <article key={command.name} className="cli-command-card">
                <h3>{command.name}</h3>
                <p>{command.description}</p>
                <ul>
                  {command.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Inline usage</h2>
          <p>
          Run the CLI directly against local servers without writing `.mcp.json` by passing `inspect`/`call` options.
          </p>
          <pre>
            <code># Stdio
mcp-z inspect --run "npx -y @modelcontextprotocol/server-everything"</code>
          </pre>
          <pre>
            <code># HTTP
mcp-z inspect --url "http://localhost:3000/mcp"</code>
          </pre>
        </section>

        <section className="section">
          <h2>JSON config & start extension</h2>
          <p>Servers can be stdio or HTTP. The `start` block is our extension for HTTP transports.</p>
          <h3>Stdio</h3>
          <pre>
            <code>{`{
   "command": "node",
   "args": ["server.js"],
   "env": { "LOG_LEVEL": "info" }
}`}</code>
          </pre>
          <h3>HTTP</h3>
          <pre>
            <code>{`{
   "type": "http",
   "url": "http://localhost:3000/mcp",
   "headers": { "Authorization": "Bearer token" }
}`}</code>
          </pre>
          <h3>HTTP with start block</h3>
          <pre>
            <code>{`{
   "type": "http",
   "url": "http://localhost:3000/mcp",
   "start": { "command": "node", "args": ["path/to/http-server.js"] }
}`}</code>
          </pre>
          <p className="cli-note">
          The `start` dialect tells the CLI how to launch HTTP servers before connecting, so your automation flows stay
          simple.
          </p>
        </section>

        <section className="section">
          <h2>Role in the stack</h2>
          <p>
          Use the CLI to start or inspect servers, then move to the client API for scripted tool/prompt/resource
          calls. Together they power{" "}
            <a className="link-inline" href="https://www.anthropic.com/engineering/advanced-tool-use">
            Anthropic recommended
            </a>{" "}
          tool use, automation testing, and embedded MCP workflows.
          </p>
          <p>
          The servers, server libraries, and OAuth tooling provide the runtime surface that the CLI/client pair
          orchestrates.
          </p>
        </section>

        <section className="section">
          <h2>Requirements</h2>
          <p>Node.js ≥ 24.</p>
        </section>
      </>
   );
}
