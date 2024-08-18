import styles from "./ProductSwiper.module.scss";
import ProductSwiperButton from "./ProductSwiperButton";

const ProductSwiper = () => {
	return (
		<figure className={styles.productSwiper}>
			<ProductSwiperButton $icon="iconSwiperPrevious" />
			<ProductSwiperButton $icon="iconSwiperNext" />
		</figure>
	);
};

export default ProductSwiper;
