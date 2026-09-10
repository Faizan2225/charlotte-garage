import ServiceAreaPage from "@/components/ServiceAreaPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Repair Charlotte NC | 24/7 Service",
	description:
		"Fast 24/7 garage door repair in Charlotte, NC. Spring repair, opener installation, cable repair, and emergency garage door services. Call (828) 450-2416",
};

export default function CharlotteNCPage() {
	return (
		<ServiceAreaPage
			service="Garage Door Repair"
			location="Charlotte, NC"
			subtitle="Primary Service Hub"
			intro="Charlotte Garage Door Repair is proud to serve homeowners and businesses across Charlotte, NC. From emergency spring replacement and snapped cable repairs to new garage door opener installations, our technicians deliver fast, reliable 24/7 service."
			highlights={[
				{
					title: "24/7 Emergency Dispatch",
					text: "Immediate response for stuck doors, snapped springs, and security risks in Charlotte.",
				},
				{
					title: "7+ Years Experience",
					text: "Expert diagnostics and repairs by Jeremy Chisom and our skilled local team.",
				},
				{
					title: "Transparent Upfront Pricing",
					text: "No hidden fees or surprise charges — honest estimates on every repair.",
				},
			]}
			image="/images/spring-repair/IMG_0770.jpg"
			ctaHeading="Need garage door repair in Charlotte, NC? Call (828) 450-2416 now!"
		/>
	);
}
