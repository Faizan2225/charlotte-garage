import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Fort Mill SC | 24/7 Service",
	description:
		"Professional garage door repair in Fort Mill, SC. Torsion spring repair, opener installation, new door replacement & 24/7 service. Call (828) 450-2416",
};

export default function FortMillSCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Fort Mill, SC"
			subtitle="Upstate SC Service Area"
			intro="Charlotte Garage Door Repair extends expert garage door services to Fort Mill, SC. From emergency spring replacements to new carriage house door installations, we deliver superior craftsmanship and rapid response times."
			highlights={[
				{
					title: "Carriage House & Custom Doors",
					text: "Enhance your Fort Mill home's architecture with beautiful custom doors.",
				},
				{
					title: "High-Cycle Spring Repairs",
					text: "Durable oil-tempered springs engineered for long service life.",
				},
				{
					title: "Smart Wi-Fi Opener Installs",
					text: "Control and monitor your door remotely via smartphone app.",
				},
			]}
			image="/images/IMG_0777.jpg"
			ctaHeading="Need garage door service in Fort Mill, SC? Call (828) 450-2416!"
		/>
	);
}
