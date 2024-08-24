import SectionBadge from "../ui/section-badge"

interface Props {
	badgeTitle: string,
	title: string,
	subtitle: string
}

const SectionHeader = ({ badgeTitle, title, subtitle }:Props) => {
	return (
		<div className="max-w-md md:mx-auto text-start md:text-center">
			<SectionBadge title={badgeTitle} />
			<h2 className="text-3xl lg:text-4xl font-semibold mt-6">
				{ title }
			</h2>
			<p className="text-muted-foreground mt-6">
				{ subtitle }
			</p>
		</div>
	)
}

export default SectionHeader