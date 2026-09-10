import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		template: "%s | Charlotte Garage Door Repair Blog",
		default: "Garage Door Blog & Expert Tips | Charlotte Garage Door Repair",
	},
	description:
		"Expert garage door repair, maintenance, spring replacement, opener troubleshooting, and home security guides for homeowners in Charlotte, Waxhaw, and surrounding NC/SC areas.",
	openGraph: {
		siteName: "Charlotte Garage Door Repair",
		locale: "en_US",
		type: "website",
	},
};

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
