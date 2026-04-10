"use client";

import { useRef, useState, useCallback } from "react";

interface TiltValues {
  rotateX: number;
  rotateY: number;
  scale: number;
}

export function useTilt(maxTilt: number = 15) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltValues>({ rotateX: 0, rotateY: 0, scale: 1 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateX = (0.5 - y) * maxTilt;
      const rotateY = (x - 0.5) * maxTilt;
      setTilt({ rotateX, rotateY, scale: 1.02 });
    },
    [maxTilt]
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
  }, []);

  return { ref, tilt, handleMouseMove, handleMouseLeave };
}
