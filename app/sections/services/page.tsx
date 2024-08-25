import React from 'react'
import './services.css'
import Effects from '@/app/components/effects/page';

function ServicesSection() {
  return (
    <section className="service-section section" id="services">
      <Effects/>

      <div className="container">,
        <div className="row">
          <div className="section-title">
            <h2 data-heading="services">What I Do</h2>
          </div>
        </div>

        <div className="service-items grid grid-col-3">
          {/* <!-- service-item start --> */}
          <div className="service-item" data-aos="zoom-in" data-aos-delay="100">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3 className="reveal-text">Responsive Website</h3>
              <p className="reveal-text">
                Engaging designs, seamless experience on any device.
              </p>
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
              <p className="reveal-text">
                Beautiful, functional websites that make an impact.
              </p>
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
              <p className="reveal-text">
                Efficient, effective, and easy-to-read code for optimal
                performance.
              </p>
            </div>
          </div>
          {/* <!-- service-item end --> */}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection