// Custom components
import ShoppingButtons from "@/components/ShoppingButtons";
// Css
import styles from "./ProductInfo.module.scss";
// Data
import productData from "@/data/productData.json";

function ProductInfo() {
	return (
		<>
			<article className={styles.productArticle}>
				<span className={styles["productArticle__brandName"]}>
					{productData.product.company}
				</span>
				<h1 className={styles["productArticle__title"]}>
					{productData.product.title}
				</h1>
				<p className={styles["productArticle__description"]}>
					{productData.product.description}
				</p>
			</article>
			<div className={styles["pricing"]}>
				<span className={styles["pricing__finalPrice"]}>
					${productData.product.pricing.discountedPrice.toFixed(2)}
				</span>
				<span className={styles["pricing__discount"]}>
					{productData.product.pricing.discountRate * 100}%
				</span>
				<span className={styles["pricing__fullPrice"]}>
					{productData.product.pricing.fullPrice.toFixed(2)}
				</span>
			</div>
			<ShoppingButtons />
		</>
	);
}

export default ProductInfo;
