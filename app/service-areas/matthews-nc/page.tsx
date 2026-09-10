import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Matthews NC | 24/7 Service",
	description:
		"Expert garage door repair in Matthews, NC. Fast broken spring repair, opener installation, track alignment & emergency service. Call (828) 450-2416",
};

export default function MatthewsNCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Matthews, NC"
			subtitle="Local Service Area"
			intro="Keep your garage door running smoothly with expert repair services in Matthews, NC. From replacing noisy rollers and frayed cables to installing quiet belt-drive openers, Charlotte Garage Door Repair is your local specialist."
			highlights={[
				{
					title: "Quiet Belt Drive Openers",
					text: "Ideal for attached garages and bedrooms directly above garage spaces.",
				},
				{
					title: "Same-Day Spring Repair",
					text: "High-cycle torsion springs installed safely by certified technicians.",
				},
				{
					title: "Preventative Maintenance",
					text: "Annual tune-ups to extend motor and door hardware lifespan.",
				},
			]}
			image="/images/garage-door-repair/IMG_0068.jpg"
			ctaHeading="Need garage door service in Matthews, NC? Call (828) 450-2416!"
		/>
	);
}
