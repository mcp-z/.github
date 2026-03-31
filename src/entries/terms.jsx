import React from "react";
import ReactDOM from "react-dom/client";
import SiteLayout from "@/components/SiteLayout";
import Terms from "@/pages/Terms";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SiteLayout title="Terms of Service">
      <Terms />
    </SiteLayout>
  </React.StrictMode>
);
