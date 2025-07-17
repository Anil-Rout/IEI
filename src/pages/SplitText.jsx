import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";


gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

let hasAnimatedOnce = false; // Persistent across rerenders

const SplitText = ({
  text,
  className = "",
  delay = 350,
  duration = 0.6,
  ease = "elastic.out(1,0.3)",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
  style = {}
}) => {
  const ref = useRef(null);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current || !text || hasAnimatedOnce) return;

    document.fonts.ready.then(() => {
      hasAnimatedOnce = true; // Lock animation

      const el = ref.current;
      const absoluteLines = splitType === "lines";
      if (absoluteLines) el.style.position = "relative";

      let splitter;
      try {
        splitter = new GSAPSplitText(el, {
          type: splitType,
          absolute: absoluteLines,
          linesClass: "split-line",
        });
      } catch (error) {
        console.error("Failed to create SplitText:", error);
        return;
      }

      let targets;
      switch (splitType) {
        case "lines": targets = splitter.lines; break;
        case "words": targets = splitter.words; break;
        case "chars": targets = splitter.chars; break;
        default: targets = splitter.chars;
      }

      if (!targets || targets.length === 0) {
        console.warn("No targets found for SplitText animation");
        splitter.revert();
        return;
      }

      targets.forEach((t) => {
        t.style.willChange = "transform, opacity";
      });

      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? (marginMatch[2] || "px") : "px";
      const sign = marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}` : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
          once: true,
          id: "splitText-once",
          onToggle: (self) => {
            scrollTriggerRef.current = self;
          },
        },
        smoothChildTiming: true,
        onComplete: () => {
          gsap.set(targets, {
            ...to,
            clearProps: "willChange",
            immediateRender: true,
          });
          onLetterAnimationComplete?.();
        },
      });

      tl.set(targets, { ...from, immediateRender: false, force3D: true });
      tl.to(targets, {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        force3D: true,
      });
    });
  }, []);

  return (
    <p
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        ...style,
        textAlign,
        overflow: "hidden",
        display: "inline-block",
        whiteSpace: "normal",
        wordWrap: "break-word",
        fontSize: "inherit",
      }}
    >
      {text}
    </p>
  );
};

export default SplitText;