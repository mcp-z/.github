export const servers = [
   {
    id: "sheets",
    name: "mcp-sheets",
    repo: "https://github.com/mcp-z/mcp-sheets",
    readme: "https://github.com/mcp-z/mcp-sheets/blob/master/README.md",
    description: "Search and modify your Google sheets.",
    localPackage: "@mcp-z/mcp-sheets",
    httpPort: 8311,
   },
   {
    id: "drive",
    name: "mcp-drive",
    repo: "https://github.com/mcp-z/mcp-drive",
    readme: "https://github.com/mcp-z/mcp-drive/blob/master/README.md",
    description: "Search and move your Google drive files.",
    localPackage: "@mcp-z/mcp-drive",
    httpPort: 8312,
   },
   {
    id: "gmail",
    name: "mcp-gmail",
    repo: "https://github.com/mcp-z/mcp-gmail",
    readme: "https://github.com/mcp-z/mcp-gmail/blob/master/README.md",
    description: "Search, read, and send your Google emails.",
    localPackage: "@mcp-z/mcp-gmail",
    httpPort: 8313,
   },
   {
    id: "outlook",
    name: "mcp-outlook",
    repo: "https://github.com/mcp-z/mcp-outlook",
    readme: "https://github.com/mcp-z/mcp-outlook/blob/master/README.md",
    description: "Search, read, and send your Microsoft emails.",
    localPackage: "@mcp-z/mcp-outlook",
    httpPort: 8314,
   },
   {
    id: "pdf",
    name: "mcp-pdf",
    repo: "https://github.com/mcp-z/mcp-pdf",
    readme: "https://github.com/mcp-z/mcp-pdf/blob/master/README.md",
    description: "Generate documents, flyers, and resumes.",
    localPackage: "@mcp-z/mcp-pdf",
    httpPort: 8315,
   },
];

// Client-specific recommended configs
export const recommendedConfigs = {
   "Claude Code": JSON.stringify(
     {
      mcpServers: {
        sheets: {
          command: "npx",
          args: ["-y", "@mcp-z/mcp-sheets"],
         },
        drive: {
          command: "npx",
          args: ["-y", "@mcp-z/mcp-drive"],
         },
        outlook: {
          command: "npx",
          args: ["-y", "@mcp-z/mcp-outlook"],
          },
        gmail: {
          command: "npx",
          args: ["-y", "@mcp-z/mcp-gmail"],
          },
        pdf: {
          command: "npx",
          args: ["-y", "@mcp-z/mcp-pdf"],
         },
        },
      },
    null,
     2
   ),
   "Claude Desktop": JSON.stringify(
     {
      mcpServers: {
        sheets: {
          command: "npx",
          args: ["-y", "@mcp-z/mcp-sheets"],
         },
        drive: {
          command: "npx",
          args: ["-y", "@mcp-z/mcp-drive"],
         },
        outlook: {
          command: "npx",
          args: ["-y", "@mcp-z/mcp-outlook"],
          },
        gmail: {
          command: "npx",
          args: ["-y", "@mcp-z/mcp-gmail"],
          },
        pdf: {
          command: "npx",
          args: ["-y", "@mcp-z/mcp-pdf"],
         },
        },
      },
    null,
     2
   ),
   "VS Code Copilot": JSON.stringify(
     {
      servers: {
        sheets: {
          command: "npx",
          args: ["-y", "@mcp-z/mcp-sheets"],
         },
        drive: {
          command: "npx",
          args: ["-y", "@mcp-z/mcp-drive"],
         },
        outlook: {
          command: "npx",
          args: ["-y", "@mcp-z/mcp-outlook"],
          },
        gmail: {
          command: "npx",
          args: ["-y", "@mcp-z/mcp-gmail"],
          },
        pdf: {
          command: "npx",
          args: ["-y", "@mcp-z/mcp-pdf"],
         },
        },
      },
    null,
     2
   ),
   // Codex uses TOML, not JSON
  Codex: `[mcp_servers.sheets]
command = "npx"
args = ["-y", "@mcp-z/mcp-sheets"]

[mcp_servers.drive]
command = "npx"
args = ["-y", "@mcp-z/mcp-drive"]

[mcp_servers.outlook]
command = "npx"
args = ["-y", "@mcp-z/mcp-outlook"]

[mcp_servers.gmail]
command = "npx"
args = ["-y", "@mcp-z/mcp-gmail"]

[mcp_servers.pdf]
command = "npx"
args = ["-y", "@mcp-z/mcp-pdf"]`,
   "Gemini CLI": JSON.stringify(
     {
      mcpServers: {
        sheets: {
          command: "npx",
          args: ["-y", "@mcp-z/mcp-sheets"],
         },
        drive: {
          command: "npx",
          args: ["-y", "@mcp-z/mcp-drive"],
         },
        outlook: {
          command: "npx",
          args: ["-y", "@mcp-z/mcp-outlook"],
          },
        gmail: {
          command: "npx",
          args: ["-y", "@mcp-z/mcp-gmail"],
          },
        pdf: {
          command: "npx",
          args: ["-y", "@mcp-z/mcp-pdf"],
         },
        },
      },
    null,
     2
   ),
  OpenCode: JSON.stringify(
     {
       $schema: "https://opencode.ai/config.json",
      mcp: {
        sheets: {
          type: "local",
          command: ["npx", "-y", "@mcp-z/mcp-sheets"],
         },
        drive: {
          type: "local",
          command: ["npx", "-y", "@mcp-z/mcp-drive"],
         },
        outlook: {
          type: "local",
          command: ["npx", "-y", "@mcp-z/mcp-outlook"],
          },
        gmail: {
          type: "local",
          command: ["npx", "-y", "@mcp-z/mcp-gmail"],
          },
        pdf: {
          type: "local",
          command: ["npx", "-y", "@mcp-z/mcp-pdf"],
         },
        },
      },
    null,
     2
   ),
};

