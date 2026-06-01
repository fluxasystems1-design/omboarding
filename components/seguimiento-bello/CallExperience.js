"use client";

import { CallNav } from "./CallNav";

export function CallExperience({ children }) {
  return (
    <>
      <CallNav />
      {children}
    </>
  );
}
