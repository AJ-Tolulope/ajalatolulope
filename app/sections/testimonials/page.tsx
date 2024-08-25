import React from "react";
import Image from "next/image";
import Effects from "@/app/components/effects/page";
import './testimonials.css'

function TestimonialSection() {
  return (
    <section className="testimonial-section section" id="testimonial">
      <Effects />

      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="testimonial">Client Speak</h2>
          </div>
        </div>
        <div className="row">
          <div className="testi-box">
            <div className="testi-slider">
              <div className="testi-slider-container">
                {/* <!-- testi item start --> */}
                <div className="testi-item">
                  <i className="fas fa-quote-left left"></i>
                  <i className="fas fa-quote-right right"></i>
                  <p className="reveal-text">
                    Aj`&apos;`s work is professionaly, creative, and impressive.
                    His portfolio website is a great example of his skills and
                    expertise.
                  </p>
                  <Image
                    width={100}
                    height={100}
                    src="/assets/testimonials/user1.jpeg"
                    alt="testimonial"
                  />
                  <span>John</span>
                </div>
                {/* <!-- testi item end --> */}

                {/* <!-- testi item start --> */}
                <div className="testi-item active">
                  <i className="fas fa-quote-left left"></i>
                  <i className="fas fa-quote-right right"></i>
                  <p className="reveal-text">
                    Talented and hardworking individual who takes great pride of
                    his work.
                  </p>
                  <Image
                    src="/assets/testimonials/user2.jpeg"
                    width={100}
                    height={100}
                    alt="testimonial"
                  />
                  <span>Mark</span>
                </div>
                {/* <!-- testi item end --> */}

                {/* <!-- testi item start --> */}
                <div className="testi-item">
                  <i className="fas fa-quote-left left"></i>
                  <i className="fas fa-quote-right right"></i>
                  <p className="reveal-text">
                    I would recommend him without hesitation to anyone in need
                    of a skilled web developer.
                  </p>
                  <Image
                    src="/assets/testimonials/user4.jpg"
                    width={100}
                    height={100}
                    alt="testimonial"
                  />
                  <span>Thomas</span>
                </div>
                {/* <!-- testi item end --> */}
              </div>
            </div>
            <div className="testi-slider-nav">
              <span className="prev">
                <i className="fas fa-angle-left"></i>
              </span>
              <span className="next">
                <i className="fas fa-angle-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
