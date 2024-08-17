import styles from "./ProductSwiper.module.scss";
import ProductSwiperButton from "./ProductSwiperButton";

const ProductSwiper = () => {
	return (
		<figure className={styles.productSwiper}>
			<ProductSwiperButton />
			<ProductSwiperButton />
		</figure>
	);
};

export default ProductSwiper;
