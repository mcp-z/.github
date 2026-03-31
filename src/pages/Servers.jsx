import { useState } from "react";
import { clientConfigOrder, clientConfigFile, servers } from "@/lib/content";

const transportModes = ["stdio", "http"];

// Build config for a single server based on client type and transport
const buildServerConfig = (server, client, transport) => {
  if (transport === "http") {
    switch (client) {
      case "Claude Code":
        return { type: "http", url: `http://localhost:${server.httpPort}` };
      case "Claude Desktop":
        return { command: "npx", args: ["-y", server.localPackage, "--port", String(server.httpPort)] };
      case "VS Code Copilot":
        return { type: "http", url: `http://localhost:${server.httpPort}` };
      case "Gemini CLI":
        return { httpUrl: `http://localhost:${server.httpPort}` };
      case "OpenCode":
        return { type: "local", url: `http://localhost:${server.httpPort}` };
      case "Codex":
        return null;
      default:
        return null;
    }
  }

  // stdio
  switch (client) {
    case "Claude Code":
      return { command: "npx", args: ["-y", server.localPackage] };
    case "Claude Desktop":
      return { command: "npx", args: ["-y", server.localPackage] };
    case "VS Code Copilot":
      return { command: "npx", args: ["-y", server.localPackage] };
    case "Gemini CLI":
      return { command: "npx", args: ["-y", server.localPackage] };
    case "OpenCode":
      return { type: "local", command: ["npx", "-y", server.localPackage] };
    case "Codex":
      return null;
    default:
      return null;
  }
};

// Build full config string
const buildFullConfig = (selectedServers, client, transport) => {
  const enabledServers = servers.filter((s) => selectedServers[s.id]);

  if (client === "Codex") {
    return enabledServers
      .map((server) => {
        if (transport === "http") {
          return `[mcp_servers.${server.id}]\nurl = "http://localhost:${server.httpPort}"`;
        }
        return `[mcp_servers.${server.id}]\ncommand = "npx"\nargs = ["-y", "${server.localPackage}"]`;
      })
      .join("\n\n");
  }

  const serverConfigs = {};
  for (const server of enabledServers) {
    serverConfigs[server.id] = buildServerConfig(server, client, transport);
  }

  let wrapper;
  switch (client) {
    case "VS Code Copilot":
      wrapper = { servers: serverConfigs };
      break;
    case "OpenCode":
      wrapper = { $schema: "https://opencode.ai/config.json", mcp: serverConfigs };
      break;
    default:
      wrapper = { mcpServers: serverConfigs };
  }

  return JSON.stringify(wrapper, null, 2);
};

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error("Clipboard copy failed", error);
  }
};

export default function Servers() {
  const [activeClient, setActiveClient] = useState(clientConfigOrder[0]);
  const [transport, setTransport] = useState("stdio");
  const [selectedServers, setSelectedServers] = useState(
    servers.reduce((acc, server) => {
      acc[server.id] = true;
      return acc;
    }, {})
  );

  const toggleServer = (serverId) => {
    setSelectedServers((prev) => ({
      ...prev,
      [serverId]: !prev[serverId],
    }));
  };

  const configOutput = buildFullConfig(selectedServers, activeClient, transport);
  const hasSelectedServers = Object.values(selectedServers).some(Boolean);

  return (
    <>
      <h2>Servers</h2>
      <div className="server-list">
        {servers.map((server) => (
          <div key={server.id} className="server-item">
            <div className="server-item__header">
              <a href={server.repo} className="server-item__name">{server.name}</a>
            </div>
            <p className="server-item__description">{server.description}</p>
            <p className="server-item__links">
              <a href={server.repo}>GitHub</a>
              {" · "}
              <a href={server.readme}>Setup guide</a>
            </p>
            <div className="server-item__badges">
              <span className="server-badge">stdio*</span>
              <span className="server-badge">http*</span>
            </div>
          </div>
        ))}
      </div>
      <p className="server-note">* requires your own app credentials, see setup guide</p>

      <h2>Config</h2>

      <div className="config-row">
        <span className="config-label">Client</span>
        <div className="server-tabs" role="tablist">
          {clientConfigOrder.map((client) => (
            <button
              key={client}
              type="button"
              role="tab"
              aria-selected={activeClient === client}
              className={`server-tab${activeClient === client ? " server-tab--active" : ""}`}
              onClick={() => setActiveClient(client)}
            >
              {client}
            </button>
          ))}
        </div>
      </div>

      <div className="config-row">
        <span className="config-label">Servers</span>
        <div className="server-toggles">
          {servers.map((server) => (
            <button
              key={server.id}
              type="button"
              className={`server-toggle${selectedServers[server.id] ? " server-toggle--active" : ""}`}
              onClick={() => toggleServer(server.id)}
              aria-pressed={selectedServers[server.id]}
            >
              {server.id}
            </button>
          ))}
        </div>
      </div>

      <div className="config-row">
        <span className="config-label">Transport</span>
        <select
          className="transport-select"
          value={transport}
          onChange={(e) => setTransport(e.target.value)}
        >
          {transportModes.map((mode) => (
            <option key={mode} value={mode}>
              {mode}
            </option>
          ))}
        </select>
      </div>

      <div className="code-block">
        <div className="code-block__header">
          <span className="code-block__title">{clientConfigFile[activeClient]}</span>
          <button
            type="button"
            className="code-block__copy"
            onClick={() => copyToClipboard(configOutput)}
            aria-label="Copy config"
            title="Copy"
            disabled={!hasSelectedServers}
          >
            ⧉
          </button>
        </div>
        <pre>
          <code>{hasSelectedServers ? configOutput : "// Select at least one server"}</code>
        </pre>
      </div>
    </>
  );
}
