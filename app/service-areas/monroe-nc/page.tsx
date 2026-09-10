import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Monroe NC | 24/7 Service",
	description:
		"Trusted garage door repair services in Monroe, NC. Spring replacement, cable repair, opener installation & 24/7 emergency service. Call (828) 450-2416",
};

export default function MonroeNCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Monroe, NC"
			subtitle="Union County Hub"
			intro="Looking for reliable garage door repair in Monroe, NC? Charlotte Garage Door Repair delivers comprehensive repairs, spring replacements, and custom garage door installations backed by 7 years of industry experience."
			highlights={[
				{
					title: "Comprehensive Repairs",
					text: "Fixing broken springs, snapped cables, noisy openers, and off-track doors.",
				},
				{
					title: "Insulated Door Replacements",
					text: "Upgrade to energy-efficient sectional doors with high R-value insulation.",
				},
				{
					title: "24/7 Availability",
					text: "Emergency technicians ready to dispatch day or night in Monroe.",
				},
			]}
			image="/images/IMG_0764.jpg"
			ctaHeading="Need garage door repair in Monroe, NC? Call (828) 450-2416!"
		/>
	);
}
