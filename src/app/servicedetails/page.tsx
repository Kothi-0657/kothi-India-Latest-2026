import React, { Suspense } from "react";
import ServiceDetailsPage from "../component/service/service";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServiceDetailsPage />
    </Suspense>
  );
}
