import { 
	Hero, 
	HowItWorks, 
	Features, 
	Pricing, 
	Testimonials, 
	Newsletter 
} from "@/components"

const HomePage = () => {
	return (
		<main className="w-full relative flex flex-col items-center justify-center px-4 md:px-0 py-8">
			{/* Hero Section */}
			<Hero />

			{/* How it works */}
			<HowItWorks />

			{/* Features */}
			<Features />

			{/* Pricing */}
			<Pricing />

			{/* Testimonials */}
			<Testimonials />

			{/* Newsletter */}
			<Newsletter />
		</main>
	)
}

export default HomePage
