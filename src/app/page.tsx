"use client";
// Custom components
import NavBar from "@/components/NavBar";
import ProductInfo from "@/components/Product/ProductInfo";
import ProductSwiper from "@/components/Product/ProductSwiper";
import ProductGallery from "@/components/ProductGallery";
import SectionDivider from "@/components/SectionDivider";
// Provider For the cart component
import { CartProvider } from "@/context/CartProvider";
// CSS
import styles from "./page.module.scss";

export default function Home() {
	return (
		<>
			<CartProvider>
				<NavBar />
				<SectionDivider />
				<main className={styles.mainContent}>
					<ProductGallery />
					<ProductSwiper />
					<ProductInfo />
				</main>
			</CartProvider>
		</>
	);
}
