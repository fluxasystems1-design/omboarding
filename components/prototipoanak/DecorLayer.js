"use client";

import { useId } from "react";

function OrganicFlower({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="currentColor" aria-hidden>
      <ellipse cx="60" cy="28" rx="22" ry="30" opacity="0.95" />
      <ellipse cx="88" cy="48" rx="22" ry="30" transform="rotate(72 88 48)" opacity="0.92" />
      <ellipse cx="76" cy="84" rx="22" ry="30" transform="rotate(144 76 84)" opacity="0.9" />
      <ellipse cx="44" cy="84" rx="22" ry="30" transform="rotate(216 44 84)" opacity="0.88" />
      <ellipse cx="32" cy="48" rx="22" ry="30" transform="rotate(288 32 48)" opacity="0.9" />
      <circle cx="60" cy="58" r="14" fill="rgba(255,255,255,0.4)" />
    </svg>
  );
}

function ScallopShell({ className = "" }) {
  const gradId = useId();

  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden>
      <path
        d="M40 8c18 10 28 24 28 40 0 8-4 16-12 22-6 5-12 8-16 8s-10-3-16-8C16 64 12 56 12 48c0-16 10-30 28-40z"
        fill={`url(#${gradId})`}
      />
      <path
        d="M40 16c12 7 19 17 19 28 0 5-2 10-6 14M40 16c-12 7-19 17-19 28 0 5 2 10 6 14M40 16v44"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id={gradId} x1="20" y1="10" x2="60" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f5d5e0" />
          <stop offset="0.5" stopColor="#e8b8c8" />
          <stop offset="1" stopColor="#f0dce6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function DecorLayer() {
  return (
    <div className="anak-decor" aria-hidden>
      <OrganicFlower className="anak-decor__organic anak-decor__organic--1" />
      <OrganicFlower className="anak-decor__organic anak-decor__organic--2" />
      <OrganicFlower className="anak-decor__organic anak-decor__organic--3" />
      <OrganicFlower className="anak-decor__organic anak-decor__organic--4" />
      <OrganicFlower className="anak-decor__organic anak-decor__organic--5" />
      <OrganicFlower className="anak-decor__organic anak-decor__organic--6" />
      <ScallopShell className="anak-decor__shell anak-decor__shell--1" />
      <ScallopShell className="anak-decor__shell anak-decor__shell--2" />
      <ScallopShell className="anak-decor__shell anak-decor__shell--3" />
    </div>
  );
}
