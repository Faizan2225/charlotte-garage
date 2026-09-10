"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQsAccordionProps {
  faqs?: FAQ[];
  showHeader?: boolean;
  headerTitle?: string;
  headerSubtitle?: string;
}

export const defaultFAQs: FAQ[] = [
  {
    question: "What garage door services do you offer?",
    answer:
      "We provide complete garage door repair, garage door installation, 24/7 emergency repair, torsion & extension spring replacement, cable repair, opener repair & installation, panel replacement, and preventative maintenance tune-ups across Charlotte and surrounding areas.",
  },
  {
    question: "Do you provide 24/7 emergency garage door repair?",
    answer:
      "Yes! Garage doors can fail at inconvenient times. We offer 24/7 emergency garage door repair services so you are never stuck with an open or stuck door. Call us anytime at (828) 450-2416.",
  },
  {
    question: "How do I know if my garage door springs need replacement?",
    answer:
      "Common signs include a door that opens only a few inches before stopping, a loud pop or bang coming from the garage, visible gaps in the torsion spring coil above the door, or loose cables dangling on either side.",
  },
  {
    question: "Can I replace a garage door spring myself?",
    answer:
      "We strongly advise against DIY spring replacement. Garage door springs store high levels of mechanical tension that can cause severe injury or property damage if handled without proper tools and training.",
  },
  {
    question: "How long does a new garage door installation take?",
    answer:
      "Most standard residential garage door installations take between 3 to 5 hours to complete, including track alignment, spring winding, opener connection, and safety testing.",
  },
  {
    question: "What service areas do you cover?",
    answer:
      "We proudly service Charlotte, Waxhaw, Monroe, Matthews, Indian Trail, Fort Mill, Indian Land, Huntersville, Mooresville, Concord, and surrounding Charlotte Metro communities.",
  },
];

export default function FAQsAccordion({
  faqs = defaultFAQs,
  showHeader = true,
  headerTitle = "Frequently Asked Questions",
  headerSubtitle = "Everything You Need to Know",
}: FAQsAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {showHeader && (
        <div className="col-lg-5">
          <div className="subtitle id-color wow fadeInUp" data-wow-delay=".0s">
            {headerSubtitle}
          </div>
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            {headerTitle}
          </h2>
        </div>
      )}

      <div className={showHeader ? "col-lg-7" : "col-lg-12"}>
        <div className="accordion s2 wow fadeInUp">
          <div className="accordion-section">
            {faqs.map((faq, index) => (
              <div key={index}>
                <div
                  className={`accordion-section-title${
                    activeIndex === index ? " active" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                  style={{ cursor: "pointer" }}
                >
                  {faq.question}
                </div>
                <div
                  className="accordion-section-content"
                  id={`accordion-faq-${index}`}
                  style={{
                    display: activeIndex === index ? "block" : "none",
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
