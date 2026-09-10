import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Indian Trail NC | 24/7 Service",
	description:
		"Reliable garage door repair in Indian Trail, NC. Spring replacement, cable repair, opener installation & 24/7 emergency service. Call (828) 450-2416",
};

export default function IndianTrailNCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Indian Trail, NC"
			subtitle="Local Service Area"
			intro="Charlotte Garage Door Repair brings fast, affordable garage door repairs to residents of Indian Trail, NC. Whether your door is off-track, won't close properly, or has a broken spring, we fix it right the first time."
			highlights={[
				{
					title: "Off-Track & Cable Reset",
					text: "Safe rethreading of lifting cables and resetting crooked door sections.",
				},
				{
					title: "Emergency 24/7 Dispatch",
					text: "Round-the-clock technician availability for urgent security situations.",
				},
				{
					title: "Honest Upfront Quotes",
					text: "Clear, upfront pricing with full warranty backing on parts & labor.",
				},
			]}
			image="/images/IMG_0766.jpg"
			ctaHeading="Need garage door repair in Indian Trail, NC? Call (828) 450-2416!"
		/>
	);
}
