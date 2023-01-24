import React from "react";

import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import styles from "@/styles/home.module.scss";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  // https://particles.js.org/docs/classes/Options_Classes_Options.Options.html

  return (
    <Particles
      id="tsparticles"
      className={styles.particles}
      init={particlesInit}
      options={{
        background: {
          color: "#000000",
        },
        fpsLimit: 120,
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
        setResponsive: {
          pxRatio: 1,
        },
      }}
    />
  );
}
