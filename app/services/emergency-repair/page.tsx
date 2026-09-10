import ServiceDetail from "@/components/ServiceDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Emergency Garage Door Repair | 24/7 Charlotte NC",
	description:
		"24/7 Emergency garage door repair in Charlotte, NC. Immediate response for stuck doors, snapped springs & off-track doors. Call (828) 450-2416 anytime!",
};

export default function EmergencyRepairPage() {
	return (
		<ServiceDetail
			subtitle="24/7 Emergency Dispatch"
			heading="24/7 Emergency Garage Door Repair in Charlotte, NC"
			intro="A broken garage door never happens at a convenient time. Whether your door snapped a cable at midnight or jumped off track right before your morning commute, Charlotte Garage Door Repair provides fast 24/7 emergency dispatch to secure your home."
			heroImage="/images/spring-repair/IMG_0770.jpg"
			bandImage="/images/spring-repair/IMG_0777.jpg"
			steps={[
				{
					icon: "fas fa-phone-alt",
					title: "24/7 Rapid Call",
					description: "Immediate dispatcher response day or night across Charlotte Metro.",
				},
				{
					icon: "fas fa-shipping-fast",
					title: "Fast Mobile Service",
					description: "Technician arrives fully stocked with heavy-duty springs, cables, and parts.",
				},
				{
					icon: "fas fa-user-shield",
					title: "Emergency Securing",
					description: "Safely resetting door panels, securing tracks, or replacing snapped springs.",
				},
				{
					icon: "fas fa-check-double",
					title: "Full Testing",
					description: "Verifying complete door safety and smooth operation before leaving.",
				},
			]}
			included={[
				"24/7 availability 365 days a year",
				"Fully equipped mobile repair trucks",
				"Immediate off-track door reset",
				"Emergency spring & cable replacement",
				"Complete home security verification",
			]}
			benefits={[
				"Eliminates home security vulnerabilities",
				"Frees trapped vehicles immediately",
				"Prevents dangerous door collapse hazards",
				"No long waiting periods for service",
				"Transparent emergency repair pricing",
			]}
			idealFor={[
				"Garage doors stuck open at night",
				"Vehicles trapped inside the garage",
				"Derailed or crooked garage doors",
				"Snapped torsion or extension springs",
				"Emergency security situations",
			]}
			ctaHeading="Stuck with a broken garage door? Call (828) 450-2416 for 24/7 emergency repair!"
		/>
	);
}
