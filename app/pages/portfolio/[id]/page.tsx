"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { portfolioData } from "@/app/contents/data";
import "./portfolio.css";

function PortfolioPage() {
  const pathname = usePathname();

  const id = pathname.split("/")[-1];

  const portfolio = portfolioData.portfolio.filter(
    (prop) => prop.id.toString() === id
  )[0];

  const [imageCount, setImageCount] = useState(0);
  const maxImageCount = portfolio ? portfolio?.imageSrc.length : 0;

  // Increment image count
  const incrementImageCount = () => {
    setImageCount((prevCount) =>
      prevCount < maxImageCount - 1 ? prevCount + 1 : 0
    );
  };

  // Decrement image count
  const decrementImageCount = () => {
    setImageCount((prevCount) =>
      prevCount > 0 ? prevCount - 1 : maxImageCount - 1
    );
  };

  // Handle undefined portfolio scenario
  portfolio ? (
    <section className="portfolio-popup">
      <div className="pp-details">
        <div className="pp-details-inner">
          <div className="pp-title">
            {/* <h2>{portfolio?.description.title}</h2> Dynamic title */}
            <p>
              Category -{" "}
              <span className="pp-project-category">{portfolio?.category}</span>
            </p>
          </div>
          <div className="pp-project-details"></div>
        </div>
      </div>

      <div className="separator"></div>

      <div className="pp-main">
        <div className="pp-main-inner">
          <div className="pp-project-details-btn">
            Project Details
            <i className="fas fa-plus"></i>
          </div>
          <div className="pp-close">
            <i className="fas fa-times"></i>
          </div>
          <Image
            src={portfolio?.imageSrc[imageCount]}
            width={800}
            height={800}
            alt={portfolio?.category}
            className="pp-img"
          />
          <p>
            Screenshots{" "}
            <span className="pp-counter">{`${
              imageCount + 1
            } / ${maxImageCount}`}</span>
          </p>
        </div>

        {/* <!-- pp navigation --> */}
        <div className="pp-prev" onClick={decrementImageCount}>
          <i className="fas fa-play"></i>
        </div>
        <div className="pp-next" onClick={incrementImageCount}>
          <i className="fas fa-play"></i>
        </div>
      </div>
    </section>
  ) : (
    <section className="notfound">
      <div className="container">
        <p>Portfolio not found</p>
      </div>
    </section>
  );
  

  
}

export default PortfolioPage;
