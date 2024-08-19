import { Container, Icons, Wrapper } from "@/components";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";
import { features, perks } from "@/constants";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
	return (
		<section className="w-full relative flex flex-col items-center justify-center px-4 md:px-0 py-8">
			{/* Hero */}
			<Wrapper>
				<Container>
					<div className="flex flex-col items-center justify-center py-20 w-full">
						<button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
							<span>
								<span className="spark mask-gradient absolute inset-0 h-full w-full animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,_transparent_0_340deg,_white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
							</span>
							<span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
							<span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/20" />
							<span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
								<Image src="/icons/sparkles-dark.svg" alt="✨" width={24} height={24} className="w-4 h-4" />
								Introducing Astra AI
								<ChevronRight className="w-4 h-4" />
							</span>
						</button>

						<div className="flex flex-col items-center mt-8 max-w-3xl mx-auto w-11/12 md:w-full">
							<h1 className="text-4xl md:text-6xl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-300 text-transparent">
								Build your idea and ship your dream site
							</h1>
							<p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
								Zero code, maximum speed. Make professional sites easy, fast and fun while delivering best-in-class SEO, performance.
							</p>
							<div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
								<Link href="/" className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 md:gap-8 shadow-2xl shadow-foreground/40 cursor-pointer select-none">
									<p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:marker:pr-0">
										✨ {" "} Start building your website now!
									</p>
									<Button size="sm" className="rounded-full hidden lg:flex border border-foreground/20">
										Get Started
										<ArrowRight className="w-4 h-4 ml-4" />
									</Button>
								</Link>
							</div>
						</div>

						<div className="relative flex items-center justify-center mx-auto py-10 md:py-20 w-full">
							<div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 -translate-y-1/2 h-3/4 inset-0 blur-[10rem]" />
							<div className="-m-2 md:-m-4 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:rounded-2xl bg-opacity-50 backdrop-blur-lg">
								<Image src="/assets/dashboard.svg" alt="Dashboard" width={1200} height={1200} className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border" />
								<BorderBeam size={250} duration={12} delay={9} />
							</div>
						</div>
					</div>
				</Container>
			</Wrapper>

			{/* How it works */}
			<Wrapper className="flex flex-col items-center justify-center py-12 relative">
				<Container>
					<div className="max-w-md mx-auto text-start md:text-center">
						<SectionBadge title="The Process" />
						<h2 className="text-3xl lg:text-4xl font-semibold mt-6">
							Three steps to build your dream website
						</h2>
						<p className="text-muted-foreground mt-6">
							Turn your vision into reality in just 3 simple steps
						</p>
					</div>
				</Container>
				<Container>
					<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
						<div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 lg:first:border-none first:border-gray-900">
							{
								perks.map(perk => (
									<div key={perk.title} className="flex flex-col items-start px-4 py-4 md:px-6 lg:px-8 lg:py-6">
										<div className="flex items-center justify-center">
											<perk.icon className="w-8 h-8" />
										</div>
										<h3 className="text-lg font-medium mt-4">{perk.title}</h3>
										<p className="text-muted-foreground mt-2 text-start">{perk.info}</p>
									</div>
								))
							}
						</div>
					</div>
				</Container>
			</Wrapper>

			{/* Features */}
			<Wrapper className="flex flex-col items-center justify-center py-12 relative">
				<Container>
					<div className="max-w-md mx-auto text-start md:text-center">
						<SectionBadge title="Features" />
						<h2 className="text-3xl lg:text-4xl font-semibold mt-6">
							Discover our powerful features
						</h2>
						<p className="text-muted-foreground mt-6 ">
							Astra offers a range of features to help you build a stunning websites in no time
						</p>
					</div>
				</Container>
				<Container>
					<div className="flex items-center justify-center mx-auto mt-8">
						<Icons.feature className="w-auto h-80" />
					</div>
				</Container>
				<Container>
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
			</Wrapper>
		</section>
	)
};

export default HomePage;
