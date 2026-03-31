import React from "react";
import ReactDOM from "react-dom/client";
import SiteLayout from "@/components/SiteLayout";
import OAuth from "@/pages/OAuth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SiteLayout title="OAuth tooling">
      <OAuth />
    </SiteLayout>
  </React.StrictMode>
);
