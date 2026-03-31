import React from "react";
import ReactDOM from "react-dom/client";
import SiteLayout from "@/components/SiteLayout";
import Home from "@/pages/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SiteLayout title="MCP-Z documentation">
      <Home />
    </SiteLayout>
  </React.StrictMode>
);
