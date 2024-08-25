// "use client";

import React from "react";
import "./contact.css";
import Effects from "@/app/components/effects/page";

function ContactSection() {
  return (
    <section className="contact-section section" id="contact">
      <Effects />

      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="contact">Get In Touch</h2>
          </div>
        </div>
        <div className="row">
          <div className="contact-item">
            <div className="contact-item-inner">
              <i className="fas fa-phone"></i>
              <span>Contact</span>
              <p>Whatsapp: +234 807 - 6277 - 688</p>
              <p>Phone: +234 701 - 2105 - 995</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-inner">
              <i className="fas fa-envelope"></i>
              <span>Email</span>
              <p>contactthewebedits@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-inner">
              <i className="fas fa-map-marker-alt"></i>
              <span>Location</span>
              <p>Lagos, Nigeria.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="contact-form">
            <form>
              <div className="row">
                <div className="w-50">
                  <div className="input-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input-control name"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="input-control email"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="input-control subject"
                      required
                    />
                  </div>
                </div>
                <div className="w-50">
                  <div className="input-group">
                    <textarea
                      name="message"
                      className="input-control message"
                      placeholder="Message"
                      required></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="submit-btn">
                  {/*onclick=
                   {() => {
                    sendMail();
                  }} */}
                  <button className="btn">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
