// CSS
import styles from "./ProductGallery.module.scss";
// Data
import productData from "@/data/productData.json";

const ProductGallery = () => {
	const productImages = productData.product.images;
	return (
		<section className={styles.productGallery}>
			<img
				className={styles.productGallery__highlighted}
				src={productImages.productImages[1]}
				alt="Product image number 1"
			/>
			<ul className={styles.productGallery__thumbnails}>
				{productImages.productThumbnails.map((imageSrc, index) => (
					<li
						className={styles.productGallery__thumbnails__listItem}
						key={index}
					>
						<img src={imageSrc} alt={`Product thumbnail number ${index + 1}`} />
					</li>
				))}
			</ul>
		</section>
	);
};

export default ProductGallery;
