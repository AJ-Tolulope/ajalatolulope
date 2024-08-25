// 'use client'

// import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./hero.css";
import Effects from "@/app/components/effects/page";
// import { textData } from "@/app/contents/data"; // Assuming textData is imported correctly

function HeroSection() {
  // const [quoteText, setQuoteText] = useState("");
  // const [quoteIndex, setQuoteIndex] = useState(0);
  // const [quoteArrayIndex, setQuoteArrayIndex] = useState(0);

  // const [typeText, setTypeText] = useState("");
  // const [typeTextIndex, setTypeTextIndex] = useState(0);

  // useEffect(() => {
  //   const quoteInterval = setInterval(() => {
  //     const currentQuote = textData.quote[quoteArrayIndex];
  //     setQuoteText((prev) =>
  //       quoteIndex < currentQuote.length ? prev + currentQuote[quoteIndex] : ""
  //     );
  //     setQuoteIndex((prev) =>
  //       prev + 1 === currentQuote.length ? 0 : prev + 1
  //     );
  //     setQuoteArrayIndex((prev) =>
  //       quoteIndex + 1 === currentQuote.length
  //         ? (prev + 1) % textData.quote.length
  //         : prev
  //     );
  //   }, 200);

  //   const typeInterval = setInterval(() => {
  //     setTypeText((prev) =>
  //       typeTextIndex < textData.typingText.length
  //         ? prev + textData.typingText[typeTextIndex]
  //         : ""
  //     );
  //     setTypeTextIndex((prev) =>
  //       prev + 1 === textData.typingText.length ? 0 : prev + 1
  //     );
  //   }, 300);

  //   return () => {
  //     clearInterval(quoteInterval);
  //     clearInterval(typeInterval);
  //   };
  // }, [quoteIndex, quoteArrayIndex, typeTextIndex]);

  return (
    <section className="hero-section section" id="hero">
      <Effects />
      <div className="container">
        <div className="row full-screen justify-content-between align-items">
          <div className="hero-text" data-aos="fade-up" data-aos-delay="300">
            <p>Welcome to thewebedits</p>
            {/* <p className="typing-text">{typeText}</p> */}
            <h1>
              Where You Get Your <span>Website</span> Creatively Designed
            </h1>
            <Link href="#portfolio" className="btn">
              View Projects
            </Link>
          </div>
          <div className="hero-img" data-aos="fade-up" data-aos-delay="700">
            <div className="img-box">
              <Image
                src="/assets/progressive.svg"
                width={800}
                height={300}
                alt="profile-pic"
              />
              <div className="quotes">
                {/* <p>{quoteText}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
