// CSS
import styles from "./ProductGalleryThumbnails.module.scss";
// Context
import { useGallery } from "@/context/GalleryProvider";
// Data
import productData from "@/data/productData.json";

const productThumbnails = productData.product.images.productThumbnails;

const ProductGalleryThumbnails = () => {
	const { isActive, toggleClass } = useGallery();

	return (
		<ul className={styles.productGalleryThumbnails}>
			{productThumbnails.map((imageSrc, index) => (
				<li
					className={styles.productGalleryThumbnails__listItem}
					key={index}
					onClick={() => toggleClass(index)}
				>
					<img
						src={imageSrc}
						alt={`Product thumbnail number ${index + 1}`}
						className={isActive === index ? styles.imageClicked : ""}
					/>
				</li>
			))}
		</ul>
	);
};

export default ProductGalleryThumbnails;
