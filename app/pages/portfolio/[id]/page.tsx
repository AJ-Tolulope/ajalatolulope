"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/app/contents/data";
import "./portfolio.css";

type Params = {
  params: { id: string };
};

function PortfolioPage({ params }: Params) {
  const id = params.id;

  const portfolio = portfolioData.portfolio.filter(
    (prop) => prop.id.toString() === id
  )[0];


  // Handle undefined portfolio scenario
  return (
    <section className="portfolio-popup">
      <div className="container">
        <div className="page-directory">
          <p>home {'>'} portfolio {'>'} category</p>
        </div>
        <div className="pp-details">
        <div className="pp-details-inner">
          <div className="pp-title">
            {/* // Dynamic title */}
            <h2>{portfolio.description.title}</h2>
            <p>
              Category -{" "}
              <span className="pp-project-category">{portfolio.category}</span>
            </p>
          </div>
          <div className="pp-project-details">
            <div className="row">
              <div className="description">
                <h4>Project Brief:</h4>
                <p>{portfolio.description.paragraph}</p>
              </div>
              <div className="info">
                <h4>Project Info</h4>
                <ul>
                  <li>
                    Date - <span>{portfolio.description.year}</span>
                  </li>
                  <li>
                    Client - <span>{portfolio.description.client}</span>
                  </li>
                  <li>
                    Tools - <span>{portfolio.description.tools}</span>
                  </li>
                  <li>
                    Web -{" "}
                    <span>
                      <a href={portfolio.description.web}>
                        {portfolio.description.web}
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pp-main">
        <div className="pp-main-inner">
          {portfolio.imageSrc.map((img) => {
            
            return (
              <Image
                key={img}
                src={img}
                width={1000}
                height={1000}
                alt={"portfolio image"}
                className="pp-img"
              />
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}

export default PortfolioPage;
