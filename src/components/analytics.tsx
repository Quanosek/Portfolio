'use client'

import { GoogleAnalytics } from 'nextjs-google-analytics'

const AnalyticsComponent = () => {
  // https://analytics.google.com/

  return (
    <GoogleAnalytics
      trackPageViews
      gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string}
    />
  )
}

export default AnalyticsComponent
