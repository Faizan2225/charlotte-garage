import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
	title: "Garage Door Repair & Installation Services | Charlotte, NC",
	description:
		"Complete garage door services in Charlotte & surrounding metro area: garage door repair, spring repair, cable repair, opener installation, door replacement & 24/7 emergency service. Call (828) 450-2416",
	keywords: [
		"garage door repair Charlotte NC",
		"garage door spring repair",
		"emergency garage door repair",
		"garage door opener installation",
		"garage door replacement Waxhaw NC",
		"garage door service Monroe NC",
	],
	openGraph: {
		title: "Garage Door Services | Charlotte Garage Door Repair",
		description:
			"Garage door repair, spring replacement, opener installation, emergency 24/7 service, and door replacement across Charlotte Metro.",
		url: "https://charlotte-garagedoorrepair.com/services",
		type: "website",
	},
	alternates: {
		canonical: "https://charlotte-garagedoorrepair.com/services",
	},
};

export const services = [
	{
		id: 1,
		title: "Garage Door Repair",
		description:
			"Fast, reliable repair for broken springs, off-track doors, worn rollers, and damaged panels. We restore safe, quiet operation to your garage door.",
		image: "/images/garage-door-repair/IMG_0068.jpg",
		delay: ".0s",
		link: "/services/garage-door-repair",
	},
	{
		id: 2,
		title: "Garage Door Installation",
		description:
			"Professional installation of durable, energy-efficient residential sectional and carriage house garage doors in custom styles and colors.",
		image: "/images/garage-door-installation/IMG_9509.jpg",
		delay: ".2s",
		link: "/services/garage-door-installation",
	},
	{
		id: 3,
		title: "Garage Door Service",
		description:
			"Comprehensive inspection, safety testing, track alignment, bolt tightening, and lubrication to extend the lifespan of your door mechanism.",
		image: "/images/garage-door-repair/IMG_0774.jpg",
		delay: ".4s",
		link: "/services/garage-door-service",
	},
	{
		id: 4,
		title: "Emergency Garage Door Repair",
		description:
			"24/7 rapid emergency dispatch for stuck doors, snapped cables, and security risks. We respond around the clock to secure your property.",
		image: "/images/spring-repair/IMG_0777.jpg",
		delay: ".6s",
		link: "/services/emergency-repair",
	},
	{
		id: 5,
		title: "Garage Door Spring Repair",
		description:
			"High-cycle torsion and extension spring replacement performed safely by trained technicians using heavy-duty steel springs.",
		image: "/images/spring-repair/IMG_0770.jpg",
		delay: ".8s",
		link: "/services/spring-repair",
	},
	{
		id: 6,
		title: "Garage Door Cable Repair",
		description:
			"Safe rethreading and replacement of frayed, snapped, or loose lifting cables to ensure balanced, smooth door movement.",
		image: "/images/cable-repair/IMG_0769.jpg",
		delay: "1s",
		link: "/services/cable-repair",
	},
	{
		id: 7,
		title: "Garage Door Opener Repair",
		description:
			"Diagnosis and repair of garage door opener motors, logic boards, strip gears, limit switches, and wall control panels.",
		image: "/images/opener-repair/IMG_0764.jpg",
		delay: "1.2s",
		link: "/services/opener-repair",
	},
	{
		id: 8,
		title: "Garage Door Replacement",
		description:
			"Complete door and track replacement to overhaul old, sagging, or structurally damaged garage doors with high-R-value modern doors.",
		image: "/images/garage-door-installation/IMG_8499.jpg",
		delay: "1.4s",
		link: "/services/garage-door-replacement",
	},
];

export default function ServicesPage() {
	return (
		<div className="no-bottom no-top" id="content">
			<section className="text-light jarallax relative">
				<Image
					src="/images/hero/hero-1.jpg"
					className="jarallax-img"
					alt="Garage Door Repair Services in Charlotte NC"
					width={1920}
					height={1080}
				/>
				<div className="sw-overlay op-6"></div>
				<div className="center-y relative text-center">
					<div className="container">
						<div className="row">
							<div className="col-md-12 text-center">
								<h1>Our Garage Door Services</h1>
								<p className="lead">Fast 24/7 Emergency Repairs, Spring Replacement, Openers & Installation</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-dark-2">
				<div className="container">
					<div className="row g-4 justify-content-center mb-4">
						<div className="col-lg-8 text-center">
							<div className="subtitle">What We Offer</div>
							<h2>Professional Garage Door Repair &amp; Service in Charlotte, NC</h2>
							<p>
								From 24/7 emergency spring repair and cable replacement to smart opener installation and full door replacements, <a href={siteConfig.gmbUrl} target="_blank" rel="noopener noreferrer" className="text-light-link">{siteConfig.name}</a> is your trusted local specialist across Charlotte, Waxhaw, Monroe, Matthews, and surrounding communities.
							</p>
						</div>
					</div>

					<div className="row g-4">
						{services.map((service) => (
							<div key={service.id} className="col-lg-6 col-sm-12">
								<div className="hover rounded-1 overflow-hidden relative text-light text-center">
									<div
										style={{ position: "relative", width: "100%", height: 400 }}
									>
										<Image
											src={service.image}
											alt={service.title}
											fill
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
									<div className="abs bg-blur z-2 top-0 w-100 h-100 hover-op-1"></div>
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
		</div>
	);
}
