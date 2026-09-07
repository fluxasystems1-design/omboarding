"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function EweBikeRunway() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`ewe-runway ${inView ? "is-inview" : ""}`}
      aria-hidden
    >
      <div className="ewe-shell ewe-runway-inner ewe-runway-inner--single">
        <div className="ewe-runway-bike ewe-runway-bike--drive-in">
          <Image
            src="/imagenes/ewestore/productos/ambit-original.png"
            alt=""
            width={1394}
            height={1128}
            className="ewe-runway-img"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
