"use client";

export function StaggerItems({ items, className = "", bulletClass = "text-teal-400" }) {
  return (
    <ul className={`stagger-list mt-3 space-y-2 text-sm leading-relaxed text-zinc-300 sm:text-[15px] ${className}`.trim()}>
      {items.map((item, index) => (
        <li key={typeof item === "string" ? item : index} style={{ "--stagger-i": index }} className="flex gap-2">
          <span className={`shrink-0 ${bulletClass}`}>•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PropuestaSection({ children, className = "" }) {
  return (
    <section className={`mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 md:pb-20 ${className}`.trim()}>
      <div data-reveal>{children}</div>
    </section>
  );
}
