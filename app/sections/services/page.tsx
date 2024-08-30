import React from 'react'
import './services.css'
import Effects from '@/app/components/effects/page';
import RevealText from '@/app/components/revealtext/page';

function ServicesSection() {
  return (
    <section className="service-section section" id="services">
      <Effects/>

      <div className="container">,
        <div className="row">
          <div className="section-title">
            <h2 data-heading="{ services }">What I Do</h2>
          </div>
        </div>

        <div className="service-items">
          {/* <!-- service-item start --> */}
          <div className="service-item" data-aos="zoom-in" data-aos-delay="100">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3 className="reveal-text">Responsive Website</h3>
              <RevealText text={"Engaging designs, seamless experience on any device."}/>
            </div>
          </div>
          {/* <!-- service-item end --> */}
          {/* <!-- service-item start --> */}
          <div className="service-item" data-aos="zoom-in" data-aos-delay="100">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3 className="reveal-text">Web Design</h3>
              <RevealText text={"Beautiful, functional websites that make an impact."}/>
            </div>
          </div>
          {/* <!-- service-item end --> */}
          {/* <!-- service-item start --> */}
          <div className="service-item" data-aos="zoom-in" data-aos-delay="100">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fas fa-code"></i>
              </div>
              <h3 className="reveal-text">Clean Code</h3>
               <RevealText text={" Efficient, effective, and easy-to-read code for optimal performance."}/>
            </div>
          </div>
          {/* <!-- service-item end --> */}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection