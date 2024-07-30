"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesOptions = {
    fpsLimit: 90,
    fullScreen: { enable: false },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
        },
      },
      modes: {
        bubble: {
          color: { value: "#ccd5f9" },
          opacity: 1,
          size: 4,
        },
      },
    },
    particles: {
      color: { value: "#6e86ef" },
      links: {
        color: { value: "#6e86ef" },
        distance: 180,
        enable: true,
      },
      move: { enable: true },
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
  };

  return (
    <div
      style={{
        opacity: init ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <Particles options={particlesOptions} />
    </div>
  );
}
