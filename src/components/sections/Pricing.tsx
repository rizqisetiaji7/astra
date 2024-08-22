import Link from "next/link"
import Container from "../global/Container"
import Section from "../global/Section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Zap } from "lucide-react"
import { pricingCards } from "@/constants"
import { cn } from "@/lib/utils"
import SectionHeader from "./SectionHeader"

const Pricing = () => {
	return (
		<Section className="wrapper">
			<Container>
				<SectionHeader
					badgeTitle="Pricing"
					title="Unlock the right plan for your business"
					subtitle="Choose the best plan for your business and start building your dream website today"
				/>
			</Container>
			<Container className="flex items-center justify-center">	
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-20 flex-wrap max-w-4xl">
					{ pricingCards.map(card => (
						<Card 
							key={card.priceId}
							className={cn(
								'flex flex-col w-full border-slate-700',
								card.title === 'Unlimited Saas' && 'border-2 border-primary'
							)}
						>
							<CardHeader className="border-b-2 border-border">
								<span>{ card.title }</span>
								<CardTitle className={cn(card.title !== 'Unlimited Saas' && 'text-muted-foreground')}>
									{ card.price }
								</CardTitle>
								<CardDescription>
									{ card.description }
								</CardDescription>
							</CardHeader>
							<CardContent className="pt-6 space-y-3">
								{ card.features.map(feature => (
									<div key={feature} className="flex items-center gap-2">
										<Zap className="h-4 w-4 fill-primary text-primary" />
										<p>{ feature }</p>
									</div>
								)) }
							</CardContent>
							<CardFooter className="mt-auto w-full">
								<Link 
									href="#"
									className={cn(
										'w-full text-center text-primary-foreground bg-primary p-2 rounded-md text-sm font-medium',
										card.title !== 'Unlimited Saas' && '!bg-foreground !text-background'
									)}
								>
									{ card.buttonText }
								</Link>
							</CardFooter>
						</Card>
					)) }
				</div>
			</Container>
		</Section>
	)
}

export default Pricing