import styles from "./ShoppingButtons.module.scss";

import ShoppingButton from "../ShoppingButton";
import IconShoppingCart from "../icons/IconShoppingCart";
import IconShoppingMinus from "../icons/IconShoppingMinus";
import IconShoppingPlus from "../icons/IconShoppingPlus";

function ShoppingButtons() {
	return (
		<div className={styles.shoppingButtons}>
			<ShoppingButton
				$backgroundColor="var(--light-greyish-blue)"
				$justifyContent="space-between"
			>
				<IconShoppingMinus />
				0
				<IconShoppingPlus />
			</ShoppingButton>
			<ShoppingButton
				$backgroundColor="var(--primary-orange)"
				$justifyContent="center"
			>
				<IconShoppingCart color="var(--primary-text-black)" />
				Add to Cart
			</ShoppingButton>
		</div>
	);
}

export default ShoppingButtons;
