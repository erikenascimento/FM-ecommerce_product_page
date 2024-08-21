import ShoppingButtons from "@/components/ShoppingButtons";

import styles from "./ProductInfo.module.scss";

function ProductInfo() {
	return (
		<>
			<article className={styles.productArticle}>
				<span className={styles["productArticle__brandName"]}>
					Sneaker Company
				</span>
				<h1 className={styles["productArticle__title"]}>
					Fall Limited Edition Sneakers
				</h1>
				<p className={styles["productArticle__description"]}>
					These low-profile sneakers are your perfect casual wear companion.
					Featuring a durable rubber outer sole, they`&apos`ll withstand
					everything the weather can offer.
				</p>
			</article>
			<div className={styles["pricing"]}>
				<span className={styles["pricing__finalPrice"]}>$125.00</span>
				<span className={styles["pricing__discount"]}>50%</span>
				<span className={styles["pricing__fullPrice"]}>$250.00</span>
			</div>
			<ShoppingButtons />
		</>
	);
}

export default ProductInfo;
