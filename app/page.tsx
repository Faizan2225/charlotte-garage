import FAQsAccordion from "@/components/FAQsAccordion";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import { services } from "@/app/services/page";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
	title: "Charlotte Garage Door Repair | 24/7 Emergency Service",
	description:
		"Charlotte Garage Door Repair - Fast 24/7 emergency garage door repair, spring replacement, opener installation & maintenance in Charlotte, Waxhaw, Monroe, Matthews & surrounding metro areas.",
	keywords: [
		"garage door repair Charlotte NC",
		"24/7 emergency garage door repair",
		"garage door spring repair",
		"garage door opener installation",
		"garage door replacement Charlotte",
		"garage door service Waxhaw",
	],
	openGraph: {
		title:
			"Charlotte Garage Door Repair | 24/7 Emergency Service",
		description:
			"Fast, professional garage door repair, spring replacement, opener installation, and emergency service across Charlotte Metro.",
		url: "https://charlotte-garagedoorrepair.com",
		type: "website",
		images: [
			{
				url: "/logo.png",
				width: 480,
				height: 320,
				alt: "Charlotte Garage Door Repair",
			},
		],
	},
	alternates: {
		canonical: "https://charlotte-garagedoorrepair.com",
	},
};

export default function Home() {
	return (
		<div className="no-bottom no-top" id="content">
			<div id="top"></div>

			{/* Hero Section */}
			<section className="text-light no-top no-bottom relative overflow-hidden">
				<div className="mh-700">
					<div className="abs w-100 bottom-0 z-2 pb-4">
						<div className="container">
							<div className="row g-4 justify-content-between align-items-bottom">
								<div className="col-lg-8">
									<div className="sw-text-wrapper">
										<div className="subtitle wow fadeInUp">
											24/7 Garage Door Repair Experts in Charlotte Metro
										</div>
										<h1 className="fs-72 fs-xs-10vw text-uppercase wow fadeInUp">
											<a href={siteConfig.gmbUrl} target="_blank" rel="noopener noreferrer" className="text-light-link">Charlotte <span className="id-color">Garage Door Repair</span></a>
										</h1>
									</div>
								</div>

								<div className="col-lg-3">
									<div className="spacer-double"></div>
									<p className="mb-0 wow fadeInUp" data-wow-delay=".2s">
										At <a href={siteConfig.gmbUrl} target="_blank" rel="noopener noreferrer" className="text-light-link">{siteConfig.name}</a>, we provide fast, professional 24/7 garage door repair, torsion spring replacement, cable repair, smart opener installation, and complete door replacements across Charlotte and surrounding communities.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="swiper">
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<div
									className="swiper-inner"
									data-bgimage="url(/images/hero/hero-1.jpg)"
								>
									<div className="gradient-edge-top h-20 op-5"></div>
									<div className="gradient-edge-bottom h-50"></div>
									<div className="sw-overlay op-6"></div>
								</div>
							</div>

							<div className="swiper-slide">
								<div
									className="swiper-inner"
									data-bgimage="url(/images/hero/hero-2.jpg)"
								>
									<div className="gradient-edge-top h-20 op-5"></div>
									<div className="gradient-edge-bottom h-50"></div>
									<div className="sw-overlay op-6"></div>
								</div>
							</div>

							<div className="swiper-slide">
								<div
									className="swiper-inner"
									data-bgimage="url(/images/hero/hero-3.jpg)"
								>
									<div className="gradient-edge-top h-20 op-5"></div>
									<div className="gradient-edge-bottom h-50"></div>
									<div className="sw-overlay op-6"></div>
								</div>
							</div>
						</div>

						<div className="swiper-button-prev"></div>
						<div className="swiper-button-next"></div>
					</div>
				</div>
			</section>

			{/* Emergency Service Highlight */}
			<section className="bg-color text-light pt-40 pb-40">
				<div className="container">
					<div className="row g-4 align-items-center justify-content-between">
						<div className="col-lg-8">
							<h3 className="mb-1 fs-28">
								<i className="icofont-clock-time me-2"></i>24/7 Emergency Service Available
							</h3>
							<p className="mb-0">
								Stuck with a broken spring or off-track garage door? We offer rapid 24/7 emergency repair dispatch throughout Charlotte, Waxhaw, Monroe, Matthews, and Fort Mill.
							</p>
						</div>
						<div className="col-lg-3 text-lg-end">
							<Link className="btn-main fx-slide btn-line" href="/contact">
								<span>Request Emergency Repair</span>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="pb-0">
				<div className="container relative z-1">
					<div className="row g-4 gx-5 align-items-center">
						<div className="col-lg-6">
							<div className="row g-4">
								<div className="col-sm-6">
									<div className="row g-4">
										<div className="col-lg-12">
											<div className="rounded-1 overflow-hidden wow zoomIn">
												<Image
													src="/images/opener-repair/IMG_0764.jpg"
													className="w-100 wow scaleIn"
													alt="Garage Door Spring Repair"
													width={400}
													height={500}
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="row g-4">
										<div className="spacer-single sm-hide"></div>
										<div className="col-lg-12">
											<div
												className="rounded-1 overflow-hidden wow zoomIn"
												data-wow-delay=".3s"
											>
												<Image
													src="/images/garage-door-repair/IMG_0068.jpg"
													className="w-100 wow scaleIn"
													alt="Garage Door Opener Repair"
													width={400}
													height={500}
													data-wow-delay=".3s"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="subtitle wow fadeInUp" data-wow-delay=".2s">
								About Us
							</div>
							<h2 className="wow fadeInUp" data-wow-delay=".4s">
								Charlotte&apos;s Trusted Local Garage Door Specialists
							</h2>
							<p className="wow fadeInUp" data-wow-delay=".6s">
								<a href={siteConfig.gmbUrl} target="_blank" rel="noopener noreferrer" className="text-light-link">{siteConfig.name}</a> is led by {siteConfig.owner}, bringing over 7 years of industry expertise to homes and businesses across the Charlotte Metro area. We specialize in torsion spring repairs, snapped cables, opener installations, and full door replacements.
							</p>
							<Link
								className="btn-main fx-slide wow fadeInUp"
								href="/about"
								data-wow-delay=".6s"
							>
								<span>Read More</span>
							</Link>
						</div>
					</div>

					<div className="spacer-double"></div>

					{/* Stats Section */}
					<div className="row g-4">
						<div className="col-md-3 col-6">
							<div
								className="de_count text-center wow fadeInRight"
								data-wow-delay=".0s"
							>
								<i className="id-color fs-40 d-inline-block mb-3 icofont-tools"></i>
								<h3 className="fs-40 mb-0 lh-1-1">
									<span className="timer" data-to="5000" data-speed="3000">
										5000
									</span>
									+
								</h3>
								Doors Serviced
							</div>
						</div>

						<div className="col-md-3 col-6">
							<div
								className="de_count text-center wow fadeInRight"
								data-wow-delay=".2s"
							>
								<i className="id-color fs-40 d-inline-block mb-3 icofont-thumbs-up"></i>
								<h3 className="fs-40 mb-0 lh-1-1">
									<span className="timer" data-to="4500" data-speed="3000">
										4500
									</span>
									+
								</h3>
								Happy Customers
							</div>
						</div>

						<div className="col-md-3 col-6">
							<div
								className="de_count text-center wow fadeInRight"
								data-wow-delay=".4s"
							>
								<i className="id-color fs-40 d-inline-block mb-3 icofont-users-alt-3"></i>
								<h3 className="fs-40 mb-0 lh-1-1">
									<span className="timer" data-to="100" data-speed="3000">
										100
									</span>
									%
								</h3>
								Satisfaction
							</div>
						</div>

						<div className="col-md-3 col-6">
							<div
								className="de_count text-center wow fadeInRight"
								data-wow-delay=".6s"
							>
								<i className="id-color fs-40 d-inline-block mb-3 icofont-badge"></i>
								<h3 className="fs-40 mb-0 lh-1-1">
									<span className="timer" data-to="7" data-speed="3000">
										7
									</span>
									+
								</h3>
								Years Experience
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Parallax Image Section */}
			<section className="pb-80 jarallax" aria-label="section">
				<Image
					src="/images/spring-repair/IMG_0777.jpg"
					className="jarallax-img"
					alt="Garage Door Installation"
					width={1920}
					height={1080}
				/>
				<div className="gradient-edge-top"></div>
				<div className="sw-overlay"></div>
				<div className="container relative z-2">
					<div className="row g-4 justify-content-center">
						<div className="col-lg-10">
							<Image
								src="/images/cable-repair/IMG_0769.jpg"
								className="w-100 rounded-1"
								alt="Residential Garage Door"
								width={1200}
								height={600}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="bg-dark-2">
				<div className="container">
					<div className="row g-4 justify-content-center mb-2">
						<div className="col-lg-6">
							<div className="text-center">
								<div className="subtitle">Welcome to <a href={siteConfig.gmbUrl} target="_blank" rel="noopener noreferrer" className="text-light-link">{siteConfig.name}</a></div>
								<h2>Professional Garage Door Services</h2>
								<p>
									From emergency spring and cable repairs to smart opener installation and full door replacements, <a href={siteConfig.gmbUrl} target="_blank" rel="noopener noreferrer" className="text-light-link">{siteConfig.name}</a> delivers fast, reliable service across Charlotte, NC.
								</p>
							</div>
						</div>
					</div>

					<div className="row g-4">
						{services.map((service) => (
							<div key={service.id} className="col-lg-6 col-sm-6">
								<div
									className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight"
									data-wow-delay={service.delay}
								>
									<div
										style={{ position: "relative", width: "100%", height: 300 }}
									>
										<Image
											src={service.image}
											alt={service.title}
											fill
											priority={false}
											className="hover-scale-1-1"
											style={{ objectFit: "cover" }}
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
										/>
									</div>
									<div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
										<div className="mb-3">{service.description}</div>
										<Link className="btn-main fx-slide" href={service.link}>
											<span>View Details</span>
										</Link>
									</div>
									<h3 className="abs fs-32 lh-1 p-4 top-0 start-0">
										0{service.id}
									</h3>
									<div className="abs bg-blur z-2 top-0 hover-op-1"></div>
									<div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
										<h4 className="mb-3">{service.title}</h4>
									</div>
									<div className="gradient-edge-bottom color abs w-100 h-40 bottom-0"></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Before & After Section */}
			<BeforeAfterSection
				subtitle="Real Results"
				title="Before & After: Smooth, Safe Operation"
				description="See the difference professional garage door repair and installation make — from rusted, off-track, or noisy doors to quiet, balanced, and insulated door systems."
				beforeImage="/images/opener-repair/IMG_0764.jpg"
				afterImage="/images/cable-repair/IMG_0769.jpg"
				beforeAlt="Before Repair"
				afterAlt="After Repair"
				imageWidth={800}
				imageHeight={450}
			/>

			<section className="bg-color text-light pt-60 pb-50">
				<div className="container">
					<div className="row g-4">
						<div className="col-md-9">
							<h3 className="mb-0 fs-32">
								Need garage door repair in Charlotte? Call (828) 450-2416!
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

			<section className="bg-dark text-light">
				<div className="container relative z-1">
					<div className="row g-4 justify-content-center">
						<div className="col-lg-6 text-center">
							<div className="subtitle id-color">Trusted &amp; Dependable</div>
							<h2>Why Choose <a href={siteConfig.gmbUrl} target="_blank" rel="noopener noreferrer" className="text-light-link">{siteConfig.name}</a></h2>
							<p>
								We prioritize home security, transparent pricing, and fast emergency response for families and businesses across Charlotte and surrounding communities.
							</p>
						</div>
					</div>

					<div className="row g-4">
						<div className="col-lg-3 col-md-6">
							<div className="bg-dark-2 p-40 h-100 rounded-1">
								<div className="relative wow fadeInUp">
									<h4>7+ Years Experience</h4>
									<p className="mb-0">Expert garage door technicians</p>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="bg-dark-2 p-40 h-100 rounded-1">
								<div className="relative wow fadeInUp">
									<h4>24/7 Emergency Service</h4>
									<p className="mb-0">Round-the-clock emergency dispatch</p>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="bg-dark-2 p-40 h-100 rounded-1">
								<div className="relative wow fadeInUp">
									<h4>Transparent Pricing</h4>
									<p className="mb-0">Fair, upfront quotes every time</p>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="bg-dark-2 p-40 h-100 rounded-1">
								<div className="relative wow fadeInUp">
									<h4>Guaranteed Workmanship</h4>
									<p className="mb-0">Durable parts &amp; backed service</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="relative jarallax mh-500" aria-label="section">
				<div className="gradient-edge-top"></div>
				<div className="gradient-edge-bottom"></div>
				<Image
					src="/images/spring-repair/IMG_0770.jpg"
					className="jarallax-img"
					alt=""
					width={1000}
					height={1000}
				/>
			</section>

			<div className="no-bottom no-top" id="content">
				<section>
					<div className="container">
						<div className="row g-4">
							<FAQsAccordion />
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
