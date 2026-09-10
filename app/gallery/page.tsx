import type { Metadata } from "next";
import Image from "next/image";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
	title: "Project Gallery | Charlotte Garage Door Repair",
	description:
		"View our portfolio of completed garage door repair, spring replacement, opener installation, and new door installation projects in Charlotte, NC.",
	keywords: [
		"garage door gallery Charlotte NC",
		"garage door spring repair photos",
		"garage door installation portfolio",
		"garage door replacement before and after",
	],
	openGraph: {
		title: "Our Work Gallery | Charlotte Garage Door Repair",
		description:
			"Browse our portfolio of professional garage door repairs and installations throughout Charlotte and surrounding metro areas.",
		url: "https://charlotte-garagedoorrepair.com/gallery",
		type: "website",
		images: [
			{
				url: "/logo.png",
				width: 800,
				height: 800,
				alt: "Charlotte Garage Door Repair Gallery",
			},
		],
	},
	alternates: {
		canonical: "https://charlotte-garagedoorrepair.com/gallery",
	},
};

export default function GalleryPage() {
	return (
		<div className="no-bottom no-top" id="content">
			<div id="top"></div>

			{/* Hero Section with Background Image */}
			<section
				className="no-top no-bottom jarallax text-light"
				style={{ marginTop: "120px" }}
			>
				<Image
					src="/images/IMG_0777.jpg"
					className="jarallax-img"
					alt="Gallery background"
					width={1920}
					height={1080}
				/>
				<div className="sw-overlay op-8"></div>
				<div className="container relative z-2">
					<div className="row justify-content-center">
						<div className="col-lg-8 text-center py-5">
							<div className="spacer-double"></div>
							<div className="subtitle id-color wow fadeInUp">
								Our Portfolio
							</div>
							<h1 className="wow fadeInUp" data-wow-delay=".2s">
								Project Gallery
							</h1>
							<p className="lead wow fadeInUp" data-wow-delay=".4s">
								Browse our collection of completed garage door repair, spring replacement, opener installation, and door upgrade projects across Charlotte.
							</p>
							<div className="spacer-double"></div>
						</div>
					</div>
				</div>
			</section>

			{/* Gallery Section */}
			<section className="bg-dark">
				<div className="container">
					<GalleryGrid />
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-color text-light pt-60 pb-50">
				<div className="container">
					<div className="row g-4">
						<div className="col-md-9">
							<h3 className="mb-0 fs-32">Ready to start your project?</h3>
						</div>
						<div className="col-lg-3 text-lg-end">
							<a className="btn-main fx-slide btn-line" href="/contact">
								<span>Get a Free Quote</span>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
