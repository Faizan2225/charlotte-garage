export interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	content: string; // HTML content
	date: string;
	author: string;
	imageUrl: string;
	category: string;
	keywords: string[];
}

export const blogPosts: BlogPost[] = [
	{
		slug: "5-signs-garage-door-springs-need-repair",
		title: "5 Signs Your Garage Door Springs Need Immediate Repair",
		excerpt:
			"Broken or worn garage door springs can leave your door stuck or create serious safety hazards. Learn the warning signs before complete spring failure occurs.",
		date: "February 2, 2026",
		author: "Charlotte Garage Door Team",
		imageUrl: "/images/IMG_0764.jpg",
		category: "Spring Repair",
		keywords: [
			"garage door spring repair",
			"broken garage door spring",
			"spring repair Charlotte NC",
			"garage door safety",
			"torsion spring replacement",
		],
		content: `
      <p>Garage door springs carry the full weight of your heavy garage door every time it opens and closes. Because springs are under immense tension, when they wear out or break, your door will suddenly stop functioning properly — and can become dangerous if ignored.</p>

      <h3>1. The Garage Door Only Opens a Few Inches</h3>
      <p>Modern garage door openers have built-in safety features that stop lifting if a spring breaks. If your motor runs but the door barely moves off the ground, a snapped spring is usually the culprit.</p>

      <h3>2. You Heard a Loud Bang in the Garage</h3>
      <p>When a garage door spring breaks, it releases stored mechanical energy instantly, sounding similar to a gunshot or fireworks inside your garage.</p>

      <h3>3. Visible Gaps in the Spring Coil</h3>
      <p>Inspect the spring mounted above your door frame (torsion spring). If you see a distinct 2-inch gap in the metal coil, the spring has split into two pieces.</p>

      <h3>4. The Door Opens Crooked or Heavy</h3>
      <p>When one spring fails on a multi-spring system, the door will pull unevenly along the tracks, causing it to stick or bind on one side.</p>

      <h3>5. Loose Cables or Sagging Spring Winding</h3>
      <p>Slacken or unspooled garage door cables are frequently caused by lost tension in broken springs.</p>

      <p><strong>Warning:</strong> Replacing garage door springs is extremely hazardous due to high tension. <a href="/contact">Contact Charlotte Garage Door Repair</a> for fast 24/7 professional spring replacement.</p>
    `,
	},
	{
		slug: "why-24-7-emergency-garage-door-repair-matters",
		title: "Why 24/7 Emergency Garage Door Repair Matters for Home Safety",
		excerpt:
			"A broken garage door never happens at a convenient time. Discover how emergency repair services protect your property and family security.",
		date: "February 9, 2026",
		author: "Charlotte Garage Door Team",
		imageUrl: "/images/IMG_0770.jpg",
		category: "Emergency Repair",
		keywords: [
			"24/7 emergency garage door repair",
			"emergency garage door service Charlotte",
			"garage door stuck open",
			"home security garage door",
		],
		content: `
      <p>Your garage door is the primary entry point for many homes and a key defender of your vehicles and belongings. When it breaks unexpectedly at night or on weekends, quick action is vital.</p>

      <h3>Securing Your Home Against Intrusion</h3>
      <p>If your garage door is stuck halfway open, your home and vehicles are exposed to theft or unwanted pests. Our emergency technicians respond around the clock to secure your property immediately.</p>

      <h3>Preventing Vehicle Entrapment</h3>
      <p>Getting your car trapped inside the garage right when you need to drive to work or emergency appointments is a major disruption. 24/7 emergency repair gets your door operating smoothly again without lost time.</p>

      <h3>Preventing Structural Hazard</h3>
      <p>A door that has jumped its track or lost cable tension hangs unpredictably. Attempting to force it down manually can cause the heavy panels to collapse. Professional emergency service ensures safe handling.</p>

      <p>Need urgent help? Call <a href="tel:+18284502416">(828) 450-2416</a> anytime for 24/7 emergency garage door repair in Charlotte and surrounding communities.</p>
    `,
	},
	{
		slug: "how-to-choose-the-right-garage-door-opener",
		title: "How to Choose the Right Garage Door Opener for Your Home",
		excerpt:
			"From belt drive to smart Wi-Fi openers, compare quiet performance, horsepower, and features to choose the perfect opener for your garage.",
		date: "February 16, 2026",
		author: "Charlotte Garage Door Team",
		imageUrl: "/images/IMG_0068.jpg",
		category: "Opener Installation",
		keywords: [
			"garage door opener installation",
			"belt drive vs chain drive opener",
			"smart garage door opener",
			"garage door opener replacement",
		],
		content: `
      <p>Choosing the right garage door opener improves convenience, reduces noise, and enhances home automation. Here is a quick breakdown of popular opener options:</p>

      <h3>1. Belt Drive Openers</h3>
      <p>Belt drives use steel-reinforced rubber belts to move the door. They are whisper-quiet, making them the best option for garages situated directly below or adjacent to bedrooms.</p>

      <h3>2. Chain Drive Openers</h3>
      <p>Chain drive openers use a metal chain and are renowned for strength, durability, and economical pricing. They handle heavy double doors with ease, though they generate more operational noise.</p>

      <h3>3. Smart Wi-Fi & Battery Backup Models</h3>
      <p>Modern openers allow remote monitoring and operation from your smartphone, custom visitor access codes, and integrated battery backups so your garage functions even during power outages.</p>

      <p>Ready to upgrade your opener? <a href="/contact">Request a free quote</a> from Charlotte Garage Door Repair for professional opener installation.</p>
    `,
	},
	{
		slug: "garage-door-maintenance-checklist",
		title: "The Ultimate Garage Door Maintenance Checklist",
		excerpt:
			"Routine maintenance prevents costly breakdowns and extends door longevity. Here's a simple checklist to keep your garage door running smoothly.",
		date: "February 23, 2026",
		author: "Charlotte Garage Door Team",
		imageUrl: "/images/IMG_0774.jpg",
		category: "Maintenance",
		keywords: [
			"garage door maintenance",
			"garage door tune up",
			"lubricate garage door tracks",
			"garage door inspection Charlotte",
		],
		content: `
      <p>Performing regular tune-ups and annual inspections protects your investment and ensures whisper-quiet, reliable garage door operation year-round.</p>

      <h3>Monthly Visual & Operational Checks</h3>
      <ul>
        <li><strong>Listen and observe:</strong> Watch for jerky movements, squeaking hinges, or grinding sounds.</li>
        <li><strong>Test safety sensors:</strong> Ensure infrared photoelectric eye sensors trigger reverse movement when an object blocks the beam.</li>
        <li><strong>Test auto-reverse:</strong> Place a block of wood under the door path to ensure it reverses upon contact.</li>
      </ul>

      <h3>Lubrication & Track Upkeep</h3>
      <p>Apply silicone-based lubricant to metal rollers, hinges, and springs every six months. Never apply grease directly inside the tracks, as it collects dust and grit.</p>

      <p>Schedule a comprehensive tune-up with <a href="/services/garage-door-service">Charlotte Garage Door Repair</a> today!</p>
    `,
	},
];

