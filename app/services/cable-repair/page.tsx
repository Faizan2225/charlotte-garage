import ServiceDetail from "@/components/ServiceDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Cable Repair & Replacement | Charlotte, NC",
	description:
		"Professional garage door cable repair & replacement in Charlotte, NC. Fix frayed, snapped, or unspooled lifting cables safely. Call (828) 450-2416",
};

export default function CableRepairPage() {
	return (
		<ServiceDetail
			subtitle="Cable Service"
			heading="Garage Door Cable Repair & Replacement in Charlotte, NC"
			intro="Garage door lifting cables work in tandem with your torsion springs to raise hundreds of pounds of door weight smoothly. Frayed, loose, or snapped cables cause doors to hang crookedly or crash unexpectedly. We provide expert cable rethreading and replacement."
			heroImage="/images/opener-repair/IMG_0766.jpg"
			bandImage="/images/spring-repair/IMG_0770.jpg"
			steps={[
				{
					icon: "fas fa-exclamation-triangle",
					title: "Tension Lockout",
					description: "Securing spring tension and clamping door panels to prevent accidental dropping.",
				},
				{
					icon: "fas fa-unlink",
					title: "Frayed Cable Removal",
					description: "Removing worn or unspooled steel aircraft cables from bottom brackets.",
				},
				{
					icon: "fas fa-link",
					title: "Heavy-Duty Cable Threading",
					description: "Installing commercial-grade braided steel aircraft cables.",
				},
				{
					icon: "fas fa-sliders-h",
					title: "Drum Alignment & Tension",
					description: "Winding cables evenly onto cable drums and leveling door alignment.",
				},
			]}
			included={[
				"Heavy-duty galvanized steel aircraft cable installation",
				"Cable drum alignment & inspection",
				"Bottom roller bracket inspection",
				"Spring tension re-balancing",
				"Safety reverse mechanism testing",
			]}
			benefits={[
				"Prevents sudden garage door collapse",
				"Fixes crooked or binding door travel",
				"Protects track channels from gouging",
				"Ensures even weight distribution",
				"Extends overall door system longevity",
			]}
			idealFor={[
				"Cables dangling or unspooled off drums",
				"Visible fraying or rusted wire strands",
				"Garage door hanging sideways or crooked",
				"Door sticking halfway up the track",
				"Complete preventive hardware overhauls",
			]}
			ctaHeading="Frayed or loose garage door cables? Call (828) 450-2416 today!"
		/>
	);
}
