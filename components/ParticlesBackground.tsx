import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import styles from "@/styles/index.module.scss";

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
        // default settings
        background: {
          color: "#000000",
        },
        fullScreen: {
          enable: false,
          zIndex: 0,
        },
        fpsLimit: 144,

        // special effects
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

        // displayed particles
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

        // mobile view
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

        // end
      }}
    />
  );
}
