import NavBar from "@/components/NavBar";
import ProductInfo from "@/components/Product/ProductInfo";
import ProductSwiper from "@/components/Product/ProductSwiper";

export default function Home() {
	return (
		<>
			<NavBar />
			<section>
				<ProductSwiper />
				<ProductInfo />
			</section>
		</>
	);
}
