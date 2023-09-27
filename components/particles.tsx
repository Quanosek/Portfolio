"use client";

import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { useState } from "react";

export default function ParticlesComponent() {
  const [visible, setVisible] = useState(false);

  const particlesInit = async (main: Engine) => {
    await loadFull(main).then(() => setVisible(true));
  };

  const particlesOptions = {
    background: {
      color: "#000000",
    },
    fullScreen: {
      enable: false,
      zIndex: 0,
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
        },
      },
      modes: {
        bubble: {
          opacity: 1,
          size: 3.5,
          color: {
            value: "#ccd5f9",
          },
        },
      },
    },
    particles: {
      color: {
        value: "#6e86ef",
      },
      links: {
        color: {
          value: "#6e86ef",
        },
        enable: true,
        opacity: 1,
      },
      move: {
        enable: true,
      },
      opacity: {
        value: 0.8,
      },
      number: {
        value: 120,
      },
      size: {
        value: 2,
      },
    },
    responsive: [
      {
        maxWidth: 768,
        options: {
          fpsLimit: 90,
          particles: {
            number: { limit: 50 },
          },
          interactivity: {
            events: {
              onHover: {
                enable: false,
              },
            },
          },
        },
      },
    ],
  };

  return (
    <div
      style={{
        opacity: visible ? "1" : "0",
        filter: visible ? "none" : "blur(6px)",
        transition: "0.25s opacity ease-out, 0.5s filter ease-out",
      }}
    >
      <Particles init={particlesInit} options={particlesOptions} />
    </div>
  );
}
