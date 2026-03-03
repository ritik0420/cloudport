 "use client";

 import { useState } from "react";

 type CoverflowItem = {
   id: string | number;
   title: string;
   subtitle?: string;
   description?: string;
 };

 type Props = {
   items: CoverflowItem[];
 };

 export function CoverflowCarousel({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

   const goPrev = () => {
     setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
   };

   const goNext = () => {
     setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
   };

  if (!items.length) return null;

  return (
    <div className="relative flex flex-col items-center gap-8">
      <div
        className="relative flex h-80 w-full max-w-5xl items-center justify-center overflow-visible"
        style={{ overflowX: "clip" }}
      >
        {items.map((item, index) => {
          const offset = index - activeIndex;
          const absOffset = Math.abs(offset);

          const translateX = offset * 110;
          const rotateY = offset * -30;
          const scale = 1 - absOffset * 0.1;

          const zIndex = 100 - absOffset;
          const opacity = absOffset > 3 ? 0 : 1 - absOffset * 0.2;

          return (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className="absolute top-1/2 h-64 w-[calc(100vw-3rem)] max-w-sm -translate-y-1/2 rounded-2xl border border-slate-700/90 bg-slate-950/95 p-5 text-left text-xs text-slate-100 shadow-[0_26px_80px_rgba(0,0,0,0.95)] outline-none backdrop-blur-lg transition-transform transition-opacity duration-500 ease-out will-change-transform sm:w-72"
              style={{
                transform: `translateX(${translateX}px) scale(${scale}) perspective(1200px) rotateY(${rotateY}deg)`,
                zIndex,
                opacity,
                pointerEvents: absOffset > 3 ? "none" : "auto"
              }}
            >
              {item.subtitle && (
                <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-primary-200">
                  {item.subtitle}
                </p>
              )}
              <h3 className="mb-2 text-sm font-semibold text-slate-50">
                {item.title}
              </h3>
              {item.description && (
                <p className="line-clamp-4 text-[11px] text-slate-200">
                  {item.description}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
 }

