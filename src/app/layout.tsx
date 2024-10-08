import type { Metadata } from "next";
import "./styles/globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "FeM Ecommerce Page",
	description: "Created by Erike Nascimento",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="max-h-screen">
			<body>{children}</body>
			{/* <body className={inter.className}>{children}</body> */}
		</html>
	);
}
