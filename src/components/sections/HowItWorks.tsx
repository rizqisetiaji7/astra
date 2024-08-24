import Container from "../global/Container"
import { perks } from "@/constants"
import SectionHeader from "./SectionHeader"
import Section from "../global/Section"

const HowItWorks = () => {
	return (
		<Section className="wrapper">
			<Container>
				<SectionHeader
					badgeTitle="The Process"
					title="Three steps to build your dream website"
					subtitle="Turn your vision into reality in just 3 simple steps"
				/>
			
				<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
					<div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 lg:first:border-none first:border-gray-900">
						{perks.map(perk => (
							<div key={perk.title} className="flex flex-col items-start px-4 py-4 md:px-6 lg:px-8 lg:py-6">
								<div className="flex items-center justify-center">
									<perk.icon className="w-8 h-8" />
								</div>
								<h3 className="text-lg font-medium mt-4">{perk.title}</h3>
								<p className="text-muted-foreground mt-2 text-start">{perk.info}</p>
							</div>
						))}
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default HowItWorks