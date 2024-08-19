"use client";

import NavBar from "@/components/NavBar";
import ProductInfo from "@/components/Product/ProductInfo";
import ProductSwiper from "@/components/Product/ProductSwiper";
// For the cart component
import { CartProvider } from "@/context/CartProvider";

export default function Home() {
	return (
		<>
			<CartProvider>
				<NavBar />
				<main>
					<ProductSwiper />
					<ProductInfo />
				</main>
			</CartProvider>
		</>
	);
}
