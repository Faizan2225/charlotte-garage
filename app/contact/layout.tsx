import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us | Charlotte Garage Door Repair",
	description:
		"Contact Charlotte Garage Door Repair in Charlotte, NC. Request a free quote for 24/7 emergency repair, spring replacement, opener installation, or door replacement. Call (828) 450-2416.",
	keywords: [
		"contact garage door repair Charlotte NC",
		"garage door quote Charlotte",
		"24/7 garage door emergency number",
		"Charlotte Garage Door Repair contact",
	],
	openGraph: {
		title: "Contact Charlotte Garage Door Repair",
		description:
			"Get a free quote for garage door repair and 24/7 emergency service in Charlotte Metro. Call (828) 450-2416.",
		url: "https://charlotte-garagedoorrepair.com/contact",
		type: "website",
	},
	alternates: {
		canonical: "https://charlotte-garagedoorrepair.com/contact",
	},
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
