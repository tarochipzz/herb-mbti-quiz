import React, { useEffect, useState } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  lifetime: number;
  velocityX: number;
  velocityY: number;
  rotation: number;
}

const cursorOffsetX = 750;
const cursorOffsetY = 500;
const magicalColors = [
  "#FFD700", // gold
  "#ffee90", // light yellow
  "#ebcafe", // light purple
  "#9400D3", // dark Violet
  "#f4f1de", // beige
  "#91bd75", // green
];

export const MagicDust: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticle = (x: number, y: number): Particle => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 1;
      return {
        x: x - cursorOffsetX,
        y: y - cursorOffsetY,
        size: Math.random() * 8 + 2,
        color: magicalColors[Math.floor(Math.random() * magicalColors.length)],
        lifetime: 0,
        rotation: Math.random() * 360, // Random rotation for each particle
        velocityX: Math.cos(angle) * speed,
        velocityY: Math.sin(angle) * speed,
      };
    };

    const updateParticles = () => {
      setParticles(
        (prevParticles) =>
          prevParticles
            .map((p) => ({
              ...p,
              x: p.x + p.velocityX,
              y: p.y + p.velocityY,
              lifetime: p.lifetime + 1,
              rotation: p.rotation + 5,
            }))
            .filter((p) => p.lifetime < 30) // reduced lifetime for quicker disappearance
      );
    };

    const handleMouseMove = (e: MouseEvent) => {
      const newParticles = Array.from({ length: 3 }, () =>
        createParticle(e.clientX, e.clientY)
      );
      setParticles((prevParticles) => [...prevParticles, ...newParticles]);
    };

    document.addEventListener("mousemove", handleMouseMove);
    const intervalId = setInterval(updateParticles, 16); // 60 FPS

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ position: "fixed", pointerEvents: "none", zIndex: 9999 }}>
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            opacity: 1 - p.lifetime / 30,
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        />
      ))}
    </div>
  );
};
