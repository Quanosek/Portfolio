import localFont from 'next/font/local'

export const Nexa = localFont({
  src: [
    {
      path: '../fonts/Nexa-Light.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/Nexa-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Nexa-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
})

export const GentiumPlus = localFont({
  src: [
    {
      path: '../fonts/GentiumPlus-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
})
