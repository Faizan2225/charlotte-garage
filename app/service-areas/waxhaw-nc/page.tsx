import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Waxhaw NC | 24/7 Service",
	description:
		"Local garage door repair in Waxhaw, NC. Fast torsion spring repair, opener installation, cable repair & emergency garage door service. Call (828) 450-2416",
};

export default function WaxhawNCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Waxhaw, NC"
			subtitle="Local Service Area"
			intro="Charlotte Garage Door Repair provides top-rated garage door repair, maintenance, and new door installation for homeowners in Waxhaw, NC. Based right in the area, we deliver rapid emergency response and long-lasting solutions."
			highlights={[
				{
					title: "Fast Local Response",
					text: "Prompt dispatch throughout Waxhaw and nearby communities.",
				},
				{
					title: "Torsion & Extension Springs",
					text: "Safe replacement using heavy-duty, high-cycle steel springs.",
				},
				{
					title: "Smart Opener Upgrades",
					text: "Whisper-quiet LiftMaster and Genie smart openers with app controls.",
				},
			]}
			image="/images/IMG_0769.jpg"
			ctaHeading="Need garage door repair in Waxhaw, NC? Call (828) 450-2416!"
		/>
	);
}
