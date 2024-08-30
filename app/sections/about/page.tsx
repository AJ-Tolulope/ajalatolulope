"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./about.css";
import Effects from "@/app/components/effects/page";
import RevealText from "@/app/components/revealtext/page";
import { textData } from "@/app/contents/data";

function AboutSection() {
  const [tabs, setTab] = useState("education");

  const { about } = textData;

  return (
    <section className="about-section section" id="about">
      <Effects />

      <div className="container">
          <div className="section-title">
            <h2 data-heading="{ main info }"> a little about me </h2>
          </div>
        
        <div className="row">
          <div className="about-img">
            <div className="img-box" data-aos="fade-up" data-aos-delay="300">
              <Image
                src="/assets/proud_coder.svg"
                width={800}
                height={300}
                alt="Proud Coder"
              />
            </div>

            <div className="social-links">
              <Link href="https://www.twitter.com/tolex_tolulope">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="https://www.instagram.com/thewebedit">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="https://www.github.com/Linkj-tolulope">
                <i className="fab fa-github"></i>
              </Link>
              <Link href="https://wa.link/3dnckb">
                <i className="fab fa-whatsapp"></i>
              </Link>
            </div>
          </div>
          <div className="about-info">
            <RevealText text={about.main} />
          </div>
        </div>

        <div className="row">
          <div className="about-tabs">
            <span
              className={`tab-item ${tabs === "education" ? "active" : ""}`}
              onClick={() => setTab("education")}>
              education
            </span>
            <span
              className={`tab-item ${tabs === "tools" ? "active" : ""}`}
              onClick={() => setTab("tools")}>
              tools
            </span>
          </div>
        </div>

        <div className="row">
          <div
            className={`education tab-content ${
              tabs === "education" ? "active" : ""
            }`}>
            <div className="row">
              <div className="timeline">
                <div className="row">
                  {about.education.map((education, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-item-inner">
                        <i className="fas fa-graduation-cap icon"></i>
                        <h3>{education.h}</h3>
                        <h4>thewebedits</h4>
                        <RevealText text={education.p} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className={`tools tab-content ${tabs === "tools" ? "active" : ""}`}>
            <div className="row">
              <div className="timeline">
                <div className="row">
                  {about.tools.map((tools, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-item-inner">
                        <i className="fas fa-briefcase icon"></i>
                        <h3>{tools.h}</h3>
                        <h4>thewebedits</h4>
                        <RevealText text={tools.p} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- tools end--> */}
      </div>
    </section>
  );
}

export default AboutSection;
