// React Hooks
import { useState } from "react";
// CSS
import styles from "./ProductGallery.module.scss";
// Data
import productData from "@/data/productData.json";
// Custom components
import ProductGalleryLightbox from "./ProductGalleryLightbox";
import ProductGalleryThumbnails from "./ProductGalleryThumbnails";
import { useGallery } from "@/context/GalleryProvider";

const ProductGallery = () => {
	// Creating a cosnt to shorten the pointer name to the image
	const productImages = productData.product.images;

	// To add the outline effect when selected and
	// swap the highlighted image
	const { isActive } = useGallery();

	// This is all the code for the lightbox
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);

	const openLightbox = () => {
		setIsLightboxOpen(true);
	};

	const closeLightbox = () => {
		setIsLightboxOpen(false);
	};

	// The component itself
	return (
		<>
			<section className={styles.productGallery}>
				<img
					className={styles.productGallery__highlighted}
					src={productImages.productImages[isActive || 0]}
					alt={`Product image number ${(isActive || 0) + 1}`}
					onClick={openLightbox}
				/>
				<ProductGalleryThumbnails />
			</section>
			{isLightboxOpen && (
				<ProductGalleryLightbox
					imageSrc={productImages.productImages[isActive || 0]}
					closeLightbox={closeLightbox}
				/>
			)}
		</>
	);
};

export default ProductGallery;
