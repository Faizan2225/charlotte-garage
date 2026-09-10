import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://charlotte-garagedoorrepair.com";

	// Generate blog post URLs
	const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
		url: `${baseUrl}/blog/${post.slug}`,
		lastModified: new Date(post.date),
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	const servicePaths = [
		"garage-door-repair",
		"garage-door-installation",
		"garage-door-service",
		"emergency-repair",
		"spring-repair",
		"cable-repair",
		"opener-repair",
		"garage-door-replacement",
		"opener-installation",
		"residential-installation",
		"garage-door-maintenance",
	];

	const serviceAreaPaths = [
		"charlotte-nc",
		"waxhaw-nc",
		"monroe-nc",
		"matthews-nc",
		"indian-trail-nc",
		"fort-mill-sc",
		"indian-land-sc",
		"huntersville-nc",
		"mooresville-nc",
		"concord-nc",
	];

	const serviceUrls: MetadataRoute.Sitemap = servicePaths.map((slug) => ({
		url: `${baseUrl}/services/${slug}`,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: 0.9,
	}));

	const serviceAreaUrls: MetadataRoute.Sitemap = serviceAreaPaths.map(
		(slug) => ({
			url: `${baseUrl}/service-areas/${slug}`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.8,
		}),
	);

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/services`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		...serviceUrls,
		...serviceAreaUrls,
		{
			url: `${baseUrl}/faqs`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/gallery`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/appointment`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		// Individual blog posts
		...blogUrls,
	];
}
