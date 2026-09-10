import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Indian Land SC | 24/7 Service",
	description:
		"Fast garage door repair in Indian Land, SC. Spring replacement, opener installation, track tuning & emergency repair. Call (828) 450-2416",
};

export default function IndianLandSCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Indian Land, SC"
			subtitle="Local Service Area"
			intro="Serving Indian Land, SC with fast, dependable garage door repairs, maintenance tune-ups, and opener installations. Count on Charlotte Garage Door Repair for prompt, professional service every time."
			highlights={[
				{
					title: "Rapid Local Dispatch",
					text: "Fast service response for homeowners throughout Indian Land.",
				},
				{
					title: "Spring & Cable Specialists",
					text: "Expert handling of high-tension torsion springs and lifting cables.",
				},
				{
					title: "Complete System Tune-Ups",
					text: "Comprehensive 21-point safety inspection & lubrication.",
				},
			]}
			image="/images/IMG_0774.jpg"
			ctaHeading="Need garage door repair in Indian Land, SC? Call (828) 450-2416!"
		/>
	);
}
