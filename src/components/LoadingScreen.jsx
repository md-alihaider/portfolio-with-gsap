import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LoadingScreen = () => {
  const container = useRef(null);
  const counterRef = useRef(null);

  useGSAP(
    () => {
      const counter = { value: 1 };

      const tl = gsap.timeline();

      // Counter: 01 → 100
      tl.to(counter, {
        value: 100,
        duration: 2.2,
        ease: "power2.inOut",

        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.floor(counter.value)
              .toString()
              .padStart(2, "0");
          }
        },
      });

      // Small pause at 100
      tl.to(
        {},
        {
          duration: 0.2,
        },
      );

      // Move loading screen away
      tl.to(container.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
      });
    },
    {
      scope: container,
    },
  );

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[9999] bg-(--bg-primary) text-(--text-primary)"
    >
      <div className="flex h-full flex-col justify-between px-6 py-6 md:px-10 md:py-8 lg:px-16">
        {/* Top */}
        <div className="flex items-start justify-between">
          <span className="text-xl font-medium tracking-tight">AH</span>

          <span className="text-sm tracking-[0.2em] text-(--text-muted)">
            2026
          </span>
        </div>

        {/* Counter */}
        <div className="flex items-center justify-center">
          <span
            ref={counterRef}
            className="text-[clamp(5rem,11vw,10rem)] font-medium leading-none tracking-[-0.05em]"
          >
            01
          </span>
        </div>

        {/* Bottom */}
        <div>
          <div className="mb-6 flex items-end justify-between">
            {/* Identity */}
            <div>
              <p className="text-base font-medium tracking-[0.15em] text-(--text-primary)">
                ALI HAIDER
              </p>

              <p className="mt-2 text-sm tracking-[0.15em] text-(--text-secondary)">
                FULL-STACK DEVELOPER
              </p>
            </div>

            {/* Loading */}
            <span className="text-sm tracking-[0.2em] text-(--text-secondary)">
              LOADING...
            </span>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-(--border)" />

          {/* Bottom Label */}
          <div className="mt-4">
            <span className="text-xs tracking-[0.2em] text-(--text-muted)">
              DIGITAL EXPERIENCES
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
