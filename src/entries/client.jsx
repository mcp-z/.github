import React from "react";
import ReactDOM from "react-dom/client";
import SiteLayout from "@/components/SiteLayout";
import Client from "@/pages/Client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SiteLayout title="Client API">
      <Client />
    </SiteLayout>
  </React.StrictMode>
);
