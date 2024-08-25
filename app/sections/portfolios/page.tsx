'use client'

import {useState} from "react";
import Image from "next/image";
import { portfolioData } from "@/app/contents/data";
import "./portfolios.css";
import Link from "next/link";

function PortfolioSection() {
  const [portfolioItems, setportfolioItems] = useState('all')

  const portfolio = portfolioItems === 'all' ? portfolioData.portfolio : portfolioData.portfolio.filter((portfolio) => portfolio.category === portfolioItems)

  return (
    <section className="portfolio-section section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="portfolio">latest work</h2>
          </div>
        </div>

        {/* <!-- portfolio filter start --> */}
        <div className="portfolio-filter">
          {portfolioData.filter.map((filter) => {
            return (
          <span key={filter} className={`filter-item ${portfolioItems === filter ? 'active' : ''}`}  onClick={()=>{setportfolioItems(filter)}}>
            {filter}
          </span>

            )
          })}
        </div>
        {/* <!-- portfolio filter end --> */}

        {/* <!-- portfolio items start --> */}
        <div className="row portfolio-items">
          {portfolio.map((portfolio) => {
            return (
              <Link href={`/pages/portfolio/${portfolio.id}` } key={portfolio.description.paragraph} className="portfolio-item" >
                <div className="portfolio-item-inner">
                  <div className="portfolio-item-img">
                    <Image
                      src={portfolio.imageSrc[0]}
                      width={800}
                      height={800}
                      alt={portfolio.category}
                    />

                    <span className="view-project">View Project</span>
                  </div>
                  <p className="portfolio-item-title">
                    {portfolio.description.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        {/* <!-- portfolio items end --> */}

        
      </div>
    </section>
  );
}

export default PortfolioSection;
