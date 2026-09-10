import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "FAQs | Garage Door Repair Questions Answered | Charlotte, NC",
	description:
		"Frequently asked questions about garage door repair, spring replacement, opener installation, cable repairs, and emergency 24/7 service in Charlotte & Waxhaw NC. Call (828) 450-2416",
	keywords: [
		"garage door repair FAQ Charlotte NC",
		"garage door opener questions",
		"spring repair FAQ",
		"garage door maintenance FAQ Waxhaw NC",
	],
	openGraph: {
		title: "Garage Door Repair FAQs | Charlotte Garage Door Repair",
		description:
			"Get answers to common questions about garage door repair and installation services in Charlotte, Waxhaw, and surrounding areas.",
		url: "https://charlottegaragedoorrepairs.com/faqs",
		type: "website",
	},
	alternates: {
		canonical: "https://charlottegaragedoorrepairs.com/faqs",
	},
};

export default function FAQsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
