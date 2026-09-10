"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
	return (
		<footer className="text-light">
			<div className="container">
				<div className="row g-4">
					<div className="col-lg-4">
						<Image
							src="/logo.png"
							className="w-150px mb-4"
							alt="Charlotte Garage Door Repair"
							width={150}
							height={100}
						/>
						<p>
							<a href={siteConfig.gmbUrl} target="_blank" rel="noopener noreferrer" className="text-light-link">{siteConfig.name}</a> is Charlotte&apos;s trusted local garage door company, providing fast 24/7 emergency garage door repair, spring replacement, cable repair, opener installation, and complete maintenance.
						</p>
						<div className="social-icons mb-sm-30">
							<Link href="#">
								<i className="fa-brands fa-facebook-f"></i>
							</Link>
							<Link href="#">
								<i className="fa-brands fa-instagram"></i>
							</Link>
							<Link href="#">
								<i className="fa-brands fa-youtube"></i>
							</Link>
							<Link href="#">
								<i className="fa-brands fa-whatsapp"></i>
							</Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<h4>Our Services</h4>
						<ul style={{ paddingLeft: "0px" }} className="ul-style-2">
							<li>
								<Link href="/services/garage-door-repair">
									Garage Door Repair
								</Link>
							</li>
							<li>
								<Link href="/services/garage-door-installation">Garage Door Installation</Link>
							</li>
							<li>
								<Link href="/services/garage-door-service">Garage Door Service</Link>
							</li>
							<li>
								<Link href="/services/emergency-repair">Emergency Repair (24/7)</Link>
							</li>
							<li>
								<Link href="/services/spring-repair">
									Spring Repair &amp; Replacement
								</Link>
							</li>
							<li>
								<Link href="/services/opener-repair">Opener Repair &amp; Installation</Link>
							</li>
							<li>
								<Link href="/services/garage-door-maintenance">Garage Door Maintenance</Link>
							</li>
						</ul>
					</div>

					<div className="col-lg-4 col-sm-6">
						<h4>Contact Us</h4>
						<div className="widget">
							<div className="widget-content">
								<div className="d-flex mb-3">
									<i
										style={{ margin: "auto 0px" }}
										className="icofont-clock-time me-2 id-color"
									></i>
									{siteConfig.hours}
								</div>
								<div className="d-flex mb-3">
									<i
										style={{ margin: "auto 0px" }}
										className="icofont-phone me-2 id-color"
									></i>
									<a href={siteConfig.phoneHref} className="text-light">{siteConfig.phoneDisplay}</a>
								</div>
								<div className="d-flex mb-3">
									<i
										style={{ margin: "auto 0px" }}
										className="icofont-envelope me-2 id-color"
									></i>
									<a href={`mailto:${siteConfig.email}`} className="text-light">{siteConfig.email}</a>
								</div>
								<div className="d-flex mb-3">
									<i
										style={{ margin: "auto 0px" }}
										className="icofont-location-pin me-2 id-color"
									></i>
									<span>
										{siteConfig.address.street},
										<br />
										{siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="subfooter">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="de-flex">
								<div className="de-flex-col">
									&copy; {new Date().getFullYear()} - <a href={siteConfig.gmbUrl} target="_blank" rel="noopener noreferrer" className="text-light-link">{siteConfig.name}</a> | Charlotte Metro Area
								</div>
								<div className="de-flex-col">
									<strong>
										Built by{" "}
										<a
											href="https://businessupscalersllc.com/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-light-link"
										>
											Upscalers
										</a>
									</strong>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
