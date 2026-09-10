import Image from "next/image";
import Link from "next/link";
import FAQsAccordion from "@/components/FAQsAccordion";

export default function FAQsPage() {
  return (
    <div className="no-bottom no-top" id="content">
      <section className="text-light jarallax">
        <Image
          src="/images/IMG_0777.jpg"
          className="jarallax-img"
          alt="FAQs Background"
          width={1920}
          height={1080}
          priority
        />
        <div className="center-y relative text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>Frequently Asked Questions</h1>
                <p className="lead">
                  Find answers to common questions about our garage door repair and installation services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row g-4">
            <FAQsAccordion />
          </div>

          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="text-center mt-5">
                <h4>Still Have Questions?</h4>
                <p className="mb-4">
                  Can&apos;t find the answer you&apos;re looking for? Call our 24/7 team or send us a message!
                </p>
                <div className="mb-4">
                  <a href="tel:+18284502416" className="btn-main me-3">
                    Call (828) 450-2416
                  </a>
                  <Link href="/contact" className="btn-line">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
