import { Navbar } from "@/components";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: 'ASTRA',
	description: 'A smart AI-powered website builder landing page'
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn("min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden",
				font.className
			)}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
