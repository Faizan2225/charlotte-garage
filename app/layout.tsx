import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExtraWrap from "@/components/ExtraWrap";
import ScriptReinitializer from "@/components/ScriptReinitializer";
import "./globals.css";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	userScalable: true,
};

export const metadata: Metadata = {
	metadataBase: new URL("https://charlotte-garagedoorrepair.com"),
	title: {
		default:
			"Charlotte Garage Door Repair | 24/7 Emergency Garage Door Service",
		template: "%s | Charlotte Garage Door Repair",
	},
	description:
		"Fast 24/7 emergency garage door repair in Charlotte & surrounding areas. Garage door spring repair, cable repair, opener installation, replacement & service. Call (828) 450-2416",
	keywords: [
		"garage door repair Charlotte NC",
		"emergency garage door repair",
		"garage door spring repair",
		"garage door opener installation",
		"garage door replacement Charlotte",
		"garage door service Waxhaw NC",
		"Monroe garage door repair",
		"Matthews garage door repair",
		"Charlotte Garage Door Repair",
	],
	authors: [{ name: "Charlotte Garage Door Repair" }],
	creator: "Charlotte Garage Door Repair",
	publisher: "Charlotte Garage Door Repair",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://charlotte-garagedoorrepair.com",
		siteName: "Charlotte Garage Door Repair",
		title:
			"Charlotte Garage Door Repair | 24/7 Emergency Service",
		description:
			"Fast, professional garage door repair, spring repair, opener installation, and emergency service in Charlotte, NC and surrounding metro areas.",
		images: [
			{
				url: "/logo.png",
				width: 480,
				height: 320,
				alt: "Charlotte Garage Door Repair",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Charlotte Garage Door Repair | 24/7 Emergency Garage Door Service",
		description:
			"Fast, reliable garage door repair, spring repair, opener installation, and emergency service in Charlotte and surrounding metro areas.",
		images: ["/logo.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: "/logo.png",
		shortcut: "/logo.png",
		apple: "/logo.png",
	},
	verification: {
		google: "google-site-verification-code-here",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "HomeAndConstructionBusiness",
		name: "Charlotte Garage Door Repair",
		image: "https://charlotte-garagedoorrepair.com/logo.png",
		"@id": "https://charlotte-garagedoorrepair.com",
		url: "https://charlotte-garagedoorrepair.com",
		telephone: "+18284502416",
		email: "Charlottesgaragedoorrepairs@gmail.com",
		priceRange: "$$",
		address: {
			"@type": "PostalAddress",
			streetAddress: "5604 Harkey Rd",
			addressLocality: "Waxhaw",
			addressRegion: "NC",
			postalCode: "28173",
			addressCountry: "US",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: 34.9243,
			longitude: -80.7431,
		},
		openingHoursSpecification: [
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
					"Sunday",
				],
				opens: "00:00",
				closes: "23:59",
			},
		],
		sameAs: [
			"https://charlotte-garagedoorrepair.com",
		],
		areaServed: [
			{ "@type": "City", name: "Charlotte" },
			{ "@type": "City", name: "Waxhaw" },
			{ "@type": "City", name: "Monroe" },
			{ "@type": "City", name: "Matthews" },
			{ "@type": "City", name: "Indian Trail" },
			{ "@type": "City", name: "Fort Mill" },
			{ "@type": "City", name: "Indian Land" },
			{ "@type": "City", name: "Huntersville" },
			{ "@type": "City", name: "Mooresville" },
			{ "@type": "City", name: "Concord" },
		],
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.9",
			reviewCount: "142",
		},
	};

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/logo.png" type="image/png" />
				<link rel="shortcut icon" href="/logo.png" type="image/png" />
				<link rel="apple-touch-icon" href="/logo.png" />
				{/*
          CRITICAL: Load all CSS synchronously before page renders to prevent FOUC.
          This blocking script runs before any content is painted.
        */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
              (function() {
                var cssFiles = [
                  '/css/bootstrap.min.css',
                  '/css/plugins.css',
                  '/css/swiper.css',
                  '/css/style.css',
                  '/css/colors/scheme-1.css',
                  '/css/custom-swiper-1.css'
                ];
                cssFiles.forEach(function(href, i) {
                  var link = document.createElement('link');
                  link.rel = 'stylesheet';
                  link.href = href;
                  link.id = 'critical-css-' + i;
                  document.head.appendChild(link);
                });
              })();
            `,
					}}
				/>
				{/* Hide page until CSS is loaded */}
				<style
					dangerouslySetInnerHTML={{
						__html: `
              html:not(.styles-ready) body { visibility: hidden; }
              html.styles-ready body { visibility: visible; }
              #de-loader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #0A0A0A;
                z-index: 99999;
                display: flex;
                align-items: center;
                justify-content: center;
              }
            `,
					}}
				/>
				{/* Check when CSS is loaded and show page */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
              (function() {
                var loaded = 0;
                var total = 6;
                function checkReady() {
                  loaded++;
                  if (loaded >= total) {
                    document.documentElement.classList.add('styles-ready');
                  }
                }
                var links = document.querySelectorAll('link[id^="critical-css-"]');
                links.forEach(function(link) {
                  if (link.sheet) {
                    checkReady();
                  } else {
                    link.onload = checkReady;
                    link.onerror = checkReady;
                  }
                });
                // Fallback: show page after 500ms max
                setTimeout(function() {
                  document.documentElement.classList.add('styles-ready');
                }, 500);
              })();
            `,
					}}
				/>
			</head>
			<body className="dark-scheme" suppressHydrationWarning>
				<div id="wrapper">
					<div id="de-loader"></div>
					<ScriptReinitializer />
					<Header />
					{children}
					<Footer />
					<ExtraWrap />
				</div>

				<Script src="/js/plugins.js" strategy="beforeInteractive" />
				<Script src="/js/designesia.js" strategy="afterInteractive" />
				<Script src="/js/swiper.js" strategy="afterInteractive" />
				<Script src="/js/custom-swiper-3.js" strategy="afterInteractive" />
				<Script src="/js/jquery.event.move.js" strategy="afterInteractive" />
				<Script src="/js/jquery.twentytwenty.js" strategy="afterInteractive" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
					suppressHydrationWarning
				/>

				{/* Hide preloader when page is ready */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
              (function() {
                function hideLoader() {
                  try {
                    var el = document.getElementById('de-loader');
                    if (el) {
                      if (window.jQuery) {
                        window.jQuery('#de-loader').fadeOut(300);
                      } else {
                        el.style.transition = 'opacity 300ms ease';
                        el.style.opacity = '0';
                        setTimeout(function() { el.style.display = 'none'; }, 350);
                      }
                    }
                  } catch (e) {
                    try { if (document.getElementById('de-loader')) document.getElementById('de-loader').style.display = 'none'; } catch(e){}
                  }
                }

                if (document.readyState === 'complete') {
                  hideLoader();
                } else {
                  window.addEventListener('load', hideLoader);
                }

                // Safety timeout
                setTimeout(hideLoader, 2000);
              })();
            `,
					}}
				/>
			</body>
		</html>
	);
}
