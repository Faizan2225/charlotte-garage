import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogData";

export const metadata: Metadata = {
	title: "Garage Door Blog | Tips & Maintenance Guides",
	description:
		"Expert insights on garage door repair, spring replacement, opener selection, emergency troubleshooting, and maintenance in Charlotte, NC.",
	keywords: [
		"garage door blog Charlotte NC",
		"garage door spring repair guide",
		"opener installation tips",
		"garage door maintenance checklist",
		"emergency garage door repair",
	],
	openGraph: {
		title: "Garage Door Blog | Charlotte Garage Door Repair",
		description:
			"Expert insights and guides on garage door repair, spring safety, and opener installations. Serving Charlotte Metro.",
		url: "https://charlotte-garagedoorrepair.com/blog",
		type: "website",
		images: [
			{
				url: "/images/opener-repair/IMG_0764.jpg",
				width: 1200,
				height: 630,
				alt: "Garage Door Blog",
			},
		],
	},
	alternates: {
		canonical: "https://charlotte-garagedoorrepair.com/blog",
	},
};

// Get unique categories from blog posts
const categories = [...new Set(blogPosts.map((post) => post.category))];

export default function BlogPage() {
	// Sort posts by date (newest first)
	const sortedPosts = [...blogPosts].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	return (
		<div className="no-bottom no-top" id="content">
			<div id="top"></div>

			{/* Hero Section */}
			<section className="jarallax text-light relative">
				<Image
					src="/images/hero/hero-2.jpg"
					className="jarallax-img"
					alt="Charlotte Garage Door Repair Blog"
					width={1920}
					height={1080}
				/>
				<div className="sw-overlay op-6"></div>
				<div className="container relative z-2">
					<div className="row justify-content-center">
						<div className="col-lg-8 text-center py-5">
							<div className="spacer-double"></div>
							<div className="subtitle id-color wow fadeInUp">
								Expert Tips &amp; Guides
							</div>
							<h1 className="wow fadeInUp" data-wow-delay=".2s">
								Garage Door Blog
							</h1>
							<p className="lead wow fadeInUp" data-wow-delay=".4s">
								Discover expert tips and guides on garage door repair, spring safety, opener installation, and preventative maintenance across Charlotte, NC.
							</p>
							<div className="spacer-double"></div>
						</div>
					</div>
				</div>
			</section>

			{/* Categories Section */}
			<section className="bg-dark-2 pt-4 pb-4">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10">
							<div className="d-flex flex-wrap justify-content-center gap-3">
								<span className="fw-bold text-light me-2 d-flex align-items-center">
									Categories:
								</span>
								{categories.map((category) => (
									<span key={category} className="badge bg-color px-3 py-2 fs-14">
										{category}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Blog Grid Section */}
			<section className="bg-dark">
				<div className="container">
					<div className="row g-4 justify-content-center mb-4">
						<div className="col-lg-8 text-center">
							<div className="subtitle">Knowledge Base</div>
							<h2>All Articles</h2>
							<p>
								Explore our expert guides on garage door maintenance, safety, and repair troubleshooting.
							</p>
						</div>
					</div>

					<div className="row g-4">
						{sortedPosts.map((post, index) => (
							<div key={post.slug} className="col-lg-4 col-md-6">
								<Link
									href={`/blog/${post.slug}`}
									className="text-decoration-none"
								>
									<div
										className="de-box-a wow fadeInUp"
										data-wow-delay={`${index * 0.1}s`}
										style={{
											background: "rgba(255, 255, 255, 0.03)",
											borderRadius: "10px",
											overflow: "hidden",
											height: "100%",
										}}
									>
										<div
											className="blog-image-wrapper"
											style={{
												position: "relative",
												width: "100%",
												height: 220,
												overflow: "hidden",
											}}
										>
											<Image
												src={post.imageUrl}
												alt={post.title}
												fill
												style={{
													objectFit: "cover",
													transition: "transform 0.3s ease",
												}}
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											/>
											<div className="abs top-0 start-0 m-3">
												<span className="badge bg-color px-3 py-2">
													{post.category}
												</span>
											</div>
										</div>
										<div className="p-4">
											<div className="d-flex justify-content-between mb-3">
												<span className="text-light opacity-50 fs-14">
													{post.date}
												</span>
												<span className="text-light opacity-50 fs-14">
													{post.author}
												</span>
											</div>
											<h4 className="text-light mb-3" style={{ lineHeight: 1.4 }}>
												{post.title}
											</h4>
											<p
												className="text-light opacity-75 mb-3"
												style={{ fontSize: "15px" }}
											>
												{post.excerpt.length > 120
													? `${post.excerpt.substring(0, 120)}...`
													: post.excerpt}
											</p>
											<span className="id-color fw-bold">
												Read More <i className="fa fa-arrow-right ms-2"></i>
											</span>
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Internal Linking SEO Section */}
			<section className="bg-dark-2">
				<div className="container">
					<div className="row g-4 justify-content-center mb-4">
						<div className="col-lg-8 text-center">
							<div className="subtitle">Our Services</div>
							<h2>Explore Our Garage Door Services</h2>
							<p>
								From spring repair to new door installations, we offer complete garage door services across Charlotte Metro.
							</p>
						</div>
					</div>

					<div className="row g-4">
						<div className="col-lg-4 col-md-6">
							<Link href="/services/garage-door-repair" className="text-decoration-none">
								<div
									className="de-box text-center p-4"
									style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "10px" }}
								>
									<i className="fa fa-wrench id-color fs-40 mb-3"></i>
									<h4 className="text-light">Garage Door Repair</h4>
									<p className="text-light opacity-75 mb-0">
										Fast fix for springs, cables &amp; tracks
									</p>
								</div>
							</Link>
						</div>
						<div className="col-lg-4 col-md-6">
							<Link
								href="/services/spring-repair"
								className="text-decoration-none"
							>
								<div
									className="de-box text-center p-4"
									style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "10px" }}
								>
									<i className="fa fa-cogs id-color fs-40 mb-3"></i>
									<h4 className="text-light">Spring Repair</h4>
									<p className="text-light opacity-75 mb-0">
										High-cycle torsion spring replacement
									</p>
								</div>
							</Link>
						</div>
						<div className="col-lg-4 col-md-6">
							<Link
								href="/services/opener-installation"
								className="text-decoration-none"
							>
								<div
									className="de-box text-center p-4"
									style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "10px" }}
								>
									<i className="fa fa-wifi id-color fs-40 mb-3"></i>
									<h4 className="text-light">Opener Installation</h4>
									<p className="text-light opacity-75 mb-0">
										Smart Wi-Fi &amp; quiet belt drive openers
									</p>
								</div>
							</Link>
						</div>
						<div className="col-lg-4 col-md-6">
							<Link
								href="/services/emergency-repair"
								className="text-decoration-none"
							>
								<div
									className="de-box text-center p-4"
									style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "10px" }}
								>
									<i className="fa fa-clock id-color fs-40 mb-3"></i>
									<h4 className="text-light">Emergency Repair (24/7)</h4>
									<p className="text-light opacity-75 mb-0">
										Immediate emergency dispatch
									</p>
								</div>
							</Link>
						</div>
						<div className="col-lg-4 col-md-6">
							<Link
								href="/services/garage-door-installation"
								className="text-decoration-none"
							>
								<div
									className="de-box text-center p-4"
									style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "10px" }}
								>
									<i className="fa fa-home id-color fs-40 mb-3"></i>
									<h4 className="text-light">Door Installation</h4>
									<p className="text-light opacity-75 mb-0">
										Insulated residential door replacements
									</p>
								</div>
							</Link>
						</div>
						<div className="col-lg-4 col-md-6">
							<Link
								href="/service-areas/charlotte-nc"
								className="text-decoration-none"
							>
								<div
									className="de-box text-center p-4"
									style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "10px" }}
								>
									<i className="fa fa-map-marker-alt id-color fs-40 mb-3"></i>
									<h4 className="text-light">Charlotte, NC</h4>
									<p className="text-light opacity-75 mb-0">
										Serving Charlotte &amp; surrounding towns
									</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-color text-light pt-60 pb-50">
				<div className="container">
					<div className="row g-4 align-items-center">
						<div className="col-md-9">
							<h3 className="mb-0 fs-32">Ready to refresh your vehicle?</h3>
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
