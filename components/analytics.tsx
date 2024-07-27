"use client";

import { GoogleAnalytics } from "nextjs-google-analytics";

export default function AnalyticsComponent() {
  // https://search.google.com/search-console
  // https://analytics.google.com/

  return (
    <GoogleAnalytics
      trackPageViews
      gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string}
    />
  );
}
