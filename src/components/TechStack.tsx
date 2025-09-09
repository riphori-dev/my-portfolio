import React from "react";
import { siBootstrap, siWordpress, siBlazor } from "simple-icons";

interface StackItem {
  name: string;
  svg: React.ReactNode;
}

const items: StackItem[] = [
  {
    name: "React",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
      </svg>
    ),
  },
  {
    name: ".NET",
    svg: (
      <div className="flex items-center justify-center w-10 h-9 text-slate-400">
        <span className="text-sm font-semibold tracking-wide">.NET</span>
      </div>
    ),
  },
  {
    name: "TailwindCSS",
    svg: (
      <svg viewBox="0 0 48 28" className="w-10 h-7 text-slate-400" fill="currentColor">
        <path d="M24 6c-4.8 0-7.8 2.4-9 7.2C16.2 10.8 18.6 9 22.2 9c6 0 6.6 4.8 10.8 4.8 3 0 5.4-2.4 6-7.2-2.4 2.4-4.8 3.6-7.2 3.6C27 10.2 26.4 6 24 6Zm-15 6C4.2 12 1.2 14.4 0 19.2 2.4 16.8 4.8 15.6 7.2 15.6c6 0 6.6 4.8 10.8 4.8 3 0 5.4-2.4 6-7.2-2.4 2.4-4.8 3.6-7.2 3.6C12 16.2 11.4 12 9 12Z" />
      </svg>
    ),
  },
  {
    name: "SQL",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v10c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 10c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </svg>
    ),
  },
  {
    name: "Blazor",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 text-slate-400" role="img" aria-label="Blazor" fill="currentColor">
        <path d={siBlazor.path} />
      </svg>
    ),
  },
  {
    name: "Bootstrap",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 text-slate-400" role="img" aria-label="Bootstrap" fill="currentColor">
        <path d={siBootstrap.path} />
      </svg>
    ),
  },
  {
    name: "WordPress",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 text-slate-400" role="img" aria-label="WordPress" fill="currentColor">
        <path d={siWordpress.path} />
      </svg>
    ),
  },
];

const TechStack: React.FC = () => {
  return (
    <section aria-label="Core tech stack" className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-12 md:gap-16 flex-wrap">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity"
              aria-label={item.name}
              title={item.name}
            >
              {item.svg}
              <span className="text-sm sm:text-base text-slate-400">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
