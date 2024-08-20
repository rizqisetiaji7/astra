import { ReactNode } from 'react'

interface Props {
	children: ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
	return (
		<div className="flex flex-col items-center w-full">
			{children}
		</div>
	)
};

export default MarketingLayout
