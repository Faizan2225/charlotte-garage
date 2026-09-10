"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export default function ExtraWrap() {
	return (
		<>
			<div id="extra-wrap" className="text-light">
				<div id="btn-close">
					<span></span>
					<span></span>
				</div>

				<div id="extra-content">
					<Image
						src="/logo.png"
						className="w-150px"
						alt="Charlotte Garage Door Repair Logo"
						width={150}
						height={100}
					/>

					<div className="spacer-30-line"></div>

					<h5>Our Services</h5>
					<ul className="ul-check">
						<li>
							<Link href="/services/garage-door-repair">
								Garage Door Repair
							</Link>
						</li>
						<li>
							<Link href="/services/garage-door-installation">
								Garage Door Installation
							</Link>
						</li>
						<li>
							<Link href="/services/emergency-repair">
								Emergency Repair (24/7)
							</Link>
						</li>
						<li>
							<Link href="/services/spring-repair">
								Spring Repair &amp; Replacement
							</Link>
						</li>
						<li>
							<Link href="/services/opener-repair">
								Opener Repair &amp; Installation
							</Link>
						</li>
					</ul>

					<div className="spacer-30-line"></div>

					<h5>Contact Us</h5>
					<div>
						<i className="icofont-clock-time me-2 op-5"></i>{siteConfig.hours}
					</div>
					<div>
						<i className="icofont-location-pin me-2 op-5"></i>{siteConfig.addressFull}
					</div>
					<div>
						<i className="icofont-phone me-2 op-5"></i>{siteConfig.phoneDisplay}
					</div>
					<div>
						<i className="icofont-envelope me-2 op-5"></i>
						{siteConfig.email}
					</div>

					<div className="spacer-30-line"></div>

					<h5>About Us</h5>
					<p>
						At <a href={siteConfig.gmbUrl} target="_blank" rel="noopener noreferrer" className="text-light-link">{siteConfig.name}</a>, we are dedicated to providing fast, reliable 24/7 garage door repair and installation across Charlotte and surrounding communities. Led by industry expert {siteConfig.owner} with 7 years of experience.
					</p>

					<div className="social-icons">
						<Link href="#">
							<i className="fa-brands fa-facebook-f"></i>
						</Link>
						<Link href="#">
							<i className="fa-brands fa-x-twitter"></i>
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
			</div>

			<Link href="#" id="back-to-top"></Link>
		</>
	);
}
