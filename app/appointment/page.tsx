"use client";

import { useState } from "react";

export default function AppointmentPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		date: "",
		time: "",
		service: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Appointment submitted:", formData);
	};

	return (
		<div className="no-bottom no-top" id="content">
			<section className="text-light jarallax">
				<img src="/images/IMG_0777.jpg" className="jarallax-img" alt="" />
				<div className="center-y relative text-center">
					<div className="container">
						<div className="row">
							<div className="col-md-12 text-center">
								<h1>Book Service Appointment</h1>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<h2 className="text-center mb-4">
								Schedule Your Garage Door Repair or Service
							</h2>

							<form onSubmit={handleSubmit} className="form-border">
								<div className="row g-3">
									<div className="col-md-6">
										<input
											type="text"
											className="form-control"
											placeholder="Your Name *"
											value={formData.name}
											onChange={(e) =>
												setFormData({ ...formData, name: e.target.value })
											}
											required
										/>
									</div>
									<div className="col-md-6">
										<input
											type="email"
											className="form-control"
											placeholder="Your Email *"
											value={formData.email}
											onChange={(e) =>
												setFormData({ ...formData, email: e.target.value })
											}
											required
										/>
									</div>
									<div className="col-md-6">
										<input
											type="tel"
											className="form-control"
											placeholder="Your Phone *"
											value={formData.phone}
											onChange={(e) =>
												setFormData({ ...formData, phone: e.target.value })
											}
											required
										/>
									</div>
									<div className="col-md-6">
										<select
											className="form-control"
											value={formData.service}
											onChange={(e) =>
												setFormData({ ...formData, service: e.target.value })
											}
											required
										>
											<option value="">Select Service *</option>
											<option value="garage-door-repair">Garage Door Repair</option>
											<option value="garage-door-installation">Garage Door Installation</option>
											<option value="emergency-repair">Emergency Repair (24/7)</option>
											<option value="spring-repair">Spring Repair &amp; Replacement</option>
											<option value="cable-repair">Cable Repair</option>
											<option value="opener-repair">Opener Repair</option>
											<option value="opener-installation">Opener Installation</option>
											<option value="garage-door-replacement">Garage Door Replacement</option>
											<option value="maintenance">Preventative Maintenance</option>
										</select>
									</div>
									<div className="col-md-6">
										<input
											type="date"
											className="form-control"
											value={formData.date}
											onChange={(e) =>
												setFormData({ ...formData, date: e.target.value })
											}
											required
										/>
									</div>
									<div className="col-md-6">
										<input
											type="time"
											className="form-control"
											value={formData.time}
											onChange={(e) =>
												setFormData({ ...formData, time: e.target.value })
											}
											required
										/>
									</div>
									<div className="col-12">
										<textarea
											className="form-control"
											placeholder="Describe your garage door issue or preferred door style..."
											rows={4}
											value={formData.message}
											onChange={(e) =>
												setFormData({ ...formData, message: e.target.value })
											}
										></textarea>
									</div>
									<div className="col-12 text-center">
										<button type="submit" className="btn-main fx-slide">
											<span>Book Appointment</span>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
