"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    vehicle: "",
    serviceLocation: "shop",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>

      <section className="bg-dark text-light relative jarallax">
        <div className="de-gradient-edge-top"></div>
        <img src="/images/hero/hero-2.jpg" className="jarallax-img" alt="Contact Charlotte Garage Door Repair" />
        <div className="sw-overlay op-6"></div>
        <div className="container relative z-2 text-center">
          <div className="row gy-4 gx-5 justify-content-center">
            <div className="col-lg-12 text-center">
              <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">
                Contact Us
              </h1>
              <p className="lead">24/7 Emergency Dispatch & Free Service Estimates</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-6">
              <div className="p-40 h-100 jarallax rounded-1 overflow-hidden">
                <img
                  src="/images/background/2.webp"
                  className="jarallax-img"
                  alt=""
                />
                <div className="sw-overlay"></div>
                <div className="gradient-edge-bottom h-80"></div>
                <div className="relative z-2">
                  <div className="subtitle">Get In Touch</div>
                  <h2 className="wow fadeInUp">
                    Request Your Free Garage Door Quote
                  </h2>

                  <p>
                    Tell us about your garage door issue or installation project — spring repair, cable replacement, opener installation, new door installation, or emergency service. We&apos;ll get back to you with a free quote as quickly as possible.
                  </p>

                  <div className="spacer-single"></div>

                  <div className="p-3 rounded-1 bg-color text-light">
                    <strong>
                      <i className="icofont-clock-time me-2"></i>24/7 Emergency Dispatch
                    </strong>
                    <br />
                    Have a garage door emergency right now? Call us directly at <strong>(828) 450-2416</strong> for immediate response across Charlotte Metro.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-40 bg-dark-2 text-light rounded-1">
                <h3>Get In Touch</h3>
                <form
                  name="contactForm"
                  id="contact_form"
                  className="relative z1000"
                  onSubmit={handleSubmit}
                >
                  <div className="field-set">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="field-set">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="form-control"
                      placeholder="Your Phone *"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="field-set">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="field-set">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="form-control"
                      placeholder="Property Address / City *"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="field-set">
                    <select
                      name="service"
                      id="service"
                      className="form-control"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      required
                    >
                      <option value="">Select a Service *</option>
                      <option value="garage-door-repair">Garage Door Repair</option>
                      <option value="garage-door-installation">Garage Door Installation</option>
                      <option value="emergency-repair">Emergency Repair (24/7)</option>
                      <option value="spring-repair">Spring Repair &amp; Replacement</option>
                      <option value="cable-repair">Cable Repair</option>
                      <option value="opener-repair">Opener Repair</option>
                      <option value="opener-installation">Opener Installation</option>
                      <option value="garage-door-replacement">Garage Door Replacement</option>
                      <option value="maintenance">Preventative Maintenance</option>
                    </select>
                  </div>

                  <div className="field-set mb20">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      placeholder="Describe your garage door issue or project details..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                  </div>

                  <div id="submit" className="mt20">
                    <input
                      type="submit"
                      id="send_message"
                      value="Request Quote"
                      className="btn-main"
                    />
                  </div>

                  <div id="success_message" className="success">
                    Your message has been sent successfully. Refresh this page
                    if you want to send more messages.
                  </div>
                  <div id="error_message" className="error">
                    Sorry there was an error sending your form.
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="spacer-double"></div>

          <div className="row g-4">
            <div className="col-lg-4">
              <h4><a href={siteConfig.gmbUrl} target="_blank" rel="noopener noreferrer" className="text-light-link">{siteConfig.name}</a></h4>
              <i className="icofont-location-pin me-2 id-color"></i>
              <span>{siteConfig.addressFull}</span>
              <br />
              <i className="icofont-phone me-2 id-color"></i>
              <span><a href={siteConfig.phoneHref} className="text-light">{siteConfig.phoneDisplay}</a></span>
              <br />
              <i className="icofont-envelope me-2 id-color"></i>
              <span><a href={`mailto:${siteConfig.email}`} className="text-light">{siteConfig.email}</a></span>
            </div>

            <div className="col-lg-4">
              <h4>Hours</h4>
              <i className="icofont-clock-time me-2 id-color"></i>
              <span>24/7 Emergency Repair</span>
              <br />
              <i className="icofont-clock-time me-2 id-color"></i>
              <span>Open 7 Days a Week</span>
            </div>

            <div className="col-lg-4">
              <h4>Service Area</h4>
              <i className="icofont-location-pin me-2 id-color"></i>
              <span>
                Serving Charlotte, Waxhaw, Monroe, Matthews, Indian Trail, Fort Mill, Indian Land, Huntersville, Mooresville, Concord, and surrounding metro communities.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
