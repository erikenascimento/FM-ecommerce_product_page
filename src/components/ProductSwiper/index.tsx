import styles from "./ProductSwiper.module.scss";

const ProductSwiper = () => {
	return (
		<figure>
			<img
				src="/images/product/image-product-1.jpg"
				alt="Product image"
				className={styles.productSwiper}
			/>
		</figure>
	);
};

export default ProductSwiper;
