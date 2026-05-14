"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function FallingPattern({ className = "" }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        size: Math.random() * 6 + 2,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 6 + 4,
      }))
    );
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {items.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-yellow-400 opacity-20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: -20,
          }}
          animate={{ y: "110vh", opacity: [0.2, 0.4, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
