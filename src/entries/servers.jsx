import React from "react";
import ReactDOM from "react-dom/client";
import SiteLayout from "@/components/SiteLayout";
import Servers from "@/pages/Servers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SiteLayout title="MCP servers">
      <Servers />
    </SiteLayout>
  </React.StrictMode>
);
