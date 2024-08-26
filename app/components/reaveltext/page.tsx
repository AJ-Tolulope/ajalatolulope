'use client'

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RevealText = ({ text }: {text: string}) => {
  useEffect(() => {
    const revealTexts = document.querySelectorAll(".reveal-text");

    revealTexts.forEach((text) => {
      let splitText = text.innerHTML.split("")
        .map((char) => `<span class="letter">${char}</span>`)
        .join("");
      text.innerHTML = splitText;

      gsap.fromTo(
        text.querySelectorAll(".letter"),
        { opacity: 0.3 },
        {
          opacity: 1,
          stagger: 0.01,
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return <p className="reveal-text">{text}</p>;
};

export default RevealText;
