import Image from "next/image";
import Link from "next/link";
import BeforeAfterSection from "@/components/BeforeAfterSection";

export interface ServiceStep {
	icon: string; // Font Awesome class, e.g. "fas fa-spray-can-sparkles"
	title: string;
	description: string;
}

export interface ServiceDetailProps {
	subtitle: string;
	heading: string;
	intro: string;
	heroImage: string;
	bandImage: string;
	steps: ServiceStep[];
	included: string[];
	benefits: string[];
	idealFor: string[];
	beforeAfter?: {
		title: string;
		description: string;
		beforeImage?: string;
		afterImage?: string;
	};
	ctaHeading: string;
}

export default function ServiceDetail({
	subtitle,
	heading,
	intro,
	heroImage,
	bandImage,
	steps,
	included,
	benefits,
	idealFor,
	beforeAfter,
	ctaHeading,
}: ServiceDetailProps) {
	return (
		<div className="no-bottom no-top" id="content">
			<div id="top"></div>

			<section className="no-top no-bottom overflow-hidden">
				<div className="container-fluid position-relative half-fluid">
					<div className="container">
						<div className="row mt-desktop-10">
							<div className="col-lg-6 position-lg-absolute right-half h-100">
								<Image
									src={heroImage}
									className="img-fluid rounded"
									alt={heading}
									width={1200}
									height={800}
								/>
							</div>
							<div className="col-lg-6">
								<div className="me-lg-3">
									<div className="py-5 mb-3 me-lg-3">
										<div
											className="subtitle id-color wow fadeInUp"
											data-wow-delay=".0s"
										>
											{subtitle}
										</div>
										<h1 className="wow fadeInUp" data-wow-delay=".2s">
											{heading}
										</h1>
										<p className="col-lg-10 wow fadeInUp" data-wow-delay=".4s">
											{intro}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-dark-2 jarallax">
				<Image
					src={bandImage}
					className="jarallax-img"
					alt={`${heading} process`}
					width={1920}
					height={1080}
				/>
				<div className="sw-overlay"></div>
				<div className="container relative z-2">
					<div className="row g-4 justify-content-center">
						<div className="col-lg-12 text-center">
							<div className="subtitle">Steps</div>
							<h2>How It Works</h2>
						</div>

						{steps.map((step, i) => (
							<div
								key={i}
								className={`col-6 col-md-3 de-step${
									i < steps.length - 1 ? " de-step-arrow" : ""
								}`}
							>
								<div className="de-step-icon bg-color">
									<i className={`${step.icon} fa-2x`}></i>
								</div>
								<h4 className="fw-bold">{step.title}</h4>
								<p>{step.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section>
				<div className="container">
					<div className="row g-4">
						<div className="col-md-4">
							<h3>What&apos;s Included</h3>
							<ul className="ul-check">
								{included.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						</div>

						<div className="col-md-4">
							<h3>Benefits</h3>
							<ul className="ul-check">
								{benefits.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						</div>

						<div className="col-md-4">
							<h3>Ideal For</h3>
							<ul className="ul-check">
								{idealFor.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{beforeAfter && (
				<BeforeAfterSection
					subtitle="Real Results"
					title={beforeAfter.title}
					description={beforeAfter.description}
					beforeImage={beforeAfter.beforeImage ?? "/images/before-after/1b.png"}
					afterImage={beforeAfter.afterImage ?? "/images/before-after/1a.png"}
					beforeAlt="Before"
					afterAlt="After"
					imageWidth={800}
					imageHeight={450}
				/>
			)}

			<section className="bg-color text-light pt-60 pb-50">
				<div className="container">
					<div className="row g-4">
						<div className="col-md-9">
							<h3 className="mb-0 fs-32">{ctaHeading}</h3>
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