// Map client to config filename
export const clientConfigFile = {
   "Claude Code": ".mcp.json",
   "Claude Desktop": "claude_desktop_config.json",
   "VS Code Copilot": ".vscode/mcp.json",
  Codex: "~/.codex/config.toml",
   "Gemini CLI": "~/.gemini/settings.json",
  OpenCode: "opencode.json",
};

export const clientConfigOrder = ["Claude Code", "Claude Desktop", "VS Code Copilot", "Codex", "Gemini CLI", "OpenCode"];

// Legacy export for backwards compatibility
export const recommendedConfig = recommendedConfigs["Claude Desktop"];

export const navItems = [
   { label: "Servers", href: "/servers/" },
   { label: "CLI", href: "/cli/" },
   { label: "Client", href: "/client/" },
   { label: "Server libs", href: "/server-libraries/" },
   { label: "OAuth", href: "/oauth/" },
];

export const homePillars = [
   { label: "Servers", hint: "User-facing MCP servers", href: "/servers/" },
   { label: "CLI", hint: "Spawn & inspect servers", href: "/cli/" },
   { label: "Client API", hint: "Scripted tool access", href: "/client/" },
   { label: "Server foundations", hint: "Server helpers & schemas", href: "/server-libraries/" },
   { label: "OAuth toolkit", hint: "Google/Microsoft auth", href: "/oauth/" },
];

export const packageMatrix = [
   {
    category: "Servers",
    packages: [
       { name: "mcp-sheets", repo: "https://github.com/mcp-z/mcp-sheets" },
       { name: "mcp-drive", repo: "https://github.com/mcp-z/mcp-drive" },
       { name: "mcp-gmail", repo: "https://github.com/mcp-z/mcp-gmail" },
       { name: "mcp-outlook", repo: "https://github.com/mcp-z/mcp-outlook" },
       { name: "mcp-pdf", repo: "https://github.com/mcp-z/mcp-pdf" },
     ],
    docs: "/servers/",
   },
   {
    category: "CLI",
    packages: [{ name: "@mcp-z/cli", repo: "https://github.com/mcp-z/cli" }],
    docs: "/cli/",
   },
   {
    category: "Client",
    packages: [{ name: "@mcp-z/client", repo: "https://github.com/mcp-z/client" }],
    docs: "/client/",
   },
   {
    category: "Server libraries",
    packages: [
       { name: "@mcp-z/server", repo: "https://github.com/mcp-z/server" },
       { name: "@mcp-z/email", repo: "https://github.com/mcp-z/email" },
     ],
    docs: "/server-libraries/",
   },
   {
    category: "OAuth",
    packages: [
       { name: "@mcp-z/oauth", repo: "https://github.com/mcp-z/oauth" },
       { name: "@mcp-z/oauth-google", repo: "https://github.com/mcp-z/oauth-google" },
       {
        name: "@mcp-z/oauth-microsoft",
        repo: "https://github.com/mcp-z/oauth-microsoft",
       },
     ],
    docs: "/oauth/",
   },
];

