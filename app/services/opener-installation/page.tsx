import ServiceDetail from "@/components/ServiceDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Garage Door Opener Installation | Charlotte, NC",
	description:
		"Smart Wi-Fi garage door opener installation in Charlotte, NC. Quiet belt drive & chain drive opener installation with smartphone control. Call (828) 450-2416",
};

export default function OpenerInstallationPage() {
	return (
		<ServiceDetail
			subtitle="Smart Opener Installation"
			heading="Garage Door Opener Installation in Charlotte, NC"
			intro="Upgrade your daily convenience and home security with a modern Wi-Fi enabled garage door opener. Charlotte Garage Door Repair installs whisper-quiet belt drives, heavy-duty chain drives, and wall-mount jackshaft openers featuring battery backup and smartphone app integration."
			heroImage="/images/opener-repair/IMG_8733.jpg"
			bandImage="/images/opener-repair/IMG_8781.jpg"
			steps={[
				{
					icon: "fas fa-cog",
					title: "Opener Selection",
					description: "Recommending ideal horsepower (1/2 HP, 3/4 HP, 1.25 HP) and drive mechanism.",
				},
				{
					icon: "fas fa-plug",
					title: "Motor & Rail Mounting",
					description: "Securely anchoring overhead rails, motor housing, and structural header bracket.",
				},
				{
					icon: "fas fa-wave-square",
					title: "Sensor & Console Wiring",
					description: "Wiring safety eye sensors, wall button panel, and battery backup modules.",
				},
				{
					icon: "fas fa-mobile-alt",
					title: "Smart App Setup",
					description: "Connecting myQ / smart home app and programming remotes and car Homelink.",
				},
			]}
			included={[
				"Professional motor, rail, and trolley installation",
				"Infrared safety photo-eye sensor wiring & mounting",
				"Multi-function wall control panel installation",
				"2 remote control transmitters & wireless keypad",
				"Smartphone app connection & Homelink pairing",
			]}
			benefits={[
				"Whisper-quiet operation for attached garages",
				"Monitor & control your garage door from anywhere via smartphone",
				"Battery backup keeps working during power outages",
				"Enhanced security with rolling code technology",
				"Comprehensive manufacturer warranty coverage",
			]}
			idealFor={[
				"Replacing noisy 10+ year old chain openers",
				"Homes with bedrooms located directly above the garage",
				"Homeowners wanting smart home automation integration",
				"New garage door installation projects",
				"Adding battery backup for storm reliability",
			]}
			ctaHeading="Upgrade to a smart garage door opener! Call (828) 450-2416 today!"
		/>
	);
}
