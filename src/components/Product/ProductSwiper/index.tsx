// CSS
import styles from "./ProductSwiper.module.scss";
// Libraries and components
import { useState } from "react";
import ProductSwiperButton from "./ProductSwiperButton";
// Hooks and Constants
import useSwiperControls from "@/hooks/useSwiperControls";
import useAutoLoop from "@/hooks/useAutoLoop";
import productImages from "@/constants/productImages";

// This is the legacy implementation before using the custom hooks.

// const ProductSwiper = () => {
// 	const [currentImageIndex, setCurrentImageIndex] = useState(0);

// 	const handlePreviousClick = () => {
// 		setCurrentImageIndex(prevIndex =>
// 			prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
// 		);
// 	};

// 	const handleNextClick = () => {
// 		setCurrentImageIndex(prevIndex =>
// 			prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
// 		);
// 	};

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			handleNextClick();
// 		}, 5000);

// 		// Clear interval on component unmount
// 		return () => clearInterval(interval);
// 	}, []);

const ProductSwiper = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const { handlePreviousClick, handleNextClick } = useSwiperControls(
		setCurrentImageIndex,
		productImages.length
	);

	useAutoLoop(handleNextClick, 5000);

	return (
		<figure
			className={styles.productSwiper}
			style={{ backgroundImage: `url(${productImages[currentImageIndex]})` }}
		>
			<ProductSwiperButton
				$icon="iconSwiperPrevious"
				onClick={handlePreviousClick}
			/>
			<ProductSwiperButton $icon="iconSwiperNext" onClick={handleNextClick} />
		</figure>
	);
};

export default ProductSwiper;