export const cliCommands = [
   {
    name: "mcp-z up",
    description: "Start MCP servers from `.mcp.json` (stdio, HTTP start blocks).",
    examples: ["Local dev, HTTP start blocks."],
   },
   {
    name: "mcp-z inspect",
    description: "Inspect tools, prompts, resources, and health before writing code.",
    examples: ["Preview tool inputs, debug startup issues."],
   },
   {
    name: "mcp-z call-tool / get-prompt / read-resource",
    description: "Call or read MCP primitives with JSON args for quick experimentation.",
    examples: ["Test a tool, preview prompt output, fetch file-backed resources."],
   },
   {
    name: "mcp-z search",
    description: "Search tools, prompts, and resources by keyword across servers.",
    examples: ["Find `message send` in Gmail + Outlook in one shot."],
   },
   {
    name: "mcp-z manifest",
    description: "Generate or validate `server.json` manifests during development.",
    examples: ["Author manifests, run CI checks."],
   },
];

export const clientValueProps = [
   "Advanced tool use: programmatically launch tools/prompts/resources to support Anthropic-style workflows.",
   "Integration tests: spawn servers via `createServerRegistry`, call primitives, and inspect structured responses without CLI overhead.",
   "Nested MCP servers: host MCP servers inside other services while orchestrating dialects and start blocks.",
   "Automation: search capabilities, respond with JSON/text/raw, and plug in DCR/token stores for OAuth support.",
];

export const clientExamples = [
   {
    title: "Create a registry and call a tool",
    snippet: `import { createServerRegistry } from '@mcp-z/client';

const registry = createServerRegistry({
  todoist: { type: 'http', url: 'https://ai.todoist.net/mcp' }
});

const client = await registry.connect('todoist');
await client.callTool('add-tasks', {
  tasks: [{ content: 'Learn MCP', priority: 4 }]
});

await registry.close();`,
   },
];

export const serverLibraryHighlights = [
   {
    name: "@mcp-z/server",
    docs: "https://mcp-z.github.io/server",
    install: "npm install @mcp-z/server",
    summary:
       "Foundational helpers for parsing transports, composing middleware, serving files, and shaping schemas for MCP servers.",
    notes: [
       "Peer deps: @modelcontextprotocol/sdk, express.",
       "Helpers: registerTools, composeMiddleware, reserveFile, createFileServingRouter, createShapeSchema.",
     ],
   },
   {
    name: "@mcp-z/email",
    docs: "https://mcp-z.github.io/email",
    install: "npm install @mcp-z/email",
    summary:
       "Normalize Gmail & Outlook payloads, build shared query schemas, and extract thread content for consistent server tooling.",
    notes: ["Parsing + normalization", "Thread helpers and schema builders."],
   },
];

export const oauthHighlights = [
   {
    name: "@mcp-z/oauth",
    docs: "https://mcp-z.github.io/oauth",
    install: "npm install @mcp-z/oauth",
    summary: "Account tooling, token storage, and log sanitization for multi-account MCP servers.",
    notes: ["`npx @mcp-z/oauth init` scaffolds `.tokens/`", "Loopback and DCR helpers."],
   },
   {
    name: "@mcp-z/oauth-google",
    docs: "https://mcp-z.github.io/oauth-google",
    install: "npm install @mcp-z/oauth-google keyv",
    summary: "Google OAuth client with loopback, service-account, and DCR/PKCE flows for Gmail/Drive/Sheets.",
    notes: ["Loopback + service account examples", "DCR router helpers."],
   },
   {
    name: "@mcp-z/oauth-microsoft",
    docs: "https://mcp-z.github.io/oauth-microsoft",
    install: "npm install @mcp-z/oauth-microsoft keyv",
    summary: "Microsoft Graph OAuth client with loopback, device code, and DCR flow support.",
    notes: ["Device code for headless environments", "DCR router helpers."],
   },
];
