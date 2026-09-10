import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Huntersville NC | 24/7 Service",
	description:
		"Top-rated garage door repair in Huntersville, NC. Spring repair, opener installation, new door replacement & emergency 24/7 service. Call (828) 450-2416",
};

export default function HuntersvilleNCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Huntersville, NC"
			subtitle="Lake Norman Service Area"
			intro="Charlotte Garage Door Repair provides comprehensive garage door repair and installation services to Huntersville, NC. Whether you need a emergency spring fix or a quiet smart opener installed, our team gets the job done efficiently."
			highlights={[
				{
					title: "24/7 Emergency Repairs",
					text: "Round-the-clock service for off-track doors and broken springs in Huntersville.",
				},
				{
					title: "Smart Opener Upgrades",
					text: "Install whisper-quiet LiftMaster openers with battery backup & Wi-Fi.",
				},
				{
					title: "Quality Door Replacements",
					text: "Energy-efficient sectional doors built to withstand severe weather.",
				},
			]}
			image="/images/spring-repair/IMG_0780.jpg"
			ctaHeading="Need garage door repair in Huntersville, NC? Call (828) 450-2416!"
		/>
	);
}
