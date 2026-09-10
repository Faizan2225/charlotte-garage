import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Mooresville NC | 24/7 Service",
	description:
		"Garage door repair & installation in Mooresville, NC. Spring replacement, cable repair, opener service & 24/7 emergency repairs. Call (828) 450-2416",
};

export default function MooresvilleNCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Mooresville, NC"
			subtitle="Lake Norman Service Area"
			intro="Charlotte Garage Door Repair proudly serves Mooresville, NC with premier garage door repairs, spring replacements, and smart opener setups. Trust our 7 years of industry experience for fast, dependable service."
			highlights={[
				{
					title: "Torsion Spring Replacement",
					text: "High-cycle oil-tempered springs installed safely by certified pros.",
				},
				{
					title: "Emergency Response",
					text: "24/7 emergency dispatch for stuck or unsecure garage doors.",
				},
				{
					title: "Comprehensive Tune-Ups",
					text: "Full safety checks, track adjustments, and silicone lubrication.",
				},
			]}
			image="/images/IMG_0764.jpg"
			ctaHeading="Need garage door service in Mooresville, NC? Call (828) 450-2416!"
		/>
	);
}
