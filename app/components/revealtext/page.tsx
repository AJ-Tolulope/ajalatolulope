'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type RevealTextProps = {
  text: string;
};

const RevealText: React.FC<RevealTextProps> = ({ text }) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = textRef.current;

    if (el) {
      // Split text into individual letters wrapped in spans
      const splitText = text
        .split("")
        .map((char) => {
          return `<span class="letter">${char}</span>`;
        })
        .join("");

      el.innerHTML = splitText;

      // Apply GSAP animation to each letter
      gsap.fromTo(
        el.querySelectorAll(".letter"),
        { opacity: 0.3 },
        {
          opacity: 1,
          stagger: 0.01,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      // Clean up animations on component unmount
      if (el) {
        gsap.killTweensOf(el.querySelectorAll('.letter'));
      }
    };
  }, [text]); // Re-run effect if text or animationDelay changes

  return <p ref={textRef} className="reveal-text">{text}</p>;
};

export default RevealText;
