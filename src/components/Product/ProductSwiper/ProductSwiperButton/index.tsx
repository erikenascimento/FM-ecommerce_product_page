import styles from "./ProductSwiperButton.module.scss";

interface ISwiperButton {
	$icon: string;
}

const ProductSwiperButton: React.FC<ISwiperButton> = ({ $icon }) => {
	if ($icon === "iconSwiperPrevious") {
		return (
			<button className={styles.productSwiperButton}>
				<svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M11 1 3 9l8 8"
						stroke="#1D2026"
						strokeWidth="3"
						fill="none"
						fillRule="evenodd"
					/>
				</svg>
			</button>
		);
	}
	if ($icon === "iconSwiperNext") {
		return (
			<button className={styles.productSwiperButton}>
				<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
					<path
						d="m2 1 8 8-8 8"
						stroke="#1D2026"
						strokeWidth="3"
						fill="none"
						fillRule="evenodd"
					/>
				</svg>
			</button>
		);
	}
};

export default ProductSwiperButton;
