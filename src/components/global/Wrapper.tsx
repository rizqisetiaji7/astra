import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface Props {
	children: ReactNode
	className?: string
}

const Wrapper = ({children, className}:Props) => {
	return (
		<div className={cn('h-full w-full mx-auto max-w-screen-xl px-4 md:px-0', className)}>
			{ children }
		</div>
	)
}

export default Wrapper