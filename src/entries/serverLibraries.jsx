import React from "react";
import ReactDOM from "react-dom/client";
import SiteLayout from "@/components/SiteLayout";
import ServerLibraries from "@/pages/ServerLibraries";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SiteLayout title="Server libraries">
      <ServerLibraries />
    </SiteLayout>
  </React.StrictMode>
);
