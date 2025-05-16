import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadAll } from "tsparticles-all";
import type { Engine } from "tsparticles-engine";

const Snowfall = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Particles engine loaded");
    await loadAll(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: {
            value: 60, // Reduced for subtlety
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: { enable: false },
          },
          size: {
            value: { min: 1, max: 2 },
            random: true,
            anim: { enable: false },
          },
          move: {
            enable: true,
            speed: 0.3, // Slower = more elegant
            direction: "bottom",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
            resize: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Snowfall;