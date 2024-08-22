import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface Props {
	children: ReactNode
	className?: string
}

const Section = ({children, className}:Props) => {
	return (
		<section className={cn('h-full w-full mx-auto max-w-screen-xl px-4', className)}>
			{ children }
		</section>
	)
}

export default Section