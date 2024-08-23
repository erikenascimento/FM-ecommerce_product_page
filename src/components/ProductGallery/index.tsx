// CSS
import { useState } from "react";
// React Hooks
import styles from "./ProductGallery.module.scss";
// Data
import productData from "@/data/productData.json";

const ProductGallery = () => {
	// Creating a cosnt to shorten the pointer name to the image
	const productImages = productData.product.images;

	// To add the outline effect when selected
	const [isActive, setIsActive] = useState(false);

	const toggleClass = () => {
		setIsActive(!isActive);
	};

	return (
		<section className={styles.productGallery}>
			<img
				className={styles.productGallery__highlighted}
				src={productImages.productImages[0]}
				alt="Product image number 1"
			/>
			<ul className={styles.productGallery__thumbnails}>
				{productImages.productThumbnails.map((imageSrc, index) => (
					<li
						className={styles.productGallery__thumbnails__listItem}
						key={index}
						onClick={toggleClass}
					>
						<img
							src={imageSrc}
							alt={`Product thumbnail number ${index + 1}`}
							className={isActive ? styles.imageOutlined : ""}
						/>
					</li>
				))}
			</ul>
		</section>
	);
};

export default ProductGallery;
