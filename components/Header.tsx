"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		// Handle menu click functionality
		const handleMenuClick = () => {
			const header = document.querySelector("header");
			const menuBtn = document.querySelector("#menu-btn");

			if (!isMenuOpen) {
				header?.classList.add("menu-open");
				if (typeof window !== "undefined") {
					header?.style.setProperty("height", `${window.innerHeight}px`);
				}
				menuBtn?.classList.add("menu-open");
				setIsMenuOpen(true);
			} else {
				header?.classList.remove("menu-open");
				header?.style.setProperty("height", "auto");
				menuBtn?.classList.remove("menu-open");
				setIsMenuOpen(false);
			}
		};

		const menuBtn = document.querySelector("#menu-btn");
		menuBtn?.addEventListener("click", handleMenuClick);

		// Close menu when clicking on menu links
		const handleLinkClick = () => {
			const header = document.querySelector("header");
			const menuBtn = document.querySelector("#menu-btn");

			if (isMenuOpen) {
				header?.classList.remove("menu-open");
				header?.style.setProperty("height", "auto");
				menuBtn?.classList.remove("menu-open");
				setIsMenuOpen(false);
			}
		};

		const menuLinks = document.querySelectorAll("#mainmenu a");
		menuLinks.forEach((link) => {
			link.addEventListener("click", handleLinkClick);
		});

		return () => {
			menuBtn?.removeEventListener("click", handleMenuClick);
			menuLinks.forEach((link) => {
				link.removeEventListener("click", handleLinkClick);
			});
		};
	}, [isMenuOpen]);

	return (
		<header
			className="transparent"
			style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999 }}
		>
			<div id="topbar" className="bg-color text-light">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="d-flex justify-content-between xs-hide">
								<div className="d-flex">
									<div className="topbar-widget">
										<a>5604 Harkey Rd, Waxhaw, NC 28173</a>
									</div>
								</div>
								<div className="d-flex">
									<div className="topbar-widget me-5">
										<a href="tel:+18284502416">Call 24/7: (828) 450-2416</a>
									</div>
									<div className="topbar-widget">
										<a href="mailto:Charlottesgaragedoorrepairs@gmail.com">
											Message us: Charlottesgaragedoorrepairs@gmail.com
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="de-flex sm-pt10">
							<div className="de-flex-col">
								<div id="logo">
									<Link href="/">
										<Image
											className="logo-main"
											src="/logo.png"
											alt="Charlotte Garage Door Repair"
											width={50}
											height={55}
											style={{ height: "auto", maxHeight: "46px", width: "auto" }}
											priority
										/>
										<Image
											className="logo-mobile"
											src="/logo.png"
											alt="Charlotte Garage Door Repair"
											width={40}
											height={44}
											style={{ height: "auto", maxHeight: "38px", width: "auto" }}
											priority
										/>
									</Link>
								</div>
							</div>
							<div className="de-flex-col header-col-mid">
								<ul id="mainmenu">
									<li>
										<Link className="menu-item" href="/">
											Home
										</Link>
									</li>
									<li>
										<Link className="menu-item" href="/about">
											About Us
										</Link>
									</li>
									<li>
										<Link className="menu-item" href="/services">
											Services
										</Link>
										<ul className="innermenue">
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
												<Link href="/services/garage-door-service">
													Garage Door Service
												</Link>
											</li>
											<li>
												<Link href="/services/emergency-repair">
													Emergency Garage Door Repair
												</Link>
											</li>
											<li>
												<Link href="/services/spring-repair">
													Garage Door Spring Repair
												</Link>
											</li>
											<li>
												<Link href="/services/cable-repair">
													Garage Door Cable Repair
												</Link>
											</li>
											<li>
												<Link href="/services/opener-repair">
													Garage Door Opener Repair
												</Link>
											</li>
											<li>
												<Link href="/services/garage-door-replacement">
													Garage Door Replacement
												</Link>
											</li>
											<li>
												<Link href="/services/opener-installation">
													Garage Door Opener Installation
												</Link>
											</li>
											<li>
												<Link href="/services/residential-installation">
													Residential Door Installation
												</Link>
											</li>
											<li>
												<Link href="/services/garage-door-maintenance">
													Garage Door Maintenance
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<Link className="menu-item" href="#">
											Service Areas
										</Link>
										<ul className="innermenue">
											<li>
												<Link href="/service-areas/charlotte-nc">
													Charlotte, NC
												</Link>
											</li>
											<li>
												<Link href="/service-areas/waxhaw-nc">
													Waxhaw, NC
												</Link>
											</li>
											<li>
												<Link href="/service-areas/monroe-nc">
													Monroe, NC
												</Link>
											</li>
											<li>
												<Link href="/service-areas/matthews-nc">
													Matthews, NC
												</Link>
											</li>
											<li>
												<Link href="/service-areas/indian-trail-nc">
													Indian Trail, NC
												</Link>
											</li>
											<li>
												<Link href="/service-areas/fort-mill-sc">
													Fort Mill, SC
												</Link>
											</li>
											<li>
												<Link href="/service-areas/indian-land-sc">
													Indian Land, SC
												</Link>
											</li>
											<li>
												<Link href="/service-areas/huntersville-nc">
													Huntersville, NC
												</Link>
											</li>
											<li>
												<Link href="/service-areas/mooresville-nc">
													Mooresville, NC
												</Link>
											</li>
											<li>
												<Link href="/service-areas/concord-nc">
													Concord, NC
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<Link className="menu-item" href="/gallery">
											Gallery
										</Link>
									</li>
									<li>
										<Link className="menu-item" href="/blog">
											Blog
										</Link>
									</li>
									<li>
										<Link className="menu-item" href="/faqs">
											FAQs
										</Link>
									</li>
									<li>
										<Link className="menu-item" href="/contact">
											Contact Us
										</Link>
									</li>
								</ul>
							</div>
							<div className="de-flex-col">
								<div className="menu_side_area">
									<Link
										href="/contact"
										className="btn-main fx-slide hover-white"
									>
										<span>Get a Free Quote</span>
									</Link>
									<span id="menu-btn"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
