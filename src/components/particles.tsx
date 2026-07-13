'use client'

import { useMemo, useState, useEffect } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const ParticlesComponent = () => {
  const [init, setInit] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setInit(true))
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', onChange)

    return () => mediaQuery.removeEventListener('change', onChange)
  }, [])

  const particlesOptions = useMemo(
    () => ({
      fpsLimit: 50,
      fullScreen: { enable: false },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      interactivity: {
        events: {
          onHover: {
            enable: !prefersReducedMotion,
            mode: 'bubble',
          },
        },
        modes: {
          bubble: {
            color: { value: '#ccd5f9' },
            opacity: 1,
            size: 4,
          },
        },
      },
      particles: {
        color: { value: '#6e86ef' },
        links: {
          color: { value: '#6e86ef' },
          distance: 180,
          enable: true,
        },
        move: { enable: !prefersReducedMotion },
        number: { value: 100 },
        opacity: { value: 0.5 },
        size: { value: 2.5 },
      },
      responsive: [
        {
          maxWidth: 768,
          options: {
            interactivity: {
              events: { onHover: { enable: false } },
            },
            particles: {
              links: { distance: 150 },
              number: { value: 40 },
            },
          },
        },
      ],
    }),
    [prefersReducedMotion]
  )

  return (
    <div
      style={{
        opacity: init ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      <Particles options={particlesOptions} />
    </div>
  )
}

export default ParticlesComponent
