import { features } from "@/constants"
import Container from "../global/Container"
import Section from "../global/Section"
import Icons from "../global/icons"
import SectionHeader from "./SectionHeader"

const Features = () => {
	return (
		<Section className="wrapper">
			<Container>
				<SectionHeader
					badgeTitle="Features"
					title="Discover our powerful features"
					subtitle="Astra offers a range of features to help you build a stunning websites in no time"
				/>

				<div className="flex items-center justify-center mx-auto mt-8">
					<Icons.feature className="w-auto h-80" />
				</div>
				
				<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
						{features.map(feature => (
							<div key={feature.title} className="flex flex-col items-start px-0">
								<div className="flex items-center justify-center">
									<feature.icon className="w-8 h-8" />
								</div>
								<h3 className="text-lg font-medium mt-4">{feature.title}</h3>
								<p className="text-muted-foreground mt-2 text-start">{feature.info}</p>
							</div>
						))}
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default Features