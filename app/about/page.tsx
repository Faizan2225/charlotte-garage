import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
	title: "About Us | Charlotte Garage Door Repair",
	description:
		"Learn about Charlotte Garage Door Repair led by Jeremy Chisom with 7+ years of experience. Providing 24/7 emergency garage door repair, spring replacement, opener installation & service across Charlotte Metro.",
	keywords: [
		"about Charlotte Garage Door Repair",
		"Jeremy Chisom garage door repair",
		"local garage door company Charlotte NC",
		"experienced garage door technicians",
		"24/7 garage door service",
	],
	openGraph: {
		title: "About Charlotte Garage Door Repair",
		description:
			"Charlotte's trusted garage door experts led by Jeremy Chisom. 7+ years industry experience, 24/7 emergency service, and quality craftsmanship.",
		url: "https://charlotte-garagedoorrepair.com/about",
		type: "website",
	},
	alternates: {
		canonical: "https://charlotte-garagedoorrepair.com/about",
	},
};

export default function AboutPage() {
	return (
		<div className="no-bottom no-top" id="content">
			<section className="text-light jarallax">
				<img
					src="/images/spring-repair/IMG_0777.jpg"
					className="jarallax-img"
					alt="About Charlotte Garage Door Repair"
				/>
				<div className="center-y relative text-center">
					<div className="container">
						<div className="row">
							<div className="col-md-12 text-center">
								<h1>About Us</h1>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="container">
					<div className="row g-5 align-items-center">
						<div className="col-lg-6">
							<div className="subtitle">About <a href={siteConfig.gmbUrl} target="_blank" rel="noopener noreferrer" className="text-light-link">{siteConfig.name}</a></div>
							<h2>Charlotte&apos;s Trusted Garage Door Experts</h2>
							<p>
								<a href={siteConfig.gmbUrl} target="_blank" rel="noopener noreferrer" className="text-light-link">{siteConfig.name}</a> is led by {siteConfig.owner}, bringing over 7 years of hands-on industry experience to homeowners and businesses throughout the Charlotte Metro area. We specialize in fast garage door repair, high-cycle spring replacement, cable re-tensioning, opener installation, and full door upgrades.
							</p>
							<p>
								We understand that a broken garage door disrupts your daily schedule and compromises your home&apos;s security. That&apos;s why we provide round-the-clock 24/7 emergency repair dispatch, transparent pricing, and heavy-duty, long-lasting replacement components.
							</p>
							<p>
								<strong>Key Highlights:</strong>
								<br />
								• 7+ years of hands-on garage door industry experience
								<br />• 24/7 emergency repair response across Charlotte Metro
								<br />• High-cycle oil-tempered springs &amp; commercial hardware
							</p>
						</div>
						<div className="col-lg-6">
							<img
								src="/images/cable-repair/IMG_0769.jpg"
								className="img-fluid rounded"
								alt="Charlotte Garage Door Repair Service"
							/>
						</div>
					</div>

					<div className="spacer-double"></div>

					<div className="row g-4 text-center">
						<div className="col-lg-3 col-md-6">
							<div className="de-box">
								<i className="icofont-tools id-color fs-1"></i>
								<h4 className="mt-3">Complete Repairs</h4>
								<p>
									Springs, cables, rollers, tracks, and opener repairs under one roof.
								</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="de-box">
								<i className="icofont-clock-time id-color fs-1"></i>
								<h4 className="mt-3">24/7 Service</h4>
								<p>
									Round-the-clock emergency dispatch when your door breaks.
								</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="de-box">
								<i className="icofont-location-pin id-color fs-1"></i>
								<h4 className="mt-3">Local Service Area</h4>
								<p>
									Proudly serving Charlotte, Waxhaw, Monroe, Matthews, and Fort Mill.
								</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="de-box">
								<i className="icofont-check-circled id-color fs-1"></i>
								<h4 className="mt-3">Quality Guaranteed</h4>
								<p>
									Durable, heavy-duty parts backed by complete customer warranties.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-color text-light pt-60 pb-50">
				<div className="container">
					<div className="row g-4">
						<div className="col-md-9">
							<h3 className="mb-0 fs-32">
								Ready to experience Charlotte&apos;s trusted garage door experts?
							</h3>
						</div>
						<div className="col-lg-3 text-lg-end">
							<Link className="btn-main fx-slide btn-line" href="/contact">
								<span>Get a Free Quote</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
