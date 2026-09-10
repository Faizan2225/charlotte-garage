import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Schedule Appointment | Book Garage Door Repair | Charlotte, NC",
	description:
		"Schedule your garage door repair or installation appointment in Charlotte & Waxhaw NC. Springs, openers, cables, new doors & 24/7 emergency service. Call (828) 450-2416.",
	keywords: [
		"schedule garage door repair Charlotte NC",
		"book garage door service Waxhaw NC",
		"garage door repair appointment",
		"24/7 emergency repair schedule",
	],
	openGraph: {
		title: "Schedule Service Appointment | Charlotte Garage Door Repair",
		description:
			"Book your garage door service appointment online. 24/7 emergency repairs and expert service available throughout Greater Charlotte.",
		url: "https://charlottegaragedoorrepairs.com/appointment",
		type: "website",
	},
	alternates: {
		canonical: "https://charlottegaragedoorrepairs.com/appointment",
	},
};

export default function AppointmentLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
