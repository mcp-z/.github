import React from "react";
import ReactDOM from "react-dom/client";
import SiteLayout from "@/components/SiteLayout";
import Privacy from "@/pages/Privacy";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SiteLayout title="Privacy Policy">
      <Privacy />
    </SiteLayout>
  </React.StrictMode>
);
