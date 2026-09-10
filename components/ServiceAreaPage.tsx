import { services } from "@/app/services/page";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import React from "react";

export interface ServiceAreaPageProps {
	/** e.g. "Garage Door Repair" */
	service: string;
	/** e.g. "Charlotte, NC" */
	location?: string;
	/** Short subtitle shown above the heading */
	subtitle: React.ReactNode;
	/** Intro paragraph */
	intro: React.ReactNode;
	/** Three bullet highlights */
	highlights: { title: string; text: string }[];
	/** Hero/side image */
	image: string;
	/** Optional CTA heading */
	ctaHeading?: string;
}

export default function ServiceAreaPage({
	service,
	location = "Charlotte, NC",
	subtitle,
	intro,
	highlights,
	image,
	ctaHeading,
}: ServiceAreaPageProps) {
	return (
		<div className="no-bottom no-top" id="content">
			<section>
				<div className="container mt-5 mb-3">
					<div className="row g-5 align-items-center">
						<div className="col-lg-6">
							<div className="subtitle">{subtitle}</div>
							<h2>
								{service} in {location}
							</h2>
							<p>{intro}</p>
							<ul className="list-unstyled">
								{highlights.map((h, i) => (
									<li
										key={i}
										className={`align-items-start${
											i < highlights.length - 1 ? " mb-3" : ""
										}`}
									>
										<span className="me-3 text-danger fs-5">•</span>
										<span>
											<strong>{h.title}</strong> – {h.text}
										</span>
									</li>
								))}
							</ul>
						</div>
						<div className="col-lg-6">
							<img
								src={image}
								className="img-fluid rounded"
								alt={`${service} in ${location}`}
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-dark-2">
				<div className="container">
					<div className="row g-4 justify-content-center mb-4">
						<div className="col-lg-8 text-center">
							<div className="subtitle">What We Offer</div>
							<h2>Complete Garage Door Services in {location}</h2>
							<p>
								From emergency spring repair and cable replacement to opener installation and full garage door replacements, <a href={siteConfig.gmbUrl} target="_blank" rel="noopener noreferrer" className="text-light-link">{siteConfig.name}</a> provides fast, reliable 24/7 service for homeowners and businesses in {location} and across the Charlotte Metro area.
							</p>
						</div>
					</div>

					<div className="row g-4">
						{services.map((s) => (
							<div key={s.id} className="col-lg-6 col-sm-12">
								<div className="hover rounded-1 overflow-hidden relative text-light text-center">
									<div
										style={{ position: "relative", width: "100%", height: 400 }}
									>
										<Image
											src={s.image}
											alt={s.title}
											fill
											className="hover-scale-1-1"
											style={{ objectFit: "cover" }}
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
										/>
									</div>
									<div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
										<div className="mb-3">{s.description}</div>
										<Link className="btn-main fx-slide" href={s.link}>
											<span>View Details</span>
										</Link>
									</div>
									<h3 className="abs fs-32 lh-1 p-4 top-0 start-0">0{s.id}</h3>
									<div className="abs bg-blur z-2 top-0 w-100 h-100 hover-op-1"></div>
									<div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
										<h4 className="mb-3">{s.title}</h4>
									</div>
									<div className="gradient-edge-bottom color abs w-100 h-40 bottom-0"></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="bg-dark text-light">
				<div className="container relative z-1">
					<div className="row g-4 justify-content-center">
						<div className="col-lg-6 text-center">
							<div className="subtitle id-color">Trusted &amp; Local</div>
							<h2>Why {location} Residents Choose Us</h2>
							<p>
								With 7 years of industry experience, {siteConfig.owner} and our skilled team deliver precision workmanship, transparent pricing, and 24/7 fast emergency dispatch.
							</p>
						</div>
					</div>

					<div className="row g-4">
						<div className="col-lg-3 col-md-6">
							<div className="bg-dark-2 p-40 h-100 rounded-1">
								<div className="relative wow fadeInUp">
									<h4>7+ Years Experience</h4>
									<p className="mb-0">Expert garage door specialists</p>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="bg-dark-2 p-40 h-100 rounded-1">
								<div className="relative wow fadeInUp">
									<h4>24/7 Emergency Service</h4>
									<p className="mb-0">Fast response when you need it</p>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="bg-dark-2 p-40 h-100 rounded-1">
								<div className="relative wow fadeInUp">
									<h4>Upfront Pricing</h4>
									<p className="mb-0">Honest quotes with no hidden fees</p>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="bg-dark-2 p-40 h-100 rounded-1">
								<div className="relative wow fadeInUp">
									<h4>Quality Guaranteed</h4>
									<p className="mb-0">Durable parts &amp; guaranteed work</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-color text-light pt-60 pb-50">
				<div className="container">
					<div className="row g-4">
						<div className="col-md-9">
							<h3 className="mb-0 fs-32">
								{ctaHeading ??
									`Book your ${service.toLowerCase()} in ${location} today.`}
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
