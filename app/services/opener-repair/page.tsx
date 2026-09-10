import ServiceDetail from "@/components/ServiceDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Opener Repair | Charlotte, NC",
	description:
		"Garage door opener repair in Charlotte, NC. Expert service for LiftMaster, Genie, Craftsman & Chamberlain motor units. Call (828) 450-2416",
};

export default function OpenerRepairPage() {
	return (
		<ServiceDetail
			subtitle="Opener Diagnostics"
			heading="Garage Door Opener Repair in Charlotte, NC"
			intro="If your garage door opener hums without moving, fails to respond to remotes, or reverses spontaneously, Charlotte Garage Door Repair is here to help. We repair motor assemblies, drive gears, circuit boards, safety sensors, and wall consoles for all major opener brands."
			heroImage="/images/IMG_0068.jpg"
			bandImage="/images/IMG_0774.jpg"
			steps={[
				{
					icon: "fas fa-microchip",
					title: "Electronic Diagnosis",
					description: "Testing logic board circuits, capacitor output, and limit switch travel.",
				},
				{
					icon: "fas fa-cog",
					title: "Mechanical Repair",
					description: "Replacing worn drive gears, drive belts, chains, and sprocket assemblies.",
				},
				{
					icon: "fas fa-eye",
					title: "Safety Sensor Alignment",
					description: "Realignment and cleaning of photoelectric safety beam sensors.",
				},
				{
					icon: "fas fa-wifi",
					title: "Remote & Keypad Programming",
					description: "Reprogramming remote transmitters, wireless keypads, and smart app controls.",
				},
			]}
			included={[
				"Comprehensive motor & logic board diagnostics",
				"Drive gear & sprocket replacement",
				"Limit switch & travel force calibration",
				"Safety sensor alignment & wiring check",
				"Remote & keyless entry programming",
			]}
			benefits={[
				"Restores smooth, automated opening convenience",
				"Saves money over complete motor replacement",
				"Eliminates erratic opening/closing behavior",
				"Ensures compliance with UL325 safety standards",
				"Restores smartphone & remote access",
			]}
			idealFor={[
				"Opener motor runs but door doesn't open",
				"Door reverses instantly after touching floor",
				"Remote control or wall switch stops working",
				"Loud grinding noise coming from opener motor",
				"Blinking safety light indicators",
			]}
			ctaHeading="Opener not working properly? Call (828) 450-2416 for fast opener repair!"
		/>
	);
}
