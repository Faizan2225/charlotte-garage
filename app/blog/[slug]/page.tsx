import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogData";
import { notFound } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";

type Props = {
	params: Promise<{ slug: string }>;
};

// Generate static params for all blog posts
export async function generateStaticParams() {
	return blogPosts.map((post) => ({
		slug: post.slug,
	}));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const post = blogPosts.find((p) => p.slug === slug);

	if (!post) {
		return {
			title: "Post Not Found",
		};
	}

	return {
		title: post.title,
		description: post.excerpt,
		keywords: post.keywords,
		authors: [{ name: post.author }],
		openGraph: {
			title: post.title,
			description: post.excerpt,
			url: `https://charlottegaragedoorrepairs.com/blog/${post.slug}`,
			type: "article",
			publishedTime: post.date,
			authors: [post.author],
			images: [
				{
					url: post.imageUrl,
					width: 1200,
					height: 630,
					alt: post.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.excerpt,
			images: [post.imageUrl],
		},
		alternates: {
			canonical: `https://charlottegaragedoorrepairs.com/blog/${post.slug}`,
		},
	};
}

// Get related posts based on category
function getRelatedPosts(
	currentSlug: string,
	category: string,
	limit: number = 3,
) {
	return blogPosts
		.filter((post) => post.slug !== currentSlug && post.category === category)
		.slice(0, limit);
}

export default async function BlogPostPage({ params }: Props) {
	const { slug } = await params;
	const post = blogPosts.find((p) => p.slug === slug);

	if (!post) {
		notFound();
	}

	const relatedPosts = getRelatedPosts(post.slug, post.category);

	// JSON-LD structured data for SEO
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.title,
		description: post.excerpt,
		image: `https://charlottegaragedoorrepairs.com${post.imageUrl}`,
		datePublished: post.date,
		author: {
			"@type": "Organization",
			name: post.author,
		},
		publisher: {
			"@type": "Organization",
			name: "Charlotte Garage Door Repair",
			logo: {
				"@type": "ImageObject",
				url: "https://charlottegaragedoorrepairs.com/logo.png",
			},
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `https://charlottegaragedoorrepairs.com/blog/${post.slug}`,
		},
		keywords: post.keywords.join(", "),
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<div className="no-bottom no-top" id="content">
				<div id="top"></div>

				{/* Hero Section */}
				<section className="jarallax text-light relative">
					<Image
						src={post.imageUrl}
						className="jarallax-img"
						alt={post.title}
						width={1920}
						height={1080}
					/>
					<div className="sw-overlay op-6"></div>
					<div className="container relative z-2">
						<div className="row justify-content-center">
							<div className="col-lg-10 text-center py-5">
								<div className="spacer-double"></div>
								<div className="d-flex justify-content-center gap-3 mb-3">
									<span className="badge bg-color px-3 py-2 fs-14">
										{post.category}
									</span>
									<span className="text-light opacity-75 d-flex align-items-center">
										{post.date}
									</span>
								</div>
								<h1 className="wow fadeInUp" data-wow-delay=".2s">
									{post.title}
								</h1>
								<p className="lead wow fadeInUp" data-wow-delay=".4s">
									{post.excerpt}
								</p>
								<div className="mt-3">
									<span className="text-light opacity-75">
										By {post.author}
									</span>
								</div>
								<div className="spacer-double"></div>
							</div>
						</div>
					</div>
				</section>

				{/* Breadcrumb
				<section className="bg-dark-2 pt-3 pb-3">
					<div className="container">
						<nav aria-label="breadcrumb">
							<ol
								className="breadcrumb mb-0"
								style={{ background: "transparent" }}
							>
								<li className="breadcrumb-item">
									<Link href="/" className="text-light opacity-75">
										Home
									</Link>
								</li>
								<li className="breadcrumb-item">
									<Link href="/blog" className="text-light opacity-75">
										Blog
									</Link>
								</li>
								<li
									className="breadcrumb-item active id-color"
									aria-current="page"
								>
									{post.category}
								</li>
							</ol>
						</nav>
					</div>
				</section> */}

				{/* Article Content */}
				<section className="bg-dark">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-8">
								{/* Featured Image */}
								<div
									className="mb-5 rounded-1 overflow-hidden"
									style={{ position: "relative", width: "100%", height: 450 }}
								>
									<Image
										src={post.imageUrl}
										alt={post.title}
										fill
										style={{ objectFit: "cover" }}
										sizes="(max-width: 768px) 100vw, 800px"
										priority
									/>
								</div>

								{/* Article Content */}
								<article
									className="blog-content text-light"
									style={{
										fontSize: "17px",
										lineHeight: 1.8,
									}}
								>
									<div
										dangerouslySetInnerHTML={{ __html: post.content }}
										className="blog-article-content"
									/>
								</article>

								{/* Keywords Tags */}
								<div className="mt-5 pt-4 border-top border-secondary">
									<h5 className="text-light mb-3">Topics Covered:</h5>
									<div className="d-flex flex-wrap gap-2">
										{post.keywords.map((keyword) => (
											<span
												key={keyword}
												className="badge bg-dark-2 px-3 py-2"
												style={{ fontSize: "13px" }}
											>
												{keyword}
											</span>
										))}
									</div>
								</div>

								{/* Author Box */}
								<div
									className="mt-5 p-4 rounded-1"
									style={{ background: "rgba(255, 255, 255, 0.03)" }}
								>
									<div className="row align-items-center">
										<div className="col-auto">
											<div
												className="rounded-circle bg-color d-flex align-items-center justify-content-center"
												style={{ width: 70, height: 70 }}
											>
												<i className="fa fa-user fs-24 text-light"></i>
											</div>
										</div>
										<div className="col">
											<h5 className="text-light mb-1">{post.author}</h5>
											<p className="text-light opacity-75 mb-0">
												Professional garage door technicians serving Greater Charlotte
												and Waxhaw NC with repair, installation, and 24/7 emergency service.
											</p>
										</div>
									</div>
								</div>

								{/* CTA Box */}
								<div
									className="mt-5 p-4 rounded-1 text-center bg-color"
									style={{ borderRadius: "10px" }}
								>
									<h4 className="text-light mb-3">Ready to Get Started?</h4>
									<p className="text-light opacity-90 mb-4">
										Contact <a href={siteConfig.gmbUrl} target="_blank" rel="noopener noreferrer" className="text-light-link">Charlotte Garage Door Repair</a> for a free quote on
										your garage door project.
									</p>
									<div className="d-flex flex-wrap justify-content-center gap-3">
										<Link
											href="/contact"
											className="btn-main fx-slide btn-line"
										>
											<span>Get a Free Quote</span>
										</Link>
										<a
											href={`tel:${siteConfig.phoneClean}`}
											className="btn-main fx-slide btn-line"
										>
											<span>Call {siteConfig.phone}</span>
										</a>
									</div>
								</div>
							</div>

							{/* Sidebar */}
							<div className="col-lg-4">
								{/* Quick Links */}
								<div
									className="p-4 mb-4 rounded-1"
									style={{ background: "rgba(255, 255, 255, 0.03)" }}
								>
									<h5 className="text-light mb-4">Our Services</h5>
									<ul className="list-unstyled mb-0">
										<li className="mb-3">
											<Link
												href="/services/garage-door-repair"
												className="text-light opacity-75 text-decoration-none d-flex align-items-center"
											>
												<i className="fa fa-chevron-right id-color me-2 fs-12"></i>
												Garage Door Repair
											</Link>
										</li>
										<li className="mb-3">
											<Link
												href="/services/spring-repair"
												className="text-light opacity-75 text-decoration-none d-flex align-items-center"
											>
												<i className="fa fa-chevron-right id-color me-2 fs-12"></i>
												Spring Repair &amp; Replacement
											</Link>
										</li>
										<li className="mb-3">
											<Link
												href="/services/opener-repair"
												className="text-light opacity-75 text-decoration-none d-flex align-items-center"
											>
												<i className="fa fa-chevron-right id-color me-2 fs-12"></i>
												Opener Repair &amp; Installation
											</Link>
										</li>
										<li className="mb-3">
											<Link
												href="/services/emergency-repair"
												className="text-light opacity-75 text-decoration-none d-flex align-items-center"
											>
												<i className="fa fa-chevron-right id-color me-2 fs-12"></i>
												24/7 Emergency Repair
											</Link>
										</li>
										<li className="mb-3">
											<Link
												href="/services/garage-door-installation"
												className="text-light opacity-75 text-decoration-none d-flex align-items-center"
											>
												<i className="fa fa-chevron-right id-color me-2 fs-12"></i>
												Garage Door Installation
											</Link>
										</li>
										<li>
											<Link
												href="/services/cable-repair"
												className="text-light opacity-75 text-decoration-none d-flex align-items-center"
											>
												<i className="fa fa-chevron-right id-color me-2 fs-12"></i>
												Cable Repair
											</Link>
										</li>
									</ul>
								</div>

								{/* Service Areas */}
								<div
									className="p-4 mb-4 rounded-1"
									style={{ background: "rgba(255, 255, 255, 0.03)" }}
								>
									<h5 className="text-light mb-4">Top Service Areas</h5>
									<ul className="list-unstyled mb-0">
										<li className="mb-2">
											<Link
												href="/service-areas/charlotte-nc"
												className="text-light opacity-75 text-decoration-none"
											>
												<i className="fa fa-map-marker-alt id-color me-2"></i>
												Charlotte, NC
											</Link>
										</li>
										<li className="mb-2">
											<Link
												href="/service-areas/waxhaw-nc"
												className="text-light opacity-75 text-decoration-none"
											>
												<i className="fa fa-map-marker-alt id-color me-2"></i>
												Waxhaw, NC
											</Link>
										</li>
										<li className="mb-2">
											<Link
												href="/service-areas/matthews-nc"
												className="text-light opacity-75 text-decoration-none"
											>
												<i className="fa fa-map-marker-alt id-color me-2"></i>
												Matthews, NC
											</Link>
										</li>
										<li>
											<Link
												href="/service-areas/fort-mill-sc"
												className="text-light opacity-75 text-decoration-none"
											>
												<i className="fa fa-map-marker-alt id-color me-2"></i>
												Fort Mill, SC
											</Link>
										</li>
									</ul>
								</div>

								{/* Contact Box */}
								<div className="p-4 rounded-1 bg-color text-center">
									<h5 className="text-light mb-3">Need Expert Advice?</h5>
									<p className="text-light opacity-90 mb-4">
										Our technicians are available 24/7 to solve your garage door problems.
									</p>
									<a
										href={`tel:${siteConfig.phoneClean}`}
										className="btn-main fx-slide btn-line w-100"
									>
										<span>Call Now</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Related Posts */}
				{relatedPosts.length > 0 && (
					<section className="bg-dark-2">
						<div className="container">
							<div className="row g-4 justify-content-center mb-4">
								<div className="col-lg-8 text-center">
									<div className="subtitle">Keep Reading</div>
									<h2>Related Articles</h2>
								</div>
							</div>

							<div className="row g-4">
								{relatedPosts.map((relatedPost, index) => (
									<div key={relatedPost.slug} className="col-lg-4 col-md-6">
										<Link
											href={`/blog/${relatedPost.slug}`}
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
														height: 200,
														overflow: "hidden",
													}}
												>
													<Image
														src={relatedPost.imageUrl}
														alt={relatedPost.title}
														fill
														style={{
															objectFit: "cover",
															transition: "transform 0.3s ease",
														}}
														sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
													/>
												</div>
												<div className="p-4">
													<span className="badge bg-color mb-3">
														{relatedPost.category}
													</span>
													<h5 className="text-light mb-2">
														{relatedPost.title}
													</h5>
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
				)}

				{/* More Blog Posts */}
				<section className="bg-dark">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-8 text-center">
								<h3 className="text-light mb-4">Explore More Articles</h3>
								<Link href="/blog" className="btn-main fx-slide">
									<span>View All Blog Posts</span>
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
								<h3 className="mb-0 fs-32">Need fast garage door repair or installation?</h3>
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
		</>
	);
}
