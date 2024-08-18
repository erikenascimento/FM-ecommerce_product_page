import styles from "./ProductSwiper.module.scss";

import { useState } from "react";
import ProductSwiperButton from "./ProductSwiperButton";

const productImages = [
	"/images/product/image-product-1.jpg",
	"/images/product/image-product-2.jpg",
	"/images/product/image-product-3.jpg",
	"/images/product/image-product-4.jpg",
];

const ProductSwiper = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handlePreviousClick = () => {
		setCurrentImageIndex(prevIndex =>
			prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
		);
	};

	const handleNextClick = () => {
		setCurrentImageIndex(prevIndex =>
			prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
		);
	};

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
