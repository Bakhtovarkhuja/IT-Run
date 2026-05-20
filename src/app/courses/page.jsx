"use client";

import HeroSection from "../components/coursesPage/heroSection";
import EndSection from "../components/coursesPage/endSection";
import CardCoursesSection from "../components/coursesPage/cardCoursesSection";

export default function Page() {

	return (
		<div className=" mt-35 max-w-300 m-auto">
			<HeroSection />
			<CardCoursesSection/>
			<EndSection />
		</div>
	)
}