import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Concord NC | 24/7 Service",
	description:
		"Fast garage door repair in Concord, NC. Torsion spring repair, cable replacement, opener installation & 24/7 emergency service. Call (828) 450-2416",
};

export default function ConcordNCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Concord, NC"
			subtitle="Cabarrus County Area"
			intro="Charlotte Garage Door Repair provides top-rated garage door repair, opener replacement, and spring repairs for homes and businesses in Concord, NC. We deliver fast, quality service backed by complete satisfaction guarantees."
			highlights={[
				{
					title: "24/7 Emergency Dispatch",
					text: "Immediate response for stuck, off-track, or broken garage doors.",
				},
				{
					title: "Spring & Hardware Repair",
					text: "Replacing worn cables, rollers, hinges, and high-tension springs.",
				},
				{
					title: "New Door Installation",
					text: "Custom sectional garage doors in carriage house and modern styles.",
				},
			]}
			image="/images/IMG_0770.jpg"
			ctaHeading="Need garage door repair in Concord, NC? Call (828) 450-2416!"
		/>
	);
}
