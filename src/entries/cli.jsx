import React from "react";
import ReactDOM from "react-dom/client";
import SiteLayout from "@/components/SiteLayout";
import Cli from "@/pages/Cli";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SiteLayout title="Command line interface">
      <Cli />
    </SiteLayout>
  </React.StrictMode>
);
