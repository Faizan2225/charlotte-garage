import ServiceDetail from "@/components/ServiceDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Replacement | Charlotte, NC",
	description:
		"Complete garage door replacement in Charlotte, NC. Replace old, damaged, or uninsulated garage doors with modern energy-efficient doors. Call (828) 450-2416",
};

export default function GarageDoorReplacementPage() {
	return (
		<ServiceDetail
			subtitle="Full Replacement"
			heading="Garage Door Replacement Services in Charlotte, NC"
			intro="When an old garage door suffers severe panel damage, structural rot, or constant mechanical breakdowns, replacement is often the most cost-effective solution. Charlotte Garage Door Repair replaces aging doors with high-R-value insulated models designed to last."
			heroImage="/images/IMG_0780.jpg"
			bandImage="/images/IMG_0769.jpg"
			steps={[
				{
					icon: "fas fa-home",
					title: "In-Home Assessment",
					description: "Evaluating door size, headroom, insulation requirements, and style preference.",
				},
				{
					icon: "fas fa-trash-alt",
					title: "Complete Tear-Down",
					description: "Disassembling old panels, springs, tracks, and disposing of debris cleanly.",
				},
				{
					icon: "fas fa-layer-group",
					title: "New Track & Panel Setup",
					description: "Installing brand-new vertical/horizontal tracks, rollers, and insulated door sections.",
				},
				{
					icon: "fas fa-sliders-h",
					title: "Spring Winding & Testing",
					description: "Installing calibrated torsion springs and setting opener force parameters.",
				},
			]}
			included={[
				"Full door, track, and hardware teardown & disposal",
				"High-grade polyurethane or polystyrene insulated panels",
				"Heavy-duty galvanized steel track system",
				"High-cycle torsion spring assembly",
				"All-weather perimeter seals & bottom seal",
			]}
			benefits={[
				"Highest return on investment (ROI) for home remodeling",
				"Substantially lowers garage heating & cooling costs",
				"Enhanced security against physical break-ins",
				"Quieter, smoother operation",
				"Long-term manufacturer structural warranty",
			]}
			idealFor={[
				"Doors damaged by vehicle accidents or weather",
				"Old, uninsulated wooden or single-layer steel doors",
				"Repeatedly failing doors requiring frequent repair",
				"Upgrading home aesthetics before listing on market",
				"Improving security and noise dampening",
			]}
			ctaHeading="Ready to replace your garage door? Call (828) 450-2416 for a free estimate!"
		/>
	);
}
