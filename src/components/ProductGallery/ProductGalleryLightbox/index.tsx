// CSS
import styles from "./ProductGalleryLightbox.module.scss";
// Custom components
import IconClose from "@/components/icons/IconClose";
import ProductGalleryThumbnails from "../ProductGalleryThumbnails";

interface LightboxProps {
	imageSrc: string;
	closeLightbox: () => void;
}

const ProductGalleryLightbox: React.FC<LightboxProps> = ({
	imageSrc,
	closeLightbox,
}) => {
	return (
		<span className={styles.lightbox}>
			<section className={styles.lightbox__productGallery}>
				<div
					className={styles.lightbox__productGallery__closeIconDiv}
					onClick={closeLightbox}
				>
					<IconClose $size={"20"} />
				</div>
				<img src={imageSrc} alt="Enlarged product view" />
				<div className={styles.lightbox__productGallery__thumbDiv}>
					{/* <ProductGalleryThumbnails /> */}
				</div>
			</section>
		</span>
	);
};

export default ProductGalleryLightbox;
