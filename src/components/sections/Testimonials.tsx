import { User } from "lucide-react"
import Container from "../global/Container"
import Section from "../global/Section"
import Marquee from "../ui/marquee"
import { reviews } from "@/constants"
import SectionHeader from "./SectionHeader"

const Testimonials = () => {
	const firstRow = reviews.slice(0, Math.floor(reviews.length / 2))
	const secondRow = reviews.slice(Math.floor(reviews.length / 2))

	return (
		<Section className="wrapper">
			<Container>
				<SectionHeader
					badgeTitle="Our Customers"
					title="What people are saying"
					subtitle="See how Astra empowers business of all sizes. Here&apos;s what real people are saying on Twitter"
				/>

				<div className="py-10 md:py-20 w-full">
					<div className="relative flex flex-col items-center justify-center h-full w-full overflow-hidden py-6">
						<Marquee pauseOnHover className="[--duration:20s] select-none">
							{ firstRow.map(review => (
								<figure
									key={review.username}
									className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-zinc-50/[.1] bg-background hover:bg-zinc-50/[.15]"
								>
									<div className="flex flex-row items-center gap-2">
										<User className="w-6 h-6" />
										<div className="flex flex-col">
											<figcaption className="text-sm font-medium">
												{ review.name }
											</figcaption>
											<p className="text-xs font-medium text-muted-foreground">
												{ review.username }
											</p>
										</div>
									</div>
									<blockquote className="mt-2 text-sm">
										{ review.body }
									</blockquote>
								</figure>
							)) }
						</Marquee>

						<Marquee reverse pauseOnHover className="[--duration:20s] select-none">
							{ secondRow.map(review => (
								<figure
									key={review.username}
									className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-zinc-50/[.1] bg-background hover:bg-zinc-50/[.15]"
								>
									<div className="flex flex-row items-center gap-2">
										<User className="w-6 h-6" />
										<div className="flex flex-col">
											<figcaption className="text-sm font-medium">
												{ review.name }
											</figcaption>
											<p className="text-xs font-medium text-muted-foreground">
												{ review.username }
											</p>
										</div>
									</div>
									<blockquote className="mt-2 text-sm">
										{ review.body }
									</blockquote>
								</figure>
							)) }
						</Marquee>
						
						{/* Overlay left & right */}
						<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background" />
						<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background" />
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default Testimonials