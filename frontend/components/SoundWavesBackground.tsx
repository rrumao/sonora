"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// All waves centered at y=400, with different amplitudes and phases
const wavePaths = [
  // Sine wave 1 (medium amplitude)
  "M0 400 Q 180 200 360 400 T 720 400 T 1080 400 T 1440 400",
  // Sine wave 2 (higher amplitude, phase shifted)
  "M0 400 Q 180 600 360 400 T 720 400 T 1080 400 T 1440 400",
  // Sine wave 3 (lower amplitude, different phase)
  "M0 400 Q 180 320 360 400 T 720 400 T 1080 400 T 1440 400",
];

const speeds = [16, 22, 28];

export default function SoundWavesBackground() {
  const [width, setWidth] = useState(1440);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-0 top-0 w-full h-full"
          style={{ opacity: 0.7 - i * 0.2 }}
          initial={false}
          animate={{ x: [0, -width] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: speeds[i],
            ease: "linear",
          }}
        >
          {/* Two SVGs side by side for seamless looping */}
          <svg
            width={width}
            height="800"
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 top-0"
            style={{ minWidth: width }}
          >
            <path
              d={wavePaths[i]}
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <svg
            width={width}
            height="800"
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute"
            style={{ left: width }}
          >
            <path
              d={wavePaths[i]}
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
} 